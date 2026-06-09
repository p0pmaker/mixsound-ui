export type ChatMessage = {
  id: string;
  from: "me" | "them";
  text: string;
};

export type ChatBlock =
  | { kind: "messages"; id: string; messages: ChatMessage[] }
  | { kind: "divider"; id: string; label: string };

export type Conversation = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  preview: string;
  time: string;
  chat: ChatBlock[];
};

const avatar = (seed: string) => `https://i.pravatar.cc/160?u=mixsound-${seed}`;

export const conversations: Conversation[] = [
  {
    id: "c-ana",
    name: "Ana Silva Souza Santos",
    handle: "ana.silva",
    avatar: avatar("ana-silva"),
    preview: "porque eu não tenho ideia",
    time: "20 minutos",
    chat: [
      {
        kind: "messages",
        id: "b-1",
        messages: [{ id: "m-1", from: "them", text: "e aí?" }],
      },
      {
        kind: "messages",
        id: "b-2",
        messages: [
          {
            id: "m-2",
            from: "me",
            text: "queria discutir sobre isso, acho um tema interessante, principalmente pra quem ta entrando agora na área",
          },
          { id: "m-3", from: "me", text: "queria saber se você topa também" },
          { id: "m-4", from: "me", text: "entrar junto" },
        ],
      },
      { kind: "divider", id: "b-3", label: "Hoje, 15:09" },
      {
        kind: "messages",
        id: "b-4",
        messages: [
          { id: "m-5", from: "them", text: "oiii" },
          { id: "m-6", from: "them", text: "preciso da sua ajuda" },
          { id: "m-7", from: "them", text: "tenho que pedir um documento" },
          { id: "m-8", from: "them", text: "onde é?" },
        ],
      },
      {
        kind: "messages",
        id: "b-5",
        messages: [
          { id: "m-9", from: "me", text: "você tem que ir no centro" },
          { id: "m-10", from: "me", text: "conhece alguém lá?" },
        ],
      },
      {
        kind: "messages",
        id: "b-6",
        messages: [
          { id: "m-11", from: "them", text: "não conheço" },
          { id: "m-12", from: "them", text: "sabe me dizer?" },
          { id: "m-13", from: "them", text: "porque eu não tenho ideia" },
        ],
      },
    ],
  },
  {
    id: "c-felipe",
    name: "Felipe Noronha",
    handle: "felipenoronha",
    avatar: avatar("felipe-noronha"),
    preview: "é isso aí",
    time: "50 minutos",
    chat: [],
  },
  {
    id: "c-jennifer",
    name: "Jennifer Couto",
    handle: "jennifer_couto",
    avatar: avatar("jennifer-couto"),
    preview: "valeu!!",
    time: "1 hora",
    chat: [],
  },
  {
    id: "c-bia",
    name: "Bia Menezes",
    handle: "biamenezes",
    avatar: avatar("bia-menezes"),
    preview: "não tenho não",
    time: "6 horas",
    chat: [],
  },
  {
    id: "c-mari",
    name: "Mari Gimenez",
    handle: "mari.gimenez",
    avatar: avatar("mari-gimenez"),
    preview: "Você: me manda a demo",
    time: "Ontem",
    chat: [],
  },
  {
    id: "c-luiza",
    name: "Luiza Trap",
    handle: "luiza.trap",
    avatar: avatar("luiza-trap"),
    preview: "Obrigada!!",
    time: "2 dias",
    chat: [],
  },
  {
    id: "c-sergio",
    name: "Sérgio Virtudes",
    handle: "sergio.virtudes",
    avatar: avatar("sergio-virtudes"),
    preview: "Você: não sei dizer",
    time: "1 semana",
    chat: [],
  },
  {
    id: "c-george",
    name: "George Addams",
    handle: "georgeaddams",
    avatar: avatar("george-addams"),
    preview: "Você: conhece?",
    time: "1 semana",
    chat: [],
  },
  {
    id: "c-edson",
    name: "Edson Chaveiro",
    handle: "edson.chaveiro",
    avatar: avatar("edson-chaveiro"),
    preview: "Sabe muito!",
    time: "3 minutos",
    chat: [],
  },
  {
    id: "c-marcos",
    name: "Marcos Meireles",
    handle: "marcosmeireles",
    avatar: avatar("marcos-meireles"),
    preview: "Você: bora gravar amanhã?",
    time: "1 semana",
    chat: [],
  },
  {
    id: "c-bia-carvalho",
    name: "Bia Carvalho",
    handle: "bia.carvalho",
    avatar: avatar("bia-carvalho"),
    preview: "te mando o link depois",
    time: "2 semanas",
    chat: [],
  },
  {
    id: "c-diego",
    name: "Diego Antunes",
    handle: "diegoantunes",
    avatar: avatar("diego-antunes"),
    preview: "Você: curti demais o beat",
    time: "2 semanas",
    chat: [],
  },
  {
    id: "c-mario",
    name: "Mario Garcia",
    handle: "mariogarcia",
    avatar: avatar("mario-garcia"),
    preview: "fechou então",
    time: "3 semanas",
    chat: [],
  },
  {
    id: "c-lily",
    name: "Lily Collins",
    handle: "lilycollins",
    avatar: avatar("lily-collins"),
    preview: "Você: obrigado!",
    time: "1 mês",
    chat: [],
  },
  {
    id: "c-monica",
    name: "Monica Joy",
    handle: "monicajoy",
    avatar: avatar("monica-joy"),
    preview: "manda o áudio quando puder",
    time: "1 mês",
    chat: [],
  },
];
