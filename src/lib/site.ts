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
} as const;

export type Area = {
  slug: string;
  /** Short name used in navigation, e.g. "Bygg" */
  nav: string;
  /** Full brand name, e.g. "Kanitas Bygg" */
  name: string;
  tagline: string;
  /** One-liner used on home page cards */
  teaser: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  services: { title: string; text: string; icon: string }[];
  seo: { title: string; description: string };
};

export const areas: Area[] = [
  {
    slug: "bygg",
    nav: "Bygg",
    name: "Kanitas Bygg",
    tagline: "Från grund till nyckelfärdigt",
    teaser:
      "Nybyggnation, renovering och byggservice för företag och privatpersoner – vår kärnverksamhet sedan 2011.",
    intro:
      "Bygg är hjärtat i Kanitas. Vi tar totalansvar för projekt i alla storlekar – från löpande byggservice till kompletta entreprenader – och levererar i tid, inom budget och med hantverksstolthet. Bland våra uppdragsgivare finns flera av Sveriges ledande bygg- och fastighetsaktörer.",
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
    seo: {
      title: "Byggföretag i Stockholm – nybyggnation, renovering & byggservice",
      description:
        "Kanitas Bygg utför nybyggnation, renovering, byggservice, rivning, sanering samt mark- och anläggningsarbeten i Stockholm med omnejd. AAA-kreditvärdighet och kollektivavtal. Begär offert!",
    },
  },
  {
    slug: "stad",
    nav: "Städ",
    name: "Kanitas Städ",
    tagline: "Rent, klart och redo",
    teaser:
      "Byggstädning, kontorsstädning och flyttstädning med dokumenterad kvalitet – för företag, BRF:er och byggprojekt.",
    intro:
      "Kanitas Städ levererar professionell städning där kraven är som högst. Vi är specialiserade på byggstädning och slutstädning inför besiktning, och tar även hand om den löpande städningen av kontor och fastigheter. Rätt utfört, i rätt tid – varje gång.",
    heroImage: "/images/photos/stad-hero.jpg",
    heroAlt: "Professionell fönsterputsning och städning",
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
    seo: {
      title: "Byggstädning, kontorsstädning & flyttstädning i Stockholm",
      description:
        "Kanitas Städ erbjuder byggstädning, slutstädning, kontorsstädning och flyttstädning i Stockholm. Dokumenterad kvalitet, kollektivavtal och snabb offert.",
    },
  },
  {
    slug: "fastigheter",
    nav: "Fastigheter",
    name: "Kanitas Fastigheter",
    tagline: "Lokaler som fungerar",
    teaser:
      "Vi förvärvar, förvaltar och hyr ut industri- och lagerlokaler i Storstockholm – med egen drift och skötsel.",
    intro:
      "Kanitas Fastigheter äger och förvaltar kommersiella lokaler i Storstockholm. Med byggkompetensen i samma koncern håller vi våra fastigheter i toppskick och kan snabbt anpassa lokaler efter hyresgästens behov.",
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
    seo: {
      title: "Lokaler & fastighetsförvaltning i Järfälla och Storstockholm",
      description:
        "Kanitas Fastigheter hyr ut industri- och lagerlokaler i Storstockholm och förvaltar egna fastigheter med hög servicenivå. Kontakta oss om lediga lokaler.",
    },
  },
  {
    slug: "bil",
    nav: "Bil",
    name: "Kanitas Bil",
    tagline: "Trygg bilaffär, utan krångel",
    teaser:
      "Köp och försäljning av personbilar, transportbilar, lastbilar och arbetsmaskiner – alltid genomgångna och prissatta rätt.",
    intro:
      "Kanitas Bil köper och säljer personbilar, transportbilar, lastbilar och arbetsmaskiner. Som del av en etablerad koncern med AAA-kreditvärdighet gör du affären med en trygg motpart – snabbt, transparent och till rätt pris.",
    heroImage: "/images/photos/bil-hero.jpg",
    heroAlt: "Bilar i showroom",
    services: [
      {
        title: "Försäljning av bilar",
        text: "Noggrant utvalda personbilar och transportbilar, genomgångna och redo för leverans.",
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
    seo: {
      title: "Köp & sälj bil i Järfälla – personbilar, lastbilar & arbetsmaskiner",
      description:
        "Kanitas Bil köper och säljer personbilar, transportbilar, lastbilar och arbetsmaskiner i Stockholm. Snabb värdering, trygg affär med etablerat bolag.",
    },
  },
];

export const nav = [
  ...areas.map((a) => ({ href: `/${a.slug}`, label: a.nav })),
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
  },
  {
    name: "Kanitas ENT AB",
    orgnr: "559146-9183",
    role: "Bygg- och städservice, entreprenad och bemanning",
  },
  {
    name: "Kanitas Bygg AB",
    orgnr: "559553-4297",
    role: "Byggnads- och markentreprenader",
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
