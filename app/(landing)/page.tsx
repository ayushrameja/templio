import Link from "next/link";
import Image from "next/image";

import { Container, SeparatedLinks, NavLink } from "@/components/ui";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <nav className="w-full">
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
      </nav>

      <main className="flex w-full flex-1 items-center justify-center px-4 py-16 sm:py-20 md:py-24">
        <Container
          size="sm"
          className="space-y-10 text-center sm:space-y-12 md:space-y-14"
        >
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            <h1 className="font-display text-5xl leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Templio
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-300 sm:max-w-2xl sm:text-lg md:text-xl lg:text-2xl">
              A fully customisable personal site builder
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>
              no templates, just your taste.
            </p>
          </div>

          <form className="mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg">
            <div className="relative flex items-center gap-2 rounded-full bg-white/5 p-1.5 backdrop-blur-sm sm:p-2">
              <input
                type="email"
                placeholder="Join the waitlist"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none sm:px-5 sm:py-3 sm:text-base md:px-6"
                required
              />
              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-zinc-900 transition-all hover:scale-105 hover:bg-zinc-100 sm:h-11 sm:w-11 md:h-12 md:w-12"
                aria-label="Submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </Container>
      </main>

      <footer className="w-full">
        <Container
          size="lg"
          className="flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row sm:gap-0 sm:py-8 sm:text-base"
        >
          <NavLink href="https://www.ayush.im">About Developer</NavLink>
          <NavLink href="/">Templio © 2025</NavLink>
        </Container>
      </footer>
    </div>
  );
}
