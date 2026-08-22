import Link from "next/link";

/**
 * Kanitas brand mark: amber square with a cut "K", plus wordmark.
 * `on` switches wordmark color for light/dark surfaces.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="48" height="48" rx="10" className="fill-amber" />
      <path
        d="M14 11h6.6v10.1L30.2 11h8L26.6 23.7 38.6 37h-8.2l-9.8-11.2V37H14z"
        className="fill-dark-deep"
      />
    </svg>
  );
}

export default function Logo({
  on = "light",
  suffix,
}: {
  on?: "light" | "dark";
  suffix?: string;
}) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label="Kanitas – till startsidan"
    >
      <LogoMark />
      <span
        className={`font-display text-xl font-bold tracking-tight ${
          on === "dark" ? "text-white" : "text-ink"
        }`}
      >
        Kanitas
        {suffix ? <span className="font-medium text-amber"> {suffix}</span> : null}
      </span>
    </Link>
  );
}
