import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/Photo";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import {
  primaryBusinesses,
  secondaryBusinesses,
  ogMeta,
  references,
  site,
} from "@/lib/site";

const pageTitle = "Bygg, byggservice och bemanning i Stockholm";
const pageDescription =
  "Kanitas utför entreprenader, byggservice, bemanning och byggstädning i hela Storstockholm. Egen personal på kollektivavtal sedan 2011. Begär offert!";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  ...ogMeta(pageTitle, pageDescription, "/"),
};

export default function HomePage() {
  return (
    <>

      {/* Hero: what we do, said plainly. Org structure is not a proposition. */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Photo name="hem-hero" priority sizes="100vw" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/20 lg:via-paper/60 lg:to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="mx-auto flex min-h-[62svh] max-w-7xl items-center px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-petrol">Stockholm sedan {site.founded}</p>
            <h1 className="mt-7 max-w-xl display-1 text-ink">
              Vi bygger, renoverar och sköter Stockholm.
            </h1>
            <p className="mt-7 max-w-xl lead-lg text-ink-soft">
              Kanitas utför entreprenader, byggservice, bemanning och städ åt
              Sveriges ledande byggbolag, fastighetsägare och bostadsrätts&shy;föreningar.
              Egen personal, egna maskiner, hela Storstockholm.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/bygg"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-petrol px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-petrol-deep"
              >
                Kanitas Bygg
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/25 bg-paper/70 px-8 py-3.5 text-lg font-semibold text-ink backdrop-blur-sm transition-colors hover:border-ink"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Routing is the job of this page, so it sits at the fold and is the
          largest thing on it. Bygg and ENT lead because they are where the
          work is; the other two get a quiet line each. */}
      <section id="verksamheter" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <ul className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {primaryBusinesses.map((business, index) => (
              <Reveal key={business.slug} delay={index * 80} as="li">
                <Link href={business.href} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                    <Photo
                      name={business.photo}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h2 className="mt-7 font-display text-3xl font-bold text-ink sm:text-4xl">
                    {business.name}
                  </h2>
                  <p className="mt-3 max-w-md lead text-muted">
                    {business.tagline}. {business.highlights.slice(0, 3).join(", ")}.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-petrol transition-colors group-hover:text-petrol-deep">
                    Till {business.name}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <div className="mt-16 divide-y divide-line border-y border-line">
              {secondaryBusinesses.map((business) => (
                <Link
                  key={business.slug}
                  href={business.href}
                  className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-6"
                >
                  <span className="font-display text-xl font-bold text-ink">
                    {business.name}
                  </span>
                  <span className="flex-1 text-muted">{business.tagline}</span>
                  <span className="inline-flex items-center gap-2 font-semibold text-petrol transition-colors group-hover:text-petrol-deep">
                    Kontakta oss
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* References */}
      <section id="referenser" className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Uppdragsgivare i urval
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-14 gap-y-10">
              {references.map((ref) => (
                <li key={ref.name}>
                  <Image
                    src={ref.logo}
                    alt={ref.name}
                    width={140}
                    height={56}
                    className="h-6 w-auto max-w-[110px] object-contain opacity-55 grayscale"
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ContactSection
        title="Skicka en förfrågan"
        lead="Beskriv uppdraget så kopplar vi in rätt verksamhet och rätt kontaktperson. Offerter och förfrågningsunderlag hanteras kostnadsfritt."
      />
    </>
  );
}
