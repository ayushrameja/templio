import { Navbar, Footer } from "@/components/ui";

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

      <div className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <Footer />
      </div>
    </div>
  );
}
