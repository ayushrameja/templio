import Link from "next/link";
import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<typeof Link> {
  children: React.ReactNode;
}

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <Link
      {...props}
      className="group relative inline-block transition-colors hover:text-white"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </Link>
  );
}
