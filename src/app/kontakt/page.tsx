import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ProcessSteps from "@/components/ProcessSteps";
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

      <ProcessSteps
        title="Det här händer när du hört av dig"
        className="bg-paper-2"
      />
    </>
  );
}
