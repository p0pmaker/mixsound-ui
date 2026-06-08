import type { ReactNode } from "react";
import { Tagline } from "@/components/Tagline";

const PANEL_GLOW =
  "radial-gradient(70% 58% at 50% 122%, #101012 34%, rgba(16,16,18,0) 76%)," +
  "radial-gradient(95% 72% at 12% 2%, #ff2d9a 0%, #c32678 18%, " +
  "#7e1d50 38%, #3a1628 60%, #101012 84%)";

/**
 * Two-column auth layout (Login / Cadastro): a brand panel with the pink glow
 * and tagline on the left, and the form on the right. The panel collapses on
 * small screens so the form takes the full width.
 */
export function AuthSplitLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh bg-background">
      <aside className="relative hidden w-[48%] shrink-0 overflow-hidden lg:block">
        <div className="pointer-events-none absolute inset-0" style={{ background: PANEL_GLOW }} />
        <div className="relative z-10 px-[88px] pt-16">
          <Tagline className="text-[34px]" />
        </div>
      </aside>

      <main className="flex flex-1 items-center justify-center overflow-y-auto px-6 py-12">
        <div className="w-[360px] max-w-full">{children}</div>
      </main>
    </div>
  );
}
