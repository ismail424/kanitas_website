import type { Metadata } from "next";
import Careers from "@/components/Careers";
import ContactSection from "@/components/ContactSection";
import GroupTree from "@/components/GroupTree";
import LogoWall from "@/components/LogoWall";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  groupCompanies,
  groupFacts,
  ogMeta,
  qualityAndEnvironment,
  site,
} from "@/lib/site";

const pageTitle = `Om oss: koncernen i ${site.address.city} sedan ${site.founded}`;
const pageDescription = `Kanitas grundades ${site.founded} i ${site.address.city} och är i dag ${groupCompanies.length} bolag inom bygg, bemanning, maskiner och lokaler. Kollektivavtal och ${site.creditRating} i kreditvärdighet.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/om-oss" },
  ...ogMeta(pageTitle, pageDescription, "/om-oss"),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: site.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Om oss",
      item: `${site.url}/om-oss`,
    },
  ],
};

export default function OmOssPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        title="Om Kanitas"
        lead={`Koncernen har ${groupCompanies.length} bolag inom bygg, bemanning, maskiner och lokaler. Kontoret ligger i ${site.address.city}.`}
        photo="jobbstart"
      />

      {/* The story, and beside it the facts a procurement function checks. */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <Reveal className="lg:col-span-5">
            <SectionHeading title="Kort om Kanitas" />
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Kanitas startade {site.founded} i {site.address.city} med bygg,
                byggservice och städ. Bygg är fortfarande den största
                verksamheten. Vi arbetar med egen personal och anlitar fasta
                samarbetspartner för el, VVS och ventilation.
              </p>
              <p>
                Bemanning, maskiner och lokaler drivs i egna bolag, men du når
                alla på samma telefonnummer.
              </p>
              <div className="space-y-3">
                <p className="font-semibold text-ink">
                  {qualityAndEnvironment.title}
                </p>
                {qualityAndEnvironment.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7">
            <h2 className="label text-muted">Fakta om koncernen</h2>
            <dl className="mt-6 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {groupFacts.map((fact) => (
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
              title="Bolagen i koncernen"
              lead="Kanitas AB är moderbolag och har ett dotterbolag för varje verksamhet."
            />
          </Reveal>
          <div className="mt-8">
            <GroupTree />
          </div>
        </div>
      </section>

      <section id="referenser" className="bg-paper-2 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title="Några av våra uppdragsgivare" />
          </Reveal>
          <Reveal>
            <LogoWall className="mt-8" />
          </Reveal>
        </div>
      </section>

      <Careers />

      <ContactSection title="Hör av dig" />
    </>
  );
}
