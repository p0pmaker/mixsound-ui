import type { ImageFeedItem } from "@/lib/home-mocks";
import { CommentInput } from "@/components/ui/comment-input";
import { PostActions } from "@/components/ui/post-actions";
import { UserHeader } from "@/components/ui/user-header";

type ImagePostProps = { item: ImageFeedItem };

export function ImagePost({ item }: ImagePostProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/40">
      <div className="grid grid-cols-1 sm:grid-cols-[5fr_6fr]">
        <button
          type="button"
          aria-label="Abrir imagem"
          className="group/img relative aspect-[4/3] cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:aspect-auto sm:min-h-[260px]"
        >
          <img
            src={item.image}
            alt=""
            loading="lazy"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
          />
        </button>

        <div className="flex flex-col gap-3 p-4">
          <UserHeader person={item.author} avatarSize={40} />

          <p className="text-sm leading-relaxed text-foreground/90">{item.description}</p>

          <div className="mt-auto flex flex-col gap-3">
            <CommentInput />
            <div className="flex items-center justify-between">
              <PostActions className="-ml-2" />
              <span className="pr-2 text-xs text-muted-foreground">{item.postedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
