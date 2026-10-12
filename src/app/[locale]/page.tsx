import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Careers from "@/components/Careers";
import ContactSection from "@/components/ContactSection";
import HomeHero from "@/components/HomeHero";
import LogoWall from "@/components/LogoWall";
import Photo from "@/components/Photo";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getContent, type LocaleParams } from "@/content";
import { localeHref, locales } from "@/lib/i18n";
import {
  businessSlugs,
  businesses,
  contactHref,
  groupCompanies,
  pageMetadata,
  site,
} from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const { locale, t } = await getContent(params);
  return pageMetadata({
    locale,
    path: "/",
    title: t.home.title,
    description: t.home.description,
  });
}

export default async function HomePage({ params }: { params: LocaleParams }) {
  const { locale, t } = await getContent(params);

  /** The group in three figures, for the band under the story. */
  const figures = [
    { value: site.founded, label: t.home.figures.founded },
    { value: groupCompanies.length, label: t.home.figures.companies },
    { value: site.creditRating, label: t.home.figures.creditRating },
  ];

  /** Tells search engines the site's name, shown above the result. Belongs
   *  on the home page only. */
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: "Kanitas",
    alternateName: site.legalName,
    url: site.url,
    inLanguage: locales,
    publisher: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <HomeHero locale={locale} />

      {/* Who already hires us, straight after the promise. */}
      <section
        aria-labelledby="uppdragsgivare"
        className="border-b border-line py-14 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2
            id="uppdragsgivare"
            className="text-center text-sm font-semibold text-muted"
          >
            {t.home.clientsHeading}
          </h2>
          <LogoWall className="mt-10" />
        </div>
      </section>

      {/* The four verksamheter, equal weight. Trading and Fastigheter have no
          page of their own, so their tile leads to the form instead. */}
      <section id="verksamheter" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              title={t.home.whatWeDo.title}
              lead={t.home.whatWeDo.lead}
            />
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-10 md:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
            {businessSlugs.map((slug) => {
              const business = businesses[slug];
              return (
                <Reveal key={slug} className="h-full">
                  <article
                    id={slug}
                    className="relative flex h-full flex-col"
                    aria-labelledby={`${slug}-rubrik`}
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-paper-2">
                      <Photo
                        name={business.photo}
                        alt={t.photoAlt[business.photo]}
                        sizes="(min-width: 1280px) 584px, (min-width: 768px) calc(50vw - 40px), 100vw"
                      />
                    </div>
                    <h3
                      id={`${slug}-rubrik`}
                      className="mt-5 display-3 text-ink"
                    >
                      {business.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-petrol">
                      {t.businesses[slug].heading}
                    </p>
                    <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                      {t.businesses[slug].blurb}
                    </p>
                    {/* The link covers the whole tile and sits at its foot, level
                      with its neighbour's. */}
                    <Link
                      href={localeHref(
                        locale,
                        business.page ?? contactHref(business.topic),
                      )}
                      className="link-arrow mt-auto pt-5 text-petrol underline-offset-4 after:absolute after:inset-0 hover:text-ink hover:underline"
                    >
                      {business.page
                        ? t.home.toBusiness(business.name)
                        : t.home.contactBusiness(business.name)}
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* The story in a paragraph and four figures. */}
      <section className="bg-petrol-darker text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <Reveal className="lg:col-span-5">
            <h2 className="display-2 text-white">{t.home.story.title}</h2>
            <p className="mt-6 lead text-white/75">{t.home.story.text}</p>
            <Link
              href={localeHref(locale, "/om-oss")}
              className="link-arrow mt-8 text-copper-soft hover:text-white"
            >
              {t.home.story.link}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 self-center sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            {figures.map((figure) => (
              <Reveal
                key={figure.label}
                className="flex flex-col-reverse justify-end border-t border-line-deep pt-6"
              >
                <dt className="mt-2 text-white/65">{figure.label}</dt>
                <dd className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
                  {figure.value}
                </dd>
              </Reveal>
            ))}
          </dl>
          <div className="grid grid-cols-1 gap-6 border-t border-line-deep pt-8 lg:col-span-12 lg:grid-cols-12 lg:gap-16">
            <h3 className="display-3 text-white lg:col-span-4">
              {t.quality.title}
            </h3>
            <div className="max-w-3xl space-y-3 lg:col-span-8">
              {t.quality.paragraphs.map((paragraph) => (
                <p key={paragraph} className="lead text-white/75">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps locale={locale} lead={t.home.processLead} />

      <Careers locale={locale} />

      <ContactSection locale={locale} title={t.home.contactTitle} />
    </>
  );
}
