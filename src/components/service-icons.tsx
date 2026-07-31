type IconProps = { className?: string };

const shared = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function TrustIdentityIcon({ className }: IconProps) {
  return (
    <svg {...shared} aria-hidden="true" className={className}>
      <path d="M24 4 8 10v12c0 11 7 18 16 22 9-4 16-11 16-22V10L24 4Z" />
      <path d="m17 24 5 5 9-10" />
    </svg>
  );
}

export function PersistentIdentifiersIcon({ className }: IconProps) {
  return (
    <svg {...shared} aria-hidden="true" className={className}>
      <path d="M27 6h9a6 6 0 0 1 6 6v9L21 42 6 27 27 6Z" />
      <circle cx="32" cy="16" r="3" />
    </svg>
  );
}

export function CloudHostingIcon({ className }: IconProps) {
  return (
    <svg {...shared} aria-hidden="true" className={className}>
      <path d="M14 34a9 9 0 0 1-1-17.9A11 11 0 0 1 34 13a8 8 0 0 1-1 21H14Z" />
      <path d="M18 40h4M26 40h4" />
    </svg>
  );
}

export function RepositoriesIcon({ className }: IconProps) {
  return (
    <svg {...shared} aria-hidden="true" className={className}>
      <ellipse cx="24" cy="10" rx="14" ry="5" />
      <path d="M10 10v10c0 2.8 6.3 5 14 5s14-2.2 14-5V10" />
      <path d="M10 20v10c0 2.8 6.3 5 14 5s14-2.2 14-5V20" />
      <path d="M10 30v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8" />
    </svg>
  );
}
