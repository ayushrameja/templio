import { Container, NavLink, Navbar } from "@/components/ui";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <div className="border-b border-white/10 bg-black/50 backdrop-blur-sm">
        <Navbar />
      </div>

      {children}

      <footer className="relative z-10 w-full border-t border-white/10 bg-black/50 backdrop-blur-sm">
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
