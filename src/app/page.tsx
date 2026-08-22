import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { activeAreas, ogMeta, references, site, stats, values } from "@/lib/site";

const pageTitle = "Kanitas – Byggföretag & städfirma i Stockholm";
const pageDescription =
  "Kanitas är ett familjeägt bygg- och städföretag i Järfälla. Nybyggnation, renovering, byggservice och byggstädning i Storstockholm. AAA-kreditvärdighet. Begär offert!";

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
    image: "/images/photos/bygg-nybyggnation.jpg",
    alt: "Nybyggd modern villa i skymning",
    highlights: [
      "Nybyggnation & entreprenad",
      "Renovering & ombyggnation",
      "Byggservice med snabb inställelse",
      "Mark, rivning & sanering",
    ],
  },
  stad: {
    image: "/images/photos/stad-detalj.jpg",
    alt: "Professionell städvagn i fastighetskorridor",
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
      {/* Hero — bygg-led */}
      <section className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-dark-deep">
        <Image
          src="/images/photos/home-hero.jpg"
          alt="Byggkranar över stomme i skymning"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/40 to-dark-deep/20"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="eyebrow text-amber">Bygg & Städ – Storstockholm</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Vi bygger tryggt – och lämnar{" "}
            <em className="not-italic text-amber">rent</em> efter oss
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Familjeägt byggföretag i Järfälla med egen städverksamhet – sedan{" "}
            {site.founded} anlitade av allt från privatpersoner till Sveriges
            största byggbolag.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/bygg"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-7 py-3.5 text-lg font-semibold text-dark-deep transition-colors hover:bg-amber-deep hover:text-white"
            >
              Våra byggtjänster
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-lg font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar overlapping the hero */}
      <div className="relative z-10 mx-auto -mt-14 max-w-5xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 divide-line overflow-hidden rounded-2xl border border-line bg-card shadow-[0_16px_60px_rgba(26,25,21,0.12)] sm:grid-cols-4 sm:divide-x">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse px-6 py-7 text-center"
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
      <section id="verksamheter" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="space-y-20 sm:space-y-24">
            {activeAreas.map((area, index) => (
              <Reveal key={area.slug}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(26,25,21,0.12)] ${
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
                    <p className="eyebrow" style={{ color: area.toneDeep }}>
                      {area.name}
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl">
                      {area.servicesH2}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-muted">
                      {area.teaser}
                    </p>
                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                      {(features[area.slug]?.highlights ?? []).map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span
                            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                            style={{
                              backgroundColor: `${area.tone}26`,
                              color: area.toneDeep,
                            }}
                          >
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="text-ink-soft">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/${area.slug}`}
                      className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber px-6 py-3 font-semibold text-dark-deep transition-colors hover:bg-amber-deep hover:text-white"
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
      <section className="bg-dark">
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
              title="Familjeägt, med kollektivavtal och byggt på förtroende"
              lead={`Bygg- och städfirman som startade i Järfälla ${site.founded} är i dag en koncern med sex bolag och 35 medarbetare – byggd på en enda princip: leverera det vi lovat.`}
            />
            <ul className="mt-8 flex flex-wrap gap-3">
              {values.map((value) => (
                <li
                  key={value.title}
                  className="inline-flex items-center gap-2.5 rounded-full border border-line-dark bg-dark-soft px-5 py-2.5"
                >
                  <span
                    className="h-1.5 w-4 rounded-full bg-amber"
                    aria-hidden="true"
                  />
                  <span className="font-display font-semibold text-white">
                    {value.title}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/om-oss"
              className="mt-9 inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:border-amber hover:text-amber"
            >
              Mer om oss
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* References */}
      <section id="referenser">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
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
                  className="flex h-24 items-center justify-center rounded-xl border border-line bg-card px-6 transition-colors hover:border-amber/50"
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

      {/* CTA banner */}
      <section className="border-y border-line bg-amber-pale">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Har du ett projekt på gång?
            </h2>
            <p className="mt-3 max-w-xl text-lg text-muted">
              Ring oss direkt eller skicka en offertförfrågan – vi återkommer
              oftast samma dag.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink/20 px-7 py-3.5 text-lg font-semibold text-ink transition-colors hover:border-ink"
            >
              <Phone className="h-5 w-5 text-amber-deep" aria-hidden="true" />
              {site.phone}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-7 py-3.5 text-lg font-semibold text-dark-deep transition-colors hover:bg-amber-deep hover:text-white"
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
