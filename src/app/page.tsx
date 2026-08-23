import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import BusinessIcon from "@/components/BusinessIcon";
import Photo, { hasPhoto } from "@/components/Photo";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ValueIcon from "@/components/ValueIcon";
import {
  audiences,
  businesses,
  groupCompanies,
  groupFacts,
  ogMeta,
  references,
  site,
  stats,
  values,
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-petrol px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-petrol-deep"
              >
                Våra verksamheter
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 bg-paper/70 px-8 py-3.5 text-lg font-semibold text-ink backdrop-blur-sm transition-colors hover:border-ink"
              >
                <Phone className="h-5 w-5 text-petrol" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div className="border-y border-line bg-card">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-line px-4 sm:grid-cols-4 sm:divide-x sm:px-6 lg:px-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse px-6 py-9 text-center"
            >
              <dt className="mt-1.5 text-sm font-medium text-muted">
                {stat.label}
              </dt>
              <dd className="font-display text-3xl font-bold text-ink sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* The switchboard — the reason this page exists */}
      <section id="verksamheter" className="scroll-mt-24 bg-dotgrid">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Verksamheter"
              title="Fyra verksamheter, fem bolag"
              lead="Varje verksamhet drivs som ett eget bolag med egen personal, egna kunder och eget resultatansvar. Välj den verksamhet ditt ärende gäller."
            />
          </Reveal>

          <ul className="mt-14 grid gap-6 lg:grid-cols-2">
            {businesses.map((business, index) => {
              const hasOwnPage = business.href !== "/kontakt";
              return (
                <Reveal key={business.slug} delay={index * 80} as="li" className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-7 transition-colors hover:border-petrol/40 sm:p-9">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-petrol/10 text-petrol">
                        <BusinessIcon
                          name={business.icon}
                          className="h-6 w-6"
                        />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold text-ink">
                          {business.name}
                        </h3>
                        <p className="text-sm font-medium text-copper">
                          {business.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 leading-relaxed text-muted">
                      {business.blurb}
                    </p>

                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {business.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-petrol/10 text-petrol">
                            <Check className="h-3 w-3" aria-hidden="true" />
                          </span>
                          <span className="text-sm text-ink-soft">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
                      <Link
                        href={business.href}
                        className={
                          hasOwnPage
                            ? "inline-flex items-center gap-2 rounded-full bg-petrol px-6 py-2.5 font-semibold text-white transition-colors hover:bg-petrol-deep"
                            : "inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-2.5 font-semibold text-ink transition-colors hover:border-ink"
                        }
                      >
                        {hasOwnPage
                          ? `Till ${business.name}`
                          : `Kontakta ${business.name}`}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      {hasOwnPage ? null : (
                        <p className="text-sm text-muted">
                          Egen webbplats är på väg.
                        </p>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>

          <Reveal>
            <p className="mt-12 text-center text-muted">
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

      {/* Sorted by uppdragsgivare rather than by verksamhet */}
      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Uppdragsgivare"
              title="Vi arbetar åt fyra typer av uppdragsgivare"
              lead="Kraven skiljer sig åt, men utförandet håller samma standard oavsett uppdragets storlek."
            />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, index) => (
              <Reveal
                key={audience.title}
                delay={index * 70}
                as="li"
                className="h-full"
              >
                <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-petrol/10 text-petrol">
                    <BusinessIcon name={audience.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 title text-ink">{audience.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {audience.text}
                  </p>
                  <Link
                    href={audience.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-petrol transition-colors hover:text-petrol-deep"
                  >
                    {audience.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* About teaser + values */}
      <section className="bg-petrol-dark">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Photo
                name="hem-koncern"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              on="dark"
              eyebrow="Om Kanitas"
              title="Kollektivavtal, AAA och kunder som stannar kvar"
              lead={`Byggbolaget som startade i Järfälla ${site.founded} är i dag en koncern med fem bolag och 35 medarbetare. Verksamheterna är olika, men de delar samma ledning, samma kollektivavtal och samma princip: vi levererar det vi lovar.`}
            />
            <ul className="mt-9 space-y-5">
              {values.map((value) => (
                <li key={value.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-deep bg-petrol-raised text-copper-soft">
                    <ValueIcon name={value.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-white">
                      {value.title}
                    </p>
                    <p className="mt-0.5 text-white/65">{value.blurb}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/om-oss"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 font-semibold text-white transition-colors hover:border-copper-soft hover:text-copper-soft"
            >
              Mer om koncernen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* References */}
      <section id="referenser">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Referenser"
              title="Förtroende från Sveriges ledande aktörer"
              lead="Mångåriga uppdrag åt några av landets största bygg-, fastighets- och logistikföretag."
            />
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {references.map((ref) => (
                <li
                  key={ref.name}
                  className="flex h-24 items-center justify-center rounded-xl border border-line bg-card px-6 transition-colors hover:border-petrol/40"
                >
                  <Image
                    src={ref.logo}
                    alt={ref.name}
                    width={140}
                    height={56}
                    className="max-h-11 w-auto object-contain"
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Stockholm band — local anchoring */}
      {/* Full-bleed backdrop, so this slot falls back to the dark surface
          rather than a placeholder the white headline could not sit on. */}
      <section
        className={`relative isolate overflow-hidden ${
          hasPhoto("hem-stockholm") ? "bg-petrol-darker" : "hero-deep"
        }`}
      >
        {hasPhoto("hem-stockholm") ? (
          <>
            <Photo name="hem-stockholm" sizes="100vw" />
            <div
              className="absolute inset-0 bg-gradient-to-r from-petrol-darker/85 via-petrol-darker/50 to-petrol-darker/15"
              aria-hidden="true"
            />
          </>
        ) : null}
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8">
          <Reveal>
            <p className="eyebrow text-copper-soft">Storstockholm</p>
            <h2 className="mt-4 max-w-2xl display-2 text-white">
              Järfälla är basen. Hela Storstockholm är arbetsplatsen.
            </h2>
            <p className="mt-4 max-w-xl lead text-white/80">
              Från Almarevägen i Järfälla når vi snabbt byggarbetsplatser,
              kontor, lager och lokaler i hela Stockholmsområdet.
            </p>
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
