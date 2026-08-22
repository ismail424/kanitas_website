import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import { site } from "@/lib/site";

const pageTitle = "Kontakt – begär offert eller ring oss";
const pageDescription = `Kontakta Kanitas i Järfälla: ring ${site.phone}, mejla ${site.email} eller skicka en offertförfrågan via formuläret. Vi återkommer oftast samma dag.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/kontakt",
  },
  twitter: { title: pageTitle, description: pageDescription },
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-dark">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <p className="eyebrow text-amber">Kontakt</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Vi återkommer oftast samma dag
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Ring, mejla eller använd formuläret nedan – oavsett om det gäller
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
