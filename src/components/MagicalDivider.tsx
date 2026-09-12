export function MagicalDivider() {
  return (
    <div className="flex items-center gap-4 py-8 mx-6">
      <div className="h-px flex-1 bg-primary-accent/40" />

      <span className="text-highlight text-xl">✦</span>
      <span className="text-flower text-2xl">✿</span>
      <span className="text-highlight text-xl">✦</span>

      <div className="h-px flex-1 bg-primary-accent/40" />
    </div>
  );
}
