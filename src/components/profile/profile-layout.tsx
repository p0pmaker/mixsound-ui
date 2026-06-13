import { useState } from "react";
import soundRadarSrc from "@/components/icons/sound-radar.svg";
import soundCatalogSrc from "@/components/icons/sound-catalog.svg";
import soundRemixSrc from "@/components/icons/sound-remix.svg";
import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";
import { MessagesWidget } from "@/components/layout/messages-widget";
import { ProfileHeader, type Profile } from "@/components/profile/profile-header";
import { ReleaseCard, type Release } from "@/components/music/release-card";
import { SingleCard, type SingleItem } from "@/components/music/single-card";
import { TabStrip, type TabItem } from "@/components/ui/tab-strip";
import { MusicPost } from "@/components/feed/music-post";
import { ImagePost } from "@/components/feed/image-post";
import { TextPost } from "@/components/feed/text-post";
import { RemixPost } from "@/components/feed/remix-post";
import type { FeedItem, RemixFeedItem } from "@/lib/home-mocks";

type IconTab = "radar" | "catalog" | "remix";

type ProfileLayoutProps = {
  profile: Profile;
  headerVariant?: "friend" | "own";
  latestRelease: Release;
  singles: SingleItem[];
  publicacoes: FeedItem[];
  remixes: RemixFeedItem[];
};

const DEFAULT_TABS: TabItem[] = [
  { id: "singles", label: "Singles" },
  { id: "eps", label: "EP's" },
  { id: "albums", label: "Álbuns" },
];

const iconTabs: { id: IconTab; label: string; src: string; alt: string; cls: string }[] = [
  { id: "radar", label: "Radar", src: soundRadarSrc, alt: "", cls: "h-[17px] w-auto" },
  { id: "catalog", label: "Catálogo", src: soundCatalogSrc, alt: "", cls: "h-[17px] w-auto" },
  { id: "remix", label: "Remix", src: soundRemixSrc, alt: "", cls: "h-[18px] w-auto" },
];

export function ProfileLayout({
  profile,
  headerVariant = "friend",
  latestRelease,
  singles,
  publicacoes,
  remixes,
}: ProfileLayoutProps) {
  const [activeIconTab, setActiveIconTab] = useState<IconTab>("radar");
  const [subTab, setSubTab] = useState(DEFAULT_TABS[0]?.id ?? "");

  return (
    <div className="min-h-svh bg-background text-foreground">
      <Sidebar />
      <TopBar />

      <main className="pb-20 pt-16 md:pb-0 md:pl-20 md:pt-20">
        <div className="mx-auto max-w-[986px] rounded-2xl border border-[#5e5e5e] px-4 py-8">
          <div className="mx-auto w-full max-w-[571px]">
            <ProfileHeader profile={profile} variant={headerVariant} />

            <section className="mt-6 flex flex-col gap-3">
              <h2 className="text-sm font-bold">Último Lançamento</h2>
              <ReleaseCard release={latestRelease} />
            </section>

            <div className="mt-6 flex justify-center gap-10 border-b border-border">
              {iconTabs.map((tab) => {
                const active = activeIconTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    aria-label={tab.label}
                    onClick={() => setActiveIconTab(tab.id)}
                    className={`relative cursor-pointer pb-3 transition-opacity ${
                      active ? "opacity-100" : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={tab.src}
                      alt=""
                      className={`${tab.cls} brightness-[10]`}
                    />
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-white" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-4">
              {activeIconTab === "radar" && (
                <>
                  <TabStrip tabs={DEFAULT_TABS} activeId={subTab} onChange={setSubTab} />
                  <div className="mt-4">
                    {subTab === "singles" && (
                      <div className="grid grid-cols-2 gap-[32px] sm:grid-cols-3">
                        {singles.map((single) => (
                          <SingleCard key={single.id} single={single} />
                        ))}
                      </div>
                    )}
                    {subTab === "eps" && (
                      <p className="py-12 text-center text-sm text-muted-foreground">
                        Nenhum EP disponível.
                      </p>
                    )}
                    {subTab === "albums" && (
                      <p className="py-12 text-center text-sm text-muted-foreground">
                        Nenhum álbum disponível.
                      </p>
                    )}
                  </div>
                </>
              )}
              {activeIconTab === "catalog" && (
                <div className="flex flex-col gap-4">
                  {publicacoes.map((item) => {
                    switch (item.kind) {
                      case "music":
                        return <MusicPost key={item.id} item={item} />;
                      case "image":
                        return <ImagePost key={item.id} item={item} />;
                      case "text":
                        return <TextPost key={item.id} item={item} />;
                      case "remix":
                        return null;
                    }
                  })}
                </div>
              )}
              {activeIconTab === "remix" && (
                <div className="flex flex-col gap-4">
                  {remixes.map((item) => (
                    <RemixPost key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <MessagesWidget />
    </div>
  );
}
