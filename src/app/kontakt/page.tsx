import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
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
      <section className="hero-deep relative isolate overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 sm:pt-44 lg:px-8">
          <p className="eyebrow text-copper-soft">Kontakt</p>
          <h1 className="mt-5 max-w-3xl display-1 text-white">
            Vi återkommer oftast samma dag
          </h1>
          <p className="mt-6 max-w-2xl lead text-white/75">
            Ring, mejla eller använd formuläret nedan. Vi hjälper dig snabbt vidare, oavsett om det gäller
            bygg, städ, lokaler eller bil hjälper vi dig snabbt vidare.
          </p>
        </div>
      </section>
      <ContactSection
        title="Berätta vad du behöver"
        lead="Beskriv ditt ärende så kopplar vi in rätt person i koncernen. Offerter är alltid kostnadsfria."
      />
    </>
  );
}
