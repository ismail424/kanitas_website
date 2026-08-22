import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ValueIcon from "@/components/ValueIcon";
import { activeAreas, ogMeta, references, site, stats, values } from "@/lib/site";

const pageTitle = "Byggföretag & städfirma i Stockholm";
const pageDescription =
  "Kanitas är ett bygg- och städföretag i Järfälla. Nybyggnation, renovering, byggservice och byggstädning i Storstockholm. AAA-kreditvärdighet. Begär offert!";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  ...ogMeta(pageTitle, pageDescription, "/"),
};

/** Content for the home page feature sections, per area. */
const features: Record<
  string,
  { image: string; alt: string; highlights: string[] }
> = {
  bygg: {
    image: "/images/photos/bygg-hero.jpg",
    alt: "Byggarbetare armerar på byggarbetsplats",
    highlights: [
      "Nybyggnation & entreprenad",
      "Renovering & ombyggnation",
      "Byggservice med snabb inställelse",
      "Mark, rivning & sanering",
    ],
  },
  stad: {
    image: "/images/photos/stad-kontor.jpg",
    alt: "Ljust och rent kontorslandskap",
    highlights: [
      "Byggstädning & slutstädning",
      "Kontors- & fastighetsstädning",
      "Flyttstädning med garanti",
      "Storstädning & specialuppdrag",
    ],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero — light, airy, big type left, architecture right */}
      <section className="relative isolate overflow-hidden bg-paper bg-dotgrid">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:min-h-[78svh] lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-24">
          <div className="lg:col-span-6">
            <p className="eyebrow text-copper">
              Bygg & Städ i Storstockholm
            </p>
            <h1 className="mt-7 display-1 text-ink">
              Vi bygger tryggt och lämnar{" "}
              <em className="not-italic text-copper">rent</em> efter oss.
            </h1>
            <p className="mt-7 max-w-xl lead-lg text-muted">
              Kanitas är ett bygg- och städföretag i Järfälla som sedan{" "}
              {site.founded} anlitas av allt från privatpersoner till Sveriges
              största byggbolag.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/bygg"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-copper-deep"
              >
                Våra byggtjänster
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3.5 text-lg font-semibold text-ink transition-colors hover:border-ink"
              >
                <Phone className="h-5 w-5 text-copper" aria-hidden="true" />
                Kontakta oss
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-[5/6]">
              <Image
                src="/images/photos/bygg-stockholm.jpg"
                alt="Modern kontorsbyggnad i Stockholm"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* Overlapping feature card */}
            <div className="absolute -bottom-6 left-4 max-w-xs rounded-2xl bg-umbra p-6 shadow-[0_20px_50px_rgba(19,23,21,0.25)] sm:left-0 lg:-left-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
                Utvalda uppdragsgivare
              </p>
              <p className="mt-2.5 title text-white">
                NCC · Implenia · ByggPartner · Dagab
              </p>
              <Link
                href="/om-oss#referenser"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-sand transition-colors hover:text-white"
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

      {/* Business areas — bygg first and dominant */}
      <section id="verksamheter" className="scroll-mt-24 bg-dotgrid">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="space-y-24 sm:space-y-32">
            {activeAreas.map((area, index) => (
              <Reveal key={area.slug}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(19,23,21,0.10)] ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={features[area.slug]?.image ?? area.heroImage}
                      alt={features[area.slug]?.alt ?? area.heroAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="eyebrow text-copper">{area.name}</p>
                    <h2 className="mt-4 display-2 text-ink">
                      {area.servicesH2}
                    </h2>
                    <p className="mt-5 lead text-muted">
                      {area.teaser}
                    </p>
                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                      {(features[area.slug]?.highlights ?? []).map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper">
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="text-ink-soft">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/${area.slug}`}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-copper px-7 py-3 font-semibold text-white transition-colors hover:bg-copper-deep"
                    >
                      Mer om {area.name}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser + values */}
      <section className="bg-umbra">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/photos/om-oss-team.jpg"
                alt="Arbetslag på byggarbetsplats"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              on="dark"
              eyebrow="Om Kanitas"
              title="Kollektivavtal, AAA och kunder som stannar kvar"
              lead={`Bygg- och städfirman som startade i Järfälla ${site.founded} är i dag en koncern med sex bolag och 35 medarbetare. Allt bygger på en enkel princip: vi levererar det vi lovar.`}
            />
            <ul className="mt-9 space-y-5">
              {values.map((value) => (
                <li key={value.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-umbra bg-umbra-soft text-sand">
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
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 font-semibold text-white transition-colors hover:border-sand hover:text-sand"
            >
              Mer om oss
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
                  className="flex h-24 items-center justify-center rounded-xl border border-line bg-card px-6 transition-colors hover:border-copper/40"
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
      <section className="relative isolate overflow-hidden bg-umbra-deep">
        <Image
          src="/images/photos/sthlm-panorama.jpg"
          alt="Vy över Riddarholmen i Stockholm i skymningen"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-umbra-deep/85 via-umbra-deep/50 to-umbra-deep/15"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8">
          <Reveal>
            <p className="eyebrow text-sand">Storstockholm</p>
            <h2 className="mt-4 max-w-2xl display-2 text-white">
              Järfälla är basen. Hela Storstockholm är arbetsplatsen.
            </h2>
            <p className="mt-4 max-w-xl lead text-white/80">
              Från Almarevägen i Järfälla når vi snabbt byggarbetsplatser,
              kontor och lager i hela Stockholmsområdet.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA banner */}
      <section className="border-y border-line bg-sand-pale">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="display-2 text-ink">
              Har du ett projekt på gång?
            </h2>
            <p className="mt-3 max-w-xl text-lg text-muted">
              Ring oss direkt eller skicka en offertförfrågan. Vi återkommer
              oftast samma dag.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-3.5 text-lg font-semibold text-ink transition-colors hover:border-ink"
            >
              <Phone className="h-5 w-5 text-copper" aria-hidden="true" />
              {site.phone}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-copper-deep"
            >
              Begär offert
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
