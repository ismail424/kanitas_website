import { groupCompanies, site } from "@/lib/site";
import type { Dictionary } from "./types";

const sv: Dictionary = {
  meta: {
    title: "Kanitas | Bygg, bemanning, maskiner och lokaler i Stockholm",
    description: `Kanitas i ${site.address.city}: byggentreprenader, bemanning och byggstädning, maskiner och fordon samt lokaler att hyra i hela Storstockholm sedan ${site.founded}.`,
    keywords: [
      "byggföretag Stockholm",
      "byggservice Järfälla",
      "renovering Stockholm",
      "byggstädning Stockholm",
      "kontorsstädning Stockholm",
      "flyttstädning Stockholm",
      "mark och anläggning Stockholm",
      "rivning sanering Stockholm",
    ],
    areaServed: "Storstockholm",
  },

  common: {
    skipToContent: "Hoppa till innehållet",
    call: "Ring",
    requestQuote: "Begär offert",
    home: "Hem",
    phone: "Telefon",
    email: "E-post",
    office: "Kontor",
    orgNr: "Org.nr",
    ourClients: "Några av våra uppdragsgivare",
    faq: "Vanliga frågor",
    language: "Språk",
    logoHome: "Kanitas, till startsidan",
  },

  header: {
    mainMenu: "Huvudmeny",
    mobileMenu: "Mobilmeny",
    businesses: "Verksamheter",
    aboutGroup: "Om koncernen",
    openMenu: "Öppna menyn",
    closeMenu: "Stäng menyn",
  },

  nav: [
    { href: "/om-oss", label: "Om oss" },
    { href: "/om-oss#referenser", label: "Referenser" },
    { href: "/kontakt", label: "Kontakt" },
  ],

  footer: {
    tagline: `Bygg, bemanning, maskiner och lokaler i Storstockholm sedan ${site.founded}.`,
    businesses: "Verksamheter",
    company: "Företaget",
    contact: "Kontakt",
    links: [
      { href: "/om-oss", label: "Om oss" },
      { href: "/om-oss#bolagen", label: "Bolagen" },
      { href: "/om-oss#referenser", label: "Referenser" },
      { href: "/kontakt", label: "Kontakt" },
    ],
    privacy: "Integritetspolicy",
    certifications: "Avtal, kreditvärdighet och medlemskap",
  },

  languageHint: {
    text: "Den här sidan finns på svenska.",
    action: "Visa på svenska",
    dismiss: "Stäng",
  },

  hero: {
    title: "Vi bygger, bemannar, hyr\u00a0ut och förvaltar",
    lead: "Byggentreprenader, bemanning och byggstädning, maskiner och fordon samt lokaler att hyra i hela Storstockholm.",
    trust: [
      `${site.creditRating} i kreditvärdighet`,
      "Kollektivavtal",
      `I ${site.address.city} sedan ${site.founded}`,
    ],
  },

  home: {
    title: "Kanitas | Bygg, bemanning, maskiner och lokaler i Stockholm",
    description: `Kanitas i ${site.address.city}: byggentreprenader, bemanning och byggstädning, maskiner och fordon samt lokaler att hyra i Storstockholm. Grundat ${site.founded}.`,
    clientsHeading: "Anlitade av bland andra",
    whatWeDo: {
      title: "Det här gör vi",
      lead: "Bygg är den största verksamheten. Vi arbetar åt byggbolag, fastighetsägare, BRF:er och privatpersoner, och du når bemanning, maskiner och lokaler på samma telefonnummer.",
    },
    toBusiness: (name) => `Till ${name}`,
    contactBusiness: (name) => `Kontakta ${name}`,
    story: {
      title: "Från byggfirma till koncern",
      text: `Kanitas startade som byggfirma i ${site.address.city}. Med tiden fick bemanning, maskiner och lokaler egna bolag, men bygg är fortfarande den största verksamheten.`,
      link: "Mer om koncernen",
    },
    figures: {
      founded: `Grundat i ${site.address.city}`,
      companies: "Bolag i koncernen",
      creditRating: `Kreditvärdighet för ${site.legalName}`,
    },
    processLead:
      "Egen personal och en kontaktperson, från första samtalet till överlämningen.",
    contactTitle: "Begär offert",
  },

  about: {
    title: `Om Kanitas | Koncernen i ${site.address.city} sedan ${site.founded}`,
    description: `Kanitas grundades ${site.founded} i ${site.address.city} och är i dag ${groupCompanies.length} bolag inom bygg, bemanning, maskiner och lokaler. Kollektivavtal och ${site.creditRating} i kreditvärdighet.`,
    breadcrumb: "Om oss",
    heading: "Om Kanitas",
    lead: `Koncernen har ${groupCompanies.length} bolag inom bygg, bemanning, maskiner och lokaler. Kontoret ligger i ${site.address.city}.`,
    storyTitle: "Kort om Kanitas",
    story: [
      `Kanitas startade ${site.founded} i ${site.address.city} med bygg, byggservice och städ. Bygg är fortfarande den största verksamheten. Vi arbetar med egen personal och anlitar fasta samarbetspartner för el, VVS och ventilation.`,
      "Bemanning, maskiner och lokaler drivs i egna bolag, men du når alla på samma telefonnummer.",
    ],
    factsTitle: "Fakta om koncernen",
    companiesTitle: "Bolagen i koncernen",
    companiesLead:
      "Kanitas AB är moderbolag och har ett dotterbolag för varje verksamhet.",
    parentCompany: "Moderbolag",
    clientsTitle: "Några av våra uppdragsgivare",
    contactTitle: "Hör av dig",
  },

  contactPage: {
    title: `Kontakt | Kanitas i ${site.address.city}`,
    description: `Kontakta Kanitas i ${site.address.city}: ring ${site.phone}, mejla ${site.email} eller lämna ditt nummer så ringer vi upp.`,
    breadcrumb: "Kontakt",
    heading: "Kontakta oss",
    lead: "Lämna ditt nummer så ringer vi upp. Samma telefonnummer och e‑postadress gäller alla bolag i koncernen.",
  },

  privacy: {
    title: "Integritetspolicy | Kanitas",
    description: `Så behandlar ${site.legalName} personuppgifter som lämnas via kanitas.se, i kontaktformuläret, per e-post och per telefon.`,
    heading: "Integritetspolicy",
    lead: `Så behandlar ${site.legalName} de personuppgifter du lämnar när du kontaktar oss.`,
    sections: [
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
    ],
    questions: "Har du frågor om policyn?",
    contactLink: "Kontakta oss",
  },

  notFound: {
    title: "Sidan finns inte",
    code: "Fel 404",
    lead: "Den kan ha flyttats eller tagits bort. Här är våra verksamheter:",
    back: "Till startsidan",
  },

  contactSection: {
    title: "Skicka en förfrågan",
    lead: "Lämna ditt nummer så ringer vi upp. Offerten är kostnadsfri.",
  },

  form: {
    thanks: "Tack, vi ringer upp!",
    thanksText: "Vi hör av oss normalt inom en arbetsdag. Brådskande? Ring",
    topicPrefix: "Ärende:",
    phone: "Ditt telefonnummer",
    phonePlaceholder: "070-123 45 67",
    phoneHint: "Vi ringer upp, normalt inom en arbetsdag.",
    phoneError: "Skriv ditt telefonnummer så ringer vi upp.",
    topicLegend: "Vad gäller det?",
    optional: "(valfritt)",
    name: "Namn",
    email: "E-post",
    message: "Vad behöver du hjälp med?",
    messagePlaceholder: "Vad ska göras, var och när?",
    honeypot: "Lämna tomt",
    sending: "Skickar…",
    submit: "Ring upp mig",
    privacyNote: "Vi använder uppgifterna bara för ditt ärende.",
    privacyLink: "Integritetspolicy",
    error: "Något gick fel. Försök igen eller ring oss på",
    limited: "Du har skickat flera förfrågningar på kort tid. Ring oss på",
  },

  trust: {
    title: "Trygg att anlita",
    points: [
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
    ],
  },

  process: {
    title: "Så går det till",
    steps: [
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
    ],
  },

  careers: {
    title: "Jobba hos oss",
    text: "Vi tar gärna emot intresseanmälningar från yrkesarbetare och byggstädare. Hos oss får du anställning på kollektivavtal, arbetskläder och skyddsutrustning.",
    trades: ["Snickare", "Betongarbetare", "Murare", "Byggstädare"],
    cta: "Skicka en intresseanmälan",
  },

  quality: {
    title: "Hållbarhet och miljö",
    paragraphs: [
      "Hållbarhet och miljöarbete ingår i hur vi planerar och utför uppdragen. Vi vill att det vi bygger och renoverar ska hålla, och att material används med omsorg.",
      "Vi tar hänsyn till avfall och till hur jobbet påverkar platsen. Vi eftersträvar att följa ISO-standarder, till exempel ISO 9001.",
    ],
  },

  groupFacts: [
    { label: "Grundat", value: `${site.founded} i ${site.address.city}` },
    { label: "Bolag i koncernen", value: String(groupCompanies.length) },
    {
      label: "Kreditvärdighet",
      value: `${site.creditRating} för ${site.legalName}`,
    },
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
    {
      label: "Kvalitet och miljö",
      value: "Eftersträvar ISO-standarder, till exempel ISO 9001",
    },
  ],

  companyRoles: {
    "Kanitas AB": `Bygg, städ och service sedan ${site.founded}`,
    "Kanitas ENT AB": "Bemanning, byggstädning och service",
    "Kanitas Bygg AB": "Bygg- och markentreprenader",
    "Kanitas Fastigheter AB": "Fastighetsägande och förvaltning",
    "Kanitas Trading AB":
      "Köp, försäljning och uthyrning av maskiner och fordon",
  },

  businesses: {
    bygg: {
      heading: "Bygg och entreprenad",
      summary: "Entreprenader, renovering och byggservice",
      blurb:
        "Vi bygger åt fastighetsägare, BRF:er och privatpersoner, och som underentreprenör åt bland andra NCC, Implenia och ByggPartner.",
    },
    stad: {
      heading: "Bemanning och byggstädning",
      summary: "Yrkesarbetare och byggstädning med kort varsel",
      blurb:
        "Vi hyr ut yrkesarbetare och byggstädare till entreprenörer, ofta med kort varsel, och gör byggstädning inför besiktning.",
    },
    trading: {
      heading: "Maskiner och fordon",
      summary: "Köp, försäljning och uthyrning av maskiner och fordon",
      blurb:
        "Vi köper, säljer och hyr ut maskiner, verktyg, transportbilar och arbetsfordon, till våra egna byggen och till andra.",
    },
    fastigheter: {
      heading: "Lokaler och förvaltning",
      summary: "Verkstads-, lager- och kontorslokaler att hyra",
      blurb:
        "Vi hyr ut verkstads-, lager- och kontorslokaler i Järfälla. Anpassningar och underhåll gör vi själva.",
    },
  },

  areas: {
    bygg: {
      h1: "Byggföretag i Stockholm",
      intro:
        "Nybyggnation, renovering och byggservice åt byggbolag, fastighetsägare, BRF:er och privatpersoner i hela Storstockholm.",
      servicesH2: "Byggtjänster",
      serviceType: "Byggentreprenad och byggservice",
      ctaLabel: "Begär offert",
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
      description:
        "Kanitas Bygg utför nybyggnation, renovering, byggservice och rivning i Stockholm. Egen personal på kollektivavtal. Begär en kostnadsfri offert.",
    },

    stad: {
      h1: "Bemanning och byggstädning i Stockholm",
      intro:
        "Vi hyr ut yrkesarbetare och byggstädare till entreprenörer och gör byggstädning inför besiktning. All personal är anställd hos oss på kollektivavtal.",
      servicesH2: "Bemanning och städtjänster",
      serviceType: "Bemanning och byggstädning",
      ctaLabel: "Begär offert",
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
      description:
        "Kanitas ENT hyr ut yrkesarbetare till byggföretag och utför byggstädning, slutstädning och kontorsstädning i Stockholm. Egen personal på kollektivavtal.",
    },

    maskiner: {
      h1: "Hyra maskiner och fordon i Järfälla",
      intro:
        "Vi hyr ut, köper och säljer maskiner, verktyg, transportbilar och arbetsfordon. Det är samma maskiner som vi använder på våra egna byggen.",
      servicesH2: "Uthyrning, köp och försäljning",
      serviceType: "Uthyrning och försäljning av maskiner och fordon",
      ctaLabel: "Fråga om pris",
      contactTitle: "Fråga Kanitas Trading",
      contactLead: "Lämna ditt nummer så ringer vi upp med pris och tillgång.",
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
      description:
        "Kanitas Trading hyr ut, köper och säljer maskiner, verktyg, transportbilar och arbetsfordon i Järfälla och Storstockholm.",
    },

    lokaler: {
      h1: "Lokaler att hyra i Järfälla",
      intro:
        "Verkstads-, lager- och kontorslokaler i Järfälla. Anpassningar och underhåll gör vi själva.",
      servicesH2: "Lokaler och förvaltning",
      serviceType: "Uthyrning av lokaler",
      ctaLabel: "Fråga om lediga lokaler",
      contactTitle: "Fråga om lediga lokaler",
      contactLead:
        "Lämna ditt nummer så berättar vi vilka lokaler som är lediga.",
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
      description:
        "Kanitas Fastigheter hyr ut verkstads-, lager- och kontorslokaler i Järfälla. Vi anpassar lokalen efter din verksamhet. Hör av dig om lediga lokaler.",
    },
  },

  areaContactTitle: (name) => `Begär offert från ${name}`,

  topics: {
    Bygg: "Bygg och renovering",
    Bemanning: "Bemanning",
    Städ: "Städ",
    Trading: "Maskiner och fordon",
    Fastigheter: "Lokaler",
    Jobb: "Jobb hos oss",
    Annat: "Något annat",
  },

  certifications: {
    aaa: "AAA, högsta kreditvärdighet",
    byggnads: "Kollektivavtal Byggnads",
    fastighets: "Kollektivavtal Fastighets",
    safeTrade: "SafeTrade",
    svensktNaringsliv: "Svenskt Näringsliv",
  },

  photoAlt: {
    nybygge:
      "Flerbostadshus under byggnation i skymningen, med byggkran och upplysta våningsplan",
    jobbstart:
      "Två hantverkare går igenom ritningen vid servicebilen utanför ett flerbostadshus",
    bygglag:
      "Hantverkare bär in gipsskivor från en servicebil till ett flerbostadshus",
    armering: "Yrkesarbetare i varselkläder binder armering på ett bjälklag",
    badrum: "Plattsättare lägger klinker i ett badrum under renovering",
    renovering:
      "Nyrenoverat rum i en äldre Stockholmslägenhet med kakelugn och fiskbensparkett",
    platsbesok:
      "Arbetsledare går igenom planritningen med ett par vid deras köksbord",
    snickare: "Snickare monterar gipsskivor på en ny innervägg i en lägenhet",
    byggstadning: "Två städare gör byggstädning i en nyrenoverad lägenhet",
    slutstadning:
      "Städare torkar ur skåpen i ett nytt kök vid slutstädning medan en kollega dammsuger",
    trapphus: "Lokalvårdare moppar trapphuset i ett flerbostadshus",
    team: "Medarbetare samlas vid servicebilarna utanför verkstaden innan dagens jobb",
    maskin:
      "Minigrävare på släp, transportbilar och en flakbil på gården utanför verkstaden",
    fordon:
      "En transportbil lämnas ut till en kund på gården utanför verkstaden",
    lokalvisning:
      "Visning av en tom verkstads- och lagerlokal med entresolplan och öppen port",
    fastighet:
      "Industribyggnad med lokaler att hyra, där en port står öppen in till en tom lokal",
  },
};

export default sv;
