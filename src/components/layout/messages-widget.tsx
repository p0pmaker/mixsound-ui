import { ChevronUp, MessageSquare } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { suggestions } from "@/lib/home-mocks";

export function MessagesWidget() {
  const preview = suggestions[0];
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-30 hidden md:bottom-6 md:right-6 md:block">
      <button
        type="button"
        aria-label="Abrir mensagens"
        className="group pointer-events-auto flex w-[260px] cursor-pointer items-center gap-3 rounded-2xl border border-border bg-card px-3 py-2.5 text-left shadow-xl shadow-black/40 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        <Avatar name={preview.name} src={preview.avatar} size={36} />
        <span className="flex min-w-0 flex-1 flex-col leading-tight">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <MessageSquare className="h-4 w-4 text-primary" />
            Mensagens
          </span>
          <span className="truncate text-xs text-muted-foreground">
            {preview.name.split(" ")[0]} enviou uma mensagem
          </span>
        </span>
        <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}
