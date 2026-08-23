import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Photo from "@/components/Photo";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  businesses,
  groupCompanies,
  groupFacts,
  ogMeta,
  references,
  site,
} from "@/lib/site";

const pageTitle = "Kanitas AB: bygg, städ, maskiner och lokaler";
const pageDescription =
  "Kanitas är en familjeägd koncern i Järfälla med fem bolag och 35 medarbetare. Välj verksamhet: Kanitas Bygg, Städ, Trading eller Fastigheter i Storstockholm.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  ...ogMeta(pageTitle, pageDescription, "/"),
};

export default function HomePage() {
  return (
    <>

      {/* Full-bleed hero: the headline sits on the photograph, not beside it.
          A light scrim on the left guarantees ink-on-photo contrast whatever
          the crop does at narrow widths. */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Photo name="hem-hero" priority sizes="100vw" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/20 lg:via-paper/60 lg:to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="mx-auto flex min-h-[78svh] max-w-7xl items-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-petrol">
              Kanitas AB · Sedan {site.founded}
            </p>
            <h1 className="mt-7 max-w-xl display-1 text-ink">
              Fyra verksamheter under samma ledning.
            </h1>
            <p className="mt-7 max-w-xl lead-lg text-ink-soft">
              Kanitas är en koncern i Järfälla med fem bolag och 35
              medarbetare inom bygg, bemanning, maskinhandel och
              fastigheter. Vi levererar åt Sveriges ledande byggbolag och
              fastighetsägare i hela Storstockholm.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#verksamheter"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-petrol px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-petrol-deep"
              >
                Våra verksamheter
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/25 bg-paper/70 px-8 py-3.5 text-lg font-semibold text-ink backdrop-blur-sm transition-colors hover:border-ink"
              >
                <Phone className="h-5 w-5 text-petrol" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The switchboard — the reason this page exists */}
      <section id="verksamheter" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Verksamheter"
              title="Fyra verksamheter, fem bolag"
              lead="Varje verksamhet drivs som ett eget bolag med egen personal, egna kunder och eget resultatansvar. Välj den verksamhet ditt ärende gäller."
            />
          </Reveal>

          {/* Typographic blocks on hairlines, not cards. Four verksamheter
              in four identical bordered tiles gave them equal weight and no
              hierarchy; a rule and a heading do the same job with less noise. */}
          <div className="mt-16 divide-y divide-line border-y border-line">
            {businesses.map((business, index) => {
              const hasOwnPage = business.href !== "/kontakt";
              return (
                <Reveal key={business.slug} delay={index * 60}>
                  <div className="grid gap-6 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
                    <div className="lg:col-span-4">
                      <h3 className="font-display text-2xl font-bold text-ink">
                        {business.name}
                      </h3>
                      <p className="mt-1.5 text-muted">{business.tagline}</p>
                      <Link
                        href={business.href}
                        className="mt-5 inline-flex items-center gap-2 font-semibold text-petrol transition-colors hover:text-petrol-deep"
                      >
                        {hasOwnPage
                          ? `Till ${business.name}`
                          : `Kontakta ${business.name}`}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>

                    <div className="lg:col-span-8">
                      <p className="max-w-3xl leading-relaxed text-ink-soft">
                        {business.blurb}
                      </p>
                      <p className="mt-5 text-sm text-muted">
                        {business.highlights.join(" · ")}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <p className="mt-14 text-muted">
              Gemensam ingång för samtliga verksamheter:{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-petrol underline decoration-copper decoration-2 underline-offset-4"
              >
                {site.phone}
              </a>{" "}
              och{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-petrol underline decoration-copper decoration-2 underline-offset-4"
              >
                {site.email}
              </a>
              .
            </p>
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
                    className="max-h-7 w-auto max-w-[120px] object-contain opacity-55 grayscale"
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Credentials, stated plainly. This is what a procurement function
          checks before shortlisting, so it is data rather than prose. */}
      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Koncernen i korthet"
                  title="Uppgifter för upphandling och leverantörskontroll"
                  lead="Kanitas AB är moderbolag och avtalspart. Underlag för kreditvärdighet, kollektivavtal och försäkring lämnas på begäran inför upphandling."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <dl className="grid grid-cols-1 gap-x-10 border-y border-line sm:grid-cols-2">
                  {groupFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="border-b border-line py-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
                    >
                      <dt className="text-sm font-medium text-muted">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 font-display font-semibold text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={80}>
                <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Bolag i koncernen
                </p>
                <ul className="mt-4 space-y-2">
                  {groupCompanies.map((company) => (
                    <li
                      key={company.orgnr}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 border-b border-line py-2.5 last:border-b-0"
                    >
                      <span className="font-medium text-ink">
                        {company.name}
                      </span>
                      <span className="font-mono text-sm text-muted">
                        {company.orgnr}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        title="Kontakta koncernen"
        lead="Beskriv uppdraget så kopplar vi in rätt verksamhet och rätt kontaktperson. Offerter och förfrågningsunderlag hanteras kostnadsfritt."
      />
    </>
  );
}
