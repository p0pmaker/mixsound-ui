import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { AuthSplitLayout } from "@/components/AuthSplitLayout";
import { Field } from "@/components/Field";
import { AuthInput } from "@/components/AuthInput";
import { PasswordField } from "@/components/PasswordField";
import { OrDivider, GoogleButton } from "@/components/SocialAuth";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const HINT = "A senha precisa conter no mínimo 8 caracteres.";

export function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [remember, setRemember] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: create the account via the sign-up endpoint.
    console.log("Cadastro:", { name, email, password, confirm, remember });
  }

  return (
    <AuthSplitLayout>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <h1 className="text-[40px] font-bold leading-none text-foreground">Cadastre-se</h1>

        <Field id="name" label="Nome completo">
          <AuthInput
            id="name"
            placeholder="Your Name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12"
            required
          />
        </Field>

        <Field id="email" label="E-mail">
          <AuthInput
            id="email"
            type="email"
            placeholder="example@email.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12"
            required
          />
        </Field>

        <PasswordField
          id="password"
          label="Senha"
          value={password}
          onChange={setPassword}
          hint={HINT}
          labelClassName="text-sm"
          inputClassName="h-12"
        />

        <PasswordField
          id="confirm"
          label="Confirme sua senha"
          value={confirm}
          onChange={setConfirm}
          hint={HINT}
          labelClassName="text-sm"
          inputClassName="h-12"
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-foreground">
            <Checkbox
              checked={remember}
              onCheckedChange={(v) => setRemember(v === true)}
            />
            Lembre-se de mim
          </label>
          <Link to="/recuperar-senha" className="text-sm text-primary hover:text-primary/80">
            Esqueceu a senha?
          </Link>
        </div>

        <Button type="submit" size="xl" className="w-full">
          Cadastrar
        </Button>

        <OrDivider />

        <GoogleButton>Cadastre-se com Google</GoogleButton>

        <p className="text-center text-sm text-foreground">
          Já possuo uma conta?{" "}
          <Link to="/login" className="text-primary hover:text-primary/80">
            Entrar
          </Link>
        </p>
      </form>
    </AuthSplitLayout>
  );
}
