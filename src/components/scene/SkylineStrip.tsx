import { Spruce, Windows, noise } from "@/components/scene/kit";

/*
 * A low strip of the same dusk Järfälla as the home hero, for the foot of a
 * dark band: blocks of flats with lit windows, spruces and one crane. The
 * windows come on as the band scrolls into view.
 *
 * User space 1600 × 150; the street is the bottom edge.
 */
const W = 1600;
const H = 150;

const blocks = (() => {
  const list: { x: number; w: number; h: number; seed: number }[] = [];
  let x = 10;
  for (let i = 0; x < W - 40; i++) {
    const w = 70 + noise(i * 4.3) * 110;
    const h = 46 + noise(i * 2.7) * 70;
    list.push({ x, w, h, seed: i * 19 + 3 });
    x += w + 26 + noise(i * 9.1) * 60;
  }
  return list;
})();

export default function SkylineStrip({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      className={`block h-24 w-full sm:h-32 lg:h-36 ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      {blocks.map((b, i) => (
        <g key={i}>
          <rect
            x={b.x}
            y={H - b.h}
            width={b.w}
            height={b.h}
            className="fill-night"
          />
          <Windows
            x={b.x + 10}
            y={H - b.h + 12}
            cols={Math.max(2, Math.floor((b.w - 14) / 22))}
            rows={Math.max(1, Math.floor((b.h - 18) / 22))}
            w={10}
            h={11}
            gx={12}
            gy={11}
            seed={b.seed}
            lit={0.45}
            start={0.3}
          />
          {i % 3 === 1 ? (
            <Spruce x={b.x + b.w + 14} base={H} h={44 + noise(i) * 26} />
          ) : null}
        </g>
      ))}
      {/* One crane, far right, still working. */}
      <g className="stroke-night" strokeWidth={2}>
        <line x1={1490} y1={H} x2={1490} y2={28} />
        <line x1={1498} y1={H} x2={1498} y2={28} />
        <line x1={1380} y1={30} x2={1560} y2={30} />
        <line x1={1380} y1={36} x2={1560} y2={36} />
      </g>
      <rect x={1540} y={36} width={20} height={12} className="fill-night" />
      <circle cx={1381} cy={33} r={2.6} className="fill-signal scene-blink" />
    </svg>
  );
}
