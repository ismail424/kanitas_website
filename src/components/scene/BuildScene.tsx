import { Person, Spruce, Windows, timing } from "@/components/scene/kit";

/*
 * The Bygg page's picture: a block of flats going up floor by floor under a
 * tower crane, in the same dusk Järfälla as the home hero. The floors stack
 * when the picture scrolls into view; then the crane keeps working.
 *
 * User space 480 × 400; the ground is at y = 352.
 */
const GROUND = 352;
const FLOOR = 42;
const LEFT = 92;
const WIDTH = 196;
const floors = 5;

export default function BuildScene({ className = "" }: { className?: string }) {
  const top = GROUND - floors * FLOOR;
  return (
    <svg
      viewBox="0 0 480 400"
      className={`block h-auto w-full ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="build-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-petrol-darker)" />
          <stop offset="1" stopColor="var(--color-dusk)" />
        </linearGradient>
        <linearGradient id="build-flood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-lamp)" stopOpacity="0.32" />
          <stop offset="1" stopColor="var(--color-lamp)" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <rect width="480" height="400" fill="url(#build-sky)" />

      {/* Distant blocks. */}
      <g className="fill-night-2">
        <rect x={0} y={292} width={56} height={60} />
        <rect x={52} y={270} width={34} height={82} />
        <rect x={300} y={300} width={60} height={52} />
        <rect x={420} y={262} width={60} height={90} />
      </g>
      <Spruce x={30} base={GROUND} h={66} />
      <Spruce x={440} base={GROUND} h={58} />

      {/* Floors stack one at a time, each lighting up once it is in place. */}
      {Array.from({ length: floors }, (_, i) => {
        const y = GROUND - (i + 1) * FLOOR;
        const open = i === floors - 1;
        return (
          <g
            key={i}
            className="scene-rise"
            style={timing({ "--d": `${(0.3 + i * 0.45).toFixed(2)}s` })}
          >
            <rect
              x={LEFT - 4}
              y={y}
              width={WIDTH + 8}
              height={5}
              className="fill-night"
            />
            {open ? (
              [0, 1, 2, 3, 4].map((c) => (
                <rect
                  key={c}
                  x={LEFT + c * 47}
                  y={y + 5}
                  width={6}
                  height={FLOOR - 5}
                  className="fill-night"
                />
              ))
            ) : (
              <>
                <rect
                  x={LEFT}
                  y={y + 5}
                  width={WIDTH}
                  height={FLOOR - 5}
                  className="fill-night"
                />
                <Windows
                  x={LEFT + 12}
                  y={y + 13}
                  cols={6}
                  rows={1}
                  w={16}
                  h={18}
                  gx={14}
                  gy={0}
                  seed={i * 23 + 5}
                  lit={0.55}
                  start={0.7 + i * 0.45}
                  flicker={0.15}
                />
              </>
            )}
          </g>
        );
      })}

      {/* Work on the open top floor. */}
      <g className="scene-fade" style={timing({ "--d": "2.6s" })}>
        <ellipse
          cx={LEFT + 98}
          cy={top + 30}
          rx={70}
          ry={12}
          className="fill-lamp"
          opacity={0.25}
        />
        <g className="scene-walk">
          <Person x={LEFT + 40} base={GROUND - (floors - 1) * FLOOR} />
        </g>
        <Person x={LEFT + 150} base={GROUND - (floors - 1) * FLOOR} />
      </g>
      <line
        x1={LEFT - 4}
        y1={top - 12}
        x2={LEFT + WIDTH + 4}
        y2={top - 12}
        strokeWidth={1.4}
        className="stroke-night"
      />

      {/* Tower crane. */}
      <g className="stroke-night" strokeWidth={2.4}>
        <line x1={364} y1={56} x2={364} y2={GROUND} />
        <line x1={376} y1={56} x2={376} y2={GROUND} />
        <line x1={80} y1={40} x2={364} y2={40} />
        <line x1={80} y1={49} x2={364} y2={49} />
        <line x1={376} y1={42} x2={462} y2={42} />
        <line x1={376} y1={49} x2={462} y2={49} />
      </g>
      <polyline
        points={Array.from(
          { length: 27 },
          (_, i) => `${364 + (i % 2) * 12},${GROUND - i * 11}`,
        ).join(" ")}
        fill="none"
        strokeWidth={1.2}
        className="stroke-night"
      />
      <polyline
        points={Array.from(
          { length: 29 },
          (_, i) => `${82 + i * 10},${i % 2 ? 49 : 40}`,
        ).join(" ")}
        fill="none"
        strokeWidth={1.1}
        className="stroke-night"
      />
      <polygon
        points="364,40 370,8 376,40"
        fill="none"
        strokeWidth={2.2}
        className="stroke-night"
      />
      <g className="stroke-night" strokeWidth={1}>
        <line x1={370} y1={8} x2={150} y2={40} />
        <line x1={370} y1={8} x2={460} y2={42} />
      </g>
      <rect x={358} y={46} width={24} height={13} className="fill-night" />
      <rect x={430} y={49} width={30} height={22} className="fill-night" />
      <rect x={430} y={57} width={30} height={3} className="fill-copper" />
      <circle cx={370} cy={6} r={3} className="fill-signal scene-blink" />

      <g className="scene-trolley" style={timing({ "--travel": "-70px" })}>
        <rect x={228} y={49} width={14} height={5} className="fill-night" />
        <line
          x1={235}
          y1={54}
          x2={235}
          y2={64}
          strokeWidth={1.1}
          className="stroke-night scene-cable"
          style={timing({ "--stretch": "4.6" })}
        />
        <g className="scene-hoist" style={timing({ "--drop": "36px" })}>
          <rect x={232} y={64} width={6} height={5} className="fill-night" />
          <line
            x1={235}
            y1={69}
            x2={214}
            y2={77}
            strokeWidth={1}
            className="stroke-night"
          />
          <line
            x1={235}
            y1={69}
            x2={256}
            y2={77}
            strokeWidth={1}
            className="stroke-night"
          />
          <rect x={210} y={77} width={50} height={13} className="fill-night" />
          <rect
            x={210}
            y={77}
            width={50}
            height={1.5}
            className="fill-copper-soft"
          />
        </g>
      </g>

      {/* Floodlight and fence at the site. */}
      <g className="scene-fade" style={timing({ "--d": "1.2s" })}>
        <polygon points="330,300 262,352 332,352" fill="url(#build-flood)" />
      </g>
      <rect x={330} y={298} width={3} height={54} className="fill-night" />
      <rect
        x={324}
        y={292}
        width={14}
        height={7}
        rx={1.5}
        className="fill-lamp-soft"
      />
      <g className="stroke-night-3" strokeWidth={1}>
        <line x1={60} y1={336} x2={330} y2={336} />
        <line x1={60} y1={350} x2={330} y2={350} />
        {Array.from({ length: 8 }, (_, i) => (
          <line key={i} x1={60 + i * 38} y1={334} x2={60 + i * 38} y2={352} />
        ))}
      </g>

      <rect x={0} y={GROUND} width={480} height={48} className="fill-night" />
      <rect
        x={0}
        y={GROUND}
        width={480}
        height={2.5}
        className="fill-night-3"
      />
    </svg>
  );
}
