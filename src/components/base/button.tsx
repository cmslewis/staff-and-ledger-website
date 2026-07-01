import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

const baseClasses =
  "inline-flex min-h-11 items-center justify-center border px-4 font-sans text-xs uppercase tracking-[0.16em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-45";

export function Button({
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button className={`${baseClasses} border-accent/65 text-accent hover:bg-accent hover:text-ink ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  return (
    <a className={`${baseClasses} border-accent/65 text-accent hover:bg-accent hover:text-ink ${className}`} {...props}>
      {children}
    </a>
  );
}
