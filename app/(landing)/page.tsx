"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation, useAction } from "convex/react";
import { toast, Toaster } from "sonner";

import { api } from "@/convex/_generated/api";
import { Container, VideoBackground, Navbar, Footer } from "@/components/ui";

type Status = "idle" | "loading" | "success" | "already_exists" | "error";

export default function LandingPage() {
  const [showBackground, setShowBackground] = useState(false);
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [isFocused, setIsFocused] = useState(false);

  const joinWaitlist = useMutation(api.waitlist.join);
  const sendWelcomeEmail = useAction(api.waitlist.sendWelcomeEmail);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setSubmittedEmail(email);

    try {
      const result = await joinWaitlist({ email });

      if (result.alreadyExists) {
        setStatus("already_exists");
        toast.warning("You're already on the waitlist!");
        return;
      }

      try {
        await sendWelcomeEmail({ email });
      } catch (emailError) {
        console.warn("Failed to send welcome email:", emailError);
      }

      setStatus("success");
      toast.success("You're on the list!");
    } catch (error) {
      setStatus("error");
      const errorMsg =
        error instanceof Error
          ? error.message
          : "Failed to join waitlist. Please try again.";

      if (errorMsg.includes("Invalid email")) {
        toast.error("Please enter a valid email address.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }

      console.error(error);
      setTimeout(() => {
        setStatus("idle");
        setEmail("");
      }, 3000);
    }
  };

  const hasInput = email.length > 0;
  const isIdle = status === "idle";
  const isLoading = status === "loading";
  const isSubmitted = status === "success" || status === "already_exists";

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Toaster position="bottom-right" richColors closeButton theme="dark" />
      {showBackground && (
        <VideoBackground
          src="/clouds-bg.mp4"
          poster="/preview-clouds.png"
          onPosterLoaded={() => {}}
        />
      )}

      <Navbar />

      <main className="relative z-10 flex w-full flex-1 items-center justify-center px-4 py-16 sm:py-20 md:py-24">
        <Container
          size="sm"
          className="space-y-4 text-center sm:space-y-6 md:space-y-8"
        >
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <motion.h1
              className="font-display text-5xl leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Templio
            </motion.h1>
            <motion.p
              className="mx-auto max-w-xl text-base leading-relaxed text-zinc-300 sm:max-w-2xl sm:text-lg md:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A fully customisable personal site builder
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>
              no templates, just your taste.
            </motion.p>
          </div>

          <motion.form
            className="flex items-center justify-center mx-auto w-full sm:max-w-sm md:max-w-md px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onAnimationComplete={() => setShowBackground(true)}
            onSubmit={handleSubmit}
          >
            <motion.div
              className="relative overflow-hidden bg-zinc-900/80 backdrop-blur-md w-full"
              animate={{
                borderRadius:
                  isIdle && !hasInput && !isFocused ? "1rem" : "0.5rem",
                maxWidth: isLoading ? "200px" : "100%",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center p-4">
                  <motion.div
                    className="h-6 w-6 rounded-full border-2 border-white border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              ) : isSubmitted ? (
                <div className="flex items-center gap-2 p-2 sm:p-2.5">
                  <div className="flex-1 px-2 py-2.5 text-sm text-zinc-500 sm:px-3 sm:py-2.5 sm:text-base md:px-3 md:py-2.5 md:text-lg">
                    {submittedEmail}
                  </div>
                </div>
              ) : (
                <div className="flex items-center p-2 sm:p-2.5">
                  <motion.div
                    className="flex-1"
                    layout
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <input
                      type="email"
                      placeholder="Join the waitlist"
                      className="w-full bg-transparent px-2 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none sm:px-3 sm:py-2.5 sm:text-base md:px-3 md:py-2.5 md:text-lg transition-all duration-500"
                      style={{
                        textAlign: hasInput || isFocused ? "left" : "center",
                      }}
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      disabled={isLoading || isSubmitted}
                    />
                  </motion.div>
                  <AnimatePresence mode="popLayout">
                    {(hasInput || isFocused) && (
                      <motion.button
                        type="submit"
                        className="flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-zinc-900 transition-all hover:scale-105 hover:bg-zinc-100"
                        aria-label="Submit"
                        initial={{
                          opacity: 0,
                          scale: 0,
                          width: 0,
                          height: 0,
                          marginLeft: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          width: 32,
                          height: 32,
                          marginLeft: 8,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0,
                          width: 0,
                          height: 0,
                          marginLeft: 0,
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        layout
                      >
                        <Image
                          src="/bell.svg"
                          alt="Notify"
                          width={16}
                          height={16}
                          className="h-4 w-4 sm:h-5 sm:w-5"
                        />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          </motion.form>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
