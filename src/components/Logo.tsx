import Link from "next/link";
import { TAGLINE_D, VIEWBOX, WORD_D } from "@/components/logo-paths";

type Variant = keyof typeof VIEWBOX;
type Surface = "light" | "dark";

/**
 * The Kanitas logo: the name, in one colour, and in the full lockup the
 * service line under it. Every variant draws from one coordinate space, so a
 * nav-sized logo and a full lockup are the same artwork, never redrawn.
 */
function Lockup({
  variant,
  on,
  className,
  label,
}: {
  variant: Variant;
  on: Surface;
  className: string;
  label: string;
}) {
  const ink = on === "dark" ? "fill-white" : "fill-petrol";

  return (
    <svg
      viewBox={VIEWBOX[variant]}
      className={className}
      role="img"
      aria-label={label}
    >
      <path className={ink} d={WORD_D} />
      {variant === "lockup" ? <path className={ink} d={TAGLINE_D} /> : null}
    </svg>
  );
}

/** The name, linked home. Used in the header and footer. */
export default function Logo({ on = "light" }: { on?: Surface }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="Kanitas, till startsidan"
    >
      <Lockup
        variant="compact"
        on={on}
        className="h-6 w-auto xl:h-7"
        label="Kanitas"
      />
    </Link>
  );
}

/** The complete lockup including the service line. */
export function LogoLockup({
  on = "light",
  className = "h-12 w-auto",
}: {
  on?: Surface;
  className?: string;
}) {
  return (
    <Lockup
      variant="lockup"
      on={on}
      className={className}
      label="Kanitas: bygg, bemanning, maskiner, lokaler"
    />
  );
}
