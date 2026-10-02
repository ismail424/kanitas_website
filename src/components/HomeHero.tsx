import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import HeroScene from "@/components/scene/HeroScene";
import { site } from "@/lib/site";

const trust = [
  "AAA i kreditvärdighet",
  "Kollektivavtal",
  `I Järfälla sedan ${site.founded}`,
];

/**
 * The home hero: the headline in an evening sky, and below it a Järfälla
 * street that builds itself with all four verksamheter on it. On a phone the
 * street is wider than the screen and pans slowly from end to end.
 */
export default function HomeHero() {
  return (
    <section className="hero-home relative isolate flex flex-col overflow-hidden bg-gradient-to-b from-petrol-darker from-40% to-dusk text-white">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="max-w-2xl">
          <h1 className="hero-in display-1 text-white">
            Vi bygger, bemannar, hyr ut och förvaltar.
          </h1>
          <p className="hero-in mt-6 max-w-xl lead text-white/75 [--in:1]">
            Bygg, bemanning, maskiner och lokaler i Storstockholm. Egen personal
            på kollektivavtal sedan {site.founded}.
          </p>
          <div className="hero-in mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8 [--in:2]">
            <Link href="/kontakt" className="btn btn-light">
              Begär offert
              <ArrowRight aria-hidden="true" />
            </Link>
            <a
              href={site.phoneHref}
              className="font-semibold text-white underline-offset-4 hover:underline"
            >
              Ring {site.phone}
            </a>
          </div>
          <ul className="hero-in mt-9 flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:flex-wrap sm:gap-x-7 [--in:3]">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check
                  className="h-4 w-4 shrink-0 text-copper-soft"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mt-10 h-72 overflow-hidden sm:h-80 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:h-auto">
        <HeroScene className="scene-pan-track h-full w-auto max-w-none lg:h-auto lg:w-full" />
      </div>
    </section>
  );
}
