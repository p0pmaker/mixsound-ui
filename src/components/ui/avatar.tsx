import * as React from "react";
import { cn } from "@/lib/utils";

type AvatarProps = React.ComponentProps<"div"> & {
  name: string;
  src?: string;
  size?: number;
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("");
}

function Avatar({
  name,
  src,
  size = 40,
  className,
  style,
  ...props
}: AvatarProps) {
  return (
    <div
      data-slot="avatar"
      role="img"
      aria-label={name}
      className={cn(
        "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-muted font-semibold text-foreground",
        className
      )}
      style={{
        width: size,
        height: size,
        fontSize: Math.max(10, Math.round(size * 0.36)),
        ...style,
      }}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover"
        />
      ) : (
        initials(name)
      )}
    </div>
  );
}

export { Avatar };
