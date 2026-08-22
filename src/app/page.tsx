import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { areas, references, site, stats, values } from "@/lib/site";

const pageTitle = "Kanitas – Bygg, städ, fastigheter & bil i Stockholm";
const pageDescription =
  "Kanitas är en familjeägd koncern i Järfälla med fyra verksamhetsområden: bygg, städ, fastigheter och bil. AAA-kreditvärdighet, kollektivavtal och kunder som NCC och Implenia. Begär offert!";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: { title: pageTitle, description: pageDescription, url: "/" },
  twitter: { title: pageTitle, description: pageDescription },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
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
          <p className="eyebrow text-amber">
            Bygg · Städ · Fastigheter · Bil – Stockholm
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Vi bygger och tar hand om{" "}
            <em className="not-italic text-amber">hela kedjan</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Kanitas är en familjeägd koncern i Järfälla med fyra
            verksamhetsområden – bygg, städ, fastigheter och bil. Sedan{" "}
            {site.founded} levererar vi projekt i tid, inom budget och med
            hantverksstolthet.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#verksamheter"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-7 py-3.5 text-lg font-semibold text-dark-deep transition-colors hover:bg-amber-deep hover:text-white"
            >
              Våra verksamheter
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

      {/* Business areas */}
      <section id="verksamheter" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Verksamheter"
              title="En koncern. Fyra sätt att hjälpa dig."
              lead="Bygg är vår kärna – och med städ, fastigheter och bilaffärer i samma koncern kan vi ta ansvar för helheten."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {areas.map((area, index) => (
              <Reveal
                key={area.slug}
                delay={index * 80}
                className={index === 0 ? "lg:col-span-3" : ""}
              >
                <Link
                  href={`/${area.slug}`}
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-[0_4px_24px_rgba(26,25,21,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(26,25,21,0.12)] ${
                    index === 0 ? "lg:flex-row" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      index === 0 ? "aspect-[16/9] lg:aspect-auto lg:w-3/5" : "aspect-[16/9]"
                    }`}
                  >
                    <Image
                      src={area.heroImage}
                      alt={area.heroAlt}
                      fill
                      sizes={index === 0 ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div
                    className={`flex flex-1 flex-col p-6 sm:p-8 ${
                      index === 0 ? "lg:justify-center lg:p-12" : ""
                    }`}
                  >
                    <p className="eyebrow text-amber-deep">{area.tagline}</p>
                    <h3
                      className={`mt-3 font-display font-bold tracking-tight text-ink ${
                        index === 0 ? "text-2xl sm:text-3xl" : "text-xl"
                      }`}
                    >
                      {area.name}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {area.teaser}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 font-semibold text-amber-deep">
                      Läs mer
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
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
              lead={`Det som började som en bygg- och städfirma i Järfälla ${site.founded} är i dag en koncern med sex bolag och 35 medarbetare. Vägen hit har gått genom en sak: att alltid leverera det vi lovat.`}
            />
            <ul className="mt-8 space-y-5">
              {values.map((value) => (
                <li key={value.title} className="flex gap-4">
                  <span
                    className="mt-2.5 h-2 w-6 shrink-0 rounded-full bg-amber"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-white/65">{value.text}</p>
                  </div>
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
              lead="Vi arbetar sedan många år som partner och underentreprenör åt några av landets största bygg-, fastighets- och logistikföretag."
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
