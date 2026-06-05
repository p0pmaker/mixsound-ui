import type { CSSProperties, ReactNode } from "react";
import logoSrc from "../assets/logo.svg";

const GLOW =
  "radial-gradient(1627px 932px at 50% -37%, #ff2d9a 0%, #c32678 25%, " +
  "#881f56 50%, #6a1b45 62.5%, #4c1734 75%, #2e1423 87.5%, #101012 100%)";

type AuthShellProps = {
  /** Vertical gap between the stacked sections of the column, in px. */
  gap: number;
  /** Pulls the column up from the exact vertical center, in px (matches Figma). */
  offsetY?: number;
  children: ReactNode;
};

/**
 * The dark page with the pink radial glow and a vertically-centred content
 * column. Shared by every auth screen; each screen composes its own contents.
 */
export function AuthShell({ gap, offsetY = 0, children }: AuthShellProps) {
  const columnStyle: CSSProperties = {
    gap: `${gap}px`,
    transform: offsetY ? `translateY(-${offsetY}px)` : undefined,
  };

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background px-6 py-12">
      <div className="pointer-events-none absolute inset-0" style={{ background: GLOW }} />
      <div className="relative z-10 flex w-full flex-col items-center" style={columnStyle}>
        {children}
      </div>
    </main>
  );
}

export function Logo() {
  return <img className="h-10 w-[133px] shrink-0" src={logoSrc} alt="MixSound" />;
}
