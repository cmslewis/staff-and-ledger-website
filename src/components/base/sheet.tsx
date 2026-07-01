import { Dialog } from "@base-ui-components/react/dialog";
import type { ReactNode } from "react";

export function Sheet({
  trigger,
  children,
  title = "Navigation"
}: {
  trigger: ReactNode;
  children: ReactNode;
  title?: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger render={trigger} />
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-page/70" />
        <Dialog.Popup className="fixed inset-y-0 right-0 z-50 w-[min(88vw,26rem)] border-l border-sand-1/16 bg-page p-8">
          <Dialog.Title className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">{title}</Dialog.Title>
          {children}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
