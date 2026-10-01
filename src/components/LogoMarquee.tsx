import Image from "next/image";
import { references } from "@/lib/site";

/**
 * Client logos on a slow conveyor (globals.css, `.marquee`). The second copy
 * of the list is hidden from assistive tech, so each name is read once.
 * With reduced motion the row simply wraps and stands still.
 */
export default function LogoMarquee({ className = "" }: { className?: string }) {
  const row = (copy: boolean) => (
    <ul
      aria-hidden={copy || undefined}
      className="flex shrink-0 items-center gap-16 pr-16 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-10 motion-reduce:pr-0 sm:gap-24 sm:pr-24 motion-reduce:sm:pr-0"
    >
      {references.map((ref) => (
        <li key={ref.name} className="shrink-0">
          <Image
            src={ref.logo}
            alt={copy ? "" : ref.name}
            width={220}
            height={88}
            // Off-screen until the belt carries them in, which lazy loading
            // would only notice late; they are small, so load them up front.
            loading="eager"
            className="logo-mono h-10 w-auto max-w-[11rem] object-contain sm:h-12"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee relative overflow-hidden border-y border-line py-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:[mask-image:none] ${className}`}
    >
      <div className="marquee-track flex w-max motion-reduce:w-full">
        {row(false)}
        <div className="contents motion-reduce:hidden">{row(true)}</div>
      </div>
    </div>
  );
}
