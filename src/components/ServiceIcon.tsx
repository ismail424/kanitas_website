import {
  Boxes,
  Briefcase,
  Building2,
  Car,
  Cog,
  Handshake,
  Hammer,
  KeyRound,
  LayoutPanelLeft,
  Mountain,
  RefreshCw,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Truck,
  Warehouse,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  building: Building2,
  hammer: Hammer,
  wrench: Wrench,
  shield: ShieldCheck,
  mountain: Mountain,
  snowflake: Snowflake,
  sparkles: Sparkles,
  sparkle: Sparkles,
  briefcase: Briefcase,
  boxes: Boxes,
  warehouse: Warehouse,
  key: KeyRound,
  cog: Cog,
  layout: LayoutPanelLeft,
  car: Car,
  handshake: Handshake,
  truck: Truck,
  refresh: RefreshCw,
};

export default function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? Building2;
  return <Icon className={className} aria-hidden="true" />;
}
