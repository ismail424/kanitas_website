import type { Metadata } from "next";
import Link from "next/link";
import { ogMeta, site } from "@/lib/site";

const pageTitle = "Integritetspolicy";
const pageDescription = `Så behandlar ${site.legalName} personuppgifter som lämnas via kanitas.se, i kontaktformuläret, per e-post och per telefon.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/integritetspolicy" },
  ...ogMeta(pageTitle, pageDescription, "/integritetspolicy"),
};

/** Plain policy text: what the site actually collects and why, nothing more. */
const sections = [
  {
    title: "Personuppgiftsansvarig",
    body: [
      `${site.legalName}, org.nr ${site.orgnr}, ${site.address.city}, är personuppgiftsansvarig för behandlingen av de uppgifter som lämnas via kanitas.se. Frågor om behandlingen ställs till ${site.email} eller ${site.phone}.`,
    ],
  },
  {
    title: "Vilka uppgifter vi behandlar",
    body: [
      "När du använder kontaktformuläret behandlar vi ditt telefonnummer, som är det enda du måste fylla i, och de uppgifter du själv väljer att lägga till: namn, e‑postadress, vad ärendet gäller och ditt meddelande. Detsamma gäller uppgifter du lämnar när du mejlar eller ringer oss.",
      "Lämna inga känsliga personuppgifter i formuläret, till exempel uppgifter om hälsa.",
    ],
  },
  {
    title: "Varför vi behandlar dem",
    body: [
      "Uppgifterna används för att besvara din förfrågan, ta fram en offert och, om vi kommer överens, genomföra uppdraget. Skickar du en intresseanmälan om jobb använder vi dem för att kontakta dig om en anställning. Den rättsliga grunden är vårt berättigade intresse av att besvara förfrågningar. När du begär en offert eller anlitar oss behandlar vi uppgifterna för att kunna ingå och fullgöra avtalet med dig.",
      "Vi använder inte uppgifterna för marknadsföring som du inte har bett om, och vi säljer dem aldrig vidare.",
    ],
  },
  {
    title: "Hur länge vi sparar dem",
    body: [
      "Förfrågningar som inte leder till ett uppdrag raderas när ärendet är avslutat. Leder förfrågan till ett avtal sparas uppgifterna så länge avtalet gäller och därefter så länge lagen kräver, till exempel enligt bokföringslagen.",
    ],
  },
  {
    title: "Vem som får del av dem",
    body: [
      `Det du skriver i formuläret skickas som e‑post till ${site.email} och sparas i vår e‑post, inte på webbplatsen. Gäller ärendet ett annat bolag i koncernen, till exempel Kanitas ENT AB för bemanning och städ, skickar vi det vidare dit. När du skickar formuläret används din IP-adress tillfälligt för att stoppa spam.`,
      "Webbplatsen drivs av Vercel och vår e‑post av One.com. De kan få tillgång till uppgifterna i den mån det behövs för att leverera sina tjänster till oss. Kontaktformuläret hanteras på servrar i Stockholm.",
    ],
  },
  {
    title: "Cookies och besöksstatistik",
    body: [
      "Webbplatsen sätter inga cookies. Vi mäter antal besök och vilka sidor som läses, utan att enskilda besökare kan identifieras.",
    ],
  },
  {
    title: "Dina rättigheter",
    body: [
      "Du har rätt att få veta vilka uppgifter vi har om dig, att få felaktiga uppgifter rättade och att få uppgifterna raderade när de inte längre behövs. Du kan också invända mot behandlingen. Kontakta oss så hjälper vi dig.",
      "Är du inte nöjd med hur vi hanterar dina uppgifter kan du lämna klagomål till Integritetsskyddsmyndigheten (IMY).",
    ],
  },
];

export default function IntegritetspolicyPage() {
  return (
    <>
      <section className="pb-24 pt-16 sm:pb-32 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="display-page text-ink">Integritetspolicy</h1>
            <p className="mt-6 lead text-muted">
              Så behandlar {site.legalName} de personuppgifter du lämnar när du
              kontaktar oss.
            </p>

            <div className="mt-14 divide-y divide-line border-y border-line">
              {sections.map((section) => (
                <div key={section.title} className="py-9">
                  <h2 className="display-3 text-ink">{section.title}</h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 text-muted">
              Har du frågor om policyn?{" "}
              <Link
                href="/kontakt"
                className="font-semibold text-petrol underline underline-offset-4 hover:text-ink"
              >
                Kontakta oss
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
