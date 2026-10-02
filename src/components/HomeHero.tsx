import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Photo from "@/components/Photo";
import { site } from "@/lib/site";

const trust = [
  "AAA i kreditvärdighet",
  "Kollektivavtal",
  `I Järfälla sedan ${site.founded}`,
];

/**
 * The home hero: one of our building sites at dusk, with the headline beside
 * it. From desktop the photograph fills the hero and darkens towards the text
 * on the left; on a phone it sits on top and fades into the text below.
 */
export default function HomeHero() {
  return (
    <section className="hero-home relative isolate overflow-hidden bg-petrol-darker text-white lg:flex lg:items-center">
      <div className="relative h-[46svh] min-h-64 max-h-[26rem] sm:max-h-[30rem] lg:absolute lg:inset-0 lg:h-auto lg:max-h-none">
        <Photo
          name="nybygge"
          priority
          sizes="100vw"
          className="object-[70%_center] lg:object-[50%_30%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-petrol-darker via-petrol-darker/10 via-35% to-transparent lg:bg-gradient-to-r lg:from-petrol-darker/95 lg:via-petrol-darker/80 lg:via-45% lg:to-petrol-darker/0 lg:to-80%"
        />
      </div>

      <div className="relative mx-auto -mt-10 w-full max-w-7xl px-5 pb-16 sm:-mt-12 sm:px-6 sm:pb-20 lg:mt-0 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <h1 className="hero-in display-1 text-white">
            Vi bygger, bemannar, hyr ut och förvaltar.
          </h1>
          <p className="hero-in mt-6 max-w-xl lead text-white/80 [--in:1]">
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
          <ul className="hero-in mt-9 flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:gap-x-7 [--in:3]">
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
    </section>
  );
}
