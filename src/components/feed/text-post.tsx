import type { TextFeedItem } from "@/lib/home-mocks";
import { CommentInput } from "@/components/ui/comment-input";
import { PostActions } from "@/components/ui/post-actions";
import { UserHeader } from "@/components/ui/user-header";

type TextPostProps = { item: TextFeedItem };

export function TextPost({ item }: TextPostProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/40">
      <div className="px-4 pt-4">
        <UserHeader person={item.author} />
      </div>

      <p className="px-4 pt-3 text-sm leading-relaxed text-foreground/90">{item.body}</p>

      <div className="px-4 pt-3">
        <CommentInput />
      </div>

      <footer className="mt-3 flex items-center justify-between border-t border-border px-3 py-2">
        <PostActions />
        <span className="pr-3 text-xs text-muted-foreground">{item.postedAt}</span>
      </footer>
    </article>
  );
}
