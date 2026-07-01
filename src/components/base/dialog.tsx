import { Dialog } from "@base-ui-components/react/dialog";
import type { ReactNode } from "react";

export function BrandDialog({
  trigger,
  title,
  children
}: {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger render={trigger} />
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-page/80 backdrop-blur-sm" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,36rem)] -translate-x-1/2 -translate-y-1/2 border border-sand-1/20 bg-surface p-8 text-sand-1 shadow-2xl">
          <Dialog.Title className="font-display text-3xl">{title}</Dialog.Title>
          <div className="mt-6 font-sans text-sm leading-7 text-sand-1/72">{children}</div>
          <Dialog.Close className="mt-8 border border-accent/65 px-4 py-3 font-sans text-xs uppercase tracking-[0.16em] text-accent">
            Close
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
