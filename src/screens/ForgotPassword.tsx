import { useState, type FormEvent } from "react";
import { AuthShell, Logo } from "@/components/AuthShell";
import { BackLink } from "@/components/BackLink";
import { AuthInput } from "@/components/AuthInput";
import { Button } from "@/components/ui/button";

export function ForgotPassword() {
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: call the password-reset request endpoint.
    console.log("Enviar link de redefinição para:", email);
  }

  return (
    <AuthShell gap={64} offsetY={71}>
      <div className="flex w-full flex-col items-center gap-10">
        <Logo />
        <header className="flex w-full flex-col items-center gap-4 text-center">
          <h1 className="text-[40px] font-bold leading-none text-foreground">
            Recupere sua senha
          </h1>
          <p className="text-base leading-none text-foreground">
            Enviaremos um link para redefinir sua senha.
          </p>
        </header>
      </div>

      <form
        className="flex w-[360px] max-w-full flex-col items-center gap-10"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full flex-col gap-[21px]">
          <AuthInput
            type="email"
            name="email"
            placeholder="E-mail"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <Button type="submit" size="xl" className="w-full">
            Enviar
          </Button>
        </div>

        <BackLink />
      </form>
    </AuthShell>
  );
}
