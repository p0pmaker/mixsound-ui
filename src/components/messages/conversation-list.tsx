import { Search } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { Conversation } from "@/lib/messages-mocks";

type ConversationListProps = {
  conversations: Conversation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function ConversationList({
  conversations,
  selectedId,
  onSelect,
}: ConversationListProps) {
  return (
    <section className="flex h-full min-h-0 flex-col">
      <h1 className="text-2xl font-bold">Mensagens</h1>

      <div className="relative mt-5">
        <input
          type="search"
          placeholder=" "
          aria-label="Buscar conversa"
          className="peer h-11 w-full rounded-full bg-secondary px-4 text-center text-sm text-foreground outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/40"
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 text-sm text-muted-foreground transition-opacity peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
          <Search className="h-4 w-4" />
          Buscar
        </span>
      </div>

      <ul className="-mx-4 mt-8 flex min-h-0 flex-1 flex-col overflow-y-auto">
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            <button
              type="button"
              onClick={() => onSelect(conversation.id)}
              className={cn(
                "flex w-full cursor-pointer items-center gap-4 rounded-lg px-2 py-3 text-left transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                selectedId === conversation.id && "bg-secondary/60"
              )}
            >
              <Avatar
                name={conversation.name}
                src={conversation.avatar}
                size={60}
              />
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="truncate text-base font-bold">
                  {conversation.handle}
                </span>
                <span className="flex items-baseline gap-3">
                  <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">
                    {conversation.preview}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {conversation.time}
                  </span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
