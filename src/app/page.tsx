import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Blueprint, { type BlueprintName } from "@/components/Blueprint";
import ContactSection from "@/components/ContactSection";
import HomeHero from "@/components/HomeHero";
import LogoMarquee from "@/components/LogoMarquee";
import { Mark } from "@/components/Logo";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { indexNumber } from "@/lib/format";
import { businesses, contactHref, ogMeta, site } from "@/lib/site";

const pageTitle = "Bygg, bemanning, maskiner och lokaler i Stockholm";
const pageDescription =
  "Kanitas i Järfälla: byggentreprenader, bemanning och byggstädning, maskiner och fordon samt lokaler att hyra i hela Storstockholm. Egen personal sedan 2011.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  ...ogMeta(pageTitle, pageDescription, "/"),
};

/** Each verksamhet's line drawing. */
const drawingFor: Record<string, BlueprintName> = {
  bygg: "crane",
  stad: "hardhat",
  trading: "excavator",
  fastigheter: "warehouse",
};

/** How each verksamhet came about, for the timeline in the story. */
const origins: Record<string, string> = {
  bygg: "Byggfirman i Järfälla. Grunden sedan 2011 och fortfarande koncernens största verksamhet.",
  stad: "Yrkesarbetare med kort varsel och byggstädning som håller för besiktning.",
  trading: "Maskiner och fordon till de egna entreprenaderna, i dag en självständig affär.",
  fastigheter: "Verkstads-, lager- och kontorslokaler i egen förvaltning.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Each verksamhet gets a real pitch: what it does, for whom, and where
          to go next. Trading and Fastigheter have no page of their own, so
          this is where they are presented in full. */}
      <section id="verksamheter" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Verksamheter"
              title="Fyra verksamheter, en koncern"
              lead="Varje verksamhet har egen personal och egna kundrelationer. Bakom dem står samma ledning, samma kollektivavtal och samma kontor i Järfälla."
            />
          </Reveal>

          <div className="mt-16 space-y-24 sm:mt-20 sm:space-y-32">
            {businesses.map((business, index) => {
              const flip = index % 2 === 1;
              return (
                <article
                  key={business.slug}
                  id={business.slug}
                  aria-labelledby={`${business.slug}-rubrik`}
                  className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16"
                >
                  <Reveal
                    variant="scale"
                    className={`lg:col-span-6 lg:row-start-1 ${
                      flip ? "lg:col-start-7" : "lg:col-start-1"
                    }`}
                  >
                    <div className="group relative aspect-[16/10] h-full overflow-hidden sm:aspect-[4/3] lg:aspect-auto lg:min-h-[30rem]">
                      <Photo
                        name={business.photo}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                      />
                      {/* The drawing sits on the photograph's inner corner
                          and draws itself as the row arrives. */}
                      <Reveal
                        delay={200}
                        className={`absolute bottom-4 hidden w-36 sm:block lg:bottom-6 lg:w-44 ${
                          flip ? "left-4 lg:left-6" : "right-4 lg:right-6"
                        }`}
                      >
                        <div className="border border-line bg-paper/95 p-3 shadow-[0_18px_40px_-20px_rgba(15,34,41,0.45)] backdrop-blur">
                          <Blueprint
                            name={drawingFor[business.slug]}
                            className="w-full text-petrol"
                          />
                          <p className="label mt-1 border-t border-line pt-2 text-[0.6rem] text-muted">
                            {indexNumber(index)} · {business.short}
                          </p>
                        </div>
                      </Reveal>
                    </div>
                  </Reveal>

                  <Reveal
                    className={`self-center lg:col-span-6 lg:row-start-1 lg:py-4 ${
                      flip ? "lg:col-start-1" : "lg:col-start-7"
                    }`}
                  >
                    <p className="flex items-center gap-4">
                      <span className="index text-copper-ink">
                        {indexNumber(index)}
                      </span>
                      <span aria-hidden="true" className="h-px w-8 bg-line" />
                      <span className="label text-muted">{business.name}</span>
                    </p>
                    <h3
                      id={`${business.slug}-rubrik`}
                      className="mt-5 display-3 text-ink"
                    >
                      {business.heading}
                    </h3>
                    <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
                      {business.blurb}
                    </p>
                    <ul className="mt-8 grid max-w-xl grid-cols-1 border-t border-line sm:grid-cols-2 sm:gap-x-8">
                      {business.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="border-b border-line py-3 text-[0.95rem] font-medium text-ink"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                      <Link
                        href={business.page ?? contactHref(business.topic)}
                        className="btn btn-primary"
                      >
                        {business.page
                          ? `Till ${business.name}`
                          : `Kontakta ${business.name}`}
                        <ArrowRight aria-hidden="true" />
                      </Link>
                      <p className="text-sm text-muted">
                        Bolag: {business.entities.join(" · ")}
                      </p>
                    </div>
                  </Reveal>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why four verksamheter exist at all: each grew out of a need the
          group had itself, drawn here one after the other. */}
      <section className="relative isolate overflow-hidden bg-petrol-dark">
        <Mark className="pointer-events-none absolute -right-40 -top-24 -z-10 h-[46rem] w-auto fill-white/[0.035] lg:-right-16" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow text-copper-soft">Om Kanitas</p>
              <h2 className="mt-5 display-2 text-white">
                Byggt inifrån, en verksamhet i taget
              </h2>
            </Reveal>
            <Reveal delay={60} className="lg:col-span-7">
              <div className="space-y-6 text-lg leading-relaxed text-white/75">
                <p>
                  Kanitas startade {site.founded} som en byggfirma i Järfälla.
                  När NCC, Implenia och ByggPartner började anlita oss som
                  underentreprenör ställdes nya krav: egen personal, egen
                  arbetsledning, dokumenterad egenkontroll och avtal som håller
                  hela vägen till slutbesiktning.
                </p>
                <p>
                  De kraven byggde bolaget. Varje ny verksamhet har vuxit fram
                  ur ett behov vi först hade själva.
                </p>
              </div>
            </Reveal>
          </div>

          <ol className="relative mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {businesses.map((business, index) => (
              <Reveal key={business.slug} as="li" delay={index * 260}>
                <Blueprint
                  name={drawingFor[business.slug]}
                  className="h-40 w-auto text-white/80 [--bp-accent:var(--color-copper-soft)]"
                />
                <p className="mt-6 flex items-center gap-3">
                  <span className="index text-sm text-copper-soft">
                    {indexNumber(index)}
                  </span>
                  <span className="title text-white">{business.heading}</span>
                </p>
                <p className="mt-2 leading-relaxed text-white/65">
                  {origins[business.slug]}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-20 grid grid-cols-1 gap-10 border-t border-line-deep pt-12 lg:grid-cols-12 lg:gap-16">
            <p className="border-l-[3px] border-copper pl-6 font-display text-xl font-semibold leading-snug text-white [font-variation-settings:'wdth'_104] sm:text-2xl lg:col-span-8">
              Målet är att en beställare ska kunna vända sig hit för hela
              kedjan: bygga, bemanna, städa efteråt och hyra ytan när den står
              klar, utan att upphandla fyra leverantörer och samordna
              gränssnitten mellan dem.
            </p>
            <div className="lg:col-span-4 lg:self-end lg:justify-self-end">
              <Link href="/om-oss" className="btn btn-ghost">
                Mer om koncernen
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The people behind it, at full width. */}
      <section className="relative isolate overflow-hidden">
        <div className="parallax relative h-[60svh] min-h-[360px] overflow-hidden sm:h-[72svh]">
          <Photo name="team" sizes="100vw" />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-petrol-darker via-petrol-darker/55 to-petrol-darker/0 to-70%"
        />
        <div className="absolute inset-x-0 bottom-0">
          <Reveal className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
            <p className="max-w-4xl display-2 text-white">
              Egen personal på kollektivavtal, och en kontaktperson från offert
              till slutbesiktning.
            </p>
          </Reveal>
        </div>
      </section>

      {/* References carry more weight than anything we can say about
          ourselves, so they get room rather than a footnote strip. */}
      <section id="referenser" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Uppdragsgivare"
              title="Återkommande uppdrag åt branschens största aktörer"
              lead="Vi arbetar som partner och underentreprenör åt några av landets ledande bygg-, fastighets- och logistikföretag."
            />
          </Reveal>
        </div>
        <Reveal delay={80} className="mt-14">
          <LogoMarquee />
        </Reveal>
      </section>

      <ContactSection
        title="Skicka en förfrågan"
        lead="Beskriv uppdraget så kopplar vi in rätt verksamhet och rätt kontaktperson. Offerter och förfrågningsunderlag hanteras kostnadsfritt."
      />
    </>
  );
}
