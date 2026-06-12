import { type Release } from "@/components/music/release-card";
import { type SingleItem } from "@/components/music/single-card";
import { type TabItem } from "@/components/ui/tab-strip";
import { currentUser } from "./home-mocks";
import { type Profile } from "@/components/profile/profile-header";

const pickAvatar = (seed: string) =>
  `https://i.pravatar.cc/160?u=mixsound-${seed}`;
const pickCover = (seed: string, size = 340) =>
  `https://picsum.photos/seed/mixsound-${seed}/${size}/${size}`;

export const friendProfile: Profile = {
  name: "Ana Silva Santos Souza",
  handle: "@ana.silva",
  profession: "Singer/Songwriter",
  bio: "Escrever aqui uma bio legal e tals etc textoee lalalallalalalallallal lorem ipsum dolor sit amet",
  followers: 27,
  following: 21,
  avatar: pickAvatar("ana-silva"),
};

export const ownProfile: Profile = {
  name: currentUser.name,
  handle: `@${currentUser.handle}`,
  profession: currentUser.profession ?? "Artist",
  bio: "Seu perfil no MixSound. Edite sua bio para contar sua história.",
  followers: 134,
  following: 89,
  avatar: currentUser.avatar,
};

export const latestRelease: Release = {
  title: "New Waves",
  artist: friendProfile.name,
  cover: pickCover("new-waves", 240),
};

export const singles: SingleItem[] = [
  { id: "sky", title: "Sky", year: 2026, cover: pickCover("sky") },
  { id: "ethereal", title: "Ethereal", year: 2025, cover: pickCover("ethereal") },
  { id: "whiplash", title: "Whiplash", year: 2025, cover: pickCover("whiplash") },
  { id: "tunnel-vision", title: "Tunnel Vision", year: 2025, cover: pickCover("tunnel-vision") },
  { id: "fall", title: "FALL", year: 2025, cover: pickCover("fall") },
  { id: "night-museum", title: "Night at the Museum", year: 2025, cover: pickCover("night-museum") },
];

export const TABS: TabItem[] = [
  { id: "singles", label: "Singles" },
  { id: "eps", label: "EP's" },
  { id: "albums", label: "Álbuns" },
];
