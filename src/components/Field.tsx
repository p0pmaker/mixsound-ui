import type { ReactNode } from "react";
import { Label } from "@/components/ui/label";

/** Label + control wrapper for simple (non-password) form fields. */
export function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Label htmlFor={id} className="text-sm font-bold text-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
