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
  /** Across the group, as stated by the company. */
  employees: 35,
  url: "https://kanitas.se",
  phone: "070-665 32 48",
  phoneIntl: "+46706653248",
  phoneHref: "tel:+46706653248",
  email: "info@kanitas.se",
  address: {
    city: "Järfälla",
    region: "Stockholm",
    country: "SE",
  },
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

/**
 * A section on an area page. `columns` sets the items side by side, `steps`
 * numbers them because they happen in order, and `list` sets them beside the
 * heading on the page's one tinted band.
 */
export type AreaSection = {
  title: string;
  layout: "columns" | "steps" | "list";
  items: { title: string; text: string }[];
  /** Follow the items with the client logos. */
  references?: boolean;
};

export type Area = {
  slug: string;
  /** Whether the area is shown on the site (nav, sitemap, routes) */
  active: boolean;
  /** Short name used in navigation, e.g. "Bygg" */
  nav: string;
  /** Full brand name, e.g. "Kanitas Bygg" */
  name: string;
  /** Keyword-bearing page heading (h1) */
  h1: string;
  /** One or two sentences under the h1 */
  intro: string;
  heroPhoto: PhotoName;
  /** Full-width photograph after the services */
  photo: PhotoName;
  /** Keyword-bearing heading for the services */
  servicesH2: string;
  /** schema.org serviceType for the area's Service JSON-LD */
  serviceType: string;
  /** Optional schema.org LocalBusiness subtype for the area */
  businessType?: string;
  /** Label for the primary action */
  ctaLabel: string;
  /** Pre-selected ärende in the contact form */
  contactTopic: ContactTopic;
  services: { title: string; text: string }[];
  /** One line linking to the sister business, after the services */
  related?: { href: string; label: string };
  sections?: AreaSection[];
  /** Rendered with FAQPage structured data */
  faq?: { q: string; a: string }[];
  seo: { title: string; description: string };
};

export const areas: Area[] = [
  {
    slug: "bygg",
    active: true,
    nav: "Bygg",
    name: "Kanitas Bygg",
    h1: "Byggföretag i Stockholm",
    intro:
      "Nybyggnation, renovering och byggservice åt byggbolag, fastighetsägare, BRF:er och privatpersoner i hela Storstockholm.",
    heroPhoto: "bygge",
    photo: "renovering",
    servicesH2: "Byggtjänster",
    serviceType: "Byggentreprenad och byggservice",
    ctaLabel: "Begär offert",
    contactTopic: "Bygg",
    services: [
      {
        title: "Nybyggnation",
        text: "Hela entreprenader, från markarbete till färdig byggnad.",
      },
      {
        title: "Renovering och ombyggnation",
        text: "Kontor, lokaler och bostäder.",
      },
      {
        title: "Byggservice",
        text: "Underhåll, reparationer och anpassningar på löpande avtal.",
      },
      {
        title: "Badrum och våtrum",
        text: "Totalrenovering enligt Säker Vatten.",
      },
      {
        title: "Stomkomplettering och snickerier",
        text: "Innerväggar, undertak, dörrar och platsbyggda snickerier.",
      },
      {
        title: "Mark och anläggning",
        text: "Markarbeten, grundläggning, dränering och finplanering.",
      },
      {
        title: "Rivning och sanering",
        text: "Selektiv rivning samt bygg-, brand- och fuktsanering.",
      },
      {
        title: "Snöröjning",
        text: "Snöröjning och halkbekämpning för avtalskunder.",
      },
    ],
    related: {
      href: "/stad",
      label: "Byggstädning och extra personal: Kanitas ENT",
    },
    sections: [
      {
        title: "Våra kunder",
        layout: "columns",
        items: [
          {
            title: "Byggbolag",
            text: "Som underentreprenör åt bland andra NCC, Implenia, ByggPartner och Oljibe, med egen arbetsledning på plats.",
          },
          {
            title: "Fastighetsägare",
            text: "Byggservice på ramavtal: felavhjälpning, hyresgästanpassningar och planerat underhåll.",
          },
          {
            title: "BRF:er",
            text: "Stambyten, fasad- och balkongarbeten och renovering av gemensamma utrymmen. De boende får information under hela arbetet.",
          },
          {
            title: "Privatpersoner",
            text: "Renovering av villor och lägenheter, tillbyggnader och badrum. ROT-avdraget dras direkt på fakturan.",
          },
        ],
        references: true,
      },
      {
        title: "Så arbetar vi",
        layout: "list",
        items: [
          {
            title: "Tydlig offert",
            text: "Prisform och omfattning står i offerten. Tilläggsarbeten godkänns skriftligt innan de utförs.",
          },
          {
            title: "En kontaktperson",
            text: "Samma arbetsledare från offert till slutbesiktning.",
          },
          {
            title: "Dokumenterad egenkontroll",
            text: "Egenkontroller och relationshandlingar lämnas vid överlämningen.",
          },
          {
            title: "Försäkring och avtal",
            text: "Ansvarsförsäkring, kollektivavtal med Byggnads och Fastighets och AAA i kreditvärdighet.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Kan jag använda ROT-avdrag?",
        a: "Ja, för arbetskostnaden. Vi drar avdraget direkt på fakturan.",
      },
      {
        q: "Vad kostar en offert?",
        a: "Inget. Offerten är kostnadsfri.",
      },
      {
        q: "Tar ni även mindre uppdrag?",
        a: "Ja, från enstaka reparationer till hela entreprenader.",
      },
      {
        q: "Hur snabbt kan ni börja?",
        a: "Byggservice och akuta åtgärder kan vi normalt börja med inom några dagar. Större entreprenader planerar vi efter projektets tidplan.",
      },
      {
        q: "Har ni egen personal?",
        a: "Ja, vid behov förstärkt med yrkesarbetare från Kanitas ENT. För el, VVS och ventilation anlitar vi fasta samarbetspartner.",
      },
    ],
    seo: {
      title: "Byggföretag i Stockholm: renovering och byggservice",
      description:
        "Kanitas Bygg utför nybyggnation, renovering, byggservice och rivning i Stockholm. Kollektivavtal och AAA i kreditvärdighet. Begär en kostnadsfri offert.",
    },
  },
  {
    slug: "stad",
    active: true,
    nav: "Bemanning och städ",
    name: "Kanitas ENT",
    h1: "Bemanning och byggstädning i Stockholm",
    intro:
      "Vi hyr ut snickare, betongarbetare, murare och byggstädare till entreprenörer och gör byggstädning inför besiktning. All personal är anställd hos oss på kollektivavtal.",
    heroPhoto: "snickare",
    photo: "stad",
    servicesH2: "Bemanning och städtjänster",
    serviceType: "Bemanning och byggstädning",
    ctaLabel: "Begär offert",
    contactTopic: "Bemanning",
    services: [
      {
        title: "Yrkesarbetare",
        text: "Snickare, betongarbetare, murare och ställningsbyggare som arbetar under er arbetsledning.",
      },
      {
        title: "Bemanning med kort varsel",
        text: "När någon är borta eller tidplanen måste forceras.",
      },
      {
        title: "Byggstädning",
        text: "Grovstädning under bygget och slutstädning inför besiktning.",
      },
      {
        title: "Kontors- och fastighetsstädning",
        text: "Kontor, trapphus och gemensamma utrymmen, med samma team varje gång.",
      },
      {
        title: "Flyttstädning",
        text: "Bostäder och lokaler, enligt checklista.",
      },
      {
        title: "Storstädning och fönsterputs",
        text: "Golv, fönster och annat utöver den löpande städningen.",
      },
    ],
    related: {
      href: "/bygg",
      label: "Bygg och renovering: Kanitas Bygg",
    },
    sections: [
      {
        title: "Byggstädning i fyra steg",
        layout: "steps",
        items: [
          {
            title: "Grovstädning",
            text: "Byggdamm, spill och emballage tas bort löpande under byggtiden.",
          },
          {
            title: "Finstädning",
            text: "Alla ytor rengörs: snickerier, ventilationsdon, elcentraler, fönsterkarmar och golv.",
          },
          {
            title: "Fönsterputs",
            text: "Glas, karmar och bågar, invändigt och utvändigt. Etiketter och byggtejp tas bort.",
          },
          {
            title: "Slutstädning",
            text: "Sista genomgången före besiktning och inflyttning.",
          },
        ],
      },
      {
        title: "Så fungerar bemanning hos oss",
        layout: "list",
        items: [
          {
            title: "Inga mellanhänder",
            text: "Vi hyr aldrig in personal från andra bemanningsföretag, så du vet vem som är på arbetsplatsen.",
          },
          {
            title: "Er arbetsledning",
            text: "Personalen arbetar under er arbetsledning. Lön, försäkring och skyddsutrustning står vi för.",
          },
          {
            title: "Reserv i egna projekt",
            text: "Vid behov flyttar vi personal från koncernens egna byggen, så en lucka kan fyllas snabbt.",
          },
          {
            title: "Korta och långa uppdrag",
            text: "Från några dagars förstärkning till hela arbetslag.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Är personalen anställd hos er?",
        a: "Ja, på kollektivavtal med Byggnads eller Fastighets.",
      },
      {
        q: "Hur snabbt kan ni bemanna?",
        a: "Normalt inom ett dygn för enstaka yrkesarbetare och inom några dagar för ett helt arbetslag.",
      },
      {
        q: "Hur lång tid tar en byggstädning?",
        a: "En lägenhet tar normalt en dag, större lokaler flera. Vi planerar utifrån besiktningsdatumet.",
      },
      {
        q: "Vad händer om besiktningen får anmärkningar?",
        a: "Vi åtgärdar dem utan extra kostnad.",
      },
      {
        q: "Tar ni löpande städavtal?",
        a: "Ja, för kontor, trapphus och fastigheter. Vi tar också enstaka uppdrag som flytt- och storstädning.",
      },
    ],
    seo: {
      title: "Bemanning och byggstädning i Stockholm",
      description:
        "Kanitas ENT hyr ut yrkesarbetare till bygg och utför byggstädning, slutstädning och kontorsstädning i Stockholm. Egen personal på kollektivavtal.",
    },
  },
  {
    slug: "fastigheter",
    active: false,
    nav: "Fastigheter",
    name: "Kanitas Fastigheter",
    h1: "Lokaler att hyra i Järfälla",
    intro:
      "Verkstads-, lager- och kontorslokaler i Järfälla och Storstockholm. Anpassningar och underhåll gör vi själva.",
    heroPhoto: "fastighet",
    photo: "fastighet",
    servicesH2: "Lokaler och förvaltning",
    serviceType: "Fastighetsförvaltning och lokaluthyrning",
    businessType: "RealEstateAgent",
    ctaLabel: "Anmäl intresse",
    contactTopic: "Fastigheter",
    services: [
      {
        title: "Lokaler att hyra",
        text: "Verkstads-, lager- och kontorslokaler i Järfälla och Storstockholm.",
      },
      {
        title: "Förvaltning",
        text: "Vi förvaltar våra egna fastigheter.",
      },
      {
        title: "Fastighetsservice",
        text: "Tillsyn, underhåll, snöröjning och markskötsel.",
      },
      {
        title: "Lokalanpassning",
        text: "Kanitas Bygg anpassar lokalen efter din verksamhet.",
      },
    ],
    related: {
      href: "/bygg",
      label: "Ombyggnad och anpassning: Kanitas Bygg",
    },
    seo: {
      title: "Lokaler att hyra i Järfälla",
      description:
        "Kanitas Fastigheter hyr ut verkstads-, lager- och kontorslokaler i Järfälla och Storstockholm.",
    },
  },
];

/** Areas currently presented on the site. Fastigheter is parked for now:
 *  flip `active` and add its route folder to re-enable it. */
export const activeAreas = areas.filter((a) => a.active);

/** Header links after the Verksamheter menu, which lists `businesses`. */
export const nav = [
  { href: "/om-oss", label: "Om oss" },
  { href: "/om-oss#referenser", label: "Referenser" },
  { href: "/kontakt", label: "Kontakt" },
];

/**
 * Photography slots. Every photograph on the site is registered here; a slot
 * with `ready: false` renders a labelled placeholder instead, so the layout is
 * finished before the photography is. To swap a photo: drop the file at `src`
 * and update `alt`. The `brief` says what our own photograph should show.
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
  hem: {
    src: "/images/photos/hem.avif",
    alt: "Flerbostadshus under uppförande med två tornkranar i en Stockholmsförort",
    brief: "Ett av våra egna projekt, helhetsbild av arbetsplatsen",
    shape: "16:9 liggande, motivet till höger",
    ready: true,
  },
  bygge: {
    src: "/images/photos/bygge.avif",
    alt: "Flerbostadshus under uppförande med byggställning och tornkran",
    brief: "Pågående entreprenad, gärna vår egen arbetsplats",
    shape: "16:9 liggande",
    ready: true,
  },
  armering: {
    src: "/images/photos/armering.avif",
    alt: "Yrkesarbetare i varselkläder armerar ett bjälklag",
    brief: "Vår egen personal i arbete, i Kanitas arbetskläder",
    shape: "3:2 liggande",
    ready: true,
  },
  renovering: {
    src: "/images/photos/renovering.avif",
    alt: "Nyrenoverat rum i en äldre Stockholmslägenhet med kakelugn och fiskbensparkett",
    brief: "Färdig renovering, interiör",
    shape: "21:9 liggande",
    ready: true,
  },
  snickare: {
    src: "/images/photos/snickare.avif",
    alt: "Snickare monterar gipsskivor på en ny innervägg",
    brief: "Hantverkare i arbete inomhus",
    shape: "16:9 liggande",
    ready: true,
  },
  stad: {
    src: "/images/photos/stad.avif",
    alt: "Lokalvårdare putsar fönster i en ljus kontorslokal",
    brief: "Vår städpersonal i arbete",
    shape: "21:9 liggande",
    ready: true,
  },
  team: {
    src: "/images/photos/team.avif",
    alt: "Arbetslag i varselkläder samlat på en byggarbetsplats",
    brief: "Hela arbetslaget på en av våra arbetsplatser",
    shape: "16:9 liggande",
    ready: true,
  },
  maskin: {
    src: "/images/photos/maskin.avif",
    alt: "Grävmaskin, hjullastare och transportbilar framför en verkstadshall",
    brief: "Maskiner och fordon ur vårt eget lager",
    shape: "3:2 liggande",
    ready: true,
  },
  fastighet: {
    src: "/images/photos/fastighet.avif",
    alt: "Verksamhetslokal med lastportar och kontorsdel i ett industriområde",
    brief: "Egen lokal i beståndet, exteriör",
    shape: "3:2 liggande",
    ready: true,
  },
} satisfies Record<string, PhotoSlot>;

export type PhotoName = keyof typeof photos;

/**
 * The four verksamheter. A verksamhet with a `page` links there; one without
 * is presented on its home page tile and reached through the contact form
 * with its ärende chosen. The day a verksamhet gets its own domain, point
 * `page` at it and the menu, the home page and the footer all follow.
 */
export type Business = {
  /** Also the id of its tile on the home page. */
  slug: string;
  /** Full brand name, e.g. "Kanitas Bygg" */
  name: string;
  /** What the verksamhet does, used as its heading. */
  heading: string;
  /** One line for the menu. */
  summary: string;
  /** One or two sentences for its tile on the home page. */
  blurb: string;
  /** The verksamhet's own page, when it has one. */
  page?: string;
  /** Ärende pre-selected when this verksamhet sends someone to the form. */
  topic: ContactTopic;
  /** Photograph on its home page tile. */
  photo: PhotoName;
  /** Legal entities that carry this verksamhet, for the Bolagen table. */
  entities: string[];
};

export const businesses: Business[] = [
  {
    slug: "bygg",
    name: "Kanitas Bygg",
    heading: "Bygg och entreprenad",
    summary: "Entreprenader, renovering och byggservice",
    blurb:
      "Vår största verksamhet. Vi bygger åt fastighetsägare, BRF:er och privatpersoner, och som underentreprenör åt bland andra NCC, Implenia och ByggPartner.",
    page: "/bygg",
    topic: "Bygg",
    photo: "armering",
    entities: ["Kanitas Bygg AB", "Kanitas AB"],
  },
  {
    slug: "stad",
    name: "Kanitas ENT",
    heading: "Bemanning och byggstädning",
    summary: "Yrkesarbetare och byggstädning med kort varsel",
    blurb:
      "Vi hyr ut yrkesarbetare och byggstädare till entreprenörer, ofta med kort varsel, och gör byggstädning inför besiktning.",
    page: "/stad",
    topic: "Bemanning",
    photo: "snickare",
    entities: ["Kanitas ENT AB"],
  },
  {
    slug: "trading",
    name: "Kanitas Trading",
    heading: "Maskiner och fordon",
    summary: "Köp, försäljning och uthyrning av maskiner och fordon",
    blurb:
      "Vi köper, säljer och hyr ut maskiner, verktyg, transportbilar och arbetsfordon, till våra egna byggen och till andra.",
    topic: "Trading",
    photo: "maskin",
    entities: ["Kanitas Trading AB"],
  },
  {
    slug: "fastigheter",
    name: "Kanitas Fastigheter",
    heading: "Lokaler och förvaltning",
    summary: "Verkstads-, lager- och kontorslokaler att hyra",
    blurb:
      "Vi hyr ut verkstads-, lager- och kontorslokaler i Järfälla och Storstockholm. Anpassningar och underhåll gör vi själva.",
    topic: "Fastigheter",
    photo: "fastighet",
    entities: ["Kanitas Fastigheter AB"],
  },
];

/** Where a verksamhet lives: its own page, or its tile on the home page. */
export function businessHref(business: Business) {
  return business.page ?? `/#${business.slug}`;
}

/** The contact form with an ärende already chosen. */
export function contactHref(topic: ContactTopic) {
  return `/kontakt?amne=${encodeURIComponent(topic)}#kontakt`;
}

/** Legal entities in the group, shown on the About page. Each links to the
 *  verksamhet that lists it under `entities`. */
export const groupCompanies = [
  {
    name: "Kanitas AB",
    orgnr: "556841-1010",
    role: "Bygg, städ och service sedan 2011",
  },
  {
    name: "Kanitas ENT AB",
    orgnr: "559146-9183",
    role: "Bemanning, byggstädning och service",
  },
  {
    name: "Kanitas Bygg AB",
    orgnr: "559553-4297",
    role: "Bygg- och markentreprenader",
  },
  {
    name: "Kanitas Fastigheter AB",
    orgnr: "559553-4305",
    role: "Fastighetsägande och förvaltning",
  },
  {
    name: "Kanitas Trading AB",
    orgnr: "559553-4263",
    role: "Köp, försäljning och uthyrning av fordon och maskiner",
  },
];

/**
 * The facts a procurement function checks before shortlisting a supplier.
 * Kept as data so they are stated once and can be cited anywhere.
 */
export const groupFacts = [
  { label: "Grundat", value: "2011 i Järfälla" },
  { label: "Bolag i koncernen", value: String(groupCompanies.length) },
  { label: "Anställda", value: String(site.employees) },
  { label: "Kreditvärdighet", value: "AAA för Kanitas AB" },
  { label: "Kollektivavtal", value: "Byggnads och Fastighets" },
  { label: "Försäkring", value: "Ansvarsförsäkring" },
  { label: "Registrerat för", value: "F-skatt, moms och arbetsgivaravgift" },
  { label: "Certifiering och medlemskap", value: "SafeTrade, Svenskt Näringsliv" },
];

/** Client logos, trimmed to their ink. `h` evens out optical weight: a wide
 *  wordmark sits lower than a stacked emblem so neither dominates the row. */
export const references = [
  { name: "NCC", logo: "/references/ncc.png", h: 34 },
  { name: "Implenia", logo: "/references/implenia.png", h: 30 },
  { name: "Jiben", logo: "/references/jiben.png", h: 32 },
  { name: "Oljibe", logo: "/references/oljibe.png", h: 42 },
  { name: "Artega", logo: "/references/artega.png", h: 30 },
  { name: "ByggPartner", logo: "/references/byggpartner.png", h: 24 },
  { name: "Dagab", logo: "/references/dagab.png", h: 24 },
  { name: "SMD Logistics", logo: "/references/smd-logistics.png", h: 28 },
  { name: "Ranova", logo: "/references/ranova.png", h: 40 },
  { name: "Catena", logo: "/references/catena.png", h: 22 },
];

/** Agreements, credit rating and memberships, shown above the footer. `h`
 *  evens out optical weight the same way as for the client logos. */
export const certifications = [
  { name: "AAA, högsta kreditvärdighet", image: "/images/cert/aaa_120.png", h: 34 },
  { name: "Kollektivavtal Byggnads", image: "/images/cert/byggnads_140.png", h: 28 },
  { name: "Kollektivavtal Fastighets", image: "/images/cert/fastighets_120.png", h: 30 },
  { name: "SafeTrade", image: "/images/cert/SafeTrade_120.png", h: 30 },
  { name: "Svenskt Näringsliv", image: "/images/cert/svnaring_B.png", h: 44 },
];

/** Topics for the contact form's ärende selector. The short value is what
 *  lands in the mail subject; the label is what the visitor picks from. */
export const contactTopics = [
  "Bygg",
  "Bemanning",
  "Städ",
  "Trading",
  "Fastigheter",
  "Annat",
] as const;

export type ContactTopic = (typeof contactTopics)[number];

export const contactTopicLabels: Record<ContactTopic, string> = {
  Bygg: "Bygg och renovering",
  Bemanning: "Bemanning",
  Städ: "Städ",
  Trading: "Maskiner och fordon",
  Fastigheter: "Lokaler",
  Annat: "Något annat",
};
