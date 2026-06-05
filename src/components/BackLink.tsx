import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export function BackLink({ to = "/login" }: { to?: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
    >
      <ChevronLeft className="size-4" />
      Voltar para o Login
    </Link>
  );
}
