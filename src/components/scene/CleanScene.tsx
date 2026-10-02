import { timing } from "@/components/scene/kit";

/*
 * The Städ page's picture: the plan of a newly built two-room flat, cleaned
 * room by room. Each room lights up and gets its tick as someone moves
 * through it, and the flat ends "Klar för besiktning". Then it starts over.
 *
 * User space 480 × 400. Reduced motion shows the finished, ticked plan.
 */

const rooms = [
  { name: "Kök", x: 40, y: 34, w: 210, h: 150, tick: [196, 150] },
  { name: "Sovrum", x: 250, y: 34, w: 190, h: 150, tick: [396, 150] },
  { name: "Vardagsrum", x: 40, y: 184, w: 280, h: 150, tick: [270, 300] },
  { name: "Badrum", x: 320, y: 184, w: 120, h: 150, tick: [400, 300] },
];

/** Where the cleaner walks: kitchen, bedroom, living room, bathroom. */
const route =
  "M120 110 C 170 130, 230 128, 268 128 C 330 128, 360 110, 360 110 C 330 160, 298 200, 298 214 C 260 250, 190 250, 150 262 C 220 290, 300 280, 360 280";

export default function CleanScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      className={`block h-auto w-full ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="480" height="400" className="fill-petrol-darker" />

      {/* Rooms light up and get their tick in turn. */}
      {rooms.map((room, i) => (
        <g key={room.name}>
          <rect
            x={room.x}
            y={room.y}
            width={room.w}
            height={room.h}
            className="fill-lamp clean-room"
            opacity={0.08}
            style={timing({ "--d": `${(i * 1.6).toFixed(1)}s` })}
          />
          <text
            x={room.x + 16}
            y={room.y + room.h - 16}
            className="fill-petrol-pale"
            opacity={0.65}
            fontSize={13}
          >
            {room.name}
          </text>
          <path
            d={`M${room.tick[0] - 12} ${room.tick[1] - 2} l8 8 l16 -18`}
            pathLength={1}
            fill="none"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-lamp-soft clean-tick"
            style={timing({ "--d": `${(i * 1.6).toFixed(1)}s` })}
          />
        </g>
      ))}

      {/* Walls, with gaps for doors and windows. */}
      <g
        className="stroke-petrol-pale"
        strokeWidth={6}
        strokeLinecap="square"
        fill="none"
      >
        <path d="M40 34 H90 M150 34 H320 M390 34 H440 V184 M440 184 V334 H220 M120 334 H40 V290 M40 230 V34" />
        <path d="M250 34 V110 M250 146 V184" />
        <path d="M40 184 H100 M136 184 H280 M316 184 H440" />
        <path d="M320 184 V262 M320 298 V334" />
      </g>
      {/* Windows. */}
      <g className="stroke-petrol-pale" strokeWidth={1.5} opacity={0.8}>
        <path d="M90 31 H150 M90 37 H150" />
        <path d="M320 31 H390 M320 37 H390" />
        <path d="M120 331 H220 M120 337 H220" />
        <path d="M37 230 V290 M43 230 V290" />
      </g>
      {/* Door swings. */}
      <g
        className="stroke-petrol-pale"
        strokeWidth={1.2}
        fill="none"
        opacity={0.55}
      >
        <path d="M100 184 A36 36 0 0 0 136 220" />
        <path d="M250 110 A36 36 0 0 1 286 146" />
        <path d="M280 184 A36 36 0 0 1 316 220" />
        <path d="M320 262 A36 36 0 0 0 356 298" />
      </g>
      {/* Fixtures: kitchen run, wardrobe, bathroom. */}
      <g
        className="stroke-petrol-pale"
        strokeWidth={1.4}
        fill="none"
        opacity={0.6}
      >
        <rect x={46} y={40} width={150} height={22} />
        <rect x={86} y={44} width={22} height={14} rx={2} />
        <circle cx={150} cy={51} r={4} />
        <circle cx={164} cy={51} r={4} />
        <circle cx={178} cy={51} r={4} />
        <rect x={404} y={44} width={30} height={92} />
        <line x1={404} y1={90} x2={434} y2={90} />
        <path d="M434 334 V290 A44 44 0 0 0 390 334" />
        <rect x={392} y={194} width={40} height={18} rx={4} />
        <ellipse cx={346} cy={210} rx={10} ry={13} />
        <rect x={336} y={190} width={20} height={8} rx={2} />
      </g>

      {/* Someone with a cart, walking the flat. */}
      <circle
        r={7}
        className="fill-copper-soft clean-walker"
        style={{ offsetPath: `path("${route}")` }}
      />

      {/* The end state. */}
      <g className="clean-done">
        <rect
          x={150}
          y={356}
          width={180}
          height={30}
          rx={15}
          className="fill-lamp-soft"
        />
        <text
          x={240}
          y={376}
          textAnchor="middle"
          fontSize={13}
          fontWeight={600}
          className="fill-petrol-darker"
        >
          Klar för besiktning
        </text>
      </g>
    </svg>
  );
}
