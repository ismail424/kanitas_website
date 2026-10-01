import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import FaqList from "@/components/FaqList";
import LogoWall from "@/components/LogoWall";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site, type Area, type AreaSection } from "@/lib/site";

/** Items as plain text blocks: a short title and one sentence each. */
function Items({
  items,
  className,
  numbered = false,
}: {
  items: AreaSection["items"];
  className: string;
  numbered?: boolean;
}) {
  const List = numbered ? "ol" : "ul";
  return (
    <List className={`grid grid-cols-1 ${className}`}>
      {items.map((item, index) => (
        <li key={item.title}>
          {numbered ? (
            <p aria-hidden="true" className="index mb-3 text-sm text-petrol">
              {index + 1}
            </p>
          ) : null}
          <h3 className="title text-ink">{item.title}</h3>
          <p className="mt-2 max-w-md leading-relaxed text-muted">{item.text}</p>
        </li>
      ))}
    </List>
  );
}

function Section({ section }: { section: AreaSection }) {
  const tinted = section.layout === "list";
  return (
    <section className={`py-24 sm:py-32 ${tinted ? "bg-paper-2" : ""}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {tinted ? (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionHeading title={section.title} />
            </Reveal>
            <Reveal delay={60} className="lg:col-span-7">
              <Items
                items={section.items}
                className="gap-x-12 gap-y-10 sm:grid-cols-2"
              />
            </Reveal>
          </div>
        ) : (
          <>
            <Reveal>
              <SectionHeading title={section.title} />
            </Reveal>
            <Reveal delay={60}>
              <Items
                items={section.items}
                numbered={section.layout === "steps"}
                className="mt-14 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
              />
            </Reveal>
          </>
        )}

        {section.references ? (
          <Reveal className="mt-20 border-t border-line pt-12 sm:mt-24">
            <h3 className="label text-muted">Några av våra uppdragsgivare</h3>
            <LogoWall className="mt-10" />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export default function AreaPage({ area }: { area: Area }) {
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
        title={area.h1}
        lead={area.intro}
        photo={area.heroPhoto}
        actions={
          <>
            <Link href="#kontakt" className="btn btn-light">
              {area.ctaLabel}
              <ArrowRight aria-hidden="true" />
            </Link>
            <a
              href={site.phoneHref}
              className="font-semibold text-white underline-offset-4 hover:underline"
            >
              Ring {site.phone}
            </a>
          </>
        }
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={area.servicesH2} />
          </Reveal>
          <Reveal delay={60}>
            <Items
              items={area.services}
              className={`mt-14 gap-x-10 gap-y-12 sm:grid-cols-2 ${serviceColumns}`}
            />
          </Reveal>
          {area.related ? (
            <Reveal className="mt-16">
              <Link
                href={area.related.href}
                className="link-arrow text-petrol hover:text-ink"
              >
                {area.related.label}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Reveal>
          ) : null}
        </div>
      </section>

      <Reveal
        variant="scale"
        className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"
      >
        <div className="relative aspect-[3/2] overflow-hidden bg-paper-2 sm:aspect-[21/9]">
          <Photo name={area.photo} sizes="(min-width: 1280px) 1216px, 100vw" />
        </div>
      </Reveal>

      {(area.sections ?? []).map((section) => (
        <Section key={section.title} section={section} />
      ))}

      {area.faq ? (
        <section className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <Reveal className="lg:col-span-4">
              <SectionHeading title="Vanliga frågor" />
            </Reveal>
            <Reveal delay={60} className="lg:col-span-8">
              <FaqList items={area.faq} />
            </Reveal>
          </div>
        </section>
      ) : null}

      <ContactSection
        title={`Begär offert från ${area.name}`}
        topic={area.contactTopic}
      />
    </>
  );
}
