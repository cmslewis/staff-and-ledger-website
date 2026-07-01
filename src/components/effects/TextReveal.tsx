import type { ReactNode } from "react";

export default function TextReveal({ children }: { children: ReactNode }) {
  return <span className="motion-safe:animate-[folioReveal_1100ms_ease-out_both]">{children}</span>;
}
