import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";
import { ConversationList } from "@/components/messages/conversation-list";
import { ChatEmptyState, ChatPanel } from "@/components/messages/chat-panel";
import { conversations } from "@/lib/messages-mocks";
import { cn } from "@/lib/utils";

export function Messages() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = conversations.find((c) => c.id === selectedId) ?? null;

  return (
    <div className="min-h-svh bg-background text-foreground">
      <Sidebar />
      <TopBar />

      <main className="px-3 pb-20 pt-20 sm:px-4 md:px-6 md:pb-6 md:pl-[104px] md:pt-[104px]">
        <div className="mx-auto grid h-[calc(100svh-10rem)] max-w-[1260px] grid-cols-1 gap-6 rounded-2xl p-8 md:h-[calc(100svh-8rem)] md:grid-cols-[minmax(300px,400px)_minmax(0,1fr)] md:p-6 xl:gap-10">
          <div
            className={cn(
              "min-h-0",
              selected ? "hidden md:block" : "block"
            )}
          >
            <ConversationList
              conversations={conversations}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
          </div>

          <div
            className={cn(
              "min-h-0",
              selected ? "block" : "hidden md:block"
            )}
          >
            {selected ? (
              <ChatPanel
                conversation={selected}
                onBack={() => setSelectedId(null)}
              />
            ) : (
              <ChatEmptyState />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
