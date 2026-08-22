import Link from "next/link";
import {
  ANITAS_D,
  ANITAS_TRANSFORM,
  BEAMS_D,
  COLUMN,
  LOCKUP_H,
  LOCKUP_W,
  SUFFIXES,
} from "@/components/logo-paths";

/**
 * Kanitas lockup: the structural K — a load-bearing column and two beams
 * with vertical end cuts — IS the letter K, followed by "ANITAS" in Archivo
 * Black outlines. Pine column on light surfaces, sand column on dark.
 */
function LockupSvg({
  fg,
  column,
  suffix,
  tone,
  className,
  label,
}: {
  fg: string;
  column: string;
  suffix?: string;
  tone?: string;
  className: string;
  label: string;
}) {
  const suffixEntry = suffix ? SUFFIXES[suffix] : undefined;
  const width = suffixEntry ? suffixEntry.totalW : LOCKUP_W;
  return (
    <svg
      viewBox={`0 0 ${width} ${LOCKUP_H}`}
      className={className}
      role="img"
      aria-label={label}
    >
      <rect
        x={COLUMN.x}
        y={COLUMN.y}
        width={COLUMN.width}
        height={COLUMN.height}
        className={column}
      />
      <path d={BEAMS_D} className={fg} />
      <path transform={ANITAS_TRANSFORM} d={ANITAS_D} className={fg} />
      {suffixEntry ? (
        <path
          transform={suffixEntry.transform}
          d={suffixEntry.d}
          fill={tone}
        />
      ) : null}
    </svg>
  );
}

/** Sub-brand lockup, e.g. KANITAS BYGG — used on area page heroes. */
export function BrandLockup({
  suffix,
  tone,
  className = "h-7 w-auto sm:h-9",
}: {
  suffix: string;
  tone: string;
  className?: string;
}) {
  const name = `Kanitas ${suffix.charAt(0).toUpperCase()}${suffix.slice(1)}`;
  return (
    <LockupSvg
      fg="fill-white"
      column="fill-sand"
      suffix={suffix}
      tone={tone}
      className={className}
      label={name}
    />
  );
}

export default function Logo({ on = "light" }: { on?: "light" | "dark" }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="Kanitas – till startsidan"
    >
      <LockupSvg
        fg={on === "dark" ? "fill-white" : "fill-ink"}
        column={on === "dark" ? "fill-sand" : "fill-copper"}
        className="h-5 w-auto sm:h-6"
        label="Kanitas"
      />
    </Link>
  );
}
