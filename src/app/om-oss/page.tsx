import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  groupCompanies,
  ogMeta,
  references,
  site,
  stats,
  values,
} from "@/lib/site";

const pageTitle = "Om oss – familjeägd koncern i Järfälla sedan 2011";
const pageDescription =
  "Kanitas grundades 2011 i Järfälla och är i dag en koncern med sex bolag inom bygg, städ, fastigheter och bil. AAA-kreditvärdighet, kollektivavtal och kunder som NCC och Implenia.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/om-oss" },
  ...ogMeta(pageTitle, pageDescription, "/om-oss"),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: site.url },
    { "@type": "ListItem", position: 2, name: "Om oss", item: `${site.url}/om-oss` },
  ],
};

export default function OmOssPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="hero-umbra relative isolate overflow-hidden">
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44 lg:px-8">
          <p className="eyebrow text-sand">Om Kanitas</p>
          <h1 className="mt-5 max-w-3xl display-1 text-white">
            Byggt på förtroende sedan {site.founded}
          </h1>
          <p className="mt-6 max-w-2xl lead text-white/75">
            Familjeägt bygg- och städföretag i Järfälla – i dag en koncern med
            sex bolag och 35 medarbetare.
          </p>
        </div>
      </section>

      {/* Story */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Vår historia"
                title="Från bygg- och städfirma i Järfälla till koncern med fyra verksamheter"
              />
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  Kanitas AB grundades {site.founded} i Järfälla med en enkel
                  idé: gör jobbet ordentligt, håll det du lovar och behandla
                  varje kund som den viktigaste. Det som började med bygg- och
                  städtjänster växte snabbt när några av Sveriges största
                  byggbolag upptäckte att vi levererade – varje gång.
                </p>
                <p>
                  I dag är vi en familjeägd koncern med sex bolag och 35
                  medarbetare, verksamma inom bygg, städ, fastigheter och
                  bilhandel. Bredden är vår styrka: vi kan ta ansvar för hela
                  kedjan, från markarbete och nybyggnation till slutstädning,
                  förvaltning och fordon.
                </p>
                <p>
                  Men storleken har aldrig varit målet. Målet är detsamma som{" "}
                  {site.founded}: nöjda kunder som gärna kommer tillbaka – och
                  som vågar rekommendera oss vidare.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid gap-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/photos/om-oss-hantverk.jpg"
                    alt="Hantverkare i arbetskläder på byggarbetsplats"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <dl className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse rounded-2xl border border-line bg-card p-6 text-center"
                    >
                      <dt className="mt-1 text-sm font-medium text-muted">
                        {stat.label}
                      </dt>
                      <dd className="font-display text-3xl font-bold text-ink">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-umbra">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <SectionHeading
              on="dark"
              eyebrow="Våra värderingar"
              title="Tre löften som styr allt vi gör"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-line-umbra bg-umbra-soft p-8">
                  <span
                    className="block h-2 w-10 rounded-full bg-sand"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 title text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/65">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Group companies */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Koncernen"
              title="Sex bolag – en helhet"
              lead="Kanitas AB är moderbolag i en koncern där varje bolag är specialiserat på sitt område. Tillsammans täcker vi hela kedjan."
            />
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {groupCompanies.map((company) => (
                <li
                  key={company.orgnr}
                  className="rounded-2xl border border-line bg-card p-6"
                >
                  <h3 className="font-display font-bold text-ink">
                    {company.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Org.nr {company.orgnr}
                  </p>
                  <p className="mt-3 text-ink-soft">{company.role}</p>
                  {"area" in company && company.area ? (
                    <Link
                      href={company.area}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-copper hover:text-ink"
                    >
                      {company.areaLabel}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* References */}
      <section id="referenser" className="scroll-mt-24 bg-paper-2">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Referenser"
              title="Kunder som ställer krav – och kommer tillbaka"
              lead="Vi arbetar som partner och underentreprenör åt några av Sveriges ledande bygg-, fastighets- och logistikföretag."
            />
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {references.map((ref) => (
                <li
                  key={ref.name}
                  className="flex h-24 items-center justify-center rounded-xl border border-line bg-card px-6"
                >
                  <Image
                    src={ref.logo}
                    alt={ref.name}
                    width={140}
                    height={56}
                    className="max-h-12 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                </li>
              ))}
            </ul>
          </Reveal>

        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-line bg-sand-pale">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="display-2 text-ink">
              Vad kan vi hjälpa dig med?
            </h2>
            <p className="mt-3 max-w-xl text-lg text-muted">
              Oavsett om du behöver en byggpartner, en städfirma, en lokal
              eller en bil – hör av dig så hittar vi rätt lösning.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-copper-deep"
          >
            Kontakta oss
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
