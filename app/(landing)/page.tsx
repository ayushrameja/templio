"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import { Container, NavLink, VideoBackground, Navbar } from "@/components/ui";

export default function LandingPage() {
  const [showBackground, setShowBackground] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
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
            className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onAnimationComplete={() => setShowBackground(true)}
          >
            <div className="relative flex items-center gap-2 rounded-sm bg-zinc-900/80 p-1.5 backdrop-blur-md sm:p-2">
              <input
                type="email"
                placeholder="Join the waitlist"
                className="flex-1 bg-transparent px-1 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none sm:px-2 sm:py-2 sm:text-base md:px-3 md:py-2 md:text-lg"
                required
              />
              <button
                type="submit"
                className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-zinc-900 transition-all hover:scale-105 hover:bg-zinc-100 sm:h-8 sm:w-8 md:h-9 md:w-9"
                aria-label="Submit"
              >
                <Image
                  src="/bell.svg"
                  alt="Notify"
                  width={16}
                  height={16}
                  className="h-4 w-4 sm:h-5 sm:w-5"
                />
              </button>
            </div>
          </motion.form>
        </Container>
      </main>

      <footer className="relative z-10 w-full">
        <Container
          size="lg"
          className="flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row sm:gap-0 sm:py-8 sm:text-base"
        >
          <NavLink href="https://www.ayush.im">About Developer</NavLink>
          <p className="text-white/50">Templio © 2025</p>
        </Container>
      </footer>
    </div>
  );
}
