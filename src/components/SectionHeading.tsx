/**
 * Eyebrow + heading + optional lead, the recurring heading pattern of the
 * site. `on="dark"` inverts colours for petrol sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  on = "light",
  align = "left",
  as: Tag = "h2",
  className = "",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  on?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const centered = align === "center";
  const dark = on === "dark";
  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <p
        className={`eyebrow ${centered ? "justify-center" : ""} ${
          dark ? "text-copper-soft" : "text-petrol"
        }`}
      >
        {eyebrow}
      </p>
      <Tag className={`mt-5 display-2 ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </Tag>
      {lead ? (
        <p className={`mt-5 lead ${dark ? "text-white/70" : "text-muted"}`}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
