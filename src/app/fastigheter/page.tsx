import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";
import { areas } from "@/lib/site";

const area = areas.find((a) => a.slug === "fastigheter")!;

export const metadata: Metadata = {
  title: area.seo.title,
  description: area.seo.description,
  alternates: { canonical: "/fastigheter" },
};

export default function FastigheterPage() {
  return (
    <AreaPage
      area={area}
      whyTitle="Fastighetsägare med egen byggorganisation"
      whyLead="När förvaltare, byggare och städbolag sitter i samma koncern blir lokalerna omhändertagna på riktigt – och anpassningar går snabbt från idé till färdigt."
      whyPoints={[
        "Egna fastigheter i Järfälla och Storstockholm",
        "Lokalanpassningar utförda av koncernens byggteam",
        "Snöröjning, skötsel och tillsyn med egen personal",
        "Långsiktig ägare med AAA-kreditvärdighet",
        "En kontakt för allt – från hyresavtal till felanmälan",
      ]}
      whyImage={{
        src: "/images/photos/fastigheter-lager.jpg",
        alt: "Lagerlokal med pallställ",
      }}
      secondaryImage={{
        src: "/images/photos/fastigheter-balkonger.jpg",
        alt: "Flerbostadshus med balkonger",
      }}
    />
  );
}
