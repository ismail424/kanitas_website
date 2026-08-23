import Link from "next/link";
import {
  MARK_D,
  MARK_RULE_D,
  TAGLINE_D,
  VIEWBOX,
  WORD_D,
  WORD_RULE_D,
} from "@/components/logo-paths";

type Variant = keyof typeof VIEWBOX;
type Surface = "light" | "dark";

/**
 * The Kanitas lockup, traced from the master artwork: the building-block K,
 * the KANITAS wordmark, two copper rules and the tagline. Every variant draws
 * from one coordinate space, so a nav-sized mark and a footer-sized full
 * lockup are the same artwork cropped differently, never redrawn.
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
  const dark = on === "dark";
  const letters = dark ? "fill-white" : "fill-petrol";
  const rule = dark ? "fill-copper-soft" : "fill-copper";

  return (
    <svg
      viewBox={VIEWBOX[variant]}
      className={className}
      role="img"
      aria-label={label}
    >
      <path className={letters} fillRule="evenodd" d={MARK_D} />
      {variant !== "compact" ? (
        <path className={rule} d={MARK_RULE_D} />
      ) : null}
      {variant !== "mark" ? (
        <path className={letters} fillRule="evenodd" d={WORD_D} />
      ) : null}
      {variant === "lockup" ? (
        <>
          <path className={rule} d={WORD_RULE_D} />
          <path
            className={dark ? "fill-white/70" : "fill-muted"}
            fillRule="evenodd"
            d={TAGLINE_D}
          />
        </>
      ) : null}
    </svg>
  );
}

/** Mark plus wordmark, linked home. Used in the header. */
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
        className="h-7 w-auto sm:h-8"
        label="Kanitas"
      />
    </Link>
  );
}

/** The complete lockup including rules and tagline. Used in the footer. */
export function LogoLockup({
  on = "light",
  className = "h-14 w-auto",
}: {
  on?: Surface;
  className?: string;
}) {
  return (
    <Lockup
      variant="lockup"
      on={on}
      className={className}
      label="Kanitas: bygg, anläggning, helhetsansvar"
    />
  );
}

/**
 * Area hero lockup, e.g. KANITAS BYGG. The area name is live text rather than
 * traced outlines so a new area needs no new artwork.
 */
export function BrandLockup({
  suffix,
  className = "h-7 w-auto sm:h-9",
}: {
  suffix: string;
  className?: string;
}) {
  return (
    <span className="inline-flex items-center gap-3 sm:gap-4">
      <Lockup
        variant="compact"
        on="dark"
        className={className}
        label={`Kanitas ${suffix}`}
      />
      <span
        aria-hidden="true"
        className="h-6 w-px bg-white/25 sm:h-8"
      />
      <span className="font-display text-xl font-bold uppercase tracking-[0.14em] text-copper-soft sm:text-2xl">
        {suffix}
      </span>
    </span>
  );
}
