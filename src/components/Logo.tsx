import Link from "next/link";
import {
  MARK_CORE_D,
  MARK_WINGS_D,
  NAME_CENTRE_DY,
  TAGLINE_D,
  VIEWBOX,
  WORD_D,
} from "@/components/logo-paths";

type Variant = keyof typeof VIEWBOX;
type Surface = "light" | "dark";

/**
 * The Kanitas lockup: the Kvarteret mark, the name and, in the full lockup,
 * the service line. Every variant draws from one coordinate space, so a
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
  const dark = on === "dark";
  const ink = dark ? "fill-white" : "fill-petrol";

  return (
    <svg
      viewBox={VIEWBOX[variant]}
      className={className}
      role="img"
      aria-label={label}
    >
      <path className={ink} d={MARK_WINGS_D} />
      <path
        className={dark ? "fill-copper-soft" : "fill-copper"}
        d={MARK_CORE_D}
      />
      {variant === "compact" ? (
        <path
          className={ink}
          d={WORD_D}
          transform={`translate(0 ${NAME_CENTRE_DY})`}
        />
      ) : null}
      {variant === "lockup" ? (
        <>
          <path className={ink} d={WORD_D} />
          <path
            className={dark ? "fill-white/75" : "fill-petrol"}
            d={TAGLINE_D}
          />
        </>
      ) : null}
    </svg>
  );
}

/** Mark plus name, linked home. Used in the header and footer. */
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
        className="h-8 w-auto xl:h-9"
        label="Kanitas"
      />
    </Link>
  );
}

/** The complete lockup including the service line. */
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
      label="Kanitas: bygg, bemanning, maskiner, lokaler"
    />
  );
}
