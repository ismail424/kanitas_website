import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Photo from "@/components/Photo";
import { BrandLockup } from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { site, type Area, type PhotoName } from "@/lib/site";

export type AreaPageProps = {
  area: Area;
  whyTitle: string;
  whyLead: string;
  whyPoints: string[];
  whyPhoto: PhotoName;
  secondaryPhoto: PhotoName;
};

export default function AreaPage({
  area,
  whyTitle,
  whyLead,
  whyPoints,
  whyPhoto,
  secondaryPhoto,
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

      {/* Hero — clean petrol gradient with sub-brand lockup */}
      <section className="hero-deep relative isolate overflow-hidden">
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-36 sm:px-6 sm:pb-28 sm:pt-44 lg:px-8">
          <BrandLockup suffix={area.name.replace(/^Kanitas\s+/, "")} />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
            {area.tagline}
          </p>
          <h1 className="mt-8 max-w-3xl display-1 text-white">
            {area.h1}
          </h1>
          <p className="mt-6 max-w-2xl lead text-white/75">
            {area.intro}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-paper px-7 py-3 font-semibold text-petrol transition-colors hover:bg-copper-soft hover:text-petrol-darker"
            >
              {area.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-7 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-petrol">Tjänster</p>
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
              <Reveal key={service.title} delay={index * 40}>
                <div className="border-t border-line pt-6">
                  <h3 className="title text-ink">{service.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">
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
                  className="font-semibold text-petrol underline decoration-petrol/30 underline-offset-4 transition-colors hover:text-ink"
                >
                  {area.related.label}
                </Link>
                .
              </p>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* Deep-dive sections: how it works, checklists, who we build for.
          Alternating surfaces keep several of them from reading as one slab. */}
      {(area.extraSections ?? []).map((section, sectionIndex) => (
        <section
          key={section.title}
          className={
            sectionIndex % 2 === 0
              ? "border-y border-line bg-paper-2"
              : "border-b border-line bg-paper"
          }
        >
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <Reveal>
              <div className="max-w-2xl">
                <p className="eyebrow text-petrol">{section.eyebrow}</p>
                <h2 className="mt-4 display-2 text-ink">{section.title}</h2>
                {section.lead ? (
                  <p className="mt-5 lead text-muted">{section.lead}</p>
                ) : null}
              </div>
            </Reveal>
            <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {section.items.map((item, index) => (
                <Reveal key={item.title} delay={index * 50}>
                  <div className="border-t border-line pt-6">
                    <h3 className="title text-ink">{item.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why us */}
      <section>
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-petrol">Varför Kanitas</p>
              <h2 className="mt-4 display-2 text-ink">
                {whyTitle}
              </h2>
              <p className="mt-5 lead text-muted">
                {whyLead}
              </p>
            </div>
            <ul className="mt-9 divide-y divide-line border-y border-line">
              {whyPoints.map((point) => (
                <li key={point} className="py-3.5 text-ink-soft">
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Photo
                  name={whyPhoto}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Photo
                  name={secondaryPhoto}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      {area.faq ? (
        <section>
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <Reveal>
              <div className="max-w-2xl">
                <p className="eyebrow text-petrol">Vanliga frågor</p>
                <h2 className="mt-4 display-2 text-ink">
                  Frågor och svar om {area.nav.toLowerCase()}
                </h2>
              </div>
            </Reveal>
            <dl className="mt-12 divide-y divide-line border-y border-line">
              {area.faq.map((item, index) => (
                <Reveal key={item.q} delay={index * 40}>
                  <div className="grid gap-2 py-7 lg:grid-cols-12 lg:gap-10">
                    <dt className="title text-ink lg:col-span-5">{item.q}</dt>
                    <dd className="leading-relaxed text-muted lg:col-span-7">
                      {item.a}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      <ContactSection
        title={`Behöver du hjälp av ${area.name}?`}
        lead="Skicka en förfrågan så återkommer vi med ett förslag, kostnadsfritt och utan förpliktelser."
        topic={area.contactTopic}
      />
    </>
  );
}
