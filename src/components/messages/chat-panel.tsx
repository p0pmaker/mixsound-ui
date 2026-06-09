import { useEffect, useRef, useState } from "react";
import { ArrowLeft, MessageSquare, Plus, Smile } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { ChatMessage, Conversation } from "@/lib/messages-mocks";

type ChatPanelProps = {
  conversation: Conversation;
  onBack: () => void;
};

export function ChatPanel({ conversation, onBack }: ChatPanelProps) {
  const [extraMessages, setExtraMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setExtraMessages([]);
    setDraft("");
  }, [conversation.id]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [conversation.id, extraMessages.length]);

  function sendDraft() {
    const text = draft.trim();
    if (!text) return;
    setExtraMessages((prev) => [
      ...prev,
      { id: `extra-${Date.now()}`, from: "me", text },
    ]);
    setDraft("");
  }

  return (
    <section className="flex h-full min-h-0 flex-col">
      <header className="flex items-center gap-4 pb-4">
        <button
          type="button"
          aria-label="Voltar para conversas"
          onClick={onBack}
          className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:hidden"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <Avatar name={conversation.name} src={conversation.avatar} size={56} />
        <div className="min-w-0 leading-tight">
          <p className="truncate text-base font-bold">{conversation.name}</p>
          <p className="truncate text-sm text-muted-foreground">
            @{conversation.handle}
          </p>
        </div>
      </header>

      <div
        ref={scrollRef}
        className="scrollbar-hidden flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto py-2"
      >
        {conversation.chat.map((block) =>
          block.kind === "divider" ? (
            <p
              key={block.id}
              className="py-1 text-center text-xs text-muted-foreground"
            >
              {block.label}
            </p>
          ) : (
            <MessageGroup key={block.id} messages={block.messages} />
          )
        )}
        {extraMessages.length > 0 && <MessageGroup messages={extraMessages} />}
      </div>

      <form
        className="flex items-center gap-2 pt-3"
        onSubmit={(event) => {
          event.preventDefault();
          sendDraft();
        }}
      >
        <button
          type="button"
          aria-label="Anexar"
          className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
        </button>
        <button
          type="button"
          aria-label="Emoji"
          className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <Smile className="h-5 w-5" strokeWidth={2.25} />
        </button>
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Mensagem..."
          aria-label="Mensagem"
          className="h-10 min-w-0 flex-1 rounded-lg border border-border bg-transparent px-4 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        />
      </form>
    </section>
  );
}

function MessageGroup({ messages }: { messages: ChatMessage[] }) {
  return (
    <div className="flex flex-col gap-2">
      {messages.map((message) => (
        <p
          key={message.id}
          className={cn(
            "max-w-[80%] rounded-[20px] px-8 py-2.5 text-sm leading-snug sm:max-w-[65%]",
            message.from === "me"
              ? "self-end bg-primary text-primary-foreground"
              : "self-start bg-secondary text-foreground"
          )}
        >
          {message.text}
        </p>
      ))}
    </div>
  );
}

export function ChatEmptyState() {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-4 text-center">
      <MessageSquare
        className="h-16 w-16 text-primary"
        fill="currentColor"
        strokeWidth={0}
      />
      <div className="space-y-1">
        <p className="text-lg font-bold">Envie mensagens para seus amigos</p>
        <p className="text-sm text-muted-foreground">
          Clique em "Buscar" e inicie uma conversa
        </p>
      </div>
    </section>
  );
}
