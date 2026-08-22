import Image from "next/image";

/**
 * Warm 3D construction icons (uploaded brand asset pack) keyed by the
 * service icon names in src/lib/site.ts. One visual system for all areas.
 */
const icons: Record<string, string> = {
  building: "crane",
  hammer: "scaffolding",
  wrench: "ladder",
  shield: "barrer",
  mountain: "buldozer",
  snowflake: "loader",
  sparkles: "wheelbarrow",
  briefcase: "vest",
  boxes: "box",
  sparkle: "cone",
  truck: "truck",
  warehouse: "bricks",
};

export default function ServiceIcon({
  name,
  className = "h-14 w-14",
}: {
  name: string;
  className?: string;
}) {
  const icon = icons[name] ?? "crane";
  return (
    <Image
      src={`/images/icons3d/${icon}.png`}
      alt=""
      width={56}
      height={56}
      className={`${className} object-contain`}
      aria-hidden="true"
    />
  );
}
