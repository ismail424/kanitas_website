import { Building2, HardHat, Sparkles, Truck, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  hardhat: HardHat,
  sparkles: Sparkles,
  truck: Truck,
  building: Building2,
};

/** Icon for a verksamhet from site.ts — falls back to the hard hat. */
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
