import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactBand from "@/components/ContactBand";
import HomeHero from "@/components/HomeHero";
import LogoWall from "@/components/LogoWall";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
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

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* The four verksamheter, equal weight. Trading and Fastigheter have no
          page of their own, so their tile leads to the form instead. */}
      <section id="verksamheter" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title="Det här gör vi" />
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

      <section className="bg-paper-2 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <Reveal className="lg:col-span-5">
            <h2 className="display-2 text-ink">Från byggfirma till koncern</h2>
          </Reveal>
          <Reveal delay={60} className="lg:col-span-7">
            <p className="max-w-2xl lead text-ink-soft">
              Kanitas startade {site.founded} som byggfirma i Järfälla. I dag är
              vi {groupCompanies.length} bolag och {site.employees} anställda,
              och bygg är fortfarande den största verksamheten.
            </p>
            <Link
              href="/om-oss"
              className="link-arrow mt-8 text-petrol hover:text-ink"
            >
              Mer om koncernen
              <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="referenser" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="title text-ink">Några av våra uppdragsgivare</h2>
          </Reveal>
          <Reveal delay={60}>
            <LogoWall className="mt-12" />
          </Reveal>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
