import { cn } from "@/lib/utils";

/** The MixSound marketing tagline used on the auth screens' brand panel. */
export function Tagline({ className }: { className?: string }) {
  return (
    <div className={cn("font-bold leading-[1.15] tracking-tight", className)}>
      <p className="text-foreground">Crie música.</p>
      <p className="text-primary">Conecte talentos.</p>
      <p className="text-foreground">Faça feats.</p>
    </div>
  );
}
