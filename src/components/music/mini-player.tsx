import { useState } from "react";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";

export function MiniPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col gap-2 rounded bg-[#797979] px-3 py-2">
      <div className="flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Faixa anterior"
          className="cursor-pointer text-[#e5e5e5] transition-colors hover:text-white"
        >
          <SkipBack className="h-5 w-5 fill-current" />
        </button>
        <button
          type="button"
          aria-label={isPlaying ? "Pausar" : "Reproduzir"}
          className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#e5e5e5] text-[#484848] transition-colors hover:bg-white"
          onClick={() => setIsPlaying((p) => !p)}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 fill-current" />
          ) : (
            <Play className="h-4 w-4 fill-current" />
          )}
        </button>
        <button
          type="button"
          aria-label="Próxima faixa"
          className="cursor-pointer text-[#e5e5e5] transition-colors hover:text-white"
        >
          <SkipForward className="h-5 w-5 fill-current" />
        </button>
      </div>
      <div className="flex items-center gap-2 text-xs text-[#e5e5e5]">
        <span className="tabular-nums">0:00</span>
        <div className="h-0.5 flex-1 rounded-full bg-[#e5e5e5]" />
        <span className="tabular-nums">0:00</span>
      </div>
    </div>
  );
}
