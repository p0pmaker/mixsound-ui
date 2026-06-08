import remixIconSrc from "@/components/icons/remix-icon.svg";

export type SingleItem = {
  id: string;
  title: string;
  year: number;
  cover: string;
};

export function SingleCard({ single }: { single: SingleItem }) {
  return (
    <div className="flex flex-col gap-[28px]">
      <div className="aspect-square overflow-hidden">
        <img
          src={single.cover}
          alt={single.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-base font-bold leading-tight">{single.title}</p>
          <p className="text-xs text-[#bcbcbc]">{single.year}</p>
        </div>
        <button
          type="button"
          aria-label={`Remix ${single.title}`}
          className="shrink-0 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded-full"
        >
          <img src={remixIconSrc} alt="" className="h-[30px] w-[30px]" />
        </button>
      </div>
    </div>
  );
}
