import { Input } from "@/components/ui/input";

type CommentInputProps = {
  placeholder?: string;
  className?: string;
};

export function CommentInput({
  placeholder = "Escreva algo...",
  className,
}: CommentInputProps) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      className={`h-10 rounded-lg border-border bg-background/60 text-sm placeholder:text-muted-foreground ${className ?? ""}`}
    />
  );
}
