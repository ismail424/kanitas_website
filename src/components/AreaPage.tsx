import type { Metadata } from "next";
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
import { dictionaries } from "@/content";
import type { AreaCopy, AreaSection, Dictionary } from "@/content/types";
import { localeHref, type Locale } from "@/lib/i18n";
import {
  absoluteUrl,
  areaPages,
  businesses,
  businessSlugs,
  groupCompanies,
  pageMetadata,
  phoneFor,
  servicePages,
  serviceSlugs,
  site,
  type AreaPage as AreaConfig,
  type AreaSlug,
  type PhotoName,
  type ServiceSlug,
} from "@/lib/site";

/** How a job runs, step by step beside a photograph of it. */
function Process({
  process,
  photo,
  photoAlt,
  divided,
}: {
  process: NonNullable<AreaCopy["process"]>;
  photo: PhotoName;
  photoAlt: string;
  /** A rule above, when nothing else separates it from the services. */
  divided: boolean;
}) {
  return (
    <section
      className={`py-16 sm:py-20 ${divided ? "border-t border-line" : ""}`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-7">
          <div className="relative aspect-[3/2] overflow-hidden bg-paper-2">
            <Photo
              name={photo}
              alt={photoAlt}
              sizes="(min-width: 1280px) 690px, (min-width: 1024px) 58vw, 100vw"
            />
          </div>
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

/** Items as plain text blocks: a short title and one sentence each. An
 *  item with its own page links there from its title. */
function Items({
  locale,
  items,
  className,
  numbered = false,
}: {
  locale: Locale;
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
          <h3 className="title text-ink">
            {item.href ? (
              <Link
                href={localeHref(locale, item.href)}
                className="text-petrol underline-offset-4 hover:text-ink hover:underline"
              >
                {item.title}
                <ArrowRight
                  className="ml-1.5 inline h-4 w-4 align-[-0.125em]"
                  aria-hidden="true"
                />
              </Link>
            ) : (
              item.title
            )}
          </h3>
          <p className="mt-2 max-w-md leading-relaxed text-muted">
            {item.text}
          </p>
        </li>
      ))}
    </List>
  );
}

function Section({
  locale,
  section,
  referencesTitle,
}: {
  locale: Locale;
  section: AreaSection;
  referencesTitle: string;
}) {
  const tinted = section.layout === "list";
  return (
    <section
      className={`py-16 sm:py-20 ${tinted ? "bg-paper-2" : "border-t border-line"}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {tinted ? (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionHeading title={section.title} />
            </Reveal>
            <Reveal className="lg:col-span-7">
              <Items
                locale={locale}
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
            <Reveal>
              <Items
                locale={locale}
                items={section.items}
                numbered={section.layout === "steps"}
                className="mt-8 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
              />
            </Reveal>
          </>
        )}

        {section.references ? (
          <Reveal className="mt-10 border-t border-line pt-8">
            <h3 className="label text-muted">{referencesTitle}</h3>
            <LogoWall className="mt-10" />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

/** An area page (/bygg) or a single construction service (/bygg/brf). */
type PageRef = { slug: AreaSlug } | { service: ServiceSlug };

/** What a page is: its path, layout config and words, and for a service
 *  page the area it belongs to. */
function resolve(t: Dictionary, page: PageRef) {
  if ("service" in page) {
    return {
      path: `/bygg/${page.service}`,
      config: servicePages[page.service] as AreaConfig,
      copy: t.services[page.service] as AreaCopy,
      parent: "bygg" as AreaSlug,
    };
  }
  return {
    path: `/${page.slug}`,
    config: areaPages[page.slug],
    copy: t.areas[page.slug],
    parent: undefined,
  };
}

/** Tab title: "Kanitas Bygg | Byggföretag i Järfälla och Stockholm" for an
 *  area, "Badrumsrenovering i Järfälla och Stockholm | Kanitas Bygg" for a
 *  service, so the phrase people search for comes first there. */
export function areaMetadata(locale: Locale, page: PageRef): Metadata {
  const { path, config, copy, parent } = resolve(dictionaries[locale], page);
  return pageMetadata({
    locale,
    path,
    title: parent
      ? `${copy.h1} | ${config.name}`
      : `${config.name} | ${copy.h1}`,
    description: copy.description,
  });
}

export default function AreaPage({
  locale,
  page,
}: {
  locale: Locale;
  page: PageRef;
}) {
  const t = dictionaries[locale];
  const { path, config, copy, parent } = resolve(t, page);
  const area = { ...config, ...copy };
  const pageUrl = absoluteUrl(locale, path);
  const providerPath = parent ? `/${parent}` : path;

  // The company that runs this verksamhet, as declared in the layout's
  // organisation data; the parent company when it runs it itself.
  const entity = businessSlugs
    .map((business) => businesses[business])
    .find((b) => b.page === providerPath)?.entities[0];
  const company = groupCompanies.find((c) => c.name === entity);
  const providerId =
    company && company.orgnr !== site.orgnr
      ? `${site.url}/#org-${company.orgnr}`
      : `${site.url}/#organization`;

  // Home, then the area, then (on a service page) the service.
  const crumbs = [
    { name: t.common.home, item: absoluteUrl(locale, "/") },
    ...(parent
      ? [
          {
            name: areaPages[parent].name,
            item: absoluteUrl(locale, `/${parent}`),
          },
        ]
      : []),
    {
      name: "service" in page ? t.services[page.service].label : area.name,
      item: pageUrl,
    },
  ];

  // The other services, linked from the foot of each service page.
  const siblings =
    "service" in page
      ? serviceSlugs.filter((other) => other !== page.service)
      : [];

  const graph: object[] = [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "service" in page ? t.services[page.service].label : area.name,
      serviceType: area.serviceType,
      description: area.description,
      provider: { "@id": providerId },
      areaServed: t.meta.areaServed,
      url: pageUrl,
      inLanguage: locale,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        ...crumb,
      })),
    },
  ];

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

  const listSections = (area.sections ?? []).filter((s) => s.layout === "list");
  const otherSections = (area.sections ?? []).filter(
    (s) => s.layout !== "list",
  );

  // Eight services sit as four by two, six as three by two: never a ragged row.
  const serviceColumns =
    area.services.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* An area leads with its name, a service with what it is. */}
      <PageHero
        title={parent ? area.h1 : area.name}
        lead={parent ? area.intro : `${area.h1}. ${area.intro}`}
        photo={area.heroPhoto}
        photoAlt={t.photoAlt[area.heroPhoto]}
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
              {t.common.call} {phoneFor(locale)}
            </a>
          </>
        }
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={area.servicesH2} />
          </Reveal>
          <Reveal>
            <Items
              locale={locale}
              items={area.services}
              className={`mt-8 gap-x-10 gap-y-8 sm:grid-cols-2 ${serviceColumns}`}
            />
          </Reveal>
          {area.related ? (
            <Reveal className="mt-16">
              {/* Inline arrow, so it follows the last word when the label
                  wraps on a phone. */}
              <Link
                href={localeHref(locale, area.related.href)}
                className="font-semibold text-petrol underline-offset-4 hover:text-ink hover:underline"
              >
                {area.related.label}
                <ArrowRight
                  className="ml-2 inline h-4 w-4 align-[-0.125em]"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ) : null}
        </div>
      </section>

      {area.tags ? (
        <section className="pb-12 sm:pb-16">
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
                    className="rounded-full border border-line bg-paper-2 px-4 py-2 text-sm font-medium text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>
      ) : null}

      {/* Staffing first: on a page with a "how staffing works" list, it
          follows the trades directly, before the cleaning half of the page. */}
      {listSections.map((section) => (
        <Section
          key={section.title}
          locale={locale}
          section={section}
          referencesTitle={t.common.ourClients}
        />
      ))}

      {/* A phone shows one photo here; three in a row is a scroll of
          pictures with nothing to read. */}
      {area.photos.length ? (
        <div
          className={`mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 sm:px-6 lg:gap-6 lg:px-8 ${
            area.photos.length > 1 ? "sm:grid-cols-2" : ""
          } ${listSections.length ? "pt-12 sm:pt-16" : ""}`}
        >
          {area.photos.map((photo, index) => (
            <Reveal key={photo} className={index > 0 ? "max-sm:hidden" : ""}>
              <div
                className={`relative overflow-hidden bg-paper-2 ${
                  area.photos.length > 1
                    ? "aspect-[4/3]"
                    : "aspect-[3/2] sm:aspect-[21/9]"
                }`}
              >
                <Photo
                  name={photo}
                  alt={t.photoAlt[photo]}
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
      ) : null}

      {area.process ? (
        <Process
          process={area.process}
          photo={area.processPhoto}
          photoAlt={t.photoAlt[area.processPhoto]}
          divided={!area.photos.length}
        />
      ) : null}

      {area.checklist ? (
        <section className="border-t border-line py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading title={area.checklist.title} />
            </Reveal>
            <Reveal>
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

      {otherSections.map((section) => (
        <Section
          key={section.title}
          locale={locale}
          section={section}
          referencesTitle={t.common.ourClients}
        />
      ))}

      {area.callout ? (
        <section className="pb-12 sm:pb-16">
          <Reveal className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 bg-petrol-pale px-6 py-8 sm:flex-row sm:gap-6 sm:px-10 sm:py-10">
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

      {area.trust ? (
        <TrustSection locale={locale} className="bg-paper-2" />
      ) : null}

      {area.faq ? (
        <section className="border-t border-line py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <Reveal className="lg:col-span-4">
              <SectionHeading title={t.common.faq} />
            </Reveal>
            <Reveal className="lg:col-span-8">
              <FaqList items={area.faq} />
            </Reveal>
          </div>
        </section>
      ) : null}

      {siblings.length ? (
        <section className="border-t border-line py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading title={t.areas.bygg.servicesH2} />
            </Reveal>
            <ul className="mt-8 grid max-w-4xl grid-cols-1 gap-x-12 sm:grid-cols-2">
              {siblings.map((other) => (
                <li key={other} className="border-t border-line">
                  <Link
                    href={localeHref(locale, `/bygg/${other}`)}
                    className="group flex items-center justify-between gap-6 py-5"
                  >
                    <span className="title text-ink transition-colors group-hover:text-petrol">
                      {t.services[other].label}
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-petrol transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <ContactSection
        locale={locale}
        title={area.contactTitle ?? t.areaContactTitle(area.name)}
        lead={area.contactLead}
        topic={area.contactTopic}
      />
    </>
  );
}
