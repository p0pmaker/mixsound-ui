import { MiniPlayer } from "./mini-player";
import { Button } from "@/components/ui/button";

export type Release = {
  title: string;
  artist: string;
  cover: string;
};

export function ReleaseCard({ release }: { release: Release }) {
  return (
    <div className="rounded-lg border-2 border-[#ababab] bg-[#484848] px-3 py-3 shadow-[1px_8px_8px_rgba(0,0,0,0.1),3px_31px_15px_rgba(0,0,0,0.09),7px_69px_20px_rgba(0,0,0,0.05),12px_122px_24px_rgba(0,0,0,0.01)] sm:px-6 sm:py-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
        <img
          src={release.cover}
          alt={release.title}
          className="aspect-square w-28 h-28 self-center rounded object-cover shadow-lg sm:h-[111px] sm:w-[117px] sm:self-auto"
        />
        <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-3">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-bold leading-tight sm:text-lg">{release.title}</p>
              <p className="text-xs text-[#bcbcbc]">{release.artist}</p>
            </div>
            <Button className="shrink-0 rounded px-3 text-xs font-bold text-[#d8d8d8] sm:px-8 sm:text-sm">
              Remix
            </Button>
          </div>
          <MiniPlayer />
        </div>
      </div>
    </div>
  );
}
