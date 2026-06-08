import { useNavigate } from "react-router-dom";
import { Avatar } from "@/components/ui/avatar";
import type { Person } from "@/lib/home-mocks";
import { cn } from "@/lib/utils";

type UserHeaderProps = {
  person: Person;
  avatarSize?: number;
  className?: string;
  ariaLabel?: string;
};

export function UserHeader({
  person,
  avatarSize = 42,
  className,
  ariaLabel,
}: UserHeaderProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      aria-label={ariaLabel ?? `Abrir perfil de ${person.name}`}
      onClick={() => navigate("/friend-perfil")}
      className={cn(
        "flex w-full cursor-pointer items-center gap-3 text-left focus-visible:outline-none",
        className
      )}
    >
      <Avatar name={person.name} src={person.avatar} size={avatarSize} />
      <span className="min-w-0 flex-1 leading-tight">
        <span className="block truncate text-sm font-semibold text-foreground">
          {person.name}
        </span>
        <span className="block truncate text-xs text-muted-foreground">
          @{person.handle}
        </span>
      </span>
    </button>
  );
}
