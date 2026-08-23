import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/Photo";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import {
  routedBusinesses,
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
            <p className="eyebrow text-petrol">
              Byggföretag i Järfälla sedan {site.founded}
            </p>
            <h1 className="mt-7 max-w-xl display-1 text-ink">
              Vi bygger, renoverar och sköter Stockholm.
            </h1>
            <p className="mt-7 max-w-xl lead-lg text-ink-soft">
              Vi utför byggentreprenader och byggservice, hyr ut yrkesarbetare
              och tar byggstädningen efteråt. Egen personal på kollektivavtal,
              i hela Storstockholm.
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

      {/* The växel: four verksamheter, one weight each. Two are reached by a
          page and two by phone, which changes the link text and nothing else. */}
      <section id="verksamheter" className="scroll-mt-24 border-y border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-petrol">Växeln</p>
              <h2 className="mt-4 display-2 text-ink">
                Vilken verksamhet gäller det?
              </h2>
              <p className="mt-4 lead text-muted">
                Fyra verksamheter, ett bolag bakom. Välj den som gäller ditt
                ärende så kommer du direkt rätt.
              </p>
            </div>
          </Reveal>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2">
            {routedBusinesses.map((business, index) => {
              const hasOwnPage = business.href !== "/kontakt";
              return (
                <Reveal key={business.slug} delay={index * 70} as="li">
                  <Link
                    href={business.href}
                    className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-card transition-colors hover:border-petrol/40"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Photo
                        name={business.photo}
                        priority={index < 2}
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7 sm:p-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                        {business.name}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-ink">
                        {business.heading}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted">
                        {business.highlights.slice(0, 3).join(", ")}.
                      </p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-petrol transition-colors group-hover:text-petrol-deep">
                        {hasOwnPage
                          ? `Till ${business.name}`
                          : `Kontakta ${business.name}`}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Why four verksamheter exist at all, which is also the argument for
          picking up the phone. Concrete history, then where it is going. */}
      <section className="bg-petrol-dark">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-copper-soft">Om Kanitas</p>
                <h2 className="mt-4 display-2 text-white">
                  Byggt inifrån, en verksamhet i taget
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={60}>
                <div className="space-y-6 text-lg leading-relaxed text-white/75">
                  <p>
                    Kanitas startade {site.founded} som en byggfirma i Järfälla.
                    De första åren byggde vi åt privatpersoner och mindre
                    fastighetsägare. När NCC, Implenia och ByggPartner började
                    anlita oss som underentreprenör ställdes andra krav: egen
                    personal, egen arbetsledning, dokumenterad egenkontroll och
                    avtal som håller hela vägen till slutbesiktning.
                  </p>
                  <p>
                    De kraven byggde bolaget. Varje ny verksamhet har vuxit fram
                    ur ett behov vi först hade själva. Vi behövde folk med kort
                    varsel, så vi startade ett bemanningsbolag. Vi behövde
                    byggstädning som höll för besiktning, så vi gjorde den
                    själva. Vi behövde maskiner, så vi började handla med dem.
                    Vi behövde lokaler, så vi köpte dem.
                  </p>
                  <p className="text-white">
                    Målet är att en beställare ska kunna vända sig hit för hela
                    kedjan: bygga, bemanna, städa efteråt och hyra ytan när det
                    står klart, utan att upphandla fyra leverantörer och
                    samordna gränssnitten mellan dem.
                  </p>
                </div>
                <Link
                  href="/om-oss"
                  className="mt-10 inline-flex items-center gap-2 rounded-md border border-white/25 px-7 py-3 font-semibold text-white transition-colors hover:border-copper-soft hover:text-copper-soft"
                >
                  Mer om Kanitas
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* References carry more weight than anything we can say about
          ourselves, so they get room rather than a footnote strip. */}
      <section id="referenser" className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-petrol">Uppdragsgivare</p>
              <h2 className="mt-4 display-2 text-ink">
                De som redan har lagt jobbet hos oss
              </h2>
              <p className="mt-4 lead text-muted">
                Återkommande uppdrag åt några av landets största bygg-,
                fastighets- och logistikföretag.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-14 grid grid-cols-2 items-center gap-x-12 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
              {references.map((ref) => (
                <li key={ref.name} className="flex items-center justify-center">
                  <Image
                    src={ref.logo}
                    alt={ref.name}
                    width={220}
                    height={88}
                    className="h-12 w-auto max-w-full object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
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
