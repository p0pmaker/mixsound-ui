import { Play } from "lucide-react";
import type { Track } from "@/lib/home-mocks";
import { cn } from "@/lib/utils";
import { Waveform } from "./waveform";

type AudioPlayerProps = {
  track: Track;
  progress?: number;
  variant?: "default" | "onPrimary";
  className?: string;
};

function formatProgress(progress: number, duration: string): string {
  const [m = 0, s = 0] = duration.split(":").map(Number);
  const total = m * 60 + s;
  const current = Math.max(0, Math.min(total, Math.floor(total * progress)));
  const cm = Math.floor(current / 60);
  const cs = current % 60;
  return `${cm}:${cs.toString().padStart(2, "0")}`;
}

export function AudioPlayer({
  track,
  progress = 0,
  variant = "default",
  className,
}: AudioPlayerProps) {
  const isOnPrimary = variant === "onPrimary";

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border p-3 sm:gap-4 sm:p-4",
        isOnPrimary
          ? "border-white/20 bg-white/10 text-white"
          : "border-border bg-background/60 text-foreground",
        className
      )}
    >
      <img
        src={track.cover}
        alt=""
        loading="lazy"
        draggable={false}
        className="h-12 w-12 shrink-0 rounded-lg object-cover sm:h-14 sm:w-14"
      />

      <button
        type="button"
        aria-label={`Reproduzir ${track.title}`}
        className={cn(
          "inline-flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors sm:h-14 sm:w-14",
          isOnPrimary
            ? "bg-white text-primary hover:bg-white/90"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        <Play className="h-5 w-5 fill-current sm:h-6 sm:w-6" />
      </button>

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="h-10 sm:h-12">
          <Waveform peaks={track.peaks} progress={progress} />
        </div>
        <div
          className={cn(
            "flex items-center justify-between text-[11px] tabular-nums sm:text-xs",
            isOnPrimary ? "text-white/80" : "text-muted-foreground"
          )}
        >
          <span>{formatProgress(progress, track.duration)}</span>
          <span>{track.duration}</span>
        </div>
      </div>
    </div>
  );
}
