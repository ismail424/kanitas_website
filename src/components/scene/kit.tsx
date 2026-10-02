import type { CSSProperties } from "react";

/*
 * Building blocks for the dusk illustrations: Järfälla after work, dark
 * silhouettes against the sky with lit windows and lamps. Shared by the home
 * hero and the smaller scenes on the other pages so they read as one city.
 *
 * Everything is drawn in a top-left user space and coloured with theme
 * classes (fill-night, fill-lamp …). Motion hooks are plain classes animated
 * in globals.css, so reduced-motion users get the finished picture.
 */

/** Deterministic noise in [0, 1), so server and client draw the same city. */
export function noise(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/** Inline custom properties (--d delay, --t duration) for the motion hooks. */
export function timing(vars: Record<string, string>) {
  return vars as CSSProperties;
}

const seconds = (value: number) => `${value.toFixed(2)}s`;

/**
 * A facade's windows. Some are lit and switch on one by one after the
 * building has risen; a few go dark now and then, the way a block of flats
 * looks in the evening.
 */
export function Windows({
  x,
  y,
  cols,
  rows,
  w,
  h,
  gx,
  gy,
  seed,
  lit = 0.55,
  start = 1.1,
  flicker = 0.12,
}: {
  x: number;
  y: number;
  cols: number;
  rows: number;
  w: number;
  h: number;
  gx: number;
  gy: number;
  seed: number;
  lit?: number;
  start?: number;
  flicker?: number;
}) {
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const wx = x + c * (w + gx);
      const wy = y + r * (h + gy);
      const key = `${r}-${c}`;
      if (noise(seed + r * 31 + c * 17) >= lit) {
        cells.push(
          <rect
            key={key}
            x={wx}
            y={wy}
            width={w}
            height={h}
            className="fill-night-3"
          />,
        );
        continue;
      }
      const flickers = noise(seed * 3 + r * 7 + c * 13) < flicker;
      cells.push(
        <rect
          key={key}
          x={wx}
          y={wy}
          width={w}
          height={h}
          className={`fill-lamp scene-win${flickers ? " scene-flicker" : ""}`}
          style={timing({
            "--d": seconds(start + noise(seed + r * 5 + c * 11) * 1.8),
            "--t": seconds(9 + noise(seed + c * 3 + r) * 9),
          })}
        />,
      );
    }
  }
  return <g>{cells}</g>;
}

/** A spruce, the tree of every Stockholm suburb skyline. */
export function Spruce({
  x,
  base,
  h,
  className = "fill-night",
}: {
  x: number;
  base: number;
  h: number;
  className?: string;
}) {
  const w = h * 0.46;
  const tiers = 5;
  const points: string[] = [`${x},${base - h}`];
  // Right side down, in steps, then the left side back up.
  for (let i = 1; i <= tiers; i++) {
    const t = i / tiers;
    const y = base - h + t * h * 0.9;
    points.push(`${x + (w / 2) * t},${y}`, `${x + (w / 2) * t * 0.62},${y}`);
  }
  points.push(
    `${x + 2},${base - h * 0.1}`,
    `${x + 2},${base}`,
    `${x - 2},${base}`,
    `${x - 2},${base - h * 0.1}`,
  );
  for (let i = tiers; i >= 1; i--) {
    const t = i / tiers;
    const y = base - h + t * h * 0.9;
    points.push(`${x - (w / 2) * t * 0.62},${y}`, `${x - (w / 2) * t},${y}`);
  }
  return <polygon points={points.join(" ")} className={className} />;
}

/** A birch: pale trunk, loose crown. */
export function Birch({ x, base, h }: { x: number; base: number; h: number }) {
  return (
    <g>
      <ellipse
        cx={x}
        cy={base - h * 0.68}
        rx={h * 0.2}
        ry={h * 0.3}
        className="fill-night-2"
      />
      <ellipse
        cx={x - h * 0.1}
        cy={base - h * 0.52}
        rx={h * 0.15}
        ry={h * 0.2}
        className="fill-night-2"
      />
      <ellipse
        cx={x + h * 0.11}
        cy={base - h * 0.5}
        rx={h * 0.13}
        ry={h * 0.18}
        className="fill-night-2"
      />
      <rect
        x={x - 1.6}
        y={base - h * 0.8}
        width={3.2}
        height={h * 0.8}
        className="fill-night-3"
      />
    </g>
  );
}

/** A person standing, feet on `base`. A reflective band marks a worker. */
export function Person({
  x,
  base,
  vest = true,
}: {
  x: number;
  base: number;
  vest?: boolean;
}) {
  return (
    <g className="fill-night">
      <circle cx={x} cy={base - 16.5} r={2.8} />
      <rect x={x - 3} y={base - 13.5} width={6} height={8} rx={1.6} />
      <rect x={x - 2.7} y={base - 6} width={2.3} height={6} />
      <rect x={x + 0.4} y={base - 6} width={2.3} height={6} />
      {vest ? (
        <rect
          x={x - 3}
          y={base - 10.5}
          width={6}
          height={1.6}
          className="fill-lamp"
        />
      ) : null}
    </g>
  );
}

/** Gradients the kit's pieces refer to; render once inside each scene. */
export function KitDefs() {
  return (
    <defs>
      <radialGradient id="lamp-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="var(--color-lamp)" stopOpacity="0.38" />
        <stop offset="0.45" stopColor="var(--color-lamp)" stopOpacity="0.12" />
        <stop offset="1" stopColor="var(--color-lamp)" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

/** A street lamp; its glow comes up just after the windows. */
export function StreetLamp({
  x,
  base,
  h = 66,
  delay = 0.9,
}: {
  x: number;
  base: number;
  h?: number;
  delay?: number;
}) {
  const top = base - h;
  return (
    <g>
      <g className="scene-fade" style={timing({ "--d": seconds(delay) })}>
        <circle cx={x + 11} cy={top + 6} r={34} fill="url(#lamp-glow)" />
      </g>
      <rect x={x - 1.5} y={top} width={3} height={h} className="fill-night" />
      <rect x={x - 1} y={top} width={14} height={2.6} className="fill-night" />
      <rect
        x={x + 7}
        y={top + 2}
        width={8}
        height={3.4}
        rx={1.2}
        className="fill-lamp-soft"
      />
    </g>
  );
}
