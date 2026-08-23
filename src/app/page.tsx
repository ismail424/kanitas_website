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
  businesses,
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
      {/* Hero — the parent company, not one of its businesses */}
      <section className="relative isolate overflow-hidden bg-paper bg-dotgrid">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:min-h-[72svh] lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-24">
          <div className="lg:col-span-6">
            <p className="eyebrow text-petrol">
              Koncern i Järfälla sedan {site.founded}
            </p>
            <h1 className="mt-7 display-1 text-ink">
              Fyra verksamheter.{" "}
              <em className="not-italic text-petrol">Ett</em> företag bakom.
            </h1>
            <p className="mt-7 max-w-xl lead-lg text-muted">
              Kanitas började som ett byggbolag i Järfälla och är i dag fem
              bolag med 35 medarbetare som bygger, städar, bemannar, handlar med
              maskiner och förvaltar lokaler i hela Storstockholm. Välj
              verksamhet nedan så kommer du rätt direkt.
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3.5 text-lg font-semibold text-ink transition-colors hover:border-ink"
              >
                <Phone className="h-5 w-5 text-petrol" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-[5/6]">
              <Photo
                name="hem-hero"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholderClassName="pb-28 lg:pb-16"
              />
            </div>
            {/* Overlapping feature card */}
            <div className="absolute -bottom-6 left-4 max-w-xs rounded-2xl bg-petrol-dark p-6 shadow-[0_20px_50px_rgba(8,42,51,0.28)] sm:left-0 lg:-left-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-soft">
                Utvalda uppdragsgivare
              </p>
              <p className="mt-2.5 title text-white">
                NCC · Implenia · ByggPartner · Dagab
              </p>
              <Link
                href="/om-oss#referenser"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-copper-soft transition-colors hover:text-white"
              >
                Se våra referenser
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
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
              eyebrow="Växeln"
              title="Vilken verksamhet söker du?"
              lead="Varje verksamhet drivs som ett eget bolag med egna kunder och egen personal. Välj den du är ute efter, så slipper du leta bland resten."
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
              Osäker på vem du ska prata med? Ring{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-petrol underline decoration-copper decoration-2 underline-offset-4"
              >
                {site.phone}
              </a>{" "}
              eller mejla{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-petrol underline decoration-copper decoration-2 underline-offset-4"
              >
                {site.email}
              </a>
              . Samma adress oavsett verksamhet, vi kopplar rätt.
            </p>
          </Reveal>
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

      <ContactSection
        title="Vet du inte vilken verksamhet du behöver?"
        lead="Beskriv vad du är ute efter så kopplar vi in rätt person i koncernen. Offerter är alltid kostnadsfria."
      />
    </>
  );
}
