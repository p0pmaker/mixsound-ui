import { Avatar } from "@/components/ui/avatar";
import { suggestions } from "@/lib/home-mocks";

export function Suggestions() {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card">
      <header className="px-4 pt-4">
        <h3 className="text-sm font-semibold text-foreground">
          Pessoas que talvez você conheça:
        </h3>
      </header>

      <ul className="flex flex-col">
        {suggestions.map((person) => (
          <li
            key={person.id}
            className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-muted/40"
          >
            <button
              type="button"
              aria-label={`Abrir perfil de ${person.name}`}
              className="flex min-w-0 flex-1 cursor-pointer items-center gap-3 text-left focus-visible:outline-none"
            >
              <Avatar name={person.name} src={person.avatar} size={36} />
              <span className="min-w-0 leading-tight">
                <span className="block truncate text-sm font-medium text-foreground">
                  {person.name}
                </span>
                <span className="block truncate text-xs text-muted-foreground">
                  {person.profession}
                </span>
              </span>
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-md border border-border px-2.5 py-1 text-xs text-primary transition-colors hover:bg-primary/10"
            >
              Seguir
            </button>
          </li>
        ))}
      </ul>

      <div className="border-t border-border px-4 py-2.5 text-center">
        <button
          type="button"
          className="cursor-pointer text-xs font-medium text-primary hover:text-primary/80"
        >
          Ver mais
        </button>
      </div>
    </section>
  );
}
