import { Settings } from "lucide-react";
import { useState, type ComponentType, type SVGProps } from "react";
import { Link, useLocation } from "react-router-dom";
import iconSrc from "../../assets/icon.png";
import { Avatar } from "@/components/ui/avatar";
import {
  AddIcon,
  HomeIcon,
  MessageIcon,
  NotificationIcon,
} from "@/components/icons/nav-icons";
import { NotificationsPanel } from "@/components/notifications/notifications-panel";
import { currentUser } from "@/lib/home-mocks";
import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  to?: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Início", icon: HomeIcon, to: "/home" },
  { id: "messages", label: "Mensagens", icon: MessageIcon, to: "/mensagens" },
  { id: "notifications", label: "Notificações", icon: NotificationIcon },
  { id: "create", label: "Adicionar conteúdo", icon: AddIcon },
];

const NAV_ITEM_BASE =
  "group relative inline-flex cursor-pointer items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

type NotificationsControl = {
  open: boolean;
  onToggle: () => void;
};

export function Sidebar() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notifications: NotificationsControl = {
    open: notificationsOpen,
    onToggle: () => setNotificationsOpen((open) => !open),
  };

  return (
    <>
      <DesktopSidebar notifications={notifications} />
      <MobileNav notifications={notifications} />
      <NotificationsPanel
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />
    </>
  );
}

function NavButton({
  item,
  className,
  onClick,
  forceActive,
}: {
  item: NavItem;
  className: string;
  onClick?: () => void;
  forceActive?: boolean;
}) {
  const { pathname } = useLocation();
  const { label, icon: Icon, to } = item;
  const active = forceActive ?? (to != null && pathname === to);
  const iconClass = className.includes("w-11") ? "h-5 w-5" : "h-6 w-6";

  if (to) {
    return (
      <Link
        to={to}
        aria-label={label}
        aria-current={active ? "page" : undefined}
        className={cn(NAV_ITEM_BASE, className, active && "text-[#FF9ED1]")}
      >
        <Icon className={iconClass} />
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(NAV_ITEM_BASE, className, active && "text-[#FF9ED1]")}
    >
      <Icon className={iconClass} />
    </button>
  );
}

function DesktopSidebar({
  notifications,
}: {
  notifications: NotificationsControl;
}) {
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
        {NAV_ITEMS.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            className="h-12 w-12"
            onClick={
              item.id === "notifications" ? notifications.onToggle : undefined
            }
            forceActive={
              item.id === "notifications"
                ? notifications.open
                : notifications.open
                  ? false
                  : undefined
            }
          />
        ))}
        <Link
          to="/perfil"
          aria-label="Perfil"
          className={cn(NAV_ITEM_BASE, "h-12 w-12")}
        >
          <Avatar
            name={currentUser.name}
            src={currentUser.avatar}
            size={24}
          />
        </Link>
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

function MobileNav({
  notifications,
}: {
  notifications: NotificationsControl;
}) {
  return (
    <nav
      aria-label="Navegação principal"
      className="fixed inset-x-0 bottom-0 z-30 flex h-16 items-center justify-around border-t border-border bg-background px-2 pb-[env(safe-area-inset-bottom,0px)] md:hidden"
    >
      {NAV_ITEMS.map((item) => (
        <NavButton
          key={item.id}
          item={item}
          className="h-11 w-11"
          onClick={
            item.id === "notifications" ? notifications.onToggle : undefined
          }
          forceActive={
            item.id === "notifications"
              ? notifications.open
              : notifications.open
                ? false
                : undefined
          }
        />
      ))}
      <Link
        to="/perfil"
        aria-label="Perfil"
        className={cn(NAV_ITEM_BASE, "h-11 w-11")}
      >
        <Avatar
          name={currentUser.name}
          src={currentUser.avatar}
          size={20}
        />
      </Link>
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
