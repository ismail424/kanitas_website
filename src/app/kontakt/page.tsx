import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ProcessSteps from "@/components/ProcessSteps";
import { ogMeta, site } from "@/lib/site";

const pageTitle = `Kontakt | Kanitas i ${site.address.city}`;
const pageDescription = `Kontakta Kanitas i ${site.address.city}: ring ${site.phone}, mejla ${site.email} eller lämna ditt nummer så ringer vi upp.`;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
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
        lead="Lämna ditt nummer så ringer vi upp. Samma telefonnummer och e‑postadress gäller alla bolag i koncernen."
        className="pb-16 pt-16 sm:pb-20 sm:pt-20"
      />

      <ProcessSteps className="border-t border-line" />
    </>
  );
}
