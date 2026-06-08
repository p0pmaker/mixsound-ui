import { Bell, Home, PlusSquare, Rss, Settings, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import iconSrc from "../../assets/icon.png";
import { Avatar } from "@/components/ui/avatar";
import { currentUser } from "@/lib/home-mocks";
import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Início", icon: Home, active: true },
  { id: "feed", label: "Feed", icon: Rss },
  { id: "notifications", label: "Notificações", icon: Bell },
  { id: "create", label: "Adicionar conteúdo", icon: PlusSquare },
];

const NAV_ITEM_BASE =
  "group relative inline-flex cursor-pointer items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

export function Sidebar() {
  return (
    <>
      <DesktopSidebar />
      <MobileNav />
    </>
  );
}

function DesktopSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden h-dvh w-20 flex-col items-center border-r border-border bg-background md:flex">
      <Link
        to="/home"
        aria-label="Página inicial"
        className="flex h-20 w-full shrink-0 items-center justify-center transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        <img src={iconSrc} alt="MixSound" className="h-8 w-8 object-contain" />
      </Link>

      <nav className="flex min-h-0 flex-1 flex-col items-center justify-center gap-1 py-2">
        {NAV_ITEMS.map(({ id, label, icon: Icon, active }) => (
          <button
            key={id}
            type="button"
            aria-label={label}
            aria-current={active ? "page" : undefined}
            className={cn(NAV_ITEM_BASE, "h-12 w-12", active && "bg-primary/10")}
          >
            <Icon className="h-6 w-6" strokeWidth={2} />
          </button>
        ))}
        <button
          type="button"
          aria-label="Perfil"
          className={cn(NAV_ITEM_BASE, "h-12 w-12")}
        >
          <Avatar
            name={currentUser.name}
            src={currentUser.avatar}
            size={24}
          />
        </button>
      </nav>

      <div className="flex w-full shrink-0 flex-col items-center border-t border-border pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]">
        <button
          type="button"
          aria-label="Configurações"
          className={cn(NAV_ITEM_BASE, "h-12 w-12")}
        >
          <Settings className="h-6 w-6" strokeWidth={2} />
        </button>
      </div>
    </aside>
  );
}

function MobileNav() {
  return (
    <nav
      aria-label="Navegação principal"
      className="fixed inset-x-0 bottom-0 z-30 flex h-16 items-center justify-around border-t border-border bg-background px-2 pb-[env(safe-area-inset-bottom,0px)] md:hidden"
    >
      {NAV_ITEMS.map(({ id, label, icon: Icon, active }) => (
        <button
          key={id}
          type="button"
          aria-label={label}
          aria-current={active ? "page" : undefined}
          className={cn(NAV_ITEM_BASE, "h-11 w-11", active && "bg-primary/10")}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </button>
      ))}
      <button
        type="button"
        aria-label="Perfil"
        className={cn(NAV_ITEM_BASE, "h-11 w-11")}
      >
        <Avatar
          name={currentUser.name}
          src={currentUser.avatar}
          size={20}
        />
      </button>
      <button
        type="button"
        aria-label="Configurações"
        className={cn(NAV_ITEM_BASE, "h-11 w-11")}
      >
        <Settings className="h-5 w-5" strokeWidth={2} />
      </button>
    </nav>
  );
}
