import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "@/components/ui/label";
import { AuthInput } from "@/components/AuthInput";

type PasswordFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  hint?: string;
  placeholder?: string;
  autoComplete?: string;
};

/** Labelled password input with a show/hide toggle and an optional hint. */
export function PasswordField({
  id,
  label,
  value,
  onChange,
  hint,
  placeholder = "•••••••••",
  autoComplete = "new-password",
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex w-full flex-col gap-3">
      <Label htmlFor={id} className="text-base font-bold text-foreground">
        {label}
      </Label>
      <div className="relative">
        <AuthInput
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(event) => onChange(event.target.value)}
          className="h-14 pr-14"
          required
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
          aria-pressed={visible}
          className="absolute top-1/2 right-5 -translate-y-1/2 text-foreground/90 transition-opacity hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
        >
          {visible ? <Eye className="size-5" /> : <EyeOff className="size-5" />}
        </button>
      </div>
      {hint && <p className="text-xs text-foreground/90">{hint}</p>}
    </div>
  );
}
