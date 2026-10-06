import { BadgeCheck, Handshake, HardHat, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { trustPoints } from "@/lib/site";

const icons = [Handshake, ShieldCheck, BadgeCheck, HardHat];

/** What a buyer can count on, whichever verksamhet does the job. */
export default function TrustSection({
  title = "Trygg att anlita",
  className = "",
}: {
  title?: string;
  className?: string;
}) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="display-2 max-w-2xl text-ink">{title}</h2>
        </Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={point.title} as="li">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-petrol text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 title text-ink">{point.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{point.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
