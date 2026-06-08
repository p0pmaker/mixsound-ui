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
    <main className="relative min-h-svh overflow-hidden bg-background">
      {/* Top-left pink glow panel */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[42%] w-[62%]"
        style={{ background: HERO_GLOW }}
      />

      {/* Bottom-left tagline */}
      <div className="absolute bottom-20 left-[88px]">
        <Tagline className="text-[40px]" />
      </div>

      {/* Right-side welcome + actions */}
      <div className="absolute right-[90px] top-[62%] flex w-[230px] -translate-y-1/2 flex-col gap-7">
        <img src={logomark} alt="MixSound" className="h-32 w-auto self-center" />
        <h1 className="text-2xl font-bold text-foreground">Bem-vindo(a)!</h1>
        <div className="flex flex-col gap-4">
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
