import Image from "next/image";
import { references } from "@/lib/site";

/**
 * Client logos on a hairline grid: no boxes around them, so the marks carry
 * the weight rather than the frames. The grid lines are the gap showing the
 * line colour through, which keeps every cell edge exactly one pixel.
 */
export default function LogoWall({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`grid grid-cols-2 gap-px overflow-hidden border-y border-line bg-line md:grid-cols-5 ${className}`}
    >
      {references.map((ref) => (
        <li
          key={ref.name}
          className="flex h-28 items-center justify-center bg-paper px-8 sm:h-32"
        >
          <Image
            src={ref.logo}
            alt={ref.name}
            width={220}
            height={88}
            className="logo-mono h-11 w-auto max-w-full object-contain"
          />
        </li>
      ))}
    </ul>
  );
}
