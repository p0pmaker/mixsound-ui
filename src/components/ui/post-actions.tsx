import { Heart, MessageCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

type PostActionsProps = {
  variant?: "default" | "onPrimary";
  className?: string;
};

const ACTIONS = [
  { id: "like", label: "Curtir", icon: Heart },
  { id: "comment", label: "Comentar", icon: MessageCircle },
  { id: "share", label: "Compartilhar", icon: Share2 },
] as const;

export function PostActions({ variant = "default", className }: PostActionsProps) {
  const tone =
    variant === "onPrimary"
      ? "text-white hover:bg-white/10"
      : "text-foreground/80 hover:bg-muted hover:text-foreground";
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {ACTIONS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          aria-label={label}
          className={cn(
            "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
            tone
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </button>
      ))}
    </div>
  );
}
