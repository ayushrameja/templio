"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  Container,
  SeparatedLinks,
  NavLink,
  VideoBackground,
} from "@/components/ui";

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

      <motion.nav
        className="relative z-10 w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onAnimationComplete={() => {}}
      >
        <Container
          size="lg"
          className="flex items-center justify-between py-4 sm:py-5 md:py-6"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="transition-opacity hover:opacity-80">
              <Image
                src="/logo.svg"
                alt="Templio"
                width={28}
                height={28}
                className="h-7 w-7 sm:h-8 sm:w-8"
              />
            </Link>
            <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-medium sm:text-xs">
              <span className="font-bold">α</span> Alpha
            </span>
          </div>
          <SeparatedLinks
            responsive
            className="text-sm sm:text-base md:text-base"
          >
            <NavLink href="/">Plan</NavLink>
            <NavLink href="/">Releases</NavLink>
            <NavLink href="/">Contact</NavLink>
          </SeparatedLinks>
        </Container>
      </motion.nav>

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
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Templio
            </motion.h1>
            <motion.p
              className="mx-auto max-w-xl text-base leading-relaxed text-zinc-300 sm:max-w-2xl sm:text-lg md:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
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
            transition={{ duration: 0.6, delay: 0.7 }}
            onAnimationComplete={() => setShowBackground(true)}
          >
            <div className="relative flex items-center gap-2 rounded-md bg-zinc-900/80 p-1.5 backdrop-blur-md sm:p-2">
              <input
                type="email"
                placeholder="Join the waitlist"
                className="flex-1 bg-transparent px-1 py-2.5 text-lg text-white placeholder:text-zinc-500 focus:outline-none sm:px-2 sm:py-3 sm:text-base md:px-3"
                required
              />
              <button
                type="submit"
                className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md bg-white text-zinc-900 transition-all hover:scale-105 hover:bg-zinc-100 sm:h-8 sm:w-8 md:h-9 md:w-9"
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

      <motion.footer
        className="relative z-10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Container
          size="lg"
          className="flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row sm:gap-0 sm:py-8 sm:text-base"
        >
          <NavLink href="https://www.ayush.im">About Developer</NavLink>
          <NavLink href="/">Templio © 2025</NavLink>
        </Container>
      </motion.footer>
    </div>
  );
}
