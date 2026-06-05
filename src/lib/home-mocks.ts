export type Person = {
  id: string;
  name: string;
  handle: string;
  profession?: string;
  location?: string;
  avatar: string;
};

export type Story = {
  id: string;
  person: Person;
  unread?: boolean;
};

export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  duration: string;
  peaks: number[];
};

export type RemixFeedItem = {
  kind: "remix";
  id: string;
  track: Track;
  originalArtist: Person;
  collaborators: [Person, Person];
  description?: string;
  contributorCount: number;
  progress?: number;
  postedAt: string;
};

export type MusicFeedItem = {
  kind: "music";
  id: string;
  track: Track;
  artist: Person;
  description: string;
  postedAt: string;
};

export type ImageFeedItem = {
  kind: "image";
  id: string;
  author: Person;
  description: string;
  image: string;
  postedAt: string;
};

export type TextFeedItem = {
  kind: "text";
  id: string;
  author: Person;
  body: string;
  postedAt: string;
};

export type FeedItem =
  | RemixFeedItem
  | MusicFeedItem
  | ImageFeedItem
  | TextFeedItem;

const avatar = (seed: string, size = 160) =>
  `https://i.pravatar.cc/${size}?u=mixsound-${seed}`;

const photo = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/mixsound-${seed}/${w}/${h}`;

function generatePeaks(seed: string, count: number): number[] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) | 0;
  }
  const peaks: number[] = [];
  for (let i = 0; i < count; i++) {
    h = (h * 9301 + 49297) % 233280;
    const base = (h / 233280) * 0.6 + 0.2;
    const wave = Math.sin((i / count) * Math.PI * 4) * 0.25;
    const edge = 1 - Math.abs((i / count) * 2 - 1) * 0.35;
    peaks.push(Math.max(0.1, Math.min(1, base + wave * edge)));
  }
  return peaks;
}

const diego: Person = {
  id: "p-diego",
  name: "Diego Antunes",
  handle: "diegoantunes",
  profession: "Producer",
  avatar: avatar("diego-antunes"),
};

const mario: Person = {
  id: "p-mario",
  name: "Mario Garcia",
  handle: "mariogarcia",
  profession: "Beatmaker",
  avatar: avatar("mario-garcia"),
};

const maria: Person = {
  id: "p-maria",
  name: "Maria Lima",
  handle: "marialima",
  profession: "Vocalist",
  avatar: avatar("maria-lima"),
};

const fabio: Person = {
  id: "p-fabio",
  name: "Fábio Jorge",
  handle: "fabiojorge",
  profession: "DJ",
  avatar: avatar("fabio-jorge"),
};

const lily: Person = {
  id: "p-lily",
  name: "Lily Collins",
  handle: "lilycollins",
  profession: "Composer",
  avatar: avatar("lily-collins"),
};

const bryan: Person = {
  id: "p-bryan",
  name: "Bryan Addams",
  handle: "bryanaddams",
  profession: "Singer",
  avatar: avatar("bryan-addams"),
};

const monica: Person = {
  id: "p-monica",
  name: "Monica Joy",
  handle: "monicajoy",
  profession: "Pianist",
  avatar: avatar("monica-joy"),
};

const charles: Person = {
  id: "p-charles",
  name: "Charles David",
  handle: "charlesdavid",
  profession: "Guitarist",
  avatar: avatar("charles-david"),
};

const me: Person = {
  id: "p-me",
  name: "Você",
  handle: "voce",
  avatar: avatar("you"),
};

export const currentUser = me;

export const stories: Story[] = [
  { id: "s-me", person: me },
  { id: "s-diego", person: diego, unread: true },
  { id: "s-mario", person: mario, unread: true },
  { id: "s-maria", person: maria },
  { id: "s-fabio", person: fabio, unread: true },
  { id: "s-lily", person: lily },
  { id: "s-bryan", person: bryan, unread: true },
];

const myWorldTrack: Track = {
  id: "t-myworld",
  title: "My World",
  artist: "Diego Antunes",
  album: "Open Collab",
  cover: photo("my-world-track", 240, 240),
  duration: "3:42",
  peaks: generatePeaks("my-world", 64),
};

const lateNightTrack: Track = {
  id: "t-latenight",
  title: "Late Night Drive",
  artist: "Mario Garcia",
  album: "Night Tape, Vol. 1",
  cover: photo("late-night-drive", 240, 240),
  duration: "2:58",
  peaks: generatePeaks("late-night", 64),
};

export const feed: FeedItem[] = [
  {
    kind: "remix",
    id: "f-myworld-remix",
    track: myWorldTrack,
    originalArtist: mario,
    collaborators: [diego, mario],
    description:
      "Esse projeto está aberto para colaboração. Quem quiser entrar, manda sua parte — quero um remix com a cara de vocês.",
    contributorCount: 12,
    progress: 0.35,
    postedAt: "agora",
  },
  {
    kind: "music",
    id: "f-myworld-original",
    track: myWorldTrack,
    artist: diego,
    description:
      "Faixa original pra vocês remixarem. Aceito todas as versões, sem limite de gênero.",
    postedAt: "há 2 h",
  },
  {
    kind: "music",
    id: "f-latenight",
    track: lateNightTrack,
    artist: mario,
    description:
      "Acabei de soltar essa nova faixa. Quem quiser, manda um remix por aí — quero ouvir as versões de vocês.",
    postedAt: "há 4 h",
  },
  {
    kind: "image",
    id: "f-image",
    author: maria,
    description:
      "Bastidores do clipe novo, gravado em uma noite só. Logo logo vocês vão poder ouvir tudo.",
    image: photo("maria-bts", 800, 600),
    postedAt: "há 6 h",
  },
  {
    kind: "text",
    id: "f-text",
    author: maria,
    body:
      "Música boa é a que faz você fechar os olhos e esquecer o resto. Hoje passei o dia ouvindo as faixas que vocês mandaram — obrigada por cada recomendação.",
    postedAt: "ontem",
  },
];

export const featuredTrack: Track = myWorldTrack;
export const featuredTrackArtist: Person = diego;

export const suggestions: Person[] = [fabio, lily, bryan, monica, charles];
