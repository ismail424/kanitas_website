import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { ogMeta, site } from "@/lib/site";

const pageTitle = "Kontakta oss för offert och rådgivning";
const pageDescription = `Kontakta Kanitas i Järfälla: ring ${site.phone}, mejla ${site.email} eller skicka en offertförfrågan via formuläret. Vi återkommer oftast samma dag.`;

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
    { "@type": "ListItem", position: 2, name: "Kontakt", item: `${site.url}/kontakt` },
  ],
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        crumbs={[{ href: "/kontakt", label: "Kontakt" }]}
        kicker={
          <p className="eyebrow text-copper-soft">Järfälla · Storstockholm</p>
        }
        title="Kontakta Kanitas"
        lead="Ett nummer och en mejladress för samtliga verksamheter i koncernen. Ange vad ärendet gäller så kopplas det till rätt bolag och rätt kontaktperson. Förfrågningar besvaras normalt inom ett dygn."
        photo="stockholm"
      />
      <ContactSection
        title="Skicka en förfrågan"
        lead="Ange omfattning, plats och önskad tidpunkt. Offerter och förfrågningsunderlag hanteras kostnadsfritt och utan förpliktelser."
      />
    </>
  );
}
