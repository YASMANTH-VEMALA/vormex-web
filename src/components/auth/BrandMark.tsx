export function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="119 163 262 157" aria-hidden="true">
      {/* Crop only the transparent padding; preserve the official asset itself. */}
      <image href="/logo.png" width="500" height="500" />
    </svg>
  );
}
