import Link from "next/link";
import { ArrowRight, Check, Info } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import FaqList from "@/components/FaqList";
import LogoWall from "@/components/LogoWall";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TrustSection from "@/components/TrustSection";
import BuildScene from "@/components/scene/BuildScene";
import CleanScene from "@/components/scene/CleanScene";
import { site, type Area, type AreaSection } from "@/lib/site";

const scenes = { build: BuildScene, clean: CleanScene };

/** How a job runs, beside the page's animated picture. */
function Process({ process }: { process: NonNullable<Area["process"]> }) {
  const Scene = scenes[process.scene];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal variant="scale" className="overflow-hidden lg:col-span-6">
          <Scene />
        </Reveal>
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <SectionHeading title={process.title} />
          </Reveal>
          <ol className="mt-10 space-y-7">
            {process.steps.map((step, index) => (
              <Reveal
                key={step.title}
                as="li"
                delay={index * 90}
                className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4"
              >
                <span
                  aria-hidden="true"
                  className="index grid h-9 w-9 place-items-center rounded-full bg-petrol text-sm text-white"
                >
                  {index + 1}
                </span>
                <div className="pt-1">
                  <h3 className="title text-ink">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

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
          <p className="mt-2 max-w-md leading-relaxed text-muted">
            {item.text}
          </p>
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

      {area.tags ? (
        <section className="pb-24 sm:pb-32">
          <Reveal className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 border-t border-line pt-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="display-3 text-ink">{area.tags.title}</h2>
                <p className="mt-3 max-w-md leading-relaxed text-muted">
                  {area.tags.text}
                </p>
              </div>
              <ul className="flex flex-wrap content-start gap-3 lg:col-span-7">
                {area.tags.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-paper-2 px-5 py-2.5 font-medium text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>
      ) : null}

      <div
        className={`mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 sm:px-6 lg:gap-6 lg:px-8 ${
          area.photos.length > 1 ? "sm:grid-cols-2" : ""
        }`}
      >
        {area.photos.map((photo, index) => (
          <Reveal key={photo} variant="scale" delay={index * 90}>
            <div
              className={`relative overflow-hidden bg-paper-2 ${
                area.photos.length > 1
                  ? "aspect-[4/3]"
                  : "aspect-[3/2] sm:aspect-[21/9]"
              }`}
            >
              <Photo
                name={photo}
                sizes={
                  area.photos.length > 1
                    ? "(min-width: 1280px) 600px, (min-width: 640px) 50vw, 100vw"
                    : "(min-width: 1280px) 1216px, 100vw"
                }
              />
            </div>
          </Reveal>
        ))}
      </div>

      {area.process ? <Process process={area.process} /> : null}

      {area.checklist ? (
        <section className="border-t border-line py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading title={area.checklist.title} />
            </Reveal>
            <Reveal delay={60}>
              <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {area.checklist.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-relaxed text-ink-soft"
                  >
                    <Check
                      className="mt-1 h-5 w-5 shrink-0 text-petrol"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ) : null}

      {(area.sections ?? []).map((section) => (
        <Section key={section.title} section={section} />
      ))}

      {area.callout ? (
        <section className="pb-24 sm:pb-32">
          <Reveal className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 border-l-4 border-petrol bg-petrol-pale px-6 py-8 sm:flex-row sm:gap-6 sm:px-10 sm:py-10">
              <Info
                className="h-7 w-7 shrink-0 text-petrol"
                aria-hidden="true"
              />
              <div>
                <h2 className="display-3 text-ink">{area.callout.title}</h2>
                <p className="mt-3 max-w-3xl lead text-ink-soft">
                  {area.callout.text}
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      ) : null}

      {/* One tinted band per stretch: the trust points take the tint unless
          the page already has a tinted list just above them. */}
      <TrustSection
        className={
          area.sections?.some((section) => section.layout === "list")
            ? ""
            : "bg-paper-2"
        }
      />

      {area.faq ? (
        <section className="border-t border-line py-24 sm:py-32">
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
