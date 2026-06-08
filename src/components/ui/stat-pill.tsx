type StatPillProps = { count: number; label: string };

export function StatPill({ count, label }: StatPillProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded border border-[#ababab] px-3 py-1 text-xs text-[#d8d8d8]">
      <strong className="font-bold">{count}</strong> {label}
    </span>
  );
}
