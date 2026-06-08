import { MoreHorizontal, Music2, Plus, Users } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { PostActions } from "@/components/ui/post-actions";
import { AudioPlayer } from "@/components/music/audio-player";
import type { RemixFeedItem } from "@/lib/home-mocks";

type RemixPostProps = { item: RemixFeedItem };

export function RemixPost({ item }: RemixPostProps) {
  const [a, b] = item.collaborators;

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-primary text-white shadow-(--shadow-glow-primary) transition hover:border-white/40 sm:rounded-3xl">
      <header className="flex items-start justify-between gap-3 px-4 pt-4 sm:px-5 sm:pt-5">
        <div className="flex min-w-0 flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]">
            <Music2 className="h-3 w-3" strokeWidth={2.5} />
            Projeto Remix
          </span>

          <button
            type="button"
            aria-label={`Abrir projeto ${item.track.title}`}
            className="flex min-w-0 cursor-pointer items-center gap-3 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:gap-4"
          >
            <div className="relative h-12 w-20 shrink-0">
              <Avatar
                name={a.name}
                src={a.avatar}
                size={48}
                className="absolute left-0 top-0 ring-2 ring-primary"
              />
              <Avatar
                name={b.name}
                src={b.avatar}
                size={48}
                className="absolute left-8 top-0 ring-2 ring-primary"
              />
            </div>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-base font-semibold sm:text-lg">{item.track.title}</p>
              <p className="truncate text-xs text-white/80 sm:text-sm">
                por {item.originalArtist.name} · com {b.name}
              </p>
            </div>
          </button>
        </div>

        <button
          type="button"
          aria-label="Mais opções"
          className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </header>

      <div className="px-4 pt-4 sm:px-5 sm:pt-5">
        <AudioPlayer
          track={item.track}
          progress={item.progress ?? 0}
          variant="onPrimary"
        />
      </div>

      {item.description && (
        <p className="px-4 pt-4 text-sm leading-relaxed text-white/90 sm:px-5">
          {item.description}
        </p>
      )}

      <div className="flex flex-col gap-3 px-4 pt-4 sm:flex-row sm:items-center sm:gap-4 sm:px-5">
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:py-2.5"
        >
          <Plus className="h-4 w-4" strokeWidth={3} />
          Entrar no Remix
        </button>
        <span className="inline-flex items-center gap-1.5 text-xs text-white/80">
          <Users className="h-3.5 w-3.5" />
          {item.contributorCount} artistas contribuíram
        </span>
      </div>

      <footer className="mt-4 flex items-center justify-between px-3 py-3">
        <PostActions variant="onPrimary" />
        <span className="pr-3 text-xs text-white/75">{item.postedAt}</span>
      </footer>
    </article>
  );
}
