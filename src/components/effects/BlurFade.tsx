import type { ReactNode } from "react";

export default function BlurFade({ children }: { children: ReactNode }) {
  return <div className="motion-safe:animate-[folioReveal_900ms_ease-out_both]">{children}</div>;
}
