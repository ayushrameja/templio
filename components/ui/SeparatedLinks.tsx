import { ReactNode, Fragment } from "react";

interface SeparatedLinksProps {
  children: ReactNode[];
  separator?: string;
  separatorClassName?: string;
  className?: string;
  responsive?: boolean;
}

export function SeparatedLinks({
  children,
  separator = "/",
  separatorClassName = "text-white/30",
  className = "flex items-center gap-4",
  responsive = false,
}: SeparatedLinksProps) {
  const baseClassName = responsive
    ? "flex flex-wrap items-center gap-2 sm:gap-4"
    : className;
  return (
    <div className={baseClassName}>
      {children.map((child, index) => (
        <Fragment key={index}>
          {child}
          {index < children.length - 1 && (
            <span className={separatorClassName}>{separator}</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
