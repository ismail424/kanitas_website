/**
 * Eyebrow + heading + optional lead, the recurring heading pattern
 * of the site. `on="dark"` inverts colors for dark sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  on = "light",
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  on?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`eyebrow ${centered ? "justify-center" : ""} ${
          on === "dark" ? "text-amber" : "text-amber-deep"
        }`}
      >
        {eyebrow}
      </p>
      <Tag
        className={`mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl ${
          on === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </Tag>
      {lead ? (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            on === "dark" ? "text-white/70" : "text-muted"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
