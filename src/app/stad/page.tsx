import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";
import { areas, ogMeta } from "@/lib/site";

const area = areas.find((a) => a.slug === "stad")!;

export const metadata: Metadata = {
  title: area.seo.title,
  description: area.seo.description,
  alternates: { canonical: "/stad" },
  ...ogMeta(area.seo.title, area.seo.description, "/stad", "/og-stad.jpg"),
};

export default function StadPage() {
  return (
    <AreaPage
      area={area}
      whyTitle="Bemanning och byggstädning med byggkunskap i grunden"
      whyLead="Kanitas ENT ingår i samma koncern som ett byggbolag. Personalen vi hyr ut har arbetat i våra egna projekt, och våra byggstädare vet vad en besiktning kräver."
      whyPoints={[
        "Egen personal på kollektivavtal, inte inhyrd i flera led",
        "Yrkesarbetare på plats ofta inom ett dygn",
        "Specialister på byggstädning och slutstädning inför besiktning",
        "Samma team tillbaka på löpande uppdrag, inte nya ansikten varje vecka",
        "Vi står kvar tills besiktningen är godkänd",
        "Snabb inställelse i hela Storstockholm",
      ]}
      heroPhoto="arbetsplats"
      gallery={[
        { photo: "ent-stad", label: "Byggstädning & slutstädning" },
        { photo: "stad-fonster", label: "Fönsterputs & storstädning" },
        { photo: "kontor", label: "Kontors- & fastighetsstädning" },
      ]}
      bandPhoto="snickeri"
      drawing="hardhat"
    />
  );
}
