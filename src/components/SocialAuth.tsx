import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GoogleIcon } from "@/components/icons/GoogleIcon";

/** Horizontal "Ou" separator used between primary and social sign-in. */
export function OrDivider() {
  return (
    <div className="flex w-full items-center gap-3">
      <Separator className="flex-1" />
      <span className="text-xs text-muted-foreground">Ou</span>
      <Separator className="flex-1" />
    </div>
  );
}

/** White "continue with Google" button. */
export function GoogleButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Button
      type="button"
      onClick={onClick}
      className="h-12 w-full gap-3 border-transparent bg-white text-sm font-semibold text-[#101012] hover:bg-white/90"
    >
      <GoogleIcon className="size-5" />
      {children}
    </Button>
  );
}
