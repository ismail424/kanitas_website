import type { Metadata } from "next";
import Careers from "@/components/Careers";
import ContactSection from "@/components/ContactSection";
import GroupTree from "@/components/GroupTree";
import History from "@/components/History";
import LogoWall from "@/components/LogoWall";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { groupCompanies, groupFacts, ogMeta, site } from "@/lib/site";

const pageTitle = `Om Kanitas: koncernen i Järfälla sedan ${site.founded}`;
const pageDescription = `Kanitas grundades ${site.founded} i Järfälla och är i dag en koncern med ${groupCompanies.length} bolag inom bygg, bemanning, maskiner och fastigheter. AAA i kreditvärdighet och kollektivavtal med Byggnads och Fastighets.`;

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
        lead={`Koncernen har ${groupCompanies.length} bolag och ${site.employees} anställda inom bygg, bemanning, maskiner och lokaler. Kontoret ligger i ${site.address.city}.`}
        photo="jobbstart"
      />

      {/* The story, and beside it the facts a procurement function checks. */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <Reveal className="lg:col-span-5">
            <SectionHeading title="Så växte Kanitas" />
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Kanitas AB startade som byggfirma i {site.address.city}{" "}
                {site.founded} och växte genom uppdrag som underentreprenör åt
                större byggbolag. Med tiden fick bemanning, maskinhandel och
                fastigheter egna bolag.
              </p>
              <p>
                Bygg är fortfarande den största verksamheten. Vi arbetar med
                egen personal och anlitar fasta samarbetspartner för el, VVS och
                ventilation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
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

      <section className="bg-paper-2 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title="Vår historia" />
          </Reveal>
          <History />
        </div>
      </section>

      {/* The legal entities, drawn as the group they form. */}
      <section id="bolagen" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              title="Bolagen i koncernen"
              lead="Varje verksamhet drivs i ett eget bolag."
            />
          </Reveal>
          <div className="mt-14">
            <GroupTree />
          </div>
        </div>
      </section>

      <section id="referenser" className="bg-paper-2 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title="Några av våra uppdragsgivare" />
          </Reveal>
          <Reveal delay={60}>
            <LogoWall className="mt-14" />
          </Reveal>
        </div>
      </section>

      <Careers />

      <ContactSection title="Hör av dig" />
    </>
  );
}
