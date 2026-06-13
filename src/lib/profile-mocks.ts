import { type Release } from "@/components/music/release-card";
import { type SingleItem } from "@/components/music/single-card";
import { type TabItem } from "@/components/ui/tab-strip";
import { type Profile } from "@/components/profile/profile-header";
import {
  type FeedItem,
  type RemixFeedItem,
  type Person,
  type Track,
  generatePeaks,
  currentUser,
  diego,
  mario,
  maria,
} from "./home-mocks";

const pickAvatar = (seed: string) =>
  `https://i.pravatar.cc/160?u=mixsound-${seed}`;
const pickCover = (seed: string, size = 340) =>
  `https://picsum.photos/seed/mixsound-${seed}/${size}/${size}`;
const photo = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/mixsound-${seed}/${w}/${h}`;

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

const anaSilvaPerson: Person = {
  id: "p-ana-silva",
  name: friendProfile.name,
  handle: "ana.silva",
  profession: friendProfile.profession,
  avatar: friendProfile.avatar,
};

const skyTrack: Track = {
  id: "t-sky",
  title: "Sky",
  artist: "Ana Silva",
  album: "Altitudes",
  cover: pickCover("sky-track", 240),
  duration: "3:21",
  peaks: generatePeaks("sky-track", 64),
};

export const friendPublicacoes: FeedItem[] = [
  {
    kind: "music",
    id: "pf-music-sky",
    track: skyTrack,
    artist: anaSilvaPerson,
    description: "Meu mais novo single — 'Sky' — já disponível em todas as plataformas!",
    postedAt: "há 2 dias",
  },
  {
    kind: "image",
    id: "pf-image-bts",
    author: anaSilvaPerson,
    description: "Bastidores da gravação acústica que vai sair semana que vem 🎤",
    image: photo("ana-bts", 800, 600),
    postedAt: "há 5 dias",
  },
  {
    kind: "text",
    id: "pf-text-obrigada",
    author: anaSilvaPerson,
    body: "Obrigada a todos pelo apoio no lançamento! Vocês são incríveis demais. Cada mensagem, cada share, cada stream — tô completamente sem palavras.",
    postedAt: "há 1 semana",
  },
];

const friendRemixTrack: Track = {
  id: "t-remix-myworld-ana",
  title: "My World (Ana Silva Remix)",
  artist: "Ana Silva",
  album: "Open Collab",
  cover: photo("remix-ana", 240, 240),
  duration: "4:05",
  peaks: generatePeaks("remix-ana", 64),
};

export const friendRemixes: RemixFeedItem[] = [
  {
    kind: "remix",
    id: "pf-remix-myworld",
    track: friendRemixTrack,
    originalArtist: diego,
    collaborators: [anaSilvaPerson, maria],
    description: "Minha versão desse hit — colabrei com a Maria pra trazer uma energia nova!",
    contributorCount: 8,
    progress: 0.6,
    postedAt: "há 3 dias",
  },
];

export const ownPublicacoes: FeedItem[] = [
  {
    kind: "music",
    id: "po-music-lofi",
    track: {
      id: "t-lofi-beats",
      title: "Lofi Study Beats",
      artist: currentUser.name,
      album: "Chill Sessions",
      cover: pickCover("lofi-beats", 240),
      duration: "4:12",
      peaks: generatePeaks("lofi-beats", 64),
    },
    artist: currentUser,
    description: "Nova beat tape pra estudar/trampar. Feita com muito carinho.",
    postedAt: "há 1 dia",
  },
  {
    kind: "image",
    id: "po-image-studio",
    author: currentUser,
    description: "Setup do estúdio atualizado. Agora com monitor novo e tratamento acústico!",
    image: photo("my-studio", 800, 600),
    postedAt: "há 3 dias",
  },
  {
    kind: "text",
    id: "po-text-thanks",
    author: currentUser,
    body: "Passei o fim de semana todo produzindo. Tem som novo vindo aí, fiquem ligados 🔥",
    postedAt: "há 5 dias",
  },
];

const ownRemixTrack: Track = {
  id: "t-remix-mylife-vc",
  title: "My Life (Seu Remix)",
  artist: currentUser.name,
  album: "Open Collab",
  cover: photo("remix-vc", 240, 240),
  duration: "3:55",
  peaks: generatePeaks("remix-vc", 64),
};

export const ownRemixes: RemixFeedItem[] = [
  {
    kind: "remix",
    id: "po-remix-mylife",
    track: ownRemixTrack,
    originalArtist: mario,
    collaborators: [currentUser, diego],
    description: "Peguei a faixa original do Mario e fiz uma versão mais eletrônica. Diego deu aquela ajuda na mixagem.",
    contributorCount: 5,
    progress: 0.45,
    postedAt: "há 2 dias",
  },
];
