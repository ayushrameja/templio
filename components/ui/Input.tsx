import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
