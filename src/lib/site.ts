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
  phoneIntl: "+46706653248",
  phoneHref: "tel:+46706653248",
  email: "info@kanitas.se",
  address: {
    city: "Järfälla",
    region: "Stockholm",
    country: "SE",
  },
  /** Credit rating of Kanitas AB, the parent company. */
  creditRating: "AAA",
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
  /** Full brand name, e.g. "Kanitas Bygg" */
  name: string;
  /** Keyword-bearing page heading (h1) */
  h1: string;
  /** One or two sentences under the h1 */
  intro: string;
  heroPhoto: PhotoName;
  /** Up to two photographs after the services (none is fine) */
  photos: PhotoName[];
  /** Keyword-bearing heading for the services */
  servicesH2: string;
  /** schema.org serviceType for the area's Service JSON-LD */
  serviceType: string;
  /** Label for the primary action */
  ctaLabel: string;
  /** Pre-selected ärende in the contact form */
  contactTopic: ContactTopic;
  /** Heading of the contact section; "Begär offert från …" by default */
  contactTitle?: string;
  /** Line under that heading, when the default about quotes does not fit */
  contactLead?: string;
  /** The "Trygg att anlita" points; on unless a page sets false */
  trust?: boolean;
  services: { title: string; text: string }[];
  /** One line linking to the sister business, after the services */
  related?: { href: string; label: string };
  /** How a job runs, told beside a photograph. */
  process?: {
    title: string;
    photo: PhotoName;
    steps: { title: string; text: string }[];
  };
  /** A short list of things, e.g. the trades we staff. */
  tags?: { title: string; text: string; items: string[] };
  sections?: AreaSection[];
  /** Everything a job includes, as a ticked list. */
  checklist?: { title: string; items: string[] };
  /** One fact set apart, e.g. how ROT works. */
  callout?: { title: string; text: string };
  /** Rendered with FAQPage structured data */
  faq?: { q: string; a: string }[];
  seo: { title: string; description: string };
};

export const areas: Area[] = [
  {
    slug: "bygg",
    active: true,
    name: "Kanitas Bygg",
    h1: "Byggföretag i Stockholm",
    intro:
      "Nybyggnation, renovering och byggservice åt byggbolag, fastighetsägare, BRF:er och privatpersoner i hela Storstockholm.",
    heroPhoto: "bygglag",
    photos: ["badrum", "renovering"],
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
        text: "Bostäder, kontor och andra lokaler.",
      },
      {
        title: "Byggservice",
        text: "Underhåll, reparationer och anpassningar på löpande avtal.",
      },
      {
        title: "Badrum och våtrum",
        text: "Totalrenovering, med fasta samarbetspartner för VVS.",
      },
      {
        title: "Stomkomplettering och snickerier",
        text: "Innerväggar, undertak, dörrar och platsbyggd inredning.",
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
    process: {
      title: "Så går ett byggprojekt till",
      photo: "platsbesok",
      steps: [
        {
          title: "Förfrågan och platsbesök",
          text: "Vi går igenom vad som ska göras och tittar på platsen.",
        },
        {
          title: "Offert",
          text: "Fast pris eller löpande räkning, med omfattning och tidplan. Tilläggsarbeten godkänns skriftligt innan de utförs.",
        },
        {
          title: "Planering",
          text: "Material, tider och bemanning bokas. Du får en kontaktperson som följer jobbet hela vägen.",
        },
        {
          title: "Bygget",
          text: "Egen personal och arbetsledning på plats, med egenkontroller under arbetet.",
        },
        {
          title: "Slutgenomgång och överlämning",
          text: "Vi går igenom jobbet tillsammans och lämnar över egenkontroller och, vid större jobb, relationshandlingar.",
        },
      ],
    },
    sections: [
      {
        title: "Våra kunder",
        layout: "columns",
        items: [
          {
            title: "Byggbolag",
            text: "Som underentreprenör åt bland andra NCC, Implenia och ByggPartner, med egen arbetsledning på plats.",
          },
          {
            title: "Fastighetsägare",
            text: "Byggservice på ramavtal: felavhjälpning, hyresgästanpassningar och planerat underhåll.",
          },
          {
            title: "BRF:er",
            text: "Stambyten, fasad- och balkongarbeten samt renovering av gemensamma utrymmen. De boende får information under hela arbetet.",
          },
          {
            title: "Privatpersoner",
            text: "Badrum, tillbyggnader och renovering av villor och lägenheter.",
          },
        ],
        references: true,
      },
    ],
    callout: {
      title: "Rotavdrag för privatpersoner",
      text: "Renoverar du din bostad kan du få rotavdrag för arbetskostnaden, men inte för material. Vi drar avdraget direkt på fakturan, så att du bara betalar din del.",
    },
    faq: [
      {
        q: "Vad kostar en offert?",
        a: "Ingenting.",
      },
      {
        q: "Tar ni även mindre uppdrag?",
        a: "Ja, även enstaka reparationer.",
      },
      {
        q: "Hur snabbt kan ni börja?",
        a: "Byggservice kan vi normalt börja med inom några dagar. Större entreprenader planerar vi efter projektets tidplan.",
      },
      {
        q: "Har ni egen personal?",
        a: "Ja, vid behov förstärkt med yrkesarbetare från Kanitas ENT. För el, VVS och ventilation anlitar vi fasta samarbetspartner.",
      },
    ],
    seo: {
      title: "Byggföretag i Stockholm: renovering och service",
      description:
        "Kanitas Bygg utför nybyggnation, renovering, byggservice och rivning i Stockholm. Egen personal på kollektivavtal. Begär en kostnadsfri offert.",
    },
  },
  {
    slug: "stad",
    active: true,
    name: "Kanitas ENT",
    h1: "Bemanning och byggstädning i Stockholm",
    intro:
      "Vi hyr ut yrkesarbetare och byggstädare till entreprenörer och gör byggstädning inför besiktning. All personal är anställd hos oss på kollektivavtal.",
    heroPhoto: "snickare",
    photos: ["armering", "trapphus"],
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
        text: "Kontor, trapphus och gemensamma utrymmen, med samma städare så långt det går.",
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
    tags: {
      title: "Yrkesroller vi hyr ut",
      text: "Alla har arbetskläder och skyddsutrustning från oss.",
      items: [
        "Snickare",
        "Betongarbetare",
        "Murare",
        "Ställningsbyggare",
        "Byggstädare",
      ],
    },
    process: {
      title: "Byggstädning i fyra steg",
      photo: "slutstadning",
      steps: [
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
    checklist: {
      title: "Det här ingår i byggstädningen",
      items: [
        "Golv dammsugs och våttorkas",
        "Fönster putsas in- och utvändigt",
        "Fönsterbänkar, karmar och bågar torkas",
        "Dörrar, karmar och lister torkas",
        "Eluttag, strömbrytare och elcentral dammtorkas",
        "Ventilationsdon och element rengörs",
        "Skåp och lådor torkas in- och utvändigt",
        "Vitvaror rengörs in- och utvändigt",
        "Kakel, porslin och golvbrunn i badrummet rengörs",
        "Byggtejp, etiketter och skyddsplast tas bort",
        "Byggdamm tas bort från alla ytor",
        "Emballage och skräp bärs ut",
      ],
    },
    sections: [
      {
        title: "Så fungerar bemanning hos oss",
        layout: "list",
        items: [
          {
            title: "Inga mellanhänder",
            text: "Personalen är anställd hos oss, så du vet vem som kommer till arbetsplatsen.",
          },
          {
            title: "Er arbetsledning",
            text: "Ni leder arbetet på plats. Lön och försäkring står vi för.",
          },
          {
            title: "Reserv från egna byggen",
            text: "Vid behov flyttar vi personal från koncernens egna byggen, så att en lucka kan fyllas snabbt.",
          },
          {
            title: "Korta och långa uppdrag",
            text: "En person i några dagar eller ett helt arbetslag under hela projektet.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Hur snabbt kan ni bemanna?",
        a: "Enstaka yrkesarbetare kan vi ofta skicka redan nästa arbetsdag. Ett helt arbetslag tar normalt några dagar.",
      },
      {
        q: "Hur lång tid tar en byggstädning?",
        a: "En lägenhet tar normalt en dag, större lokaler flera. Vi planerar utifrån besiktningsdatumet.",
      },
      {
        q: "Vad händer om besiktningsmannen har anmärkningar på städningen?",
        a: "Då städar vi om de ytorna utan extra kostnad.",
      },
      {
        q: "Erbjuder ni löpande städavtal?",
        a: "Ja, för kontor, trapphus och fastigheter. Vi tar också enstaka uppdrag som flytt- och storstädning.",
      },
    ],
    seo: {
      title: "Bemanning och byggstädning i Stockholm",
      description:
        "Kanitas ENT hyr ut yrkesarbetare till byggföretag och utför byggstädning, slutstädning och kontorsstädning i Stockholm. Egen personal på kollektivavtal.",
    },
  },
  {
    slug: "maskiner",
    active: true,
    name: "Kanitas Trading",
    h1: "Maskiner och fordon att hyra i Järfälla",
    intro:
      "Vi hyr ut, köper och säljer maskiner, verktyg, transportbilar och arbetsfordon. Det är samma maskiner som vi använder på våra egna byggen.",
    heroPhoto: "maskin",
    photos: [],
    servicesH2: "Uthyrning, köp och försäljning",
    serviceType: "Uthyrning och försäljning av maskiner och fordon",
    ctaLabel: "Fråga om pris",
    contactTopic: "Trading",
    contactTitle: "Fråga Kanitas Trading",
    contactLead: "Lämna ditt nummer så ringer vi upp med pris och tillgång.",
    trust: false,
    services: [
      {
        title: "Hyra maskiner och verktyg",
        text: "Bygg- och markmaskiner och verktyg till ditt jobb.",
      },
      {
        title: "Hyra transportbil",
        text: "Skåpbilar och arbetsfordon för hantverkare och företag.",
      },
      {
        title: "Köp och försäljning",
        text: "Vi köper och säljer maskiner och fordon. Hör av dig om du säljer eller letar efter något.",
      },
    ],
    related: {
      href: "/bygg",
      label: "Bygg och renovering: Kanitas Bygg",
    },
    process: {
      title: "Så hyr du hos oss",
      photo: "fordon",
      steps: [
        {
          title: "Berätta vad du behöver",
          text: "Vilken maskin eller vilket fordon, och för hur lång tid.",
        },
        {
          title: "Pris och tillgång",
          text: "Vi ringer upp med pris och när det är ledigt.",
        },
        {
          title: "Avtal och hyrtid",
          text: "Vi skriver avtal, och du hämtar och lämnar tillbaka enligt överenskommelse.",
        },
      ],
    },
    faq: [
      {
        q: "Vad kostar det att hyra?",
        a: "Det beror på maskin eller fordon och hur länge du behöver det. Lämna ditt nummer så ringer vi upp med ett pris.",
      },
      {
        q: "Kan jag köpa en maskin eller ett fordon av er?",
        a: "Ja. Berätta vad du letar efter så hör vi av oss när vi har något som passar.",
      },
      {
        q: "Köper ni maskiner och fordon?",
        a: "Ja. Berätta vad du vill sälja, gärna med bilder, så återkommer vi.",
      },
    ],
    seo: {
      title: "Hyra maskiner och fordon i Järfälla",
      description:
        "Kanitas Trading hyr ut, köper och säljer maskiner, verktyg, transportbilar och arbetsfordon i Järfälla och Storstockholm.",
    },
  },
  {
    slug: "lokaler",
    active: true,
    name: "Kanitas Fastigheter",
    h1: "Lokaler att hyra i Järfälla",
    intro:
      "Verkstads-, lager- och kontorslokaler i Järfälla. Anpassningar och underhåll gör vi själva.",
    heroPhoto: "fastighet",
    photos: [],
    servicesH2: "Lokaler och förvaltning",
    serviceType: "Uthyrning av lokaler",
    ctaLabel: "Fråga om lediga lokaler",
    contactTopic: "Fastigheter",
    contactTitle: "Fråga om lediga lokaler",
    contactLead:
      "Lämna ditt nummer så berättar vi vilka lokaler som är lediga.",
    trust: false,
    services: [
      {
        title: "Lokaler att hyra",
        text: "Verkstads-, lager- och kontorslokaler i Järfälla.",
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
    process: {
      title: "Så hyr du en lokal",
      photo: "lokalvisning",
      steps: [
        {
          title: "Hör av dig",
          text: "Berätta vilken sorts lokal du söker, ungefär hur stor och när du behöver den.",
        },
        {
          title: "Visning",
          text: "Vi visar det som är ledigt.",
        },
        {
          title: "Avtal och anpassning",
          text: "Vi skriver avtal och anpassar lokalen om det behövs.",
        },
        {
          title: "Inflyttning",
          text: "Du flyttar in. Tillsyn och underhåll av fastigheten sköter vi.",
        },
      ],
    },
    faq: [
      {
        q: "Vilka lokaler är lediga just nu?",
        a: "Det varierar. Lämna ditt nummer så berättar vi vad som finns.",
      },
      {
        q: "Kan lokalen anpassas efter min verksamhet?",
        a: "Ja, Kanitas Bygg kan bygga om och anpassa lokalen.",
      },
      {
        q: "Vem sköter underhållet?",
        a: "Vi sköter tillsyn och underhåll av våra fastigheter.",
      },
    ],
    seo: {
      title: "Lokaler att hyra i Järfälla: lager och verkstad",
      description:
        "Kanitas Fastigheter hyr ut verkstads-, lager- och kontorslokaler i Järfälla. Vi anpassar lokalen efter din verksamhet. Hör av dig om lediga lokaler.",
    },
  },
];

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
  /** Where the subject sits (CSS object-position), so a tight crop keeps it. */
  focus?: string;
  ready: boolean;
};

export const photos = {
  nybygge: {
    src: "/images/photos/nybygge.avif",
    alt: "Flerbostadshus under byggnation i skymningen, med byggkran och upplysta våningsplan",
    brief: "Ett av våra byggen, för startsidans toppbild",
    shape: "16:9 liggande, byggnaden i högra halvan",
    ready: true,
  },
  jobbstart: {
    src: "/images/photos/jobbstart.avif",
    alt: "Två hantverkare går igenom ritningen vid servicebilen utanför ett flerbostadshus",
    brief: "Vårt eget lag vid ett jobb",
    shape: "16:9 liggande, personerna i högra tredjedelen",
    focus: "85% 50%",
    ready: true,
  },
  bygglag: {
    src: "/images/photos/bygglag.avif",
    alt: "Hantverkare bär in gipsskivor från en servicebil till ett flerbostadshus",
    brief: "Vårt eget lag på väg in till ett jobb, med firmabilen",
    shape: "16:9 liggande",
    ready: true,
  },
  armering: {
    src: "/images/photos/armering.avif",
    alt: "Yrkesarbetare i varselkläder binder armering på ett bjälklag",
    brief: "Vår egen personal i arbete på en byggarbetsplats",
    shape: "3:2 liggande",
    ready: true,
  },
  badrum: {
    src: "/images/photos/badrum.avif",
    alt: "Plattsättare lägger klinker i ett badrum under renovering",
    brief: "En badrumsrenovering som pågår, gärna vårt eget jobb",
    shape: "4:3 liggande",
    ready: true,
  },
  renovering: {
    src: "/images/photos/renovering.avif",
    alt: "Nyrenoverat rum i en äldre Stockholmslägenhet med kakelugn och fiskbensparkett",
    brief: "Färdig renovering, interiör",
    shape: "4:3 liggande",
    ready: true,
  },
  platsbesok: {
    src: "/images/photos/platsbesok.avif",
    alt: "Arbetsledare går igenom planritningen med ett par vid deras köksbord",
    brief: "Platsbesök hos en kund inför en renovering",
    shape: "3:2 liggande",
    ready: true,
  },
  snickare: {
    src: "/images/photos/snickare.avif",
    alt: "Snickare monterar gipsskivor på en ny innervägg i en lägenhet",
    brief: "Hantverkare i arbete inomhus",
    shape: "16:9 liggande",
    focus: "30% 50%",
    ready: true,
  },
  byggstadning: {
    src: "/images/photos/byggstadning.avif",
    alt: "Två städare gör byggstädning i en nyrenoverad lägenhet",
    brief: "Vår städpersonal vid en byggstädning",
    shape: "3:2 liggande",
    ready: true,
  },
  slutstadning: {
    src: "/images/photos/slutstadning.avif",
    alt: "Städare torkar ur skåpen i ett nytt kök vid slutstädning medan en kollega dammsuger",
    brief: "Slutstädning inför besiktning",
    shape: "3:2 liggande",
    ready: true,
  },
  trapphus: {
    src: "/images/photos/trapphus.avif",
    alt: "Lokalvårdare moppar trapphuset i ett flerbostadshus",
    brief: "Trapphusstädning hos en av våra avtalskunder",
    shape: "4:3 liggande",
    ready: true,
  },
  team: {
    src: "/images/photos/team.avif",
    alt: "Medarbetare samlas vid servicebilarna utanför verkstaden innan dagens jobb",
    brief: "Hela laget vid våra bilar i Järfälla",
    shape: "16:9 liggande",
    ready: true,
  },
  maskin: {
    src: "/images/photos/maskin.avif",
    alt: "Minigrävare på släp, transportbilar och en flakbil på gården utanför verkstaden",
    brief: "Maskiner och fordon på vår gård",
    shape: "3:2 liggande",
    ready: true,
  },
  fordon: {
    src: "/images/photos/fordon.avif",
    alt: "En transportbil lämnas ut till en kund på gården utanför verkstaden",
    brief: "Uthyrning av en transportbil",
    shape: "3:2 liggande",
    ready: true,
  },
  lokalvisning: {
    src: "/images/photos/lokalvisning.avif",
    alt: "Visning av en tom verkstads- och lagerlokal med entresolplan och öppen port",
    brief: "Visning av en ledig lokal",
    shape: "3:2 liggande",
    ready: true,
  },
  fastighet: {
    src: "/images/photos/fastighet.avif",
    alt: "Industribyggnad med lokaler att hyra, där en port står öppen in till en tom lokal",
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
      "Vi bygger åt fastighetsägare, BRF:er och privatpersoner, och som underentreprenör åt bland andra NCC, Implenia och ByggPartner.",
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
    photo: "byggstadning",
    entities: ["Kanitas ENT AB"],
  },
  {
    slug: "trading",
    name: "Kanitas Trading",
    heading: "Maskiner och fordon",
    summary: "Köp, försäljning och uthyrning av maskiner och fordon",
    blurb:
      "Vi köper, säljer och hyr ut maskiner, verktyg, transportbilar och arbetsfordon, till våra egna byggen och till andra.",
    page: "/maskiner",
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
      "Vi hyr ut verkstads-, lager- och kontorslokaler i Järfälla. Anpassningar och underhåll gör vi själva.",
    page: "/lokaler",
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
    role: "Köp, försäljning och uthyrning av maskiner och fordon",
  },
];

/**
 * The facts a procurement function checks before shortlisting a supplier.
 * Kept as data so they are stated once and can be cited anywhere.
 */
export const groupFacts = [
  { label: "Grundat", value: "2011 i Järfälla" },
  { label: "Bolag i koncernen", value: String(groupCompanies.length) },
  { label: "Kreditvärdighet", value: "AAA för Kanitas AB" },
  { label: "Kollektivavtal", value: "Byggnads och Fastighets" },
  { label: "Försäkring", value: "Ansvarsförsäkring" },
  {
    label: "Skatt och moms",
    value: "Godkänt för F‑skatt, registrerat för moms och som arbetsgivare",
  },
  {
    label: "Certifiering och medlemskap",
    value: "SafeTrade, Svenskt Näringsliv",
  },
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
  {
    name: "AAA, högsta kreditvärdighet",
    image: "/images/cert/aaa_120.png",
    h: 34,
  },
  {
    name: "Kollektivavtal Byggnads",
    image: "/images/cert/byggnads_140.png",
    h: 28,
  },
  {
    name: "Kollektivavtal Fastighets",
    image: "/images/cert/fastighets_120.png",
    h: 30,
  },
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
  "Jobb",
  "Annat",
] as const;

export type ContactTopic = (typeof contactTopics)[number];

export const contactTopicLabels: Record<ContactTopic, string> = {
  Bygg: "Bygg och renovering",
  Bemanning: "Bemanning",
  Städ: "Städ",
  Trading: "Maskiner och fordon",
  Fastigheter: "Lokaler",
  Jobb: "Jobb hos oss",
  Annat: "Något annat",
};

/** How a job starts, from the first call to the work itself. */
export const processSteps = [
  {
    title: "Du hör av dig",
    text: "Ring, mejla eller lämna ditt nummer här på sidan.",
  },
  {
    title: "Vi tittar på jobbet",
    text: "Vid behov kommer vi ut och ser på platsen innan vi räknar.",
  },
  {
    title: "Du får en offert",
    text: "Med pris, omfattning och tidplan.",
  },
  {
    title: "Vi gör jobbet",
    text: "Med egen personal och en kontaktperson ända fram till överlämningen.",
  },
];

/** What a buyer can count on, whichever verksamhet does the job. */
export const trustPoints = [
  {
    title: "Kollektivavtal",
    text: "Våra yrkesarbetare och städare är anställda på kollektivavtal med Byggnads eller Fastighets.",
  },
  {
    title: "Försäkring och F‑skatt",
    text: "Vi har ansvarsförsäkring, är godkända för F‑skatt och registrerade för moms och som arbetsgivare.",
  },
  {
    title: "Stabil ekonomi",
    text: "Kanitas AB har AAA, den högsta kreditvärdigheten.",
  },
  {
    title: "Ordning på arbetsplatsen",
    text: "Skyddsutrustning och egenkontroller på varje jobb, och egen arbetsledning på våra entreprenader.",
  },
];

/** The trades we hire for, for the careers block. */
export const careers = {
  title: "Jobba hos oss",
  text: "Vi tar gärna emot intresseanmälningar från yrkesarbetare och byggstädare. Hos oss får du anställning på kollektivavtal, arbetskläder och skyddsutrustning.",
  topic: "Jobb" as ContactTopic,
  trades: ["Snickare", "Betongarbetare", "Murare", "Byggstädare"],
};
