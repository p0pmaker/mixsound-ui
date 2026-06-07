import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { stories, currentUser } from "@/lib/home-mocks";
import { cn } from "@/lib/utils";

const SCROLL_RATIO = 0.7;

export function Stories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });

    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left:
        direction === "left"
          ? -el.clientWidth * SCROLL_RATIO
          : el.clientWidth * SCROLL_RATIO,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex items-center gap-4 overflow-x-auto px-2 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <button
          type="button"
          className="group flex shrink-0 cursor-pointer flex-col items-center gap-1.5 focus-visible:outline-none"
          aria-label="Adicionar story"
        >
          <span className="relative inline-flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-dashed border-primary/60 bg-background transition-colors group-hover:border-primary">
            <Avatar
              name={currentUser.name}
              src={currentUser.avatar}
              size={64}
            />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground">
              <Plus className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
          </span>
          <span className="max-w-[72px] truncate text-xs text-muted-foreground">Seu story</span>
        </button>

        {stories.slice(1).map((story) => (
          <button
            key={story.id}
            type="button"
            aria-label={`Ver story de ${story.person.name}`}
            className="group flex shrink-0 cursor-pointer flex-col items-center gap-1.5 focus-visible:outline-none"
          >
            <span
              className={cn(
                "relative inline-flex h-[72px] w-[72px] items-center justify-center rounded-full p-[2px] transition-transform group-hover:scale-105",
                story.unread
                  ? "bg-gradient-to-tr from-primary via-primary to-brand-300"
                  : "bg-muted"
              )}
            >
              <span className="flex h-full w-full items-center justify-center rounded-full bg-background p-[2px]">
                <Avatar
                  name={story.person.name}
                  src={story.person.avatar}
                  size={64}
                />
              </span>
            </span>
            <span className="max-w-[72px] truncate text-xs text-muted-foreground group-hover:text-foreground">
              {story.person.name.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>

      {canScrollLeft && (
        <button
          type="button"
          aria-label="Stories anteriores"
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-secondary text-foreground shadow-lg shadow-black/40 transition-colors hover:border-white/25 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}

      {canScrollRight && (
        <button
          type="button"
          aria-label="Próximos stories"
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-secondary text-foreground shadow-lg shadow-black/40 transition-colors hover:border-white/25 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
