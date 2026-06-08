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

const pickAvatar = (seed: string) =>
  `https://i.pravatar.cc/160?u=mixsound-${seed}`;
const pickCover = (seed: string, size = 340) =>
  `https://picsum.photos/seed/mixsound-${seed}/${size}/${size}`;

const profile: Profile = {
  name: "Ana Silva Santos Souza",
  handle: "@ana.silva",
  profession: "Singer/Songwriter",
  bio: "Escrever aqui uma bio legal e tals etc textoee lalalallalalalallallal lorem ipsum dolor sit amet",
  followers: 27,
  following: 21,
  avatar: pickAvatar("ana-silva"),
};

const latestRelease: Release = {
  title: "New Waves",
  artist: "Ana Silva",
  cover: pickCover("new-waves", 240),
};

const singles: SingleItem[] = [
  { id: "sky", title: "Sky", year: 2026, cover: pickCover("sky") },
  { id: "ethereal", title: "Ethereal", year: 2025, cover: pickCover("ethereal") },
  { id: "whiplash", title: "Whiplash", year: 2025, cover: pickCover("whiplash") },
  { id: "tunnel-vision", title: "Tunnel Vision", year: 2025, cover: pickCover("tunnel-vision") },
  { id: "fall", title: "FALL", year: 2025, cover: pickCover("fall") },
  { id: "night-museum", title: "Night at the Museum", year: 2025, cover: pickCover("night-museum") },
];

const TABS: TabItem[] = [
  { id: "singles", label: "Singles" },
  { id: "eps", label: "EP's" },
  { id: "albums", label: "Álbuns" },
];

export function FriendProfile() {
  const [activeTab, setActiveTab] = useState("singles");

  return (
    <div className="min-h-svh bg-background text-foreground">
      <Sidebar />
      <TopBar />

      <main className="pb-20 pt-16 md:pb-0 md:pl-20 md:pt-20">
        <div className="mx-auto max-w-[986px] rounded-2xl border border-[#5e5e5e] px-4 py-8">
          <div className="mx-auto w-full max-w-[571px]">

            <ProfileHeader profile={profile} />

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
              <TabStrip tabs={TABS} activeId={activeTab} onChange={setActiveTab} />
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
