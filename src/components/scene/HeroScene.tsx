import {
  Birch,
  KitDefs,
  Person,
  Spruce,
  StreetLamp,
  Windows,
  noise,
  timing,
} from "@/components/scene/kit";

/*
 * The home hero: a Järfälla street at dusk with all four verksamheter on it,
 * left to right. Lokaler to let, the machinery yard, a block of flats with the
 * crew's van pulling up, and a building going up under a tower crane. The
 * left of the picture stays low so the headline has open sky above it.
 *
 * User space 1600 × 560; the street's kerb is at y = 500.
 */

const W = 1600;
const H = 560;
const KERB = 500;

/** Distant blocks along the horizon. */
const skyline = (() => {
  const blocks: { x: number; w: number; h: number; tall: boolean }[] = [];
  let x = -12;
  for (let i = 0; x < W + 12; i++) {
    const w = 34 + noise(i * 3.1) * 58;
    const tall = noise(i * 7.7) > 0.84;
    const h = tall ? 116 + noise(i * 1.3) * 64 : 34 + noise(i * 2.3) * 60;
    blocks.push({ x, w, h, tall });
    x += w + (noise(i * 5.5) > 0.72 ? 7 : 0);
  }
  return blocks;
})();

const stars = Array.from({ length: 22 }, (_, i) => ({
  x: 40 + noise(i * 9.1) * (W - 80),
  y: 14 + noise(i * 4.7) * 190,
  r: 0.8 + noise(i * 2.9) * 1.1,
  d: noise(i * 6.3) * 4,
  t: 3 + noise(i * 8.1) * 4,
}));

/** Lattice between two chords, drawn as one zigzag. */
function lattice(
  x1: number,
  x2: number,
  top: number,
  bottom: number,
  step: number,
) {
  const points: string[] = [];
  for (let x = x1, up = true; x <= x2; x += step, up = !up) {
    points.push(`${x},${up ? top : bottom}`);
  }
  return points.join(" ");
}

function mastLattice(
  left: number,
  right: number,
  top: number,
  bottom: number,
  step: number,
) {
  const points: string[] = [];
  for (let y = bottom, l = true; y >= top; y -= step, l = !l) {
    points.push(`${l ? left : right},${y}`);
  }
  return points.join(" ");
}

export default function HeroScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax meet"
      className={`scene block ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <KitDefs />
      <defs>
        <radialGradient id="hero-afterglow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="var(--color-copper)" stopOpacity="0.55" />
          <stop offset="1" stopColor="var(--color-copper)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--color-lamp)" stopOpacity="0.32" />
          <stop offset="1" stopColor="var(--color-lamp)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-flood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-lamp)" stopOpacity="0.34" />
          <stop offset="1" stopColor="var(--color-lamp)" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="hero-door" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-lamp-soft)" />
          <stop offset="1" stopColor="var(--color-lamp)" />
        </linearGradient>
      </defs>

      {/* Afterglow low in the west, behind the lokaler. */}
      <ellipse
        cx={360}
        cy={KERB + 10}
        rx={820}
        ry={230}
        fill="url(#hero-afterglow)"
      />

      <g>
        {stars.map((star, i) => (
          <circle
            key={i}
            cx={star.x}
            cy={star.y}
            r={star.r}
            className="fill-lamp-soft scene-twinkle"
            style={timing({
              "--d": `${star.d.toFixed(2)}s`,
              "--t": `${star.t.toFixed(2)}s`,
            })}
          />
        ))}
      </g>

      {/* The rest of Järfälla, far off. */}
      <g className="scene-fade" style={timing({ "--d": "0s" })}>
        {skyline.map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={KERB - b.h}
              width={b.w}
              height={b.h}
              className="fill-night-2"
            />
            {b.tall
              ? Array.from({ length: 6 }, (_, r) =>
                  Array.from({ length: 3 }, (_, c) =>
                    noise(i * 13 + r * 3 + c) > 0.55 ? (
                      <rect
                        key={`${r}-${c}`}
                        x={b.x + 8 + c * ((b.w - 20) / 2)}
                        y={KERB - b.h + 12 + r * 16}
                        width={3}
                        height={4}
                        className="fill-lamp"
                        opacity={0.45}
                      />
                    ) : null,
                  ),
                )
              : null}
          </g>
        ))}
      </g>

      {/* Trees behind the street. */}
      <Spruce x={24} base={KERB} h={96} />
      <Spruce x={52} base={KERB} h={70} />
      <Spruce x={430} base={KERB} h={78} />
      <Spruce x={1590} base={KERB} h={104} />

      {/* Lokaler: a light-industrial building with roller doors. */}
      <g className="scene-rise" style={timing({ "--d": "0.15s" })}>
        <rect x={70} y={372} width={330} height={128} className="fill-night" />
        <rect x={66} y={366} width={338} height={8} className="fill-night" />
        <rect x={118} y={356} width={22} height={10} className="fill-night" />
        <rect x={300} y={352} width={34} height={14} className="fill-night" />
        <Windows
          x={86}
          y={386}
          cols={3}
          rows={2}
          w={22}
          h={15}
          gx={11}
          gy={14}
          seed={11}
          lit={0.8}
          start={1.2}
        />
        {[200, 268, 336].map((dx, i) => (
          <g key={dx}>
            <rect
              x={dx}
              y={428}
              width={50}
              height={72}
              className="fill-night-2"
            />
            {i === 1 ? (
              <rect
                x={dx + 3}
                y={452}
                width={44}
                height={48}
                fill="url(#hero-door)"
                className="scene-win"
                style={timing({ "--d": "1.6s" })}
              />
            ) : (
              Array.from({ length: 6 }, (_, s) => (
                <rect
                  key={s}
                  x={dx + 3}
                  y={434 + s * 11}
                  width={44}
                  height={1.4}
                  className="fill-night"
                />
              ))
            )}
            <rect
              x={dx - 3}
              y={424}
              width={56}
              height={4}
              className="fill-night-3"
            />
          </g>
        ))}
      </g>

      <StreetLamp x={446} base={KERB} delay={1.4} />

      {/* The machinery yard: workshop and an excavator at a gravel heap. */}
      <g className="scene-rise" style={timing({ "--d": "0.3s" })}>
        <polygon points="466,404 555,384 644,404" className="fill-night" />
        <rect x={470} y={404} width={170} height={96} className="fill-night" />
        <rect
          x={524}
          y={440}
          width={66}
          height={60}
          fill="url(#hero-door)"
          className="scene-win"
          style={timing({ "--d": "1.8s" })}
        />
        <rect x={520} y={434} width={74} height={6} className="fill-night-3" />
        <rect
          x={486}
          y={420}
          width={26}
          height={10}
          className="fill-lamp scene-win"
          style={timing({ "--d": "2s" })}
        />
        <rect x={604} y={420} width={26} height={10} className="fill-night-3" />
      </g>
      <polygon
        points="812,500 856,468 884,474 912,500"
        className="fill-night-2"
      />
      <g className="scene-rise" style={timing({ "--d": "0.45s" })}>
        <rect
          x={652}
          y={480}
          width={118}
          height={20}
          rx={10}
          className="fill-night"
        />
        <rect x={662} y={486} width={98} height={2} className="fill-night-3" />
        <rect
          x={652}
          y={452}
          width={18}
          height={26}
          rx={4}
          className="fill-night"
        />
        <rect
          x={664}
          y={450}
          width={86}
          height={30}
          rx={3}
          className="fill-night"
        />
        <polygon
          points="712,450 712,422 738,420 750,450"
          className="fill-night"
        />
        <polygon
          points="717,446 717,426 735,425 744,446"
          className="fill-lamp scene-win"
          opacity={0.8}
          style={timing({ "--d": "2.2s" })}
        />
        {/* Boom and stick dig in turn. */}
        <g className="scene-boom">
          <line
            x1={744}
            y1={454}
            x2={808}
            y2={404}
            strokeWidth={11}
            strokeLinecap="round"
            className="stroke-night"
          />
          <line
            x1={736}
            y1={444}
            x2={786}
            y2={418}
            strokeWidth={2.5}
            className="stroke-night-3"
          />
          <g className="scene-stick">
            <line
              x1={808}
              y1={404}
              x2={834}
              y2={464}
              strokeWidth={8}
              strokeLinecap="round"
              className="stroke-night"
            />
            <polygon
              points="824,458 846,454 852,474 832,480"
              className="fill-night"
            />
          </g>
        </g>
      </g>

      <Birch x={906} base={KERB} h={92} />

      {/* Flats: the crew's van pulls up, a cleaner at the door. */}
      <g className="scene-rise" style={timing({ "--d": "0.55s" })}>
        <rect x={920} y={272} width={220} height={228} className="fill-night" />
        <rect x={916} y={266} width={228} height={8} className="fill-night" />
        <Windows
          x={935}
          y={284}
          cols={6}
          rows={5}
          w={16}
          h={17}
          gx={18}
          gy={21}
          seed={41}
          lit={0.6}
          start={1.3}
        />
        {[0, 1, 2, 3, 4].map((r) =>
          [1, 4].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={935 + c * 34 - 5}
              y={284 + r * 38 + 18}
              width={26}
              height={4}
              className="fill-night-3"
            />
          )),
        )}
        <rect x={1016} y={466} width={28} height={4} className="fill-night-3" />
        <rect
          x={1020}
          y={470}
          width={20}
          height={30}
          fill="url(#hero-door)"
          className="scene-win"
          style={timing({ "--d": "1.5s" })}
        />
        <rect x={950} y={474} width={22} height={12} className="fill-night-3" />
        <rect
          x={1112}
          y={474}
          width={20}
          height={12}
          className="fill-lamp scene-win"
          style={timing({ "--d": "2.4s" })}
        />
      </g>
      <g className="scene-fade" style={timing({ "--d": "1.8s" })}>
        <Person x={1086} base={KERB} vest={false} />
        <rect
          x={1092}
          y={486}
          width={15}
          height={10}
          rx={1.5}
          className="fill-night"
        />
        <line
          x1={1091}
          y1={486}
          x2={1089}
          y2={478}
          strokeWidth={1.6}
          className="stroke-night"
        />
        <circle cx={1095} cy={498} r={2.2} className="fill-night" />
        <circle cx={1104} cy={498} r={2.2} className="fill-night" />
      </g>

      <StreetLamp x={1150} base={KERB} delay={1.6} />

      {/* The building going up: four closed floors, three open ones. */}
      <g className="scene-rise" style={timing({ "--d": "0.7s" })}>
        <rect
          x={1190}
          y={356}
          width={210}
          height={144}
          className="fill-night"
        />
        <Windows
          x={1206}
          y={366}
          cols={6}
          rows={4}
          w={15}
          h={16}
          gx={17}
          gy={20}
          seed={77}
          lit={0.34}
          start={1.6}
          flicker={0}
        />
        {[356, 320, 284, 248].map((y) => (
          <rect
            key={y}
            x={1186}
            y={y}
            width={218}
            height={6}
            className="fill-night"
          />
        ))}
        {[248, 284, 320].map((y) =>
          [1192, 1246, 1300, 1354, 1396].map((x) => (
            <rect
              key={`${y}-${x}`}
              x={x}
              y={y + 6}
              width={6}
              height={30}
              className="fill-night"
            />
          )),
        )}
        <g className="scene-fade" style={timing({ "--d": "2.2s" })}>
          <ellipse
            cx={1290}
            cy={342}
            rx={64}
            ry={14}
            className="fill-lamp"
            opacity={0.3}
          />
          <rect
            x={1284}
            y={344}
            width={12}
            height={6}
            rx={1.5}
            className="fill-lamp-soft"
          />
        </g>
        {Array.from({ length: 16 }, (_, i) => (
          <line
            key={i}
            x1={1196 + i * 13}
            y1={248}
            x2={1196 + i * 13}
            y2={238}
            strokeWidth={1.4}
            className="stroke-night"
          />
        ))}
        <line
          x1={1186}
          y1={232}
          x2={1404}
          y2={232}
          strokeWidth={1.5}
          className="stroke-night"
        />
        {[1186, 1240, 1295, 1350, 1404].map((x) => (
          <line
            key={x}
            x1={x}
            y1={232}
            x2={x}
            y2={248}
            strokeWidth={1.5}
            className="stroke-night"
          />
        ))}
        <g className="scene-walk">
          <Person x={1236} base={248} />
        </g>
        <Person x={1334} base={248} />
        {/* Scaffolding on the gable. */}
        <g className="stroke-night-3" strokeWidth={1.5}>
          <line x1={1170} y1={262} x2={1170} y2={500} />
          <line x1={1184} y1={262} x2={1184} y2={500} />
          {Array.from({ length: 10 }, (_, i) => (
            <line
              key={i}
              x1={1168}
              y1={500 - i * 24}
              x2={1186}
              y2={500 - i * 24}
            />
          ))}
          {Array.from({ length: 5 }, (_, i) => (
            <line
              key={i}
              x1={1170}
              y1={500 - i * 48}
              x2={1184}
              y2={476 - i * 48}
            />
          ))}
        </g>
      </g>

      {/* Tower crane, slewing its load over the building. */}
      <g className="scene-rise" style={timing({ "--d": "0.9s" })}>
        <rect x={1438} y={492} width={30} height={8} className="fill-night" />
        <g className="stroke-night" strokeWidth={2.6}>
          <line x1={1446} y1={96} x2={1446} y2={500} />
          <line x1={1460} y1={96} x2={1460} y2={500} />
        </g>
        <polyline
          points={mastLattice(1446, 1460, 98, 498, 12)}
          fill="none"
          strokeWidth={1.3}
          className="stroke-night"
        />
        <polygon
          points="1446,80 1453,34 1460,80"
          fill="none"
          strokeWidth={2.4}
          className="stroke-night"
        />
        <g className="stroke-night" strokeWidth={1.2}>
          <line x1={1453} y1={34} x2={1150} y2={80} />
          <line x1={1453} y1={34} x2={1578} y2={82} />
        </g>
        <g className="stroke-night" strokeWidth={2.4}>
          <line x1={1060} y1={80} x2={1446} y2={80} />
          <line x1={1060} y1={90} x2={1446} y2={90} />
          <line x1={1460} y1={82} x2={1580} y2={82} />
          <line x1={1460} y1={90} x2={1580} y2={90} />
        </g>
        <polyline
          points={lattice(1062, 1444, 80, 90, 10)}
          fill="none"
          strokeWidth={1.2}
          className="stroke-night"
        />
        <polyline
          points={lattice(1462, 1578, 82, 90, 10)}
          fill="none"
          strokeWidth={1.2}
          className="stroke-night"
        />
        <rect x={1440} y={86} width={26} height={14} className="fill-night" />
        <rect
          x={1424}
          y={92}
          width={20}
          height={18}
          rx={2}
          className="fill-night"
        />
        <rect
          x={1427}
          y={95}
          width={11}
          height={8}
          className="fill-lamp scene-win"
          style={timing({ "--d": "2.6s" })}
        />
        <rect x={1544} y={90} width={34} height={24} className="fill-night" />
        <rect x={1544} y={99} width={34} height={3} className="fill-copper" />

        <g className="scene-trolley">
          <rect x={1306} y={90} width={16} height={6} className="fill-night" />
          <line
            x1={1314}
            y1={96}
            x2={1314}
            y2={150}
            strokeWidth={1.2}
            className="stroke-night scene-cable"
          />
          <g className="scene-hoist">
            <rect
              x={1311}
              y={150}
              width={6}
              height={6}
              className="fill-night"
            />
            <g className="stroke-night" strokeWidth={1}>
              <line x1={1314} y1={156} x2={1290} y2={166} />
              <line x1={1314} y1={156} x2={1338} y2={166} />
            </g>
            <rect
              x={1286}
              y={166}
              width={56}
              height={16}
              className="fill-night"
            />
            <rect
              x={1286}
              y={166}
              width={56}
              height={1.6}
              className="fill-copper-soft"
            />
          </g>
        </g>

        <circle cx={1453} cy={31} r={3.6} className="fill-signal scene-blink" />
        <circle
          cx={1063}
          cy={84}
          r={3}
          className="fill-signal scene-blink"
          style={timing({ "--d": "0.9s" })}
        />
      </g>

      {/* Site floodlight and fence. */}
      <g className="scene-fade" style={timing({ "--d": "2.4s" })}>
        <polygon points="1424,440 1318,500 1420,500" fill="url(#hero-flood)" />
      </g>
      <rect x={1423} y={438} width={3} height={62} className="fill-night" />
      <rect
        x={1416}
        y={432}
        width={16}
        height={8}
        rx={1.5}
        className="fill-lamp-soft"
      />
      <g className="stroke-night-3" strokeWidth={1.2}>
        <line x1={1150} y1={480} x2={1436} y2={480} />
        <line x1={1150} y1={498} x2={1436} y2={498} />
        {Array.from({ length: 8 }, (_, i) => (
          <line
            key={i}
            x1={1150 + i * 40}
            y1={478}
            x2={1150 + i * 40}
            y2={500}
          />
        ))}
      </g>
      <Spruce x={1488} base={KERB} h={62} />

      {/* The street. */}
      <rect x={0} y={KERB} width={W} height={H - KERB} className="fill-night" />
      <rect x={0} y={KERB} width={W} height={3} className="fill-night-3" />
      {Array.from({ length: 20 }, (_, i) => (
        <rect
          key={i}
          x={20 + i * 84}
          y={533}
          width={34}
          height={3}
          className="fill-lamp"
          opacity={0.14}
        />
      ))}

      {/* The crew's van drives in and stops at the flats. */}
      <g className="scene-drive">
        <g className="scene-fade" style={timing({ "--d": "0.6s" })}>
          <polygon
            points="1062,514 1262,522 1262,552 1062,526"
            fill="url(#hero-beam)"
          />
        </g>
        <path
          d="M950 538 L950 498 Q950 494 954 494 L1030 494 L1052 512 L1062 516 L1062 538 Z"
          className="fill-petrol-pale"
        />
        <polygon points="1034,498 1050,512 1034,512" className="fill-night-3" />
        <rect
          x={1006}
          y={498}
          width={22}
          height={13}
          className="fill-night-3"
        />
        <line
          x1={1000}
          y1={496}
          x2={1000}
          y2={536}
          strokeWidth={1}
          className="stroke-night-3"
        />
        <rect x={950} y={520} width={112} height={4} className="fill-copper" />
        <rect
          x={1057}
          y={516}
          width={5}
          height={5}
          className="fill-lamp-soft"
        />
        <rect x={950} y={510} width={3} height={7} className="fill-signal" />
        <circle cx={976} cy={538} r={9} className="fill-night" />
        <circle cx={1040} cy={538} r={9} className="fill-night" />
        <circle cx={976} cy={538} r={3} className="fill-night-3" />
        <circle cx={1040} cy={538} r={3} className="fill-night-3" />
      </g>

      <StreetLamp x={868} base={KERB} delay={1.2} />
    </svg>
  );
}
