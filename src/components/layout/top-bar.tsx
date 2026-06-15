import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePublish } from "@/components/publish/publish-context";
import logoSrc from "../../assets/logo.svg";

export function TopBar() {
  const publish = usePublish();
  return (
    <header className="fixed inset-x-0 top-0 z-20 h-16 border-b border-border bg-background md:left-20 md:h-20">
      <div className="grid h-full grid-cols-1 items-center gap-4 px-3 sm:px-4 md:gap-6 md:px-6 xl:grid-cols-[minmax(0,640px)_300px] xl:justify-center xl:gap-10 xl:px-10 2xl:gap-14 2xl:px-12">
        <div className="mx-auto flex w-full min-w-0 max-w-2xl items-center gap-2 md:gap-3">
          <div className="relative w-full max-w-sm flex-1 md:flex-none">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Pesquisar"
              className="h-10 rounded-lg border-border bg-transparent pl-9 text-sm placeholder:text-muted-foreground"
            />
          </div>
          <Button
            className="hidden h-10 shrink-0 rounded-lg px-6 font-bold sm:inline-flex"
            onClick={publish.openModal}
          >
            Publicar
          </Button>
          <Link
            to="/home"
            aria-label="MixSound"
            className="ml-auto hidden shrink-0 cursor-pointer transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:block xl:hidden"
          >
            <img src={logoSrc} alt="MixSound" className="h-6 w-auto md:h-7" />
          </Link>
        </div>

        <Link
          to="/home"
          aria-label="MixSound"
          className="hidden shrink-0 cursor-pointer items-center justify-end transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 xl:flex"
        >
          <img src={logoSrc} alt="MixSound" className="h-7 w-auto" />
        </Link>
      </div>
    </header>
  );
}
