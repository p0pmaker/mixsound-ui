export type NotificationCategory =
  | "remix"
  | "comentario"
  | "solicitacao"
  | "atividade";

export type NotificationAction =
  | "remix-request"
  | "friend-request"
  | "remix-link";

export type AppNotification = {
  id: string;
  category: NotificationCategory;
  actors: string;
  text: string;
  emphasis?: string;
  time: string;
  avatars: { name: string; src: string }[];
  thumb?: string;
  thumbHighlight?: boolean;
  thumbFirst?: boolean;
  action?: NotificationAction;
};

const avatar = (seed: string) => `https://i.pravatar.cc/160?u=mixsound-${seed}`;
const photo = (seed: string) =>
  `https://picsum.photos/seed/mixsound-${seed}/96/96`;

const ana = { name: "Ana Silva", src: avatar("ana-silva") };
const bia = { name: "Bia Carvalho", src: avatar("bia-carvalho") };
const marcos = { name: "Marcos Meireles", src: avatar("marcos-meireles") };

const guitarPost = photo("guitar-post");
const musicCover = photo("umbrella-cover");
const storyFood = photo("storie-food");
const lastHours = photo("last-hours");
const momentAlbum = photo("moment-album");

const albumRelease = (n: number): AppNotification => ({
  id: `n-album-${n}`,
  category: "atividade",
  actors: "marcosmeireles",
  text: "publicou um novo álbum entitulado",
  emphasis: "The Moment of My Life",
  time: "Há 1 hora",
  avatars: [marcos],
  thumb: momentAlbum,
  thumbHighlight: true,
});

export const notifications: AppNotification[] = [
  {
    id: "n-like-pub",
    category: "atividade",
    actors: "ana.silva, bia.carvalho",
    text: "e outras 5 pessoas curtiram a sua publicação",
    time: "Há 1 hora",
    avatars: [ana, bia],
    thumb: guitarPost,
  },
  {
    id: "n-like-music",
    category: "atividade",
    actors: "ana.silva, bia.carvalho",
    text: "e outras 10 pessoas curtiram a sua música",
    time: "Há 1 hora",
    avatars: [ana, bia],
    thumb: musicCover,
    thumbHighlight: true,
  },
  {
    id: "n-remix-request",
    category: "remix",
    actors: "ana.silva",
    text: "pediu para remixar sua música",
    time: "Há 1 hora",
    avatars: [ana],
    thumb: musicCover,
    thumbHighlight: true,
    action: "remix-request",
  },
  {
    id: "n-comment-music",
    category: "comentario",
    actors: "ana.silva",
    text: "comentou na sua música: “Ficou incrível, parabéns, sucesso!”",
    time: "Há 1 hora",
    avatars: [ana],
    thumb: musicCover,
    thumbHighlight: true,
  },
  {
    id: "n-like-comment",
    category: "atividade",
    actors: "marcosmeireles",
    text: "curtiu seu comentário: “Parabéns Marcos, você é fera!”",
    time: "Há 1 hora",
    avatars: [marcos],
    thumb: lastHours,
    thumbHighlight: true,
  },
  {
    id: "n-like-story",
    category: "atividade",
    actors: "ana.silva, bia.carvalho",
    text: "e outras 10 pessoas curtiram o seu storie",
    time: "Há 1 hora",
    avatars: [ana, bia],
    thumb: storyFood,
  },
  {
    id: "n-friend-request",
    category: "solicitacao",
    actors: "ana.silva",
    text: "enviou uma solicitação para adicionar",
    time: "Há 1 hora",
    avatars: [ana],
    action: "friend-request",
  },
  {
    id: "n-remix-approved",
    category: "remix",
    actors: "marcosmeireles",
    text: "aprovou sua solicitação de remix para",
    emphasis: "Last Hours",
    time: "Há 1 hora",
    avatars: [marcos],
    thumb: lastHours,
    thumbHighlight: true,
    thumbFirst: true,
    action: "remix-link",
  },
  {
    id: "n-comment-pub",
    category: "comentario",
    actors: "ana.silva",
    text: "comentou na sua publicação: “Excelente ponto, concordo com a sua colocação sobre a produção musical. Gostaria de adi...”",
    time: "Há 1 hora",
    avatars: [ana],
  },
  albumRelease(1),
  albumRelease(2),
  albumRelease(3),
  albumRelease(4),
];
