import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/**
 * MixSound-styled text input: a tall control with the brand pink border, a
 * transparent fill, and white placeholder text (per the Figma design system).
 * Built on top of the shadcn `Input` primitive.
 */
export const AuthInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => (
  <Input
    ref={ref}
    className={cn(
      "h-16 rounded-lg border-2 border-primary bg-transparent px-6 text-base text-foreground",
      "placeholder:text-foreground/90 dark:bg-transparent",
      "focus-visible:border-primary focus-visible:ring-ring/40",
      className
    )}
    {...props}
  />
));
AuthInput.displayName = "AuthInput";
