import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StatPill } from "@/components/ui/stat-pill";

export type Profile = {
  name: string;
  handle: string;
  profession: string;
  bio: string;
  followers: number;
  following: number;
  avatar: string;
};

type ProfileHeaderProps = {
  profile: Profile;
  variant?: "friend" | "own";
};

export function ProfileHeader({ profile, variant = "friend" }: ProfileHeaderProps) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="h-42 w-42 shrink-0 rounded-full object-cover"
        />
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <div className="flex flex-col gap-0.5">
            <h1 className="text-lg font-bold">{profile.name}</h1>
            <p className="text-sm text-foreground/80">{profile.handle}</p>
          </div>
          <p className="text-xs text-[#797979]">{profile.profession}</p>
          <p className="max-w-[284px] text-sm text-[#d8d8d8]">{profile.bio}</p>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
            <StatPill count={profile.followers} label="seguidores" />
            <StatPill count={profile.following} label="seguindo" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {variant === "friend" ? (
          <>
            <Button
              variant="outline"
              className="rounded border-[#ababab] px-10 text-[#d8d8d8] hover:border-primary hover:text-primary"
            >
              + Adicionar
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded border-[#ababab] px-10 text-[#d8d8d8] hover:border-primary hover:text-primary"
            >
              <Link to="/mensagens">Enviar mensagem</Link>
            </Button>
            <Button className="rounded px-10 font-bold text-[#d8d8d8]">
              Remix
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              className="rounded border-[#ababab] px-10 text-[#d8d8d8] hover:border-primary hover:text-primary"
            >
              Editar Perfil
            </Button>
            <Button className="rounded px-10 font-bold text-[#d8d8d8]">
              Meus Remixes
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
