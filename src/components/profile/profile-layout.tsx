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

type ProfileLayoutProps = {
  profile: Profile;
  headerVariant?: "friend" | "own";
  latestRelease: Release;
  singles: SingleItem[];
  tabs?: TabItem[];
};

const DEFAULT_TABS: TabItem[] = [
  { id: "singles", label: "Singles" },
  { id: "eps", label: "EP's" },
  { id: "albums", label: "Álbuns" },
];

export function ProfileLayout({
  profile,
  headerVariant = "friend",
  latestRelease,
  singles,
  tabs = DEFAULT_TABS,
}: ProfileLayoutProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");

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
              <button
                type="button"
                aria-label="Radar"
                className="relative pb-3 opacity-100"
              >
                <img src={soundRadarSrc} alt="" className="h-[17px] w-auto brightness-[10]" />
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-white" />
              </button>
              <button
                type="button"
                aria-label="Catálogo"
                className="pb-3 opacity-50 transition-opacity hover:opacity-100"
              >
                <img src={soundCatalogSrc} alt="" className="h-[17px] w-auto" />
              </button>
              <button
                type="button"
                aria-label="Remix"
                className="pb-3 opacity-50 transition-opacity hover:opacity-100"
              >
                <img src={soundRemixSrc} alt="" className="h-[18px] w-auto" />
              </button>
            </div>

            <div className="mt-4">
              <TabStrip tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
            </div>

            <div className="mt-4">
              {activeTab === "singles" && (
                <div className="grid grid-cols-2 gap-[32px] sm:grid-cols-3">
                  {singles.map((single) => (
                    <SingleCard key={single.id} single={single} />
                  ))}
                </div>
              )}
              {activeTab === "eps" && (
                <p className="py-12 text-center text-sm text-muted-foreground">
                  Nenhum EP disponível.
                </p>
              )}
              {activeTab === "albums" && (
                <p className="py-12 text-center text-sm text-muted-foreground">
                  Nenhum álbum disponível.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      <MessagesWidget />
    </div>
  );
}
