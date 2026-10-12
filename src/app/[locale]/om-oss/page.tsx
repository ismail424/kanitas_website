import type { Metadata } from "next";
import Careers from "@/components/Careers";
import ContactSection from "@/components/ContactSection";
import GroupTree from "@/components/GroupTree";
import LogoWall from "@/components/LogoWall";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getContent, type LocaleParams } from "@/content";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const { locale, t } = await getContent(params);
  return pageMetadata({
    locale,
    path: "/om-oss",
    title: t.about.title,
    description: t.about.description,
  });
}

export default async function OmOssPage({ params }: { params: LocaleParams }) {
  const { locale, t } = await getContent(params);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.common.home,
        item: absoluteUrl(locale, "/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t.about.breadcrumb,
        item: absoluteUrl(locale, "/om-oss"),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        title={t.about.heading}
        lead={t.about.lead}
        photo="jobbstart"
        photoAlt={t.photoAlt.jobbstart}
      />

      {/* The story, and beside it the facts a procurement function checks. */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <Reveal className="lg:col-span-5">
            <SectionHeading title={t.about.storyTitle} />
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink-soft">
              {t.about.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="space-y-3">
                <p className="font-semibold text-ink">{t.quality.title}</p>
                {t.quality.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7">
            <h2 className="label text-muted">{t.about.factsTitle}</h2>
            <dl className="mt-6 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {t.groupFacts.map((fact) => (
                <div key={fact.label} className="border-t border-line py-5">
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="mt-1 font-semibold text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* The legal entities, drawn as the group they form. */}
      <section id="bolagen" className="border-t border-line py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              title={t.about.companiesTitle}
              lead={t.about.companiesLead}
            />
          </Reveal>
          <div className="mt-8">
            <GroupTree locale={locale} />
          </div>
        </div>
      </section>

      <section id="referenser" className="bg-paper-2 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={t.about.clientsTitle} />
          </Reveal>
          <Reveal>
            <LogoWall className="mt-8" />
          </Reveal>
        </div>
      </section>

      <Careers locale={locale} />

      <ContactSection locale={locale} title={t.about.contactTitle} />
    </>
  );
}
