import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import { site, type Area } from "@/lib/site";

export type AreaPageProps = {
  area: Area;
  whyTitle: string;
  whyLead: string;
  whyPoints: string[];
  whyImage: { src: string; alt: string };
  secondaryImage: { src: string; alt: string };
};

export default function AreaPage({
  area,
  whyTitle,
  whyLead,
  whyPoints,
  whyImage,
  secondaryImage,
}: AreaPageProps) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: area.name,
    serviceType: area.serviceType,
    description: area.seo.description,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "Storstockholm",
    url: `${site.url}/${area.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[62svh] items-end overflow-hidden bg-dark-deep">
        <Image
          src={area.heroImage}
          alt={area.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/45 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 lg:px-8">
          <p className="eyebrow text-amber">{area.name}</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            {area.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {area.intro}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-6 py-3 font-semibold text-dark-deep transition-colors hover:bg-amber-deep hover:text-white"
            >
              Begär offert
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Tjänster"
              title={`Det här gör ${area.name}`}
            />
          </Reveal>
          <div
            className={`mt-12 grid gap-6 sm:grid-cols-2 ${
              area.services.length % 3 === 0 ? "lg:grid-cols-3" : ""
            }`}
          >
            {area.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 60}>
                <div className="h-full rounded-2xl border border-line bg-card p-7 shadow-[0_4px_24px_rgba(26,25,21,0.04)] transition-shadow hover:shadow-[0_10px_36px_rgba(26,25,21,0.09)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber/15 text-amber-deep">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted">
                    {service.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-cream-dark">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Varför Kanitas" title={whyTitle} lead={whyLead} />
            <ul className="mt-8 space-y-4">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber/20 text-amber-deep">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-ink-soft">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={whyImage.src}
                  alt={whyImage.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-dark">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <SectionHeading
              on="dark"
              eyebrow="Så går det till"
              title="Från förfrågan till färdigt resultat"
            />
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Kontakt & offert",
                text: "Beskriv ditt behov via formuläret eller ring oss. Vi återkommer snabbt med en tydlig offert utan dolda kostnader.",
              },
              {
                step: "02",
                title: "Genomförande",
                text: "Vi planerar, bemannar och genomför uppdraget med en fast kontaktperson som håller dig uppdaterad hela vägen.",
              },
              {
                step: "03",
                title: "Uppföljning",
                text: "Vi går igenom resultatet tillsammans och lämnar inte förrän allt är godkänt – och vi finns kvar efteråt.",
              },
            ].map((item, index) => (
              <li key={item.step}>
                <Reveal delay={index * 80} className="h-full">
                  <div className="h-full rounded-2xl border border-line-dark bg-dark-soft p-8">
                    <span className="font-display text-4xl font-bold text-amber">
                      {item.step}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 leading-relaxed text-white/65">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactSection
        title={`Behöver du hjälp av ${area.name}?`}
        lead="Skicka en förfrågan så återkommer vi med ett förslag – kostnadsfritt och utan förpliktelser."
      />
    </>
  );
}
