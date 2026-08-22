import { Award, Handshake, Users, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  award: Award,
  handshake: Handshake,
  users: Users,
};

/** Icon for a company value from site.ts — falls back to Award. */
export default function ValueIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? Award;
  return <Icon className={className} aria-hidden="true" />;
}
