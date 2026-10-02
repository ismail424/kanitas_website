import { timing } from "@/components/scene/kit";

/*
 * The Kontakt page's picture: Storstockholm with the water running from
 * Mälaren out through the city, and lines drawn out from our office in
 * Järfälla to the places we work. Positions are projected from real
 * coordinates; user space 480 × 420.
 */

const office = { x: 161, y: 199 };

const places: {
  name: string;
  x: number;
  y: number;
  side?: "left";
}[] = [
  { name: "Stockholm", x: 262, y: 273 },
  { name: "Sollentuna", x: 211, y: 195 },
  { name: "Upplands Väsby", x: 194, y: 125 },
  { name: "Sigtuna", x: 169, y: 44 },
  { name: "Täby", x: 262, y: 184 },
  { name: "Solna", x: 228, y: 244, side: "left" },
  { name: "Lidingö", x: 289, y: 243 },
  { name: "Nacka", x: 303, y: 300 },
  { name: "Huddinge", x: 224, y: 344 },
  { name: "Botkyrka", x: 160, y: 373 },
  { name: "Södertälje", x: 71, y: 377 },
  { name: "Ekerö", x: 151, y: 312 },
  { name: "Värmdö", x: 397, y: 290, side: "left" },
  { name: "Haninge", x: 294, y: 398 },
  { name: "Österåker", x: 361, y: 156, side: "left" },
  { name: "Vallentuna", x: 266, y: 113 },
  { name: "Upplands-Bro", x: 125, y: 156, side: "left" },
];

export default function MapScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 420"
      className={`block h-auto w-full ${className}`}
      role="img"
      aria-label="Karta över Storstockholm med vårt kontor i Järfälla"
    >
      <rect width="480" height="420" className="fill-petrol-darker" />

      {/* Mälaren in from the west, Saltsjön out to the east. */}
      <path
        d="M0 268 C 40 262, 70 278, 104 286 C 140 294, 168 280, 200 276 C 226 272, 246 268, 262 276 C 250 292, 222 300, 196 306 C 160 316, 128 334, 92 330 C 60 326, 30 306, 0 304 Z"
        className="fill-night-3"
        opacity={0.7}
      />
      <path
        d="M262 270 C 296 256, 330 252, 366 258 C 404 264, 440 248, 480 238 L480 318 C 446 314, 414 320, 380 314 C 344 308, 312 300, 286 288 C 276 284, 268 280, 262 276 Z"
        className="fill-night-3"
        opacity={0.7}
      />

      {/* Lines out from the office. */}
      <g className="stroke-copper-soft" strokeWidth={1} opacity={0.35}>
        {places.map((place) => (
          <path
            key={place.name}
            d={`M${office.x} ${office.y} L${place.x} ${place.y}`}
            pathLength={1}
            className="draw"
          />
        ))}
      </g>

      {places.map((place, i) => (
        <g
          key={place.name}
          className="scene-fade"
          style={timing({ "--d": `${(0.6 + i * 0.08).toFixed(2)}s` })}
        >
          <circle
            cx={place.x}
            cy={place.y}
            r={3.2}
            className="fill-petrol-pale"
          />
          <text
            x={place.side === "left" ? place.x - 8 : place.x + 8}
            y={place.y + 4}
            textAnchor={place.side === "left" ? "end" : "start"}
            fontSize={place.name === "Stockholm" ? 14 : 11.5}
            fontWeight={place.name === "Stockholm" ? 600 : 400}
            className="fill-petrol-pale"
            opacity={0.8}
          >
            {place.name}
          </text>
        </g>
      ))}

      {/* The office, with a slow pulse. */}
      <circle
        cx={office.x}
        cy={office.y}
        r={10}
        className="fill-none stroke-copper-soft map-pulse"
        strokeWidth={1.5}
      />
      <circle
        cx={office.x}
        cy={office.y}
        r={10}
        className="fill-none stroke-copper-soft map-pulse"
        strokeWidth={1.5}
        style={timing({ "--d": "1.4s" })}
      />
      <circle cx={office.x} cy={office.y} r={8} className="fill-copper" />
      <circle cx={office.x} cy={office.y} r={3} className="fill-paper" />
      <text
        x={office.x - 14}
        y={office.y + 5}
        textAnchor="end"
        fontSize={15}
        fontWeight={700}
        className="fill-lamp-soft"
      >
        Järfälla
      </text>
    </svg>
  );
}
