import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Track } from "@/lib/home-mocks";
import { Waveform } from "./waveform";

type TrackPreviewProps = {
  track: Track;
  showWaveform?: boolean;
};

export function TrackPreview({ track, showWaveform = true }: TrackPreviewProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-3">
      <button
        type="button"
        aria-label={`Reproduzir ${track.title}`}
        className="group/play relative h-14 w-14 shrink-0 cursor-pointer overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <img
          src={track.cover}
          alt=""
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover/play:opacity-100">
          <Play className="h-5 w-5 fill-white text-white" />
        </span>
      </button>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex min-w-0 items-baseline justify-between gap-2">
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-semibold text-foreground">{track.title}</p>
            <p className="truncate text-xs text-muted-foreground">{track.artist}</p>
          </div>
          <span className="shrink-0 text-[11px] tabular-nums text-muted-foreground">
            {track.duration}
          </span>
        </div>
        {showWaveform && (
          <div className="h-5 text-primary">
            <Waveform peaks={track.peaks} barWidth={2} barGap={2} />
          </div>
        )}
      </div>

      <Button
        type="button"
        className="h-9 shrink-0 cursor-pointer rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
      >
        Remix
      </Button>
    </div>
  );
}
