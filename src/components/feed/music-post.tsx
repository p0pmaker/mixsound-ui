import type { MusicFeedItem } from "@/lib/home-mocks";
import { PostActions } from "@/components/ui/post-actions";
import { UserHeader } from "@/components/ui/user-header";
import { TrackPreview } from "@/components/music/track-preview";

type MusicPostProps = { item: MusicFeedItem };

export function MusicPost({ item }: MusicPostProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/40">
      <div className="px-4 pt-4">
        <UserHeader person={item.artist} />
      </div>

      <p className="px-4 pt-3 text-sm leading-relaxed text-foreground/90">{item.description}</p>

      <div className="px-4 pt-3">
        <TrackPreview track={item.track} />
      </div>

      <footer className="mt-3 flex items-center justify-between border-t border-border px-3 py-2">
        <PostActions />
        <span className="pr-3 text-xs text-muted-foreground">{item.postedAt}</span>
      </footer>
    </article>
  );
}
