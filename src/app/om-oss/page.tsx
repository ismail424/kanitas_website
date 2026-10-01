import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactBand from "@/components/ContactBand";
import LogoWall from "@/components/LogoWall";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  businessHref,
  businesses,
  groupCompanies,
  groupFacts,
  ogMeta,
  site,
} from "@/lib/site";

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
    { "@type": "ListItem", position: 2, name: "Om oss", item: `${site.url}/om-oss` },
  ],
};

/** The verksamhet a legal entity carries, so the table can link to it. */
const businessFor = (companyName: string) =>
  businesses.find((business) => business.entities.includes(companyName));

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
        photo="team"
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
                egen personal och anlitar fasta samarbetspartner för el, VVS
                och ventilation.
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

      {/* Legal entities with org.nr, the way a supplier register lists them. */}
      <section id="bolagen" className="bg-paper-2 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title="Bolagen i koncernen" />
          </Reveal>

          <Reveal delay={60}>
            <table className="mt-12 w-full border-y border-line text-left">
              <thead className="sr-only md:not-sr-only">
                <tr className="border-b border-line">
                  <th scope="col" className="py-4 pr-6 text-sm font-semibold text-muted">
                    Bolag
                  </th>
                  <th scope="col" className="py-4 pr-6 text-sm font-semibold text-muted">
                    Org.nr
                  </th>
                  <th scope="col" className="py-4 pr-6 text-sm font-semibold text-muted">
                    Inriktning
                  </th>
                  <th scope="col" className="py-4 text-sm font-semibold text-muted">
                    Verksamhet
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {groupCompanies.map((company) => {
                  const business = businessFor(company.name);
                  const parent = company.orgnr === site.orgnr;
                  return (
                    <tr
                      key={company.orgnr}
                      className="block py-6 md:table-row md:py-0"
                    >
                      <th
                        scope="row"
                        className="block pr-6 align-top font-normal md:table-cell md:py-6"
                      >
                        <span className="title text-ink">{company.name}</span>
                        {parent ? (
                          <span className="ml-3 inline-block bg-petrol px-2 py-0.5 align-middle text-xs font-medium text-white">
                            Moderbolag
                          </span>
                        ) : null}
                      </th>
                      <td className="mt-1 block pr-6 align-top md:table-cell md:py-6">
                        <span className="index text-sm text-ink-soft">
                          <span className="md:sr-only">Org.nr </span>
                          {company.orgnr}
                        </span>
                      </td>
                      <td className="mt-2 block pr-6 align-top text-ink-soft md:table-cell md:py-6">
                        {company.role}
                      </td>
                      <td className="mt-3 block align-top md:table-cell md:py-6">
                        {business ? (
                          <Link
                            href={businessHref(business)}
                            className="link-arrow whitespace-nowrap text-sm text-petrol hover:text-ink"
                          >
                            {business.heading}
                            <ArrowRight aria-hidden="true" />
                          </Link>
                        ) : null}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section id="referenser" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title="Några av våra uppdragsgivare" />
          </Reveal>
          <Reveal delay={60}>
            <LogoWall className="mt-14" />
          </Reveal>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
