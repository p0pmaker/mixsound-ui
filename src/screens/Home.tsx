import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";
import { MessagesWidget } from "@/components/layout/messages-widget";
import { Stories } from "@/components/feed/stories";
import { RemixPost } from "@/components/feed/remix-post";
import { MusicPost } from "@/components/feed/music-post";
import { ImagePost } from "@/components/feed/image-post";
import { TextPost } from "@/components/feed/text-post";
import { TrackHighlight } from "@/components/feed/track-highlight";
import { Suggestions } from "@/components/feed/suggestions";
import { feed, type FeedItem } from "@/lib/home-mocks";

function FeedItemView({ item }: { item: FeedItem }) {
  switch (item.kind) {
    case "remix":
      return <RemixPost item={item} />;
    case "music":
      return <MusicPost item={item} />;
    case "image":
      return <ImagePost item={item} />;
    case "text":
      return <TextPost item={item} />;
  }
}

export function Home() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Sidebar />
      <TopBar />

      <main className="pb-20 pt-16 md:pb-0 md:pl-20 md:pt-20">
        <div className="grid grid-cols-1 gap-4 px-3 py-4 sm:px-4 md:gap-6 md:px-6 md:py-6 xl:grid-cols-[minmax(0,640px)_300px] xl:justify-center xl:gap-10 xl:px-10 xl:py-8 2xl:gap-14 2xl:px-12">
          <div className="mx-auto flex w-full min-w-0 max-w-2xl flex-col gap-4 md:gap-5">
            <Stories />
            {feed.map((item) => (
              <FeedItemView key={item.id} item={item} />
            ))}
          </div>

          <aside className="hidden flex-col gap-4 xl:flex">
            <TrackHighlight />
            <Suggestions />
          </aside>
        </div>
      </main>

      <MessagesWidget />
    </div>
  );
}
