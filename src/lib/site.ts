/**
 * Central site configuration and content data for kanitas.se.
 * All contact details, navigation, business areas and trust signals
 * live here so components never hardcode facts.
 */

export const site = {
  name: "Kanitas",
  legalName: "Kanitas AB",
  orgnr: "556841-1010",
  founded: 2011,
  url: "https://kanitas.se",
  phone: "070-665 32 48",
  phoneHref: "tel:+46706653248",
  email: "info@kanitas.se",
  address: {
    street: "Almarevägen 13",
    postalCode: "176 76",
    city: "Järfälla",
    region: "Stockholm",
    country: "SE",
  },
  geo: { lat: 59.4253, lng: 17.8345 },
  openingHours: "Vardagar 08.00 till 17.00",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Almarev%C3%A4gen+13%2C+176+76+J%C3%A4rf%C3%A4lla",
} as const;

/**
 * Complete OpenGraph + Twitter metadata for a page. Next.js replaces nested
 * metadata objects instead of merging them, so every page must ship the full
 * set — this helper keeps og:image, og:type, siteName and twitter:card from
 * silently disappearing.
 */
export function ogMeta(
  title: string,
  description: string,
  path: string,
  image = "/og.jpg",
) {
  return {
    openGraph: {
      type: "website" as const,
      locale: "sv_SE",
      siteName: site.legalName,
      title,
      description,
      url: path,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}

export type Area = {
  slug: string;
  /** Whether the area is shown on the site (nav, home, sitemap, routes) */
  active: boolean;
  /** Short name used in navigation, e.g. "Bygg" */
  nav: string;
  /** Full brand name, e.g. "Kanitas Bygg" */
  name: string;
  tagline: string;
  /** Keyword-bearing page heading (h1) for the area page */
  h1: string;
  /** Keyword-bearing heading for the services section */
  servicesH2: string;
  /** schema.org serviceType for the area's Service JSON-LD */
  serviceType: string;
  /** Optional schema.org LocalBusiness subtype for the area (e.g. AutoDealer) */
  businessType?: string;
  /** Sub-brand accent for dark surfaces (hero, process numbers) */
  tone: string;
  /** Sub-brand accent for light surfaces (icons, eyebrows) — AA on paper */
  toneDeep: string;
  /** Label for the primary CTA — matches what the visitor actually wants */
  ctaLabel: string;
  /** Pre-selected ärende in the contact form; must be one of contactTopics */
  contactTopic: (typeof contactTopics)[number];
  teaser: string;
  intro: string;
  services: { title: string; text: string; icon: string }[];
  /** Contextual cross-link rendered after the services grid */
  related?: { href: string; label: string; text: string };
  /** Area-specific process steps ("Så går det till") */
  process: { step: string; title: string; text: string }[];
  /** Optional content sections for depth (checklists, how-it-works etc.) */
  extraSections?: {
    eyebrow: string;
    title: string;
    lead?: string;
    items: { title: string; text: string }[];
  }[];
  /** Optional FAQ — rendered with FAQPage structured data */
  faq?: { q: string; a: string }[];
  seo: { title: string; description: string };
};

export const areas: Area[] = [
  {
    slug: "bygg",
    active: true,
    nav: "Bygg",
    name: "Kanitas Bygg",
    tagline: "Från grund till nyckelfärdigt",
    h1: "Byggföretag i Stockholm. Från grund till nyckelfärdigt.",
    servicesH2: "Byggtjänster i Stockholm",
    serviceType: "Byggentreprenad och byggservice",
    tone: "#c9a86a",
    toneDeep: "#1e4d3b",
    ctaLabel: "Begär offert",
    contactTopic: "Bygg",
    teaser:
      "Nybyggnation, renovering och byggservice för företag och privatpersoner. Vår kärnverksamhet sedan 2011.",
    intro:
      "Bygg är hjärtat i Kanitas. Vi tar totalansvar för projekt i alla storlekar, från löpande byggservice till kompletta entreprenader, åt byggbolag, fastighetsägare och privatpersoner. Bland våra uppdragsgivare finns flera av Sveriges ledande bygg- och fastighetsaktörer, och vi hjälper lika gärna dig som ska renovera hemma.",
    services: [
      {
        title: "Nybyggnation",
        text: "Kompletta entreprenader från markarbete till färdig byggnad, för företag, fastighetsägare och privatpersoner.",
        icon: "building",
      },
      {
        title: "Renovering & ombyggnation",
        text: "Vi moderniserar kontor, lokaler och bostäder med genomtänkta lösningar och minimala störningar i verksamheten.",
        icon: "hammer",
      },
      {
        title: "Byggservice",
        text: "Löpande underhåll, reparationer och anpassningar med snabb inställelse. Ett tryggt avtal för fastighetsägare.",
        icon: "wrench",
      },
      {
        title: "Rivning & sanering",
        text: "Selektiv rivning samt bygg-, brand- och fuktsanering. Säkert, miljöriktigt och med full dokumentation.",
        icon: "shield",
      },
      {
        title: "Mark & anläggning",
        text: "Markentreprenader, grundläggning, dränering och finplanering som ger projektet rätt förutsättningar från start.",
        icon: "mountain",
      },
      {
        title: "Badrum & våtrum",
        text: "Totalrenovering av badrum enligt Säker Vatten och branschreglerna, med tätskikt och dokumentation som håller för försäkringsbolaget.",
        icon: "droplets",
      },
      {
        title: "Stomkomplettering & snickerier",
        text: "Innerväggar, undertak, dörrar och platsbyggda snickerier. Ofta den etapp som avgör om ett projekt blir klart i tid.",
        icon: "ruler",
      },
      {
        title: "Snöröjning",
        text: "Avtalskunder får snöröjning och halkbekämpning som håller fastigheter säkra och tillgängliga hela vintern.",
        icon: "snowflake",
      },
    ],
    related: {
      href: "/stad",
      label: "Kanitas ENT hand om byggstädningen och bemanningen",
      text: "Efter bygget tar",
    },
    process: [
      {
        step: "01",
        title: "Kontakt & offert",
        text: "Skicka in projektet via formuläret eller kontakta oss direkt. Vi återkommer med en specificerad offert där omfattning och prisform framgår.",
      },
      {
        step: "02",
        title: "Genomförande",
        text: "Vi planerar, bemannar och genomför projektet med fast arbetsledning och avstämningar enligt överenskommen frekvens.",
      },
      {
        step: "03",
        title: "Uppföljning",
        text: "Gemensam genomgång mot handlingar och egenkontroll före överlämning. Vårt åtagande kvarstår genom garantitiden.",
      },
    ],
    extraSections: [
      {
        eyebrow: "Uppdragsgivare",
        title: "Vi bygger åt fyra sorters kunder",
        lead: "Utförandet håller samma standard oavsett uppdragsgivare. Det som skiljer är styrning, beslutsvägar och dokumentationskrav.",
        items: [
          {
            title: "Byggbolag och totalentreprenörer",
            text: "Vi verkar som underentreprenör i större projekt åt bland andra NCC, Implenia, ByggPartner och Oljibe, med egen personal, egna maskiner och egen arbetsledning på plats.",
          },
          {
            title: "Fastighetsägare och förvaltare",
            text: "Löpande byggservice på ramavtal: felavhjälpning, hyresgästanpassningar och planerat underhåll, med fast kontaktperson och kännedom om beståndet.",
          },
          {
            title: "BRF:er",
            text: "Stambyten, fasad- och balkongarbeten samt renovering av gemensamma ytor, med strukturerad boendeinformation och en tidplan styrelsen kan redovisa.",
          },
          {
            title: "Privatpersoner",
            text: "Villa- och lägenhetsrenoveringar, tillbyggnader och badrum, utförda av samma yrkesarbetare som våra kommersiella projekt. ROT-avdrag dras direkt på fakturan.",
          },
        ],
      },
      {
        eyebrow: "Trygghet",
        title: "Vad en offert från oss innehåller",
        lead: "Villkoren fastställs innan arbetet påbörjas och gäller genom hela projektet.",
        items: [
          {
            title: "Tydlig prisform och omfattning",
            text: "Fast pris eller löpande räkning anges i offerten tillsammans med vad som ingår. Ändrings- och tilläggsarbeten godkänns skriftligt innan de utförs.",
          },
          {
            title: "En kontaktperson genom hela projektet",
            text: "Samma arbetsledare från offert till slutbesiktning, med ansvar för tidplan, avstämningar och överlämning.",
          },
          {
            title: "Dokumenterad egenkontroll",
            text: "Arbetet kontrolleras mot checklista före överlämning. Egenkontroller och relationshandlingar lämnas som en del av slutdokumentationen.",
          },
          {
            title: "Försäkring, avtal och kreditvärdighet",
            text: "Ansvarsförsäkring, kollektivavtal med Byggnads och Fastighets samt AAA i kreditvärdighet. Underlag lämnas som standard vid upphandling.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Kan jag använda ROT-avdrag när ni renoverar?",
        a: "Ja. Privatpersoner kan normalt använda ROT-avdrag för arbetskostnaden vid renovering, ombyggnation och reparation i bostaden. Vi tar fram underlaget och drar avdraget direkt på fakturan.",
      },
      {
        q: "Vad kostar en offert?",
        a: "Offerter är kostnadsfria och utan förpliktelser. Underlag och omfattning gås igenom innan vi lämnar pris, normalt med återkoppling inom ett dygn.",
      },
      {
        q: "Tar ni både små och stora uppdrag?",
        a: "Ja. Uppdragen spänner från löpande byggservice och enstaka åtgärder till kompletta entreprenader åt Sveriges största byggbolag. Samma organisation och samma kvalitetskrav gäller i båda ändarna.",
      },
      {
        q: "Var arbetar ni?",
        a: "Vi utgår från Almarevägen i Järfälla och arbetar i hela Storstockholm. Till de flesta arbetsplatser i länet är vi framme inom en timme.",
      },
      {
        q: "Hur snabbt kan ni börja?",
        a: "Byggservice och akuta åtgärder hanteras normalt inom några dagar. Större entreprenader planeras in gemensamt och följer projektets tidplan.",
      },
      {
        q: "Har ni egen personal eller anlitar ni underentreprenörer?",
        a: "Vi arbetar med egen personal på kollektivavtal och kompletterar med yrkesarbetare från Kanitas ENT inom koncernen. Installationsentreprenader inom el, VVS och ventilation upphandlas hos etablerade samarbetspartners.",
      },
      {
        q: "Sköter ni byggstädningen efteråt?",
        a: "Ja. Bygg- och slutstädning utförs av Kanitas ENT inom koncernen och kan ingå i entreprenaden, vilket tar bort en separat upphandling och en gränssnittsrisk.",
      },
    ],
    seo: {
      title: "Byggföretag i Stockholm: renovering & byggservice",
      description:
        "Kanitas Bygg utför nybyggnation, renovering, byggservice och rivning i Stockholm. AAA-kreditvärdighet och kollektivavtal. Begär kostnadsfri offert!",
    },
  },
  {
    slug: "stad",
    active: true,
    nav: "Bemanning & städ",
    name: "Kanitas ENT",
    tagline: "Bemanning och byggstädning",
    h1: "Bemanning och byggstädning i Stockholm",
    servicesH2: "Bemanning och städtjänster i Storstockholm",
    serviceType: "Bemanning och byggstädning",
    tone: "#c9a86a",
    toneDeep: "#1e4d3b",
    ctaLabel: "Begär offert",
    contactTopic: "Bemanning",
    teaser:
      "Yrkesarbetare med korta inställelsetider och byggstädning som håller för besiktning, åt entreprenörer, fastighetsägare och BRF:er.",
    intro:
      "Kanitas ENT är koncernens bemannings- och servicebolag. Vi hyr ut snickare, betongarbetare, murare och byggstädare till entreprenörer med bemanningsbehov, och utför byggstädning efter våra egna och andras entreprenader. Personalen är anställd hos oss på kollektivavtal med Byggnads och Fastighets, utan led av underleverantörer, vilket ger spårbarhet och en jämn kvalitetsnivå över tid.",
    services: [
      {
        title: "Yrkesarbetare till bygg",
        text: "Snickare, betongarbetare, murare och ställningsbyggare som integreras i er organisation och arbetar under er arbetsledning.",
        icon: "hardhat",
      },
      {
        title: "Byggstädning & slutstädning",
        text: "Grov- och finstädning under och efter byggprojekt, alltid klar inför besiktning och inflytt.",
        icon: "spray",
      },
      {
        title: "Bemanning med kort varsel",
        text: "Frånvaro, försenade leveranser eller forcerade etapper. Bemanning löses normalt inom ett dygn.",
        icon: "clock",
      },
      {
        title: "Kontors- & fastighetsstädning",
        text: "Regelbunden städning av kontor, trapphus och gemensamma ytor, med fasta kontaktpersoner och tydlig kvalitetsuppföljning.",
        icon: "briefcase",
      },
      {
        title: "Flyttstädning",
        text: "Garanterat godkänd flyttstädning för bostäder och lokaler, med checklista enligt branschstandard.",
        icon: "boxes",
      },
      {
        title: "Storstädning & fönsterputs",
        text: "Djuprengöring av golv, fönsterputs och specialuppdrag utöver den löpande städningen.",
        icon: "droplets",
      },
    ],
    related: {
      href: "/bygg",
      label: "entreprenad och byggservice hos Kanitas Bygg",
      text: "För totalansvar i entreprenadform, se",
    },
    process: [
      {
        step: "01",
        title: "Behovsgenomgång",
        text: "Ange yrkesroller, omfattning och period, eller ytor och slutdatum vid städuppdrag. Vi återkommer med bemanningsförslag och pris.",
      },
      {
        step: "02",
        title: "Vi bemannar",
        text: "Du får namngiven personal med redovisad erfarenhet. Löpande städuppdrag bemannas av samma team för att bygga kännedom om lokalen.",
      },
      {
        step: "03",
        title: "Uppföljning",
        text: "Löpande avstämning av bemanning och kvalitet, och genomgång av städresultat mot checklista. Vid slutstädning kvarstår vårt åtagande till godkänd besiktning.",
      },
    ],
    extraSections: [
      {
        eyebrow: "Bemanning",
        title: "Så fungerar bemanning hos oss",
        lead: "Du hyr in yrkeskompetens. Anställning, försäkring, arbetskläder och skyddsutrustning ligger hos oss.",
        items: [
          {
            title: "Egen anställd personal",
            text: "Samtliga uthyrda är anställda i Kanitas ENT AB på kollektivavtal. Inga led av underleverantörer, och full spårbarhet på vem som befinner sig på arbetsplatsen.",
          },
          {
            title: "Arbetsledning hos beställaren",
            text: "Personalen arbetar under er arbetsledning och era rutiner. Lön, försäkring, utrustning och arbetsgivaransvar ligger kvar hos oss.",
          },
          {
            title: "Korta inställelsetider",
            text: "Frånvaro och forcerade etapper hanteras normalt inom ett dygn, eftersom personal kan omfördelas från koncernens egna projekt.",
          },
          {
            title: "Uppdrag i den omfattning som krävs",
            text: "Från enstaka dagars förstärkning inför besiktning till kompletta lag under hela etapper. Avtalet utformas efter uppdraget.",
          },
        ],
      },
      {
        eyebrow: "Byggstädning",
        title: "Det här ingår i en byggstädning",
        lead: "Byggstädning sker i etapper i takt med projektet, från grovstädning under byggtiden till finstädning inför besiktning och inflytt.",
        items: [
          {
            title: "Grovstädning",
            text: "Byggdamm, spill och emballage avlägsnas löpande under byggtiden så att hantverkarna kan arbeta säkert och effektivt.",
          },
          {
            title: "Finstädning",
            text: "Samtliga ytor dammbekämpas och rengörs: snickerier, ventilationsdon, elcentraler, fönsterkarmar och golv.",
          },
          {
            title: "Fönsterputs",
            text: "Putsning av glas, karmar och bågar invändigt och utvändigt, inklusive borttagning av etiketter och byggtejp.",
          },
          {
            title: "Slutstädning inför besiktning",
            text: "Sista genomgången innan överlämning. Vi städar tills lokalen eller bostaden håller för besiktning och inflytt.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Är personalen anställd hos er eller inhyrd?",
        a: "Anställd hos oss i Kanitas ENT AB på kollektivavtal med Byggnads eller Fastighets. Vi arbetar inte med led av underentreprenörer, vilket ger full spårbarhet på vem som befinner sig på arbetsplatsen.",
      },
      {
        q: "Hur snabbt kan ni bemanna?",
        a: "Normalt inom ett dygn för enstaka yrkesarbetare och inom några dagar för kompletta lag, eftersom personal kan omfördelas från koncernens egna projekt.",
      },
      {
        q: "Vem leder arbetet när vi hyr in personal?",
        a: "Beställaren. Personalen arbetar under er arbetsledning och era rutiner, medan anställning, lön, försäkring, arbetskläder och skyddsutrustning ligger hos oss.",
      },
      {
        q: "Hur lång tid tar en byggstädning?",
        a: "Omfattningen styrs av yta och byggets status vid överlämning. En lägenhet tar normalt en dag, större lokaler flera. Vi planerar bakåt från besiktningsdatum.",
      },
      {
        q: "Vad händer om besiktningen inte blir godkänd?",
        a: "Vi åtgärdar anmärkningar utan extra kostnad. Åtagandet vid slutstädning kvarstår till godkänd besiktning.",
      },
      {
        q: "Tar ni löpande städavtal eller bara engångsuppdrag?",
        a: "Båda. Vi tecknar löpande avtal för kontor, trapphus och fastigheter med fast kontaktperson, och åtar oss enskilda uppdrag som flytt- och storstädning.",
      },
    ],
    seo: {
      title: "Bemanning & byggstädning i Stockholm",
      description:
        "Kanitas ENT hyr ut yrkesarbetare till bygg och utför byggstädning, slutstädning och kontorsstädning i Stockholm. Egen personal på kollektivavtal. Begär offert!",
    },
  },
  {
    slug: "fastigheter",
    active: false,
    nav: "Fastigheter",
    name: "Kanitas Fastigheter",
    tagline: "Lokaler som fungerar",
    h1: "Lokaler att hyra i Järfälla och Storstockholm",
    servicesH2: "Lokaler och fastighetsförvaltning i Järfälla",
    serviceType: "Fastighetsförvaltning och lokaluthyrning",
    businessType: "RealEstateAgent",
    tone: "#9c8265",
    toneDeep: "#5f4c37",
    ctaLabel: "Anmäl intresse",
    contactTopic: "Fastigheter",
    teaser:
      "Vi förvärvar, förvaltar och hyr ut industri- och lagerlokaler i Storstockholm, med egen drift och skötsel.",
    intro:
      "Kanitas Fastigheter äger och förvaltar fastigheter och kommersiella lokaler i Storstockholm. Med byggkompetensen i samma koncern håller vi våra fastigheter i toppskick och kan snabbt anpassa lokaler efter hyresgästens behov.",
    services: [
      {
        title: "Uthyrning av lokaler",
        text: "Industri-, lager- och verksamhetslokaler med flexibla ytor och bra lägen i Järfälla och Storstockholm.",
        icon: "warehouse",
      },
      {
        title: "Fastighetsförvaltning",
        text: "Aktiv förvaltning av egna fastigheter med långsiktiga hyresgästrelationer och löpande investeringar.",
        icon: "key",
      },
      {
        title: "Fastighetsservice & skötsel",
        text: "Tillsyn, underhåll, snöröjning och markskötsel, allt utfört av koncernens egna team.",
        icon: "cog",
      },
      {
        title: "Lokalanpassning",
        text: "Vi bygger om och anpassar lokalen efter din verksamhet, snabbt, eftersom bygg och fastighet sitter i samma hus.",
        icon: "layout",
      },
    ],
    related: {
      href: "/bygg",
      label: "Kanitas Bygg",
      text: "Lokalanpassning och ombyggnation utförs av",
    },
    process: [
      {
        step: "01",
        title: "Intresseanmälan",
        text: "Berätta vilken typ av lokal du söker, yta, användning och önskat område, så hör vi av oss när något passar.",
      },
      {
        step: "02",
        title: "Visning & avtal",
        text: "Vi visar lokalen, går igenom dina behov och tar fram ett hyresavtal med tydliga villkor.",
      },
      {
        step: "03",
        title: "Inflytt & anpassning",
        text: "Behöver lokalen anpassas bygger koncernens eget byggteam om den innan eller efter inflytt, en kontakt för allt.",
      },
    ],
    extraSections: [
      {
        eyebrow: "Lediga lokaler",
        title: "Söker du lokal i Järfälla eller Storstockholm?",
        lead: "Vårt bestånd består främst av industri-, lager- och verksamhetslokaler. Utbudet förändras löpande och alla objekt publiceras inte här, anmäl intresse så kontaktar vi dig när en lokal som matchar dina behov blir ledig.",
        items: [
          {
            title: "Industri- & lagerlokaler",
            text: "Flexibla ytor för produktion, lager och logistik med bra lägen och lastmöjligheter.",
          },
          {
            title: "Verksamhetslokaler",
            text: "Lokaler för verkstad, handel och service som kan anpassas efter din verksamhet.",
          },
          {
            title: "Anpassning ingår i dialogen",
            text: "Berätta vad din verksamhet kräver, koncernens byggteam kan anpassa lokalen innan du flyttar in.",
          },
        ],
      },
    ],
    seo: {
      title: "Lediga lokaler i Järfälla: lager & industri",
      description:
        "Kanitas Fastigheter hyr ut industri- och lagerlokaler i Järfälla och Storstockholm och förvaltar egna fastigheter. Anmäl intresse för lediga lokaler!",
    },
  },
  {
    slug: "bil",
    active: false,
    nav: "Bil",
    name: "Kanitas Bil",
    tagline: "Trygg bilaffär, utan krångel",
    h1: "Köp och sälj bil i Järfälla. Trygg bilaffär utan krångel.",
    servicesH2: "Köp och försäljning av bilar och maskiner",
    serviceType: "Bilhandel, köp och försäljning av fordon",
    businessType: "AutoDealer",
    tone: "#de7562",
    toneDeep: "#9c2e1f",
    ctaLabel: "Få en värdering",
    contactTopic: "Annat",
    teaser:
      "Köp och försäljning av personbilar, transportbilar, lastbilar och arbetsmaskiner, alltid genomgångna och rätt prissatta.",
    intro:
      "Kanitas Bil köper och säljer personbilar, transportbilar, lastbilar och arbetsmaskiner. Som del av en etablerad koncern med AAA-kreditvärdighet gör du affären med en trygg motpart, snabbt, transparent och till rätt pris.",
    services: [
      {
        title: "Försäljning av bilar",
        text: "Noggrant utvalda personbilar och transportbilar, genomgångna och redo för leverans. Lagret förändras snabbt, ring så berättar vi vad som finns inne just nu.",
        icon: "car",
      },
      {
        title: "Vi köper din bil",
        text: "Snabb värdering och betalning samma dag, vi köper personbilar och transportbilar i alla prisklasser.",
        icon: "handshake",
      },
      {
        title: "Lastbilar & arbetsmaskiner",
        text: "Köp och försäljning av lastbilar, släp och arbetsmaskiner för bygg och entreprenad.",
        icon: "truck",
      },
      {
        title: "Förmedling & inbyte",
        text: "Vi förmedlar fordon åt företag och tar din nuvarande bil i inbyte när du byter upp dig.",
        icon: "refresh",
      },
    ],
    related: {
      href: "/om-oss",
      label: "koncernen bakom Kanitas Bil",
      text: "Läs mer om",
    },
    process: [
      {
        step: "01",
        title: "Värdering",
        text: "Skicka registreringsnummer och några bilder, eller kom förbi, vi värderar din bil snabbt och kostnadsfritt.",
      },
      {
        step: "02",
        title: "Prisförslag",
        text: "Du får ett tydligt bud utan förpliktelser. Jämför gärna, vi står för vårt pris.",
      },
      {
        step: "03",
        title: "Affär & betalning",
        text: "Accepterar du budet sköter vi ägarbyte och betalning direkt, oftast samma dag.",
      },
    ],
    seo: {
      title: "Sälj din bil i Järfälla: snabb värdering",
      description:
        "Kanitas Bil köper och säljer personbilar, transportbilar, lastbilar och arbetsmaskiner i Stockholm. Snabb värdering, betalning samma dag. Trygg affär!",
    },
  },
];

/** Areas currently presented on the site. Bil and Fastigheter are parked
 * for now — flip `active` and restore their route folders to re-enable. */
export const activeAreas = areas.filter((a) => a.active);

export const nav = [
  { href: "/#verksamheter", label: "Verksamheter" },
  ...activeAreas.map((a) => ({ href: `/${a.slug}`, label: a.nav })),
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export const stats = [
  { value: "2011", label: "Grundat i Järfälla" },
  { value: "35", label: "Medarbetare i koncernen" },
  { value: "5", label: "Bolag i koncernen" },
  { value: "AAA", label: "Högsta kreditvärdighet" },
];

/**
 * Photography slots. Every photograph on the site is registered here; a slot
 * with `ready: false` renders a labelled placeholder instead, so the layout is
 * finished before the photography is. To go live with a photo: drop the file
 * at `src` and flip `ready` to true. Nothing else changes.
 */
export type PhotoSlot = {
  src: string;
  alt: string;
  /** What the photograph needs to show, for whoever shoots or picks it. */
  brief: string;
  /** Roughly the shape the slot renders at. */
  shape: string;
  ready: boolean;
};

export const photos = {
  "hem-hero": {
    src: "/images/photos/hem-hero.jpg",
    alt: "Modern byggnad i glas och stål sedd underifrån mot ljus himmel",
    brief:
      "Ljus arkitekturbild i liggande format. Vänstra tredjedelen måste vara ljus, rubriken ligger där.",
    shape: "Full bredd, minst 2400 px, ljus vänsterkant",
    ready: true,
  },
  "hem-koncern": {
    src: "/images/photos/hem-koncern.jpg",
    alt: "Nybyggnadsområde i Stockholm med tornkranar och nya flerbostadshus",
    brief: "Eget projekt i Storstockholm, gärna helhetsbild av arbetsplatsen",
    shape: "4:3 liggande",
    ready: true,
  },
  "hem-stockholm": {
    src: "/images/photos/hem-stockholm.jpg",
    alt: "Stockholms siluett med Riddarholmen i skymningen",
    brief: "Stockholmsvy i skymning, tål mörk överlagring och text",
    shape: "Full bredd, minst 2000 px",
    ready: true,
  },
  "bygg-varfor": {
    src: "/images/photos/bygg-varfor.jpg",
    alt: "Betongstomme under uppförande med tornkran mot blå himmel",
    brief: "Stomme eller konstruktion under uppförande, gärna eget projekt",
    shape: "16:10 liggande",
    ready: true,
  },
  "bygg-projekt": {
    src: "/images/photos/bygg-projekt.jpg",
    alt: "Färdigställt flerbostadshus i tegel mot blå himmel",
    brief: "Färdigt projekt, gärna en fasad eller ett rum vi byggt",
    shape: "16:10 liggande",
    ready: true,
  },
  "ent-bemanning": {
    src: "/images/photos/ent-bemanning.jpg",
    alt: "Fasad på nyproducerat flerbostadshus med balkonger",
    brief: "Fastighet eller arbetsplats där vår personal är verksam",
    shape: "16:10 liggande",
    ready: true,
  },
  "ent-stad": {
    src: "/images/photos/ent-stad.jpg",
    alt: "Byggdammsugare och verktyg i en nyrenoverad lägenhet",
    brief: "Byggstädning pågår: utrustning och yta efter hantverkarna",
    shape: "16:10 liggande",
    ready: true,
  },
  "om-oss": {
    src: "/images/photos/om-oss.jpg",
    alt: "Vy över Stockholms innerstad från vattnet",
    brief: "Kontoret eller fordonsparken i Järfälla, visar att vi finns på riktigt",
    shape: "16:10 liggande",
    ready: true,
  },
} satisfies Record<string, PhotoSlot>;

export type PhotoName = keyof typeof photos;

/**
 * The four verksamheter kanitas.se routes to. The parent site is a switchboard:
 * it explains the group, then sends the visitor to the business they came for.
 *
 * `href` is the single thing that changes the day a verksamhet gets its own
 * domain — point it at https://kanitasbygg.se, set `external`, and the card,
 * the footer and the sitemap all follow.
 */
export type Business = {
  slug: string;
  /** Full brand name, e.g. "Kanitas Bygg" */
  name: string;
  /** Short label for nav and cards, e.g. "Bygg" */
  short: string;
  tagline: string;
  /** Where the switchboard sends the visitor. */
  href: string;
  /** True once the verksamhet has moved to its own domain. */
  external: boolean;
  /** lucide icon name, see BusinessIcon */
  icon: string;
  /** Selling copy — a real paragraph, not a line of bullet points. */
  blurb: string;
  highlights: string[];
  /** Legal entities that carry this verksamhet. */
  entities: string[];
};

export const businesses: Business[] = [
  {
    slug: "bygg",
    name: "Kanitas Bygg",
    short: "Bygg",
    tagline: "Från grund till nyckelfärdigt",
    href: "/bygg",
    external: false,
    icon: "hardhat",
    blurb:
      "Byggverksamheten är koncernens största och äldsta gren. Vi utför entreprenader i alla storlekar, från löpande byggservice åt fastighetsägare till kompletta om- och nybyggnationer som underentreprenör åt Sveriges ledande byggbolag. NCC, Implenia, ByggPartner och Oljibe hör till våra återkommande uppdragsgivare.",
    highlights: [
      "Nybyggnation & entreprenad",
      "Renovering & ombyggnation",
      "Byggservice med snabb inställelse",
      "Mark, rivning & sanering",
    ],
    entities: ["Kanitas Bygg AB", "Kanitas AB"],
  },
  {
    slug: "stad",
    name: "Kanitas ENT",
    short: "Bemanning & städ",
    tagline: "Bemanning och byggstädning",
    href: "/stad",
    external: false,
    icon: "users",
    blurb:
      "ENT är koncernens bemannings- och servicebolag. Vi hyr ut snickare, betongarbetare, murare och byggstädare till entreprenörer med bemanningsbehov, och utför byggstädning efter våra egna och andras entreprenader. Personalen är anställd hos oss på kollektivavtal, utan led av underleverantörer.",
    highlights: [
      "Yrkesarbetare till bygg",
      "Byggstädning & slutstädning",
      "Kontors- & fastighetsstädning",
      "Personal med kort varsel",
    ],
    entities: ["Kanitas ENT AB"],
  },
  {
    slug: "trading",
    name: "Kanitas Trading",
    short: "Trading",
    tagline: "Verktyg, maskiner och fordon",
    href: "/kontakt",
    external: false,
    icon: "truck",
    blurb:
      "Trading handlar med och hyr ut maskiner, verktyg, transportbilar och arbetsfordon. Verksamheten byggdes upp för att förse koncernens egna entreprenader med utrustning och är i dag en självständig affär. Den löpande marknadskännedomen ligger till grund för våra värderingar av begagnad utrustning.",
    highlights: [
      "Köp & försäljning av fordon",
      "Maskiner och verktyg",
      "Uthyrning till projekt",
      "Värdering av begagnat",
    ],
    entities: ["Kanitas Trading AB"],
  },
  {
    slug: "fastigheter",
    name: "Kanitas Fastigheter",
    short: "Fastigheter",
    tagline: "Lokaler och förvaltning",
    href: "/kontakt",
    external: false,
    icon: "building",
    blurb:
      "Fastigheter äger och förvaltar koncernens bestånd av verkstads-, lager- och kontorslokaler i Järfälla och Storstockholm. Som hyresvärd med egen byggorganisation utför vi hyresgästanpassningar och underhåll i egen regi, vilket ger kortare ledtider och kontroll över kvaliteten.",
    highlights: [
      "Lokaler att hyra",
      "Fastighetsförvaltning",
      "Egen byggkompetens i huset",
      "Långsiktigt underhåll",
    ],
    entities: ["Kanitas Fastigheter AB"],
  },
];

/** Verksamheter that have a page of their own to send visitors to. */
export const liveBusinesses = businesses.filter((b) => b.href !== "/kontakt");

/**
 * Who the koncern actually works for. The switchboard sorts by verksamhet;
 * this sorts by visitor, because most people know what they are rather than
 * which of our bolag does the job.
 */
export const audiences = [
  {
    title: "Byggbolag & totalentreprenörer",
    icon: "hardhat",
    text: "Vi går in som underentreprenör i era projekt och hyr ut yrkesarbetare när ni behöver förstärkning. NCC, Implenia, ByggPartner och Oljibe är återkommande uppdragsgivare.",
    href: "/bygg",
    linkLabel: "Se vad vi bygger",
  },
  {
    title: "Fastighetsägare & förvaltare",
    icon: "building",
    text: "Byggservice på avtal, hyresgästanpassningar och planerat underhåll, plus löpande fastighetsstädning och snöröjning. En kontaktperson för hela beståndet.",
    href: "/bygg",
    linkLabel: "Läs om byggservice",
  },
  {
    title: "BRF:er",
    icon: "users",
    text: "Stambyten, fasad- och balkongarbeten och renovering av gemensamma ytor, med information till boende och en tidplan styrelsen kan luta sig mot.",
    href: "/bygg",
    linkLabel: "Så arbetar vi med BRF",
  },
  {
    title: "Privatpersoner",
    icon: "key",
    text: "Renovering, badrum och tillbyggnad med ROT-avdraget draget direkt på fakturan. Samma hantverkare som byggbolagen anlitar, även för ett enda rum.",
    href: "/bygg",
    linkLabel: "Begär offert",
  },
] as const;

/**
 * The facts a procurement function checks before shortlisting a supplier.
 * Kept as data so they are stated once and can be cited anywhere.
 */
export const groupFacts = [
  { label: "Organisationsnummer", value: "556841-1010" },
  { label: "Grundat", value: "2011, Järfälla" },
  { label: "Bolag i koncernen", value: "5" },
  { label: "Medarbetare", value: "35" },
  { label: "Kreditvärdighet", value: "AAA, högsta nivån" },
  { label: "Kollektivavtal", value: "Byggnads och Fastighets" },
  { label: "Försäkring", value: "Ansvarsförsäkring, godkänd för F-skatt" },
  { label: "Verksamhetsområde", value: "Storstockholm" },
] as const;

/** Legal entities in the group, shown on the About page. */
export const groupCompanies = [
  {
    name: "Kanitas AB",
    orgnr: "556841-1010",
    role: "Moderbolag för bygg, städ och service sedan 2011",
    area: "/bygg",
    areaLabel: "Kanitas Bygg",
  },
  {
    name: "Kanitas ENT AB",
    orgnr: "559146-9183",
    role: "Bemanning, byggstädning och service",
    area: "/stad",
    areaLabel: "Kanitas ENT",
  },
  {
    name: "Kanitas Bygg AB",
    orgnr: "559553-4297",
    role: "Byggnads- och markentreprenader",
    area: "/bygg",
    areaLabel: "Kanitas Bygg",
  },
  {
    name: "Kanitas Fastigheter AB",
    orgnr: "559553-4305",
    role: "Byggverksamhet och fastighetsförvaltning",
  },
  {
    name: "Kanitas Trading AB",
    orgnr: "559553-4263",
    role: "Köp, försäljning och uthyrning av fordon och maskiner",
  },
];

export const values = [
  {
    title: "Kvalitet",
    icon: "award",
    blurb: "Rätt metoder, rätt material och egenkontroll innan vi lämnar.",
    text: "Vi använder beprövade metoder och rätt material, och lämnar aldrig ett arbete innan det håller vår egen standard. Den är högre än de flesta andras.",
  },
  {
    title: "Pålitlighet",
    icon: "handshake",
    blurb: "Vi håller tider, budgetar och det vi har lovat.",
    text: "Vi håller tider, budgetar och löften. Därför har vi kunder som stannat hos oss i över ett decennium.",
  },
  {
    title: "Kundfokus",
    icon: "users",
    blurb: "En fast kontaktperson som svarar när du ringer.",
    text: "Varje uppdrag anpassas efter dina behov, med en fast kontaktperson som svarar när du ringer.",
  },
];

export const references = [
  { name: "NCC", logo: "/references/ncc.png" },
  { name: "Implenia", logo: "/references/Implenia.jpg" },
  { name: "Jiben", logo: "/references/jiben.png" },
  { name: "Oljibe", logo: "/references/oljibe.png" },
  { name: "Artega", logo: "/references/artega.png" },
  { name: "ByggPartner", logo: "/references/byggpartner.png" },
  { name: "Dagab", logo: "/references/dagab.jpg" },
  { name: "SMD Logistics", logo: "/references/smd.jpg" },
  { name: "Ranova", logo: "/references/ranova.jpg" },
  { name: "Catena", logo: "/references/catena.png" },
];

export const certifications = [
  { name: "AAA, Högsta kreditvärdighet", image: "/images/cert/aaa_120.png" },
  { name: "Kollektivavtal Byggnads", image: "/images/cert/byggnads_140.png" },
  {
    name: "Kollektivavtal Fastighets",
    image: "/images/cert/fastighets_120.png",
  },
  { name: "SafeTrade", image: "/images/cert/SafeTrade_120.png" },
  { name: "Svenskt Näringsliv", image: "/images/cert/svnaring_B.png" },
];

/** Topics for the contact form's ärende selector. */
export const contactTopics = [
  "Bygg",
  "Bemanning",
  "Städ",
  "Trading",
  "Fastigheter",
  "Annat",
] as const;
