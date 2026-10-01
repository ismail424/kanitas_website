import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Blueprint, { type BlueprintName } from "@/components/Blueprint";
import ContactSection from "@/components/ContactSection";
import FaqList from "@/components/FaqList";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { BrandLockup } from "@/components/Logo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { indexNumber } from "@/lib/format";
import { site, type Area, type PhotoName } from "@/lib/site";

export type AreaPageProps = {
  area: Area;
  whyTitle: string;
  whyLead: string;
  whyPoints: string[];
  /** Opens the page beside the headline. */
  heroPhoto: PhotoName;
  /** Three photographs after the services, each labelled with a service. */
  gallery: { photo: PhotoName; label: string }[];
  /** Full-bleed band before the questions. */
  bandPhoto: PhotoName;
  /** Line drawing for the verksamhet, drawn beside the "why" points. */
  drawing: BlueprintName;
};

export default function AreaPage({
  area,
  whyTitle,
  whyLead,
  whyPoints,
  heroPhoto,
  gallery,
  bandPhoto,
  drawing,
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
      telephone: site.phoneIntl,
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

  // Eight services sit as four by two, six as three by two: never a ragged row.
  const serviceColumns =
    area.services.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        crumbs={[
          { href: "/#verksamheter", label: "Verksamheter" },
          { href: `/${area.slug}`, label: area.name },
        ]}
        kicker={<BrandLockup suffix={area.name.replace(/^Kanitas\s+/, "")} />}
        title={area.h1}
        lead={area.intro}
        photo={heroPhoto}
        actions={
          <>
            <Link href="#kontakt" className="btn btn-light">
              {area.ctaLabel}
              <ArrowRight aria-hidden="true" />
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              <Phone aria-hidden="true" />
              {site.phone}
            </a>
          </>
        }
      />

      {/* Services: a numbered spec sheet rather than a list of cards. */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Tjänster" title={area.servicesH2} />
          </Reveal>
          <Reveal delay={60}>
            <ol
              className={`mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 ${serviceColumns}`}
            >
              {area.services.map((service, index) => (
                <li key={service.title} className="bg-paper px-6 py-8 sm:px-7 lg:py-9">
                  <span className="index text-sm text-copper-ink">
                    {indexNumber(index)}
                  </span>
                  <h3 className="mt-4 title text-ink">{service.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">
                    {service.text}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
          {area.related ? (
            <Reveal delay={100}>
              <Link
                href={area.related.href}
                className="group mt-12 flex items-center justify-between gap-6 border border-line bg-paper-2 px-6 py-5 transition-colors hover:border-petrol/40 sm:px-8"
              >
                <span className="text-lg text-ink-soft">
                  {area.related.text}{" "}
                  <span className="font-semibold text-petrol">
                    {area.related.label}
                  </span>
                </span>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-petrol transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* Three photographs, one per kind of work, so the services list is
          followed by something to look at rather than more text. */}
      <section aria-label="Bilder från verksamheten" className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:grid-rows-2 lg:px-8">
          {gallery.map((item, index) => (
            <Reveal
              key={item.photo}
              variant="scale"
              delay={index * 90}
              className={
                index === 0
                  ? "sm:col-span-2 lg:col-span-7 lg:row-span-2"
                  : "lg:col-span-5"
              }
            >
              <figure className="group relative h-full min-h-[15rem] overflow-hidden sm:min-h-[17rem]">
                <Photo
                  name={item.photo}
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 58vw, 100vw"
                      : "(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                  }
                  className="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-petrol-darker/85 to-transparent px-5 pb-4 pt-12">
                  <span className="label text-white">{item.label}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Deep-dive sections: heading beside the items, or a sequence when
          the items happen in order. Alternating surfaces keep several of them
          from reading as one slab. */}
      {(area.extraSections ?? []).map((section, sectionIndex) => (
        <section
          key={section.title}
          className={
            sectionIndex % 2 === 0
              ? "border-b border-line bg-paper-2"
              : "border-b border-line bg-paper"
          }
        >
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            {section.layout === "steps" ? (
              <>
                <Reveal>
                  <SectionHeading
                    eyebrow={section.eyebrow}
                    title={section.title}
                    lead={section.lead}
                  />
                </Reveal>
                <ol className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                  {section.items.map((item, index) => (
                    <Reveal key={item.title} as="li" delay={index * 70}>
                      <div className="flex items-center gap-4">
                        <span className="index grid h-11 w-11 shrink-0 place-items-center rounded-xs border-2 border-petrol text-sm text-petrol">
                          {indexNumber(index)}
                        </span>
                        {index < section.items.length - 1 ? (
                          <span
                            aria-hidden="true"
                            className="hidden h-0.5 flex-1 bg-line lg:block"
                          />
                        ) : null}
                      </div>
                      <h3 className="mt-6 title text-ink">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted">
                        {item.text}
                      </p>
                    </Reveal>
                  ))}
                </ol>
              </>
            ) : (
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                <Reveal className="lg:col-span-5">
                  <SectionHeading
                    eyebrow={section.eyebrow}
                    title={section.title}
                    lead={section.lead}
                    className="lg:sticky lg:top-28"
                  />
                </Reveal>
                <ol className="divide-y divide-line border-y border-line lg:col-span-7">
                  {section.items.map((item, index) => (
                    <Reveal
                      key={item.title}
                      as="li"
                      delay={index * 50}
                      className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 py-7 sm:grid-cols-[3.5rem_minmax(0,1fr)]"
                    >
                      <span className="index pt-0.5 text-sm text-copper-ink">
                        {indexNumber(index)}
                      </span>
                      <div>
                        <h3 className="title text-ink">{item.title}</h3>
                        <p className="mt-2 leading-relaxed text-muted">
                          {item.text}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Why us: the claims a buyer checks, on the one dark band. */}
      <section className="relative isolate overflow-hidden bg-petrol-dark">
        <div className="mx-auto grid grid-cols-1 max-w-7xl gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              on="dark"
              eyebrow={`Varför ${area.name}`}
              title={whyTitle}
              lead={whyLead}
            />
            <Blueprint
              name={drawing}
              className="mt-12 hidden w-full max-w-sm text-white/70 [--bp-accent:var(--color-copper-soft)] [--bp-stroke:1.1] lg:block"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-7">
            <ul className="divide-y divide-line-deep border-y border-line-deep">
              {whyPoints.map((point, index) => (
                <li
                  key={point}
                  className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)]"
                >
                  <span className="index pt-0.5 text-sm text-copper-soft">
                    {indexNumber(index)}
                  </span>
                  <span className="text-lg leading-relaxed text-white/85">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <div className="parallax relative isolate h-[42svh] min-h-[280px] overflow-hidden sm:h-[56svh]">
        <Photo name={bandPhoto} sizes="100vw" />
      </div>

      {area.faq ? (
        <section className="py-24 sm:py-32">
          <div className="mx-auto grid grid-cols-1 max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <Reveal className="lg:col-span-4">
              <SectionHeading
                eyebrow="Vanliga frågor"
                title={`Frågor och svar om ${area.nav.toLowerCase()}`}
                className="lg:sticky lg:top-28"
              />
            </Reveal>
            <Reveal delay={60} className="lg:col-span-8">
              <FaqList items={area.faq} />
            </Reveal>
          </div>
        </section>
      ) : null}

      <ContactSection
        title={`Begär offert från ${area.name}`}
        lead="Skicka en förfrågan så återkommer vi med ett förslag, kostnadsfritt och utan förpliktelser."
        topic={area.contactTopic}
      />
    </>
  );
}
