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
import TrustSection from "@/components/TrustSection";
import {
  businesses,
  contactHref,
  groupCompanies,
  ogMeta,
  site,
} from "@/lib/site";

const pageTitle = "Bygg, bemanning, maskiner och lokaler i Stockholm";
const pageDescription =
  "Kanitas i Järfälla: byggentreprenader, bemanning och byggstädning, maskiner och fordon samt lokaler att hyra i Storstockholm. Egen personal sedan 2011.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  ...ogMeta(pageTitle, pageDescription, "/"),
};

/** The group in four figures, for the band under the story. */
const figures = [
  { value: site.founded, label: `Grundat i ${site.address.city}` },
  { value: site.employees, label: "Anställda på kollektivavtal" },
  { value: groupCompanies.length, label: "Bolag i koncernen" },
  { value: "AAA", label: "Kreditvärdighet för Kanitas AB" },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

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
            Anlitade av bland andra
          </h2>
          <LogoWall className="mt-10" />
        </div>
      </section>

      {/* The four verksamheter, equal weight. Trading and Fastigheter have no
          page of their own, so their tile leads to the form instead. */}
      <section id="verksamheter" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              title="Det här gör vi"
              lead="Fyra verksamheter med egen personal. Samma telefonnummer gäller alla."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 md:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
            {businesses.map((business, index) => (
              <Reveal key={business.slug} delay={(index % 2) * 80}>
                <article
                  id={business.slug}
                  className="group relative"
                  aria-labelledby={`${business.slug}-rubrik`}
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-paper-2">
                    <Photo
                      name={business.photo}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3
                    id={`${business.slug}-rubrik`}
                    className="mt-7 display-3 text-ink"
                  >
                    {business.heading}
                  </h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                    {business.blurb}
                  </p>
                  {/* The link covers the whole tile. */}
                  <Link
                    href={business.page ?? contactHref(business.topic)}
                    className="link-arrow mt-5 text-petrol after:absolute after:inset-0 hover:text-ink"
                  >
                    {business.page
                      ? `Till ${business.name}`
                      : `Kontakta ${business.name}`}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The story in a paragraph and four figures. */}
      <section className="bg-petrol-darker text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-24 sm:px-6 sm:py-32 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <Reveal className="lg:col-span-5">
            <h2 className="display-2 text-white">
              Från byggfirma till koncern
            </h2>
            <p className="mt-6 lead text-white/75">
              Kanitas startade {site.founded} som byggfirma i{" "}
              {site.address.city}. I dag är vi {groupCompanies.length} bolag och{" "}
              {site.employees} anställda, och bygg är fortfarande den största
              verksamheten.
            </p>
            <Link
              href="/om-oss"
              className="link-arrow mt-8 text-copper-soft hover:text-white"
            >
              Mer om koncernen
              <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-12 self-center lg:col-span-6 lg:col-start-7">
            {figures.map((figure, index) => (
              <Reveal
                key={figure.label}
                delay={index * 100}
                className="flex flex-col-reverse justify-end border-t border-line-deep pt-6"
              >
                <dt className="mt-2 text-white/65">{figure.label}</dt>
                <dd className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
                  {figure.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <ProcessSteps />

      <TrustSection className="bg-paper-2" />

      <Careers />

      <ContactSection title="Begär en offert" />
    </>
  );
}
