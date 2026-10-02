import Image from "next/image";
import { references } from "@/lib/site";

/**
 * Client logos in one quiet grid: no frames, no motion, in greyscale. Each
 * logo carries its own height so a heavy wordmark does not outweigh a light
 * emblem. Phones show the first six, so the wall stays short under the hero.
 */
export default function LogoWall({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:gap-y-12 md:grid-cols-5 ${className}`}
    >
      {references.map((ref, index) => (
        <li
          key={ref.name}
          className={`flex h-12 items-center justify-center ${index >= 6 ? "max-sm:hidden" : ""}`}
        >
          <Image
            src={ref.logo}
            alt={ref.name}
            width={240}
            height={96}
            style={{ height: ref.h }}
            className="logo-mono w-auto max-w-[10rem] object-contain"
          />
        </li>
      ))}
    </ul>
  );
}
