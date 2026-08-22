import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { BrandLockup } from "@/components/Logo";
import Reveal from "@/components/Reveal";
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
  const pageUrl = `${site.url}/${area.slug}`;
  const businessId = `${pageUrl}#business`;

  const graph: object[] = [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: area.name,
      serviceType: area.serviceType,
      description: area.seo.description,
      provider: area.businessType
        ? { "@id": businessId }
        : { "@id": `${site.url}/#organization` },
      areaServed: "Storstockholm",
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: site.url },
        { "@type": "ListItem", position: 2, name: area.name, item: pageUrl },
      ],
    },
  ];

  if (area.businessType) {
    graph.push({
      "@type": area.businessType,
      "@id": businessId,
      name: area.name,
      url: pageUrl,
      telephone: "+46706653248",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.postalCode,
        addressLocality: site.address.city,
        addressCountry: site.address.country,
      },
      parentOrganization: { "@id": `${site.url}/#organization` },
    });
  }

  if (area.faq) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: area.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — clean copper gradient with sub-brand lockup */}
      <section className="hero-umbra relative isolate overflow-hidden">
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-36 sm:px-6 sm:pb-28 sm:pt-44 lg:px-8">
          <BrandLockup suffix={area.slug} tone="#c7a263" />
          <h1 className="mt-8 max-w-3xl display-1 text-white">
            {area.h1}
          </h1>
          <p className="mt-6 max-w-2xl lead text-white/75">
            {area.intro}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-7 py-3 font-semibold text-copper transition-colors hover:bg-sand hover:text-umbra-deep"
            >
              {area.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-dotgrid">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-copper">Tjänster</p>
              <h2 className="mt-4 display-2 text-ink">
                {area.servicesH2}
              </h2>
            </div>
          </Reveal>
          <div
            className={`mt-14 grid gap-6 sm:grid-cols-2 ${
              area.services.length % 3 === 0 ? "lg:grid-cols-3" : ""
            }`}
          >
            {area.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 50}>
                <div className="h-full rounded-2xl border border-line bg-card p-8 transition-shadow hover:shadow-[0_10px_36px_rgba(19,23,21,0.08)]">
                  <ServiceIcon name={service.icon} />
                  <h3 className="mt-5 title text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted">
                    {service.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          {area.related ? (
            <Reveal delay={100}>
              <p className="mt-12 text-lg text-ink-soft">
                {area.related.text}{" "}
                <Link
                  href={area.related.href}
                  className="font-semibold text-copper underline decoration-copper/30 underline-offset-4 transition-colors hover:text-ink"
                >
                  {area.related.label}
                </Link>
                .
              </p>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* Extra content section (checklist / inventory) */}
      {area.extraSection ? (
        <section className="border-y border-line bg-paper-2">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <Reveal>
              <div className="max-w-2xl">
                <p className="eyebrow text-copper">{area.extraSection.eyebrow}</p>
                <h2 className="mt-4 display-2 text-ink">
                  {area.extraSection.title}
                </h2>
                {area.extraSection.lead ? (
                  <p className="mt-5 lead text-muted">
                    {area.extraSection.lead}
                  </p>
                ) : null}
              </div>
            </Reveal>
            <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {area.extraSection.items.map((item, index) => (
                <Reveal key={item.title} delay={index * 50}>
                  <div className="flex gap-4">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="title text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 leading-relaxed text-muted">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Why us */}
      <section>
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-copper">Varför Kanitas</p>
              <h2 className="mt-4 display-2 text-ink">
                {whyTitle}
              </h2>
              <p className="mt-5 lead text-muted">
                {whyLead}
              </p>
            </div>
            <ul className="mt-9 space-y-4">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-ink-soft">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-5">
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
      <section className="bg-umbra">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-sand">Så går det till</p>
              <h2 className="mt-4 display-2 text-white">
                Så arbetar {area.name}
              </h2>
            </div>
          </Reveal>
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {area.process.map((item, index) => (
              <li key={item.step}>
                <Reveal delay={index * 70} className="h-full">
                  <div className="h-full rounded-2xl border border-line-umbra bg-umbra-soft p-8">
                    <span className="font-display text-4xl font-bold text-sand">
                      {item.step}
                    </span>
                    <h3 className="mt-4 title text-white">
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

      {/* FAQ */}
      {area.faq ? (
        <section>
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <Reveal>
              <div className="max-w-2xl">
                <p className="eyebrow text-copper">Vanliga frågor</p>
                <h2 className="mt-4 display-2 text-ink">
                  Frågor och svar om {area.nav.toLowerCase()}
                </h2>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {area.faq.map((item, index) => (
                <Reveal key={item.q} delay={index * 50}>
                  <div className="h-full rounded-2xl border border-line bg-card p-8">
                    <h3 className="title text-ink">
                      {item.q}
                    </h3>
                    <p className="mt-2.5 leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ContactSection
        title={`Behöver du hjälp av ${area.name}?`}
        lead="Skicka en förfrågan så återkommer vi med ett förslag, kostnadsfritt och utan förpliktelser."
        topic={area.nav}
      />
    </>
  );
}
