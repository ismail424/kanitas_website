import {
  Building2,
  HardHat,
  KeyRound,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  hardhat: HardHat,
  users: Users,
  key: KeyRound,
  truck: Truck,
  building: Building2,
};

/** Icon for a verksamhet or uppdragsgivare from site.ts. Falls back to the hard hat. */
export default function BusinessIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? HardHat;
  return <Icon className={className} aria-hidden="true" />;
}
