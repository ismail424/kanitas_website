/**
 * Heading and optional lead, the recurring heading pattern of the site.
 */
export default function SectionHeading({
  title,
  lead,
  as: Tag = "h2",
  className = "",
}: {
  title: string;
  lead?: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <Tag className="display-2 text-ink">{title}</Tag>
      {lead ? <p className="mt-5 lead text-muted">{lead}</p> : null}
    </div>
  );
}
