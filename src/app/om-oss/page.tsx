import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import LogoWall from "@/components/LogoWall";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
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

const pageTitle = "Om Kanitas: koncernen i Järfälla sedan 2011";
const pageDescription =
  "Kanitas grundades 2011 i Järfälla och är i dag en koncern med fem bolag inom bygg, bemanning, maskinhandel och fastigheter. AAA-kreditvärdighet, kollektivavtal och kunder som NCC och Implenia.";

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
        crumbs={[{ href: "/om-oss", label: "Om oss" }]}
        kicker={<p className="eyebrow text-copper-soft">Om Kanitas</p>}
        title={`Byggt på förtroende sedan ${site.founded}`}
        lead="Från byggfirma i Järfälla till koncern med fem bolag inom bygg, bemanning, maskiner och fastigheter. Samma ledning, samma kollektivavtal och samma krav på utförandet sedan starten."
        photo="team"
      />

      {/* Story beside the fact sheet a procurement function checks first. */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid grid-cols-1 max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Vår historia"
              title="Från byggentreprenör till koncern med fyra verksamheter"
            />
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Kanitas AB grundades {site.founded} i Järfälla som
                byggentreprenör. Verksamheten växte genom underentreprenader åt
                större byggbolag, och i takt med att uppdragen blev fler bröts
                bemanning, maskinhandel och fastighetsägande ut i egna bolag.
              </p>
              <p>
                I dag består koncernen av fem bolag och 35 medarbetare inom
                bygg, bemanning, maskinhandel och fastigheter. Bolagen delar
                ledning, kollektivavtal och kontor i Järfälla, men drivs med
                eget resultatansvar och egna kundrelationer.
              </p>
              <p>
                Kanitas AB är moderbolag och avtalspart. Byggentreprenader
                utförs av koncernens byggorganisation, bemanning och
                byggstädning av Kanitas ENT.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <div className="border-t-[3px] border-petrol bg-paper-2 p-7 sm:p-9 lg:sticky lg:top-28">
              <h2 className="label text-petrol">Fakta om koncernen</h2>
              <dl className="mt-6 divide-y divide-line border-y border-line">
                {groupFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-[8.5rem_minmax(0,1fr)] gap-4 py-3.5 sm:grid-cols-[10rem_minmax(0,1fr)]"
                  >
                    <dt className="text-sm text-muted">{fact.label}</dt>
                    <dd className="text-[0.95rem] font-semibold text-ink">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="parallax relative isolate h-[40svh] min-h-[260px] overflow-hidden sm:h-[52svh]">
        <Photo name="kranar" sizes="100vw" />
      </div>

      {/* Legal entities with org.nr, the way a supplier register lists them. */}
      <section id="bolagen" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Bolagsuppgifter"
              title="Bolagen i koncernen"
              lead="Kanitas AB är moderbolag och avtalspart. Underlag för kreditvärdighet, kollektivavtal och försäkring lämnas i samband med upphandling."
            />
          </Reveal>

          <Reveal delay={60}>
            <table className="mt-14 w-full border-y border-line text-left">
              <thead className="sr-only md:not-sr-only">
                <tr className="border-b border-line">
                  <th scope="col" className="label py-4 pr-6 font-semibold text-muted">
                    Bolag
                  </th>
                  <th scope="col" className="label py-4 pr-6 font-semibold text-muted">
                    Org.nr
                  </th>
                  <th scope="col" className="label py-4 pr-6 font-semibold text-muted">
                    Inriktning
                  </th>
                  <th scope="col" className="label py-4 font-semibold text-muted">
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
                          <span className="label ml-3 inline-block bg-petrol px-2 py-1 text-[0.65rem] text-white">
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

      <section id="referenser" className="border-t border-line bg-paper-2 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Referenser"
              title="Kunder som ställer krav och kommer tillbaka"
              lead="Vi arbetar som partner och underentreprenör åt några av Sveriges ledande bygg-, fastighets- och logistikföretag."
            />
          </Reveal>
          <Reveal delay={100}>
            <LogoWall className="mt-14" />
          </Reveal>
        </div>
      </section>

      <section className="surface-blueprint overflow-hidden">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="display-2 text-white">Vad kan vi hjälpa dig med?</h2>
            <p className="mt-4 lead text-white/75">
              Bygg, bemanning, maskiner eller lokaler: hör av dig så kopplar vi
              dig till rätt verksamhet och rätt kontaktperson.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/kontakt" className="btn btn-light">
              Kontakta oss
              <ArrowRight aria-hidden="true" />
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              <Phone aria-hidden="true" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
