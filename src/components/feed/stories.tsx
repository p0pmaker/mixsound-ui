import { Plus } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { stories, currentUser } from "@/lib/home-mocks";
import { cn } from "@/lib/utils";

export function Stories() {
  return (
    <div className="flex items-center gap-4 overflow-x-auto px-2 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        type="button"
        className="group flex shrink-0 cursor-pointer flex-col items-center gap-1.5 focus-visible:outline-none"
        aria-label="Adicionar story"
      >
        <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-primary/60 bg-background transition-colors group-hover:border-primary">
          <Avatar
            name={currentUser.name}
            src={currentUser.avatar}
            size={56}
          />
          <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground">
            <Plus className="h-3 w-3" strokeWidth={3} />
          </span>
        </span>
        <span className="max-w-[64px] truncate text-xs text-muted-foreground">Seu story</span>
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
              "relative inline-flex h-16 w-16 items-center justify-center rounded-full p-[2px] transition-transform group-hover:scale-105",
              story.unread
                ? "bg-gradient-to-tr from-primary via-primary to-brand-300"
                : "bg-muted"
            )}
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-background p-[2px]">
              <Avatar
                name={story.person.name}
                src={story.person.avatar}
                size={56}
              />
            </span>
          </span>
          <span className="max-w-[64px] truncate text-xs text-muted-foreground group-hover:text-foreground">
            {story.person.name.split(" ")[0]}
          </span>
        </button>
      ))}
    </div>
  );
}
