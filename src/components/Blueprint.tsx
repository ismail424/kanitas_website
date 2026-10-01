/**
 * Technical line drawings, one per verksamhet: a tower crane over a frame, a
 * hard hat, an excavator and a warehouse. Drawn on a 200 x 160 grid with one
 * stroke weight, so any of them can stand alone or sit in a row.
 *
 * Every stroke carries pathLength="1", so the draw-in animation (globals.css,
 * `.blueprint`) needs no measuring: the dash runs from 1 to 0 once the drawing
 * is revealed. `--i` staggers the strokes. Without motion, it is simply drawn.
 */

export type BlueprintName = "crane" | "hardhat" | "excavator" | "warehouse";

type Stroke = { d: string; accent?: boolean };

const drawings: Record<BlueprintName, Stroke[]> = {
  crane: [
    { d: "M4 150H196" },
    // Frame under construction: four floors, the top one half built
    { d: "M18 150V62M44 150V62M70 150V84M96 150V84" },
    { d: "M18 128H96M18 106H96M18 84H96M18 62H44" },
    { d: "M70 106L96 84M70 84L96 106" },
    // Mast with lattice
    { d: "M128 150V30M136 150V30" },
    { d: "M128 150L136 138L128 126L136 114L128 102L136 90L128 78L136 66L128 54L136 42L128 30" },
    // Cab, tower head, jib and counter-jib
    { d: "M125 30V21H141V30Z" },
    { d: "M132 21V7" },
    { d: "M46 18H125M46 24H125M46 18V24M141 18H174M141 24H174M174 18V24" },
    { d: "M46 24L54 18L62 24L70 18L78 24L86 18L94 24L102 18L110 24L118 18L125 23" },
    { d: "M132 7L50 18M132 7L170 18" },
    // Counterweight, hook and the load on its way up
    { d: "M161 24H174V35H161Z", accent: true },
    { d: "M74 24V50M74 50Q74 55 78 55" },
    { d: "M64 59H84V69H64ZM74 55V59", accent: true },
  ],
  hardhat: [
    { d: "M24 140H176M24 136V144M176 136V144" },
    // Shell and its three ridges
    { d: "M50 104C50 63 73 40 100 40C127 40 150 63 150 104" },
    { d: "M100 40V104" },
    { d: "M85 44C78 61 76 82 76 104M115 44C122 61 124 82 124 104" },
    // Peak and brim
    { d: "M36 104H164V111H36Z" },
    { d: "M36 111Q100 124 164 111" },
    // Suspension and the badge on the front
    { d: "M62 115V124M138 115V124M62 124Q100 133 138 124", accent: true },
    { d: "M91 66H109V80H91Z", accent: true },
  ],
  excavator: [
    { d: "M4 150H196" },
    // Tracks, idlers and rollers
    { d: "M80 128H160A11 11 0 0 1 160 150H80A11 11 0 0 1 80 128Z" },
    { d: "M87 139A7 7 0 1 1 73 139A7 7 0 1 1 87 139ZM167 139A7 7 0 1 1 153 139A7 7 0 1 1 167 139Z" },
    { d: "M103 143A3 3 0 1 1 97 143A3 3 0 1 1 103 143ZM123 143A3 3 0 1 1 117 143A3 3 0 1 1 123 143ZM143 143A3 3 0 1 1 137 143A3 3 0 1 1 143 143Z" },
    // Upper house with counterweight
    { d: "M94 128V104H172Q182 104 182 116V128" },
    // Cab and window
    { d: "M100 104V76Q100 72 104 72H126L134 86V104" },
    { d: "M105 78H124L129 88V98H105Z" },
    // Boom, stick and cylinder
    { d: "M98 104L66 50Q68 42 76 45L112 104" },
    { d: "M66 50L36 92L44 97L74 52" },
    { d: "M106 96L80 60", accent: true },
    // Bucket with teeth
    { d: "M34 92Q24 106 33 119L54 112L46 96Z", accent: true },
    { d: "M33 119L30 124M40 117L38 122M47 114L46 119", accent: true },
  ],
  warehouse: [
    { d: "M4 150H196" },
    // Shell with a low gable
    { d: "M20 150V78L100 54L180 78V150" },
    { d: "M20 84L100 60L180 84" },
    // Two roller doors with slats
    { d: "M36 150V98H76V150M86 150V98H126V150" },
    { d: "M36 105H76M36 112H76M36 119H76M36 126H76M86 105H126M86 112H126M86 119H126M86 126H126" },
    // Loading dock
    { d: "M30 150V145H132V150" },
    // Personnel door, window band and the sign
    { d: "M144 150V118H162V150M157 135V136" },
    { d: "M140 92H170V106H140ZM147.5 92V106M155 92V106M162.5 92V106" },
    { d: "M64 71H136V81H64Z", accent: true },
  ],
};

/** One element per subpath: dash patterns restart at each subpath in some
 *  engines, so a compound path would not draw in order. */
const segments = (name: BlueprintName) =>
  drawings[name].flatMap((stroke) =>
    stroke.d
      .split(/(?=M)/)
      .map((d) => ({ d, accent: stroke.accent })),
  );

export default function Blueprint({
  name,
  className = "",
  title,
}: {
  name: BlueprintName;
  className?: string;
  /** Accessible name; omit when the drawing is decoration beside text. */
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 160"
      className={`blueprint ${className}`}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {segments(name).map((stroke, index) => (
        <path
          key={index}
          d={stroke.d}
          pathLength={1}
          className={stroke.accent ? "blueprint-accent" : undefined}
          style={{ "--i": index } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}
