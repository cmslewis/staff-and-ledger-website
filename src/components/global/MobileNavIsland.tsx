import { Menu, X } from "lucide-react";
import { useState } from "react";

type Item = { label: string; url: string };

export default function MobileNavIsland({ items, cta }: { items: Item[]; cta: Item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        className="inline-flex h-11 w-11 items-center justify-center border border-sand-1/20 text-sand-1"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
      </button>
      {open && (
        <div className="fixed inset-x-0 top-20 border-b border-sand-1/12 bg-page px-6 py-8 shadow-2xl">
          <nav className="grid gap-5 font-sans text-sm uppercase tracking-[0.16em]" aria-label="Mobile navigation">
            {items.map((item) => (
              <a key={item.url} className="border-b border-sand-1/10 pb-4 text-sand-1/86" href={item.url} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="mt-2 border border-accent px-4 py-3 text-center text-accent" href={cta.url} onClick={() => setOpen(false)}>
              {cta.label}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
