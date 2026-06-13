import { cn } from "@/lib/utils";

export type TabItem = { id: string; label: string };

type TabStripProps = {
  tabs: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
};

export function TabStrip({ tabs, activeId, onChange }: TabStripProps) {
  return (
    <div className="flex gap-3">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={cn(
            "h-6 cursor-pointer rounded px-12 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
            activeId === id
              ? "bg-[#ababab] text-[#101012]"
              : "border border-[#ababab] text-[#d8d8d8] hover:border-primary hover:bg-primary hover:text-primary-foreground"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
