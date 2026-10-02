import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import MapScene from "@/components/scene/MapScene";
import { ogMeta, site } from "@/lib/site";

const pageTitle = "Kontakta oss";
const pageDescription = `Kontakta Kanitas i Järfälla: ring ${site.phone}, mejla ${site.email} eller skicka en offertförfrågan via formuläret. Vi svarar normalt inom ett dygn.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/kontakt" },
  ...ogMeta(pageTitle, pageDescription, "/kontakt"),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: site.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kontakt",
      item: `${site.url}/kontakt`,
    },
  ],
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactSection
        as="h1"
        title="Kontakta oss"
        lead="Lämna ditt nummer så ringer vi upp, normalt inom ett dygn. Samma telefon och e-post gäller alla bolag i koncernen."
      />

      {/* Where we work, drawn out from the office. */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              title="Från Järfälla till hela Storstockholm"
              lead={`Kontoret ligger i ${site.address.city}. Därifrån arbetar vi i hela Storstockholm, från Sigtuna i norr till Södertälje och Haninge i söder.`}
            />
          </Reveal>
          <Reveal variant="scale" className="overflow-hidden lg:col-span-7">
            <MapScene />
          </Reveal>
        </div>
      </section>

      <ProcessSteps
        title="Det här händer när du hört av dig"
        className="bg-paper-2"
      />
    </>
  );
}
