import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/Photo";
import { site } from "@/lib/site";

/**
 * The home hero: one photograph, the headline and one action. The photograph
 * drifts very slowly and the text settles in once; reduced motion gets both
 * still (globals.css).
 */
export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-petrol-darker">
      <div className="absolute inset-0 -z-10">
        <div className="hero-drift absolute inset-0">
          <Photo name="hem" priority sizes="100vw" decorative />
        </div>
        {/* Phones crop to the middle of the photograph, under the whole text
            block, so they get an even scrim; wider screens only darken the
            sky side the text sits on. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-petrol-darker/60 sm:bg-transparent sm:bg-gradient-to-r sm:from-petrol-darker/85 sm:via-petrol-darker/45 sm:to-transparent"
        />
      </div>

      <div className="mx-auto flex min-h-[78svh] max-w-7xl items-center px-5 py-24 sm:px-6 lg:min-h-[44rem] lg:px-8">
        <div className="max-w-2xl">
          <h1 className="hero-in display-1 text-white">
            Vi bygger, bemannar, hyr ut och förvaltar.
          </h1>
          <p className="hero-in mt-6 max-w-lg lead text-white/80 [--in:1]">
            Bygg, bemanning, maskiner och lokaler i Storstockholm. Egen
            personal på kollektivavtal sedan {site.founded}.
          </p>
          <div className="hero-in mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8 [--in:2]">
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
        </div>
      </div>
    </section>
  );
}
