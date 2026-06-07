import { Play, Sparkles } from "lucide-react";
import { featuredTrackArtist, featuredTrack } from "@/lib/home-mocks";
import { Waveform } from "@/components/music/waveform";

export function TrackHighlight() {
  const t = featuredTrack;
  const artist = featuredTrackArtist;
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/40">
      <button
        type="button"
        aria-label={`Ouvir ${t.title} de ${artist.name}`}
        className="group/highlight flex w-full cursor-pointer flex-col text-left focus-visible:outline-none"
      >
        <div className="relative aspect-[2/1] w-full overflow-hidden">
          <img
            src={t.cover}
            alt=""
            loading="lazy"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/highlight:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-scrim/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
            <Sparkles className="h-3 w-3" strokeWidth={2.5} />
            Em destaque
          </span>

          <span className="absolute bottom-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover/highlight:scale-105">
            <Play className="h-4 w-4 fill-current" />
          </span>
        </div>

        <div className="flex flex-col gap-1.5 px-4 pb-4 pt-3">
          <p className="truncate text-base font-semibold text-foreground">{t.title}</p>
          <p className="truncate text-xs text-muted-foreground">
            {artist.name} · {t.album}
          </p>

          <div className="mt-1.5 flex h-5 text-primary">
            <Waveform peaks={t.peaks} barWidth={2} barGap={2} />
          </div>
        </div>
      </button>
    </section>
  );
}
