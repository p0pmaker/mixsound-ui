import { Link } from "react-router-dom";
import { AuthShell, Logo } from "@/components/AuthShell";

export function Login() {
  return (
    <AuthShell gap={40} offsetY={24}>
      <Logo />
      <h1 className="text-[40px] font-bold leading-none text-foreground">Login</h1>
      <p className="text-base leading-none text-foreground">Tela de login em breve.</p>
      <nav className="flex w-[360px] max-w-full flex-col items-center gap-4">
        <Link className="text-sm text-primary hover:text-primary/80" to="/recuperar-senha">
          Recuperar senha
        </Link>
        <Link className="text-sm text-primary hover:text-primary/80" to="/redefinir-senha">
          Redefinir senha
        </Link>
      </nav>
    </AuthShell>
  );
}
