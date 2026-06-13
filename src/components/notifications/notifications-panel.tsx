import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  notifications,
  type AppNotification,
  type NotificationCategory,
} from "@/lib/notifications-mocks";

type FilterId = "todas" | NotificationCategory;

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "remix", label: "Remixes" },
  { id: "comentario", label: "Comentários" },
  { id: "solicitacao", label: "Solicitações para Adicionar" },
];

type NotificationsPanelProps = {
  open: boolean;
  onClose: () => void;
};

export function NotificationsPanel({ open, onClose }: NotificationsPanelProps) {
  const [filter, setFilter] = useState<FilterId>("todas");

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const visible =
    filter === "todas"
      ? notifications
      : notifications.filter((n) => n.category === filter);

  return (
    <>
      <div
        aria-hidden
        onClick={onClose}
        className="fixed left-0 right-0 top-0 bottom-16 z-[35] cursor-pointer bg-black/50 md:bottom-0 md:left-20"
      />
      <section
        role="dialog"
        aria-label="Notificações"
        className="fixed left-0 top-0 bottom-16 z-40 flex w-full flex-col border-r border-border bg-background shadow-2xl shadow-black/60 md:bottom-0 md:left-20 md:max-w-[560px] md:rounded-r-2xl"
      >
        <header className="flex items-center justify-between px-5 pt-6 md:px-7">
          <h2 className="text-2xl font-bold">Notificações</h2>
          <button
            type="button"
            aria-label="Fechar notificações"
            onClick={onClose}
            className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <X className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </header>

        <div className="flex flex-wrap gap-2 px-5 pt-5 md:px-7">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={filter === id}
              className={cn(
                "cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                filter === id
                  ? "bg-secondary text-foreground"
                  : "border border-foreground/40 text-foreground hover:bg-secondary/50"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <ul className="mt-3 flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pb-6 md:px-7">
          {visible.map((notification) => (
            <NotificationRow key={notification.id} notification={notification} />
          ))}
          {visible.length === 0 && (
            <li className="py-10 text-center text-sm text-muted-foreground">
              Nenhuma notificação por aqui
            </li>
          )}
        </ul>
      </section>
    </>
  );
}

function NotificationRow({ notification }: { notification: AppNotification }) {
  const { avatars, thumb, thumbHighlight, thumbFirst } = notification;

  const thumbImg = thumb && (
    <img
      src={thumb}
      alt=""
      loading="lazy"
      className={cn(
        "h-12 w-12 shrink-0 rounded-lg object-cover",
        thumbHighlight && "border-2 border-primary"
      )}
    />
  );

  return (
    <li className="flex items-center gap-3 py-2.5">
      <div className="flex shrink-0 items-center -space-x-3">
        {thumbFirst && thumbImg}
        {avatars.map((person, index) => (
          <Avatar
            key={person.src}
            name={person.name}
            src={person.src}
            size={48}
            className={cn((index > 0 || thumbFirst) && "ring-2 ring-background")}
          />
        ))}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm leading-snug">
          <span className="font-bold">{notification.actors}</span>{" "}
          {notification.text}
          {notification.emphasis && (
            <>
              {" "}
              <span className="font-bold italic">
                “{notification.emphasis}”
              </span>
            </>
          )}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {notification.time}
        </p>
      </div>

      <NotificationActions action={notification.action} />
      {!thumbFirst && thumbImg}
    </li>
  );
}

const ACTION_BUTTON =
  "shrink-0 cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

function NotificationActions({
  action,
}: {
  action: AppNotification["action"];
}) {
  if (!action) return null;

  if (action === "remix-link") {
    return (
      <button
        type="button"
        className={cn(ACTION_BUTTON, "bg-primary text-primary-foreground")}
      >
        Remix
      </button>
    );
  }

  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        className={cn(
          ACTION_BUTTON,
          action === "remix-request"
            ? "bg-primary text-primary-foreground"
            : "bg-foreground/80 text-background"
        )}
      >
        Aceitar
      </button>
      <button
        type="button"
        className={cn(ACTION_BUTTON, "bg-white/20 text-foreground")}
      >
        Recusar
      </button>
    </div>
  );
}
