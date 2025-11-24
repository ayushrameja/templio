"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";

interface NavLinkProps extends ComponentProps<typeof Link> {
  children: React.ReactNode;
}

export function NavLink({ children, href, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      {...props}
      className={`group relative inline-block transition-colors hover:text-white ${
        isActive ? "font-bold text-white" : ""
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-px w-full bg-white transition-transform duration-300 ease-out ${
          isActive
            ? "scale-x-100 origin-left"
            : "origin-left scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}
