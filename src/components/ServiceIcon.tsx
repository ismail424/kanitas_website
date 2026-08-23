import {
  Boxes,
  Briefcase,
  Building2,
  Car,
  Clock,
  Cog,
  Droplets,
  Hammer,
  HardHat,
  KeyRound,
  LayoutGrid,
  Mountain,
  RefreshCw,
  ShieldCheck,
  Ruler,
  Snowflake,
  SprayCan,
  Truck,
  Warehouse,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * Service icons keyed by the icon names in src/lib/site.ts. Line icons in a
 * petrol tile, the same treatment as the verksamhet and value icons, so every
 * icon on the site reads as one system.
 */
const icons: Record<string, LucideIcon> = {
  boxes: Boxes,
  briefcase: Briefcase,
  building: Building2,
  car: Car,
  clock: Clock,
  cog: Cog,
  droplets: Droplets,
  hammer: Hammer,
  hardhat: HardHat,
  key: KeyRound,
  layout: LayoutGrid,
  mountain: Mountain,
  refresh: RefreshCw,
  shield: ShieldCheck,
  ruler: Ruler,
  snowflake: Snowflake,
  spray: SprayCan,
  truck: Truck,
  warehouse: Warehouse,
  wrench: Wrench,
};

export default function ServiceIcon({ name }: { name: string }) {
  const Icon = icons[name] ?? Hammer;
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-petrol/10 text-petrol">
      <Icon className="h-6 w-6" aria-hidden="true" />
    </span>
  );
}
