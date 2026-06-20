import { useNavigate } from "react-router-dom";
import { Tagline } from "@/components/Tagline";
import { Button } from "@/components/ui/button";
import logomark from "@/assets/logomark.svg";

const HERO_GLOW =
  "radial-gradient(80% 62% at 50% 100%, #101012 0%, #101012 42%, rgba(16,16,18,0) 80%)," +
  "radial-gradient(115% 125% at 50% -12%, #ff2d9a 0%, #c12576 30%, " +
  "#7a1d4e 55%, #3a1626 80%, #101012 100%)";

export function Welcome() {
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background px-6 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-[120px] lg:pb-[120px] lg:py-0">
      <div
        className="pointer-events-none absolute inset-0 lg:inset-auto lg:left-0 lg:top-0 lg:h-[42%] lg:w-[62%]"
        style={{ background: HERO_GLOW }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 text-center sm:gap-14 lg:items-start lg:gap-0 lg:text-left">
        <Tagline className="text-[28px] leading-[1.15] sm:text-[36px] md:text-[46px] lg:text-[56px]" />
      </div>

      <div className="relative z-10 mt-8 flex w-[260px] max-w-full flex-col items-center gap-5 sm:mt-10 sm:gap-6 lg:mt-0">
        <img src={logomark} alt="MixSound" className="h-20 w-auto sm:h-24 md:h-28 lg:h-32" />
        <h1 className="text-lg font-bold text-foreground sm:text-xl md:text-2xl">Bem-vindo(a)!</h1>
        <div className="flex w-full flex-col gap-3 sm:gap-4">
          <Button
            className="h-12 w-full rounded-lg text-sm font-semibold"
            onClick={() => navigate("/login")}
          >
            Já possuo uma conta
          </Button>
          <Button
            className="h-12 w-full rounded-lg border-transparent bg-white text-sm font-semibold text-[#101012] hover:bg-white/90"
            onClick={() => navigate("/cadastro")}
          >
            Quero me cadastrar
          </Button>
        </div>
      </div>
    </main>
  );
}
