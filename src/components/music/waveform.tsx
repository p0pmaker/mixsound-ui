import { cn } from "@/lib/utils";

type WaveformProps = {
  peaks: number[];
  progress?: number;
  className?: string;
  barWidth?: number;
  barGap?: number;
};

export function Waveform({
  peaks,
  progress = 0,
  className,
  barWidth = 3,
  barGap = 2,
}: WaveformProps) {
  const totalWidth = Math.max(1, peaks.length * (barWidth + barGap) - barGap);
  const cursor = Math.round(peaks.length * progress);

  return (
    <svg
      viewBox={`0 0 ${totalWidth} 100`}
      preserveAspectRatio="none"
      role="img"
      aria-label="Forma de onda do áudio"
      className={cn("block h-full w-full text-current", className)}
    >
      {peaks.map((p, i) => {
        const x = i * (barWidth + barGap);
        const h = Math.max(4, Math.min(100, p * 100));
        const y = (100 - h) / 2;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barWidth}
            height={h}
            rx={barWidth / 2}
            fill="currentColor"
            opacity={i < cursor ? 1 : 0.35}
          />
        );
      })}
    </svg>
  );
}
