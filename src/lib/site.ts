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
  openingHours: "Mån–fre 08.00–17.00",
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
  /** Sub-brand accent for light surfaces (icons, eyebrows) — AA on cream */
  toneDeep: string;
  /** Label for the primary CTA — matches what the visitor actually wants */
  ctaLabel: string;
  teaser: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  services: { title: string; text: string; icon: string }[];
  /** Contextual cross-link rendered after the services grid */
  related?: { href: string; label: string; text: string };
  /** Area-specific process steps ("Så går det till") */
  process: { step: string; title: string; text: string }[];
  /** Optional content section for depth (checklist, inventory note etc.) */
  extraSection?: {
    eyebrow: string;
    title: string;
    lead?: string;
    items: { title: string; text: string }[];
  };
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
    h1: "Byggföretag i Stockholm – från grund till nyckelfärdigt",
    servicesH2: "Byggtjänster i Stockholm",
    serviceType: "Byggentreprenad och byggservice",
    tone: "#e8892b",
    toneDeep: "#9a530b",
    ctaLabel: "Begär offert",
    teaser:
      "Nybyggnation, renovering och byggservice för företag och privatpersoner – vår kärnverksamhet sedan 2011.",
    intro:
      "Bygg är hjärtat i Kanitas. Vi tar totalansvar för projekt i alla storlekar – från löpande byggservice till kompletta entreprenader – åt byggbolag, fastighetsägare och privatpersoner. Bland våra uppdragsgivare finns flera av Sveriges ledande bygg- och fastighetsaktörer, och vi hjälper lika gärna dig som ska renovera hemma.",
    heroImage: "/images/photos/bygg-hero.jpg",
    heroAlt: "Byggarbetare i arbete på byggarbetsplats",
    services: [
      {
        title: "Nybyggnation",
        text: "Kompletta entreprenader från markarbete till färdig byggnad – för företag, fastighetsägare och privatpersoner.",
        icon: "building",
      },
      {
        title: "Renovering & ombyggnation",
        text: "Vi moderniserar kontor, lokaler och bostäder med genomtänkta lösningar och minimala störningar i verksamheten.",
        icon: "hammer",
      },
      {
        title: "Byggservice",
        text: "Löpande underhåll, reparationer och anpassningar med snabb inställelse – ett tryggt avtal för fastighetsägare.",
        icon: "wrench",
      },
      {
        title: "Rivning & sanering",
        text: "Selektiv rivning samt bygg-, brand- och fuktsanering – säkert, miljöriktigt och med full dokumentation.",
        icon: "shield",
      },
      {
        title: "Mark & anläggning",
        text: "Markentreprenader, grundläggning, dränering och finplanering som ger projektet rätt förutsättningar från start.",
        icon: "mountain",
      },
      {
        title: "Snöröjning",
        text: "Avtalskunder får snöröjning och halkbekämpning som håller fastigheter säkra och tillgängliga hela vintern.",
        icon: "snowflake",
      },
    ],
    related: {
      href: "/stad",
      label: "Byggstädning & slutstädning – Kanitas Städ",
      text: "Efter bygget tar systerbolaget hand om",
    },
    process: [
      {
        step: "01",
        title: "Kontakt & offert",
        text: "Beskriv ditt projekt via formuläret eller ring oss. Vi återkommer snabbt med en tydlig offert utan dolda kostnader.",
      },
      {
        step: "02",
        title: "Genomförande",
        text: "Vi planerar, bemannar och genomför projektet med en fast kontaktperson som håller dig uppdaterad hela vägen.",
      },
      {
        step: "03",
        title: "Uppföljning",
        text: "Vi går igenom resultatet tillsammans och lämnar inte förrän allt är godkänt – och vi finns kvar efteråt.",
      },
    ],
    faq: [
      {
        q: "Kan jag använda ROT-avdrag när ni renoverar?",
        a: "Ja. Som privatperson kan du normalt använda ROT-avdrag för arbetskostnaden när vi utför renovering, ombyggnation eller reparationer i din bostad. Vi hjälper dig med underlaget och drar avdraget direkt på fakturan.",
      },
      {
        q: "Vad kostar en offert?",
        a: "Ingenting. Offerter är alltid kostnadsfria och utan förpliktelser – beskriv ditt projekt så återkommer vi, oftast samma dag.",
      },
      {
        q: "Tar ni både små och stora uppdrag?",
        a: "Ja. Vi utför allt från mindre byggservice och reparationer till kompletta entreprenader, åt både privatpersoner och några av Sveriges största byggbolag.",
      },
      {
        q: "Var arbetar ni?",
        a: "Vi utgår från Järfälla och arbetar i hela Storstockholm.",
      },
    ],
    seo: {
      title: "Byggföretag i Stockholm – renovering & byggservice",
      description:
        "Kanitas Bygg utför nybyggnation, renovering, byggservice och rivning i Stockholm. AAA-kreditvärdighet och kollektivavtal. Begär kostnadsfri offert!",
    },
  },
  {
    slug: "stad",
    active: true,
    nav: "Städ",
    name: "Kanitas Städ",
    tagline: "Rent, klart och redo",
    h1: "Byggstädning och kontorsstädning i Stockholm",
    servicesH2: "Städtjänster för företag och byggprojekt",
    serviceType: "Byggstädning och kontorsstädning",
    tone: "#5cb57e",
    toneDeep: "#296941",
    ctaLabel: "Begär offert",
    teaser:
      "Byggstädning, kontorsstädning och flyttstädning med dokumenterad kvalitet – för företag, BRF:er och byggprojekt.",
    intro:
      "Kanitas Städ levererar professionell städning där kraven är som högst. Vi är specialiserade på byggstädning och slutstädning inför besiktning, och tar även hand om den löpande städningen av kontor och fastigheter. Rätt utfört, i rätt tid – varje gång.",
    heroImage: "/images/photos/stad-hero.jpg",
    heroAlt: "Städare moppar entrégolv i kontorsbyggnad",
    services: [
      {
        title: "Byggstädning & slutstädning",
        text: "Grov- och finstädning under och efter byggprojekt, alltid klar inför besiktning och inflytt.",
        icon: "sparkles",
      },
      {
        title: "Kontors- & fastighetsstädning",
        text: "Regelbunden städning av kontor, trapphus och gemensamma ytor – med fasta kontaktpersoner och tydliga kvalitetsuppföljningar.",
        icon: "briefcase",
      },
      {
        title: "Flyttstädning",
        text: "Garanterat godkänd flyttstädning för bostäder och lokaler, med checklista enligt branschstandard.",
        icon: "boxes",
      },
      {
        title: "Storstädning & specialstädning",
        text: "Djuprengöring av golv, fönsterputs och specialuppdrag – när det behövs mer än det vanliga.",
        icon: "sparkle",
      },
    ],
    related: {
      href: "/bygg",
      label: "renovering och byggservice hos Kanitas Bygg",
      text: "Behöver du även hantverkare? Se",
    },
    process: [
      {
        step: "01",
        title: "Behovsgenomgång & offert",
        text: "Berätta vad som ska städas och när det ska vara klart. Vi återkommer snabbt med en tydlig offert och plan.",
      },
      {
        step: "02",
        title: "Städning enligt plan",
        text: "Vårt team städar på avtalad tid med rätt utrustning och metoder – utan att störa pågående verksamhet eller byggarbete.",
      },
      {
        step: "03",
        title: "Kvalitetskontroll",
        text: "Vi går igenom resultatet mot checklistan tillsammans med dig – och vid slutstädning står vi bakom resultatet hela vägen till godkänd besiktning.",
      },
    ],
    extraSection: {
      eyebrow: "Byggstädning",
      title: "Det här ingår i en byggstädning",
      lead: "Byggstädning sker i etapper i takt med projektet – från grovstädning under byggtiden till finstädning inför besiktning och inflytt.",
      items: [
        {
          title: "Grovstädning",
          text: "Byggdamm, spill och emballage avlägsnas löpande under byggtiden så att hantverkarna kan arbeta säkert och effektivt.",
        },
        {
          title: "Finstädning",
          text: "Samtliga ytor dammbekämpas och rengörs – snickerier, ventilationsdon, elcentraler, fönsterkarmar och golv.",
        },
        {
          title: "Fönsterputs",
          text: "Putsning av glas, karmar och bågar invändigt och utvändigt, inklusive borttagning av etiketter och byggtejp.",
        },
        {
          title: "Slutstädning inför besiktning",
          text: "Sista genomgången innan överlämning – vi städar tills lokalen eller bostaden håller för besiktning och inflytt.",
        },
      ],
    },
    seo: {
      title: "Byggstädning & kontorsstädning i Stockholm",
      description:
        "Kanitas Städ utför byggstädning, slutstädning, kontorsstädning och flyttstädning i Stockholm. Dokumenterad kvalitet och kollektivavtal. Begär offert!",
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
    teaser:
      "Vi förvärvar, förvaltar och hyr ut industri- och lagerlokaler i Storstockholm – med egen drift och skötsel.",
    intro:
      "Kanitas Fastigheter äger och förvaltar fastigheter och kommersiella lokaler i Storstockholm. Med byggkompetensen i samma koncern håller vi våra fastigheter i toppskick och kan snabbt anpassa lokaler efter hyresgästens behov.",
    heroImage: "/images/photos/fastigheter-hero.jpg",
    heroAlt: "Modernt flerbostadshus i skymning",
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
        text: "Tillsyn, underhåll, snöröjning och markskötsel – allt utfört av koncernens egna team.",
        icon: "cog",
      },
      {
        title: "Lokalanpassning",
        text: "Vi bygger om och anpassar lokalen efter din verksamhet – snabbt, eftersom bygg och fastighet sitter i samma hus.",
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
        text: "Berätta vilken typ av lokal du söker – yta, användning och önskat område – så hör vi av oss när något passar.",
      },
      {
        step: "02",
        title: "Visning & avtal",
        text: "Vi visar lokalen, går igenom dina behov och tar fram ett hyresavtal med tydliga villkor.",
      },
      {
        step: "03",
        title: "Inflytt & anpassning",
        text: "Behöver lokalen anpassas bygger koncernens eget byggteam om den innan eller efter inflytt – en kontakt för allt.",
      },
    ],
    extraSection: {
      eyebrow: "Lediga lokaler",
      title: "Söker du lokal i Järfälla eller Storstockholm?",
      lead: "Vårt bestånd består främst av industri-, lager- och verksamhetslokaler. Utbudet förändras löpande och alla objekt publiceras inte här – anmäl intresse så kontaktar vi dig när en lokal som matchar dina behov blir ledig.",
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
          text: "Berätta vad din verksamhet kräver – koncernens byggteam kan anpassa lokalen innan du flyttar in.",
        },
      ],
    },
    seo: {
      title: "Lediga lokaler i Järfälla – lager & industri",
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
    h1: "Köp och sälj bil i Järfälla – trygg bilaffär utan krångel",
    servicesH2: "Köp och försäljning av bilar och maskiner",
    serviceType: "Bilhandel – köp och försäljning av fordon",
    businessType: "AutoDealer",
    tone: "#de7562",
    toneDeep: "#9c2e1f",
    ctaLabel: "Få en värdering",
    teaser:
      "Köp och försäljning av personbilar, transportbilar, lastbilar och arbetsmaskiner – alltid genomgångna och rätt prissatta.",
    intro:
      "Kanitas Bil köper och säljer personbilar, transportbilar, lastbilar och arbetsmaskiner. Som del av en etablerad koncern med AAA-kreditvärdighet gör du affären med en trygg motpart – snabbt, transparent och till rätt pris.",
    heroImage: "/images/photos/bil-hero.jpg",
    heroAlt: "Bilar i showroom",
    services: [
      {
        title: "Försäljning av bilar",
        text: "Noggrant utvalda personbilar och transportbilar, genomgångna och redo för leverans. Lagret förändras snabbt – ring så berättar vi vad som finns inne just nu.",
        icon: "car",
      },
      {
        title: "Vi köper din bil",
        text: "Snabb värdering och betalning samma dag – vi köper personbilar och transportbilar i alla prisklasser.",
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
        text: "Skicka registreringsnummer och några bilder, eller kom förbi – vi värderar din bil snabbt och kostnadsfritt.",
      },
      {
        step: "02",
        title: "Prisförslag",
        text: "Du får ett tydligt bud utan förpliktelser. Jämför gärna – vi står för vårt pris.",
      },
      {
        step: "03",
        title: "Affär & betalning",
        text: "Accepterar du budet sköter vi ägarbyte och betalning direkt – oftast samma dag.",
      },
    ],
    seo: {
      title: "Sälj din bil i Järfälla – snabb värdering",
      description:
        "Kanitas Bil köper och säljer personbilar, transportbilar, lastbilar och arbetsmaskiner i Stockholm. Snabb värdering, betalning samma dag. Trygg affär!",
    },
  },
];

/** Areas currently presented on the site. Bil and Fastigheter are parked
 * for now — flip `active` and restore their route folders to re-enable. */
export const activeAreas = areas.filter((a) => a.active);

export const nav = [
  ...activeAreas.map((a) => ({ href: `/${a.slug}`, label: a.nav })),
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export const stats = [
  { value: "2011", label: "Grundat i Järfälla" },
  { value: "35", label: "Medarbetare i koncernen" },
  { value: "6", label: "Bolag i koncernen" },
  { value: "AAA", label: "Högsta kreditvärdighet" },
];

/** Legal entities in the group, shown on the About page. */
export const groupCompanies = [
  {
    name: "Kanitas AB",
    orgnr: "556841-1010",
    role: "Moderbolag – bygg, städ och service sedan 2011",
    area: "/bygg",
    areaLabel: "Kanitas Bygg",
  },
  {
    name: "Kanitas ENT AB",
    orgnr: "559146-9183",
    role: "Bygg- och städservice, entreprenad och bemanning",
    area: "/stad",
    areaLabel: "Kanitas Städ",
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
    name: "Kanitas Fastigheter 1 AB",
    orgnr: "556994-3961",
    role: "Fastighetsägande och förvaltning",
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
    text: "Vi använder beprövade metoder och rätt material, och lämnar aldrig ett arbete innan det håller vår egen standard – den är högre än de flesta andras.",
  },
  {
    title: "Pålitlighet",
    text: "Vi håller tider, budgetar och löften. Därför har vi kunder som stannat hos oss i över ett decennium.",
  },
  {
    title: "Kundfokus",
    text: "Varje uppdrag anpassas efter dina behov – med en fast kontaktperson som svarar när du ringer.",
  },
];

export const references = [
  { name: "NCC", logo: "/references/ncc.png" },
  { name: "Implenia", logo: "/references/Implenia.jpg" },
  { name: "Jiben", logo: "/references/jiben.png" },
  { name: "Oljibe", logo: "/references/oljibe.png" },
  { name: "Artega", logo: "/references/artega.png" },
  { name: "ByggPartner", logo: "/references/byggpartner.png" },
  { name: "Dagab", logo: "/references/dagab.svg" },
  { name: "SMD Logistics", logo: "/references/smd.jpg" },
  { name: "Ranova", logo: "/references/ranova.jpg" },
  { name: "Catena", logo: "/references/catena.png" },
];

export const certifications = [
  { name: "AAA – Högsta kreditvärdighet", image: "/images/cert/aaa_120.png" },
  { name: "Kollektivavtal Byggnads", image: "/images/cert/byggnads_140.png" },
  {
    name: "Kollektivavtal Fastighets",
    image: "/images/cert/fastighets_120.png",
  },
  { name: "SafeTrade", image: "/images/cert/SafeTrade_120.png" },
  { name: "Svenskt Näringsliv", image: "/images/cert/svnaring_B.png" },
];

/** Topics for the contact form's ärende selector. */
export const contactTopics = ["Bygg", "Städ", "Annat"] as const;
