import { useState, type FormEvent } from "react";
import { AuthShell, Logo } from "@/components/AuthShell";
import { BackLink } from "@/components/BackLink";
import { PasswordField } from "@/components/PasswordField";
import { Button } from "@/components/ui/button";

const HINT = "A senha precisa conter no mínimo 8 caracteres.";

export function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: submit the new password to the reset endpoint.
    console.log("Redefinir senha:", { password, confirm });
  }

  return (
    <AuthShell gap={40} offsetY={24}>
      <Logo />
      <h1 className="text-[40px] font-bold leading-none text-foreground">
        Redefina sua senha
      </h1>

      <form
        className="flex w-[360px] max-w-full flex-col items-center gap-8"
        onSubmit={handleSubmit}
      >
        <PasswordField
          id="new-password"
          label="Nova senha"
          value={password}
          onChange={setPassword}
          hint={HINT}
        />
        <PasswordField
          id="confirm-password"
          label="Confirme sua senha"
          value={confirm}
          onChange={setConfirm}
          hint={HINT}
        />
        <Button type="submit" size="xl" className="w-full">
          Enviar
        </Button>

        <BackLink />
      </form>
    </AuthShell>
  );
}
