import Link from "next/link";
import {
  LOCKUP_VIEWBOX,
  MARK_BEAMS_D,
  MARK_COLUMN,
  MARK_SCALE,
  MARK_VIEWBOX,
  WORDMARK_D,
  WORDMARK_TRANSFORM,
} from "@/components/logo-paths";

/**
 * Kanitas brand mark: an amber load-bearing column and two beams forming a K,
 * cut with the precision gap of prefab steel. Wordmark is Archivo Black
 * converted to outlines so the logo renders identically everywhere.
 */
export function LogoMark({
  className = "h-9 w-9",
  beams = "fill-ink",
}: {
  className?: string;
  beams?: string;
}) {
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x={MARK_COLUMN.x}
        y={MARK_COLUMN.y}
        width={MARK_COLUMN.width}
        height={MARK_COLUMN.height}
        className="fill-amber"
      />
      <path d={MARK_BEAMS_D} className={beams} />
    </svg>
  );
}

export default function Logo({ on = "light" }: { on?: "light" | "dark" }) {
  const fg = on === "dark" ? "fill-white" : "fill-ink";
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="Kanitas – till startsidan"
    >
      <svg
        viewBox={LOCKUP_VIEWBOX}
        className="h-6 w-auto sm:h-7"
        role="img"
        aria-label="Kanitas"
      >
        <g transform={`scale(${MARK_SCALE})`}>
          <rect
            x={MARK_COLUMN.x}
            y={MARK_COLUMN.y}
            width={MARK_COLUMN.width}
            height={MARK_COLUMN.height}
            className="fill-amber"
          />
          <path d={MARK_BEAMS_D} className={fg} />
        </g>
        <path transform={WORDMARK_TRANSFORM} d={WORDMARK_D} className={fg} />
      </svg>
    </Link>
  );
}
