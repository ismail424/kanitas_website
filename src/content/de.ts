import { groupCompanies, site } from "@/lib/site";
import type { Dictionary } from "./types";

const de: Dictionary = {
  meta: {
    title: "Kanitas | Bau, Personal, Maschinen, Gewerbeflächen in Stockholm",
    description: `Kanitas in ${site.address.city}: Bauleistungen, Personalüberlassung, Baureinigung, Maschinen und Fahrzeuge sowie Gewerbeflächen zur Miete im Großraum Stockholm seit ${site.founded}.`,
    keywords: [
      "Bauunternehmen Stockholm",
      "Bauservice Järfälla",
      "Renovierung Stockholm",
      "Baureinigung Stockholm",
      "Büroreinigung Stockholm",
      "Umzugsreinigung Stockholm",
      "Erd- und Tiefbau Stockholm",
      "Abbruch Sanierung Stockholm",
    ],
    areaServed: "Großraum Stockholm",
  },

  common: {
    skipToContent: "Zum Inhalt springen",
    call: "Anrufen:",
    requestQuote: "Angebot anfordern",
    home: "Startseite",
    phone: "Telefon",
    email: "E-Mail",
    office: "Büro",
    orgNr: "Org.-Nr.",
    ourClients: "Einige unserer Auftraggeber",
    faq: "Häufige Fragen",
    language: "Sprache",
    logoHome: "Kanitas, zur Startseite",
  },

  header: {
    mainMenu: "Hauptmenü",
    mobileMenu: "Mobiles Menü",
    businesses: "Geschäftsbereiche",
    aboutGroup: "Über die Gruppe",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },

  nav: [
    { href: "/om-oss", label: "Über uns" },
    { href: "/om-oss#referenser", label: "Referenzen" },
    { href: "/kontakt", label: "Kontakt" },
  ],

  footer: {
    tagline: `Bau, Personal, Maschinen und Gewerbeflächen im Großraum Stockholm seit ${site.founded}.`,
    businesses: "Geschäftsbereiche",
    company: "Unternehmen",
    contact: "Kontakt",
    links: [
      { href: "/om-oss", label: "Über uns" },
      { href: "/om-oss#bolagen", label: "Gesellschaften" },
      { href: "/om-oss#referenser", label: "Referenzen" },
      { href: "/kontakt", label: "Kontakt" },
    ],
    privacy: "Datenschutzerklärung",
    certifications: "Tarifverträge, Bonität und Mitgliedschaften",
  },

  languageHint: {
    text: "Diese Seite gibt es auch auf Deutsch.",
    action: "Auf Deutsch anzeigen",
    dismiss: "Schließen",
  },

  hero: {
    title: "Wir bauen, stellen Personal, vermieten und verwalten",
    lead: "Bauleistungen, Personalüberlassung und Baureinigung, Maschinen und Fahrzeuge sowie Gewerbeflächen zur Miete im gesamten Großraum Stockholm.",
    trust: [
      `Bonität ${site.creditRating}`,
      "Tarifgebunden",
      `In ${site.address.city} seit ${site.founded}`,
    ],
  },

  home: {
    title: "Kanitas | Bau, Personal, Maschinen, Gewerbeflächen in Stockholm",
    description: `Kanitas in ${site.address.city}: Bauleistungen, Personalüberlassung und Baureinigung, Maschinen und Fahrzeuge sowie Gewerbeflächen im Großraum Stockholm. Gegründet ${site.founded}.`,
    clientsHeading: "Unter anderem beauftragt von",
    whatWeDo: {
      title: "Das machen wir",
      lead: "Unser größter Geschäftsbereich ist der Bau. Wir arbeiten für Bauunternehmen, Immobilieneigentümer, Wohnungsgenossenschaften (BRF) und Privatpersonen. Auch für Personal, Maschinen und Gewerbeflächen erreichen Sie uns unter derselben Telefonnummer.",
    },
    toBusiness: (name) => `Zu ${name}`,
    contactBusiness: (name) => `${name} kontaktieren`,
    story: {
      title: "Vom Baubetrieb zur Unternehmensgruppe",
      text: `Kanitas begann als Baufirma in ${site.address.city}. Mit der Zeit kamen eigene Gesellschaften für Personal, Maschinen und Gewerbeflächen hinzu, doch der Bau ist bis heute der größte Geschäftsbereich.`,
      link: "Mehr über die Gruppe",
    },
    figures: {
      founded: `Gegründet in ${site.address.city}`,
      companies: "Gesellschaften in der Gruppe",
      creditRating: `Bonität der ${site.legalName}`,
    },
    processLead:
      "Eigenes Personal und ein fester Ansprechpartner, vom ersten Gespräch bis zur Übergabe.",
    contactTitle: "Angebot anfordern",
  },

  about: {
    title: `Über Kanitas | Unternehmensgruppe in ${site.address.city} seit ${site.founded}`,
    description: `Kanitas wurde ${site.founded} in ${site.address.city} gegründet und umfasst heute ${groupCompanies.length} Gesellschaften für Bau, Personal, Maschinen und Gewerbeflächen. Tarifgebunden, Bonität ${site.creditRating}.`,
    breadcrumb: "Über uns",
    heading: "Über Kanitas",
    lead: `Die Gruppe umfasst ${groupCompanies.length} Gesellschaften für Bau, Personal, Maschinen und Gewerbeflächen. Unser Büro liegt in ${site.address.city}.`,
    storyTitle: "Kanitas in Kürze",
    story: [
      `Kanitas begann ${site.founded} in ${site.address.city} mit Bau, Bauservice und Reinigung. Der Bau ist bis heute der größte Geschäftsbereich. Wir arbeiten mit eigenem Personal und beauftragen für Elektro, Sanitär, Heizung und Lüftung feste Partnerbetriebe.`,
      "Für Personal, Maschinen und Gewerbeflächen gibt es eigene Gesellschaften, doch Sie erreichen alle unter derselben Telefonnummer.",
    ],
    factsTitle: "Fakten zur Gruppe",
    companiesTitle: "Die Gesellschaften der Gruppe",
    companiesLead:
      "Die Kanitas AB ist die Muttergesellschaft und hat für jeden Geschäftsbereich eine Tochtergesellschaft.",
    parentCompany: "Muttergesellschaft",
    clientsTitle: "Einige unserer Auftraggeber",
    contactTitle: "Sprechen Sie uns an",
  },

  contactPage: {
    title: `Kontakt | Kanitas in ${site.address.city}`,
    description: `Kontakt zu Kanitas in ${site.address.city}: Rufen Sie ${site.phoneAbroad} an, schreiben Sie an ${site.email} oder hinterlassen Sie Ihre Nummer für einen Rückruf.`,
    breadcrumb: "Kontakt",
    heading: "Kontaktieren Sie uns",
    lead: "Hinterlassen Sie Ihre Nummer, dann rufen wir Sie zurück. Telefonnummer und E‑Mail-Adresse sind für alle Gesellschaften der Gruppe dieselben.",
  },

  privacy: {
    title: "Datenschutzerklärung | Kanitas",
    description: `So verarbeitet die ${site.legalName} personenbezogene Daten, die über kanitas.se, das Kontaktformular, per E-Mail oder telefonisch übermittelt werden.`,
    heading: "Datenschutzerklärung",
    lead: `So verarbeitet die ${site.legalName} die personenbezogenen Daten, die Sie uns bei einer Kontaktaufnahme mitteilen.`,
    sections: [
      {
        title: "Verantwortlicher",
        body: [
          `Verantwortlicher für die Verarbeitung der über kanitas.se übermittelten Daten ist die ${site.legalName}, Org.-Nr. ${site.orgnr}, ${site.address.city}. Fragen zur Verarbeitung richten Sie bitte an ${site.email} oder ${site.phoneAbroad}.`,
        ],
      },
      {
        title: "Welche Daten wir verarbeiten",
        body: [
          "Wenn Sie das Kontaktformular nutzen, verarbeiten wir Ihre Telefonnummer, die einzige Pflichtangabe, sowie die Angaben, die Sie freiwillig ergänzen: Name, E‑Mail-Adresse, Ihr Anliegen und Ihre Nachricht. Dasselbe gilt für Angaben, die Sie uns per E‑Mail oder telefonisch mitteilen.",
          "Bitte geben Sie im Formular keine sensiblen personenbezogenen Daten an, zum Beispiel Gesundheitsdaten.",
        ],
      },
      {
        title: "Wozu wir sie verarbeiten",
        body: [
          "Wir nutzen die Daten, um Ihre Anfrage zu beantworten, ein Angebot zu erstellen und, wenn wir uns einig werden, den Auftrag auszuführen. Wenn Sie uns Ihr Interesse an einer Stelle melden, nutzen wir die Daten, um Sie wegen einer Anstellung zu kontaktieren. Rechtsgrundlage ist unser berechtigtes Interesse an der Beantwortung von Anfragen. Wenn Sie ein Angebot anfordern oder uns beauftragen, verarbeiten wir die Daten, um den Vertrag mit Ihnen schließen und erfüllen zu können.",
          "Wir nutzen die Daten nicht für Werbung, die Sie nicht angefordert haben, und verkaufen sie niemals weiter.",
        ],
      },
      {
        title: "Wie lange wir sie speichern",
        body: [
          "Anfragen, die zu keinem Auftrag führen, werden gelöscht, sobald das Anliegen abgeschlossen ist. Führt die Anfrage zu einem Vertrag, speichern wir die Daten für die Dauer des Vertrags und danach so lange, wie es gesetzlich vorgeschrieben ist, zum Beispiel nach dem schwedischen Buchführungsgesetz.",
        ],
      },
      {
        title: "Wer sie erhält",
        body: [
          `Was Sie in das Formular eingeben, wird als E‑Mail an ${site.email} gesendet und in unserem E‑Mail-Postfach gespeichert, nicht auf der Website. Betrifft Ihr Anliegen eine andere Gesellschaft der Gruppe, zum Beispiel die Kanitas ENT AB für Personalüberlassung und Reinigung, leiten wir es dorthin weiter. Beim Absenden des Formulars wird Ihre IP-Adresse vorübergehend zur Spamabwehr verwendet.`,
          "Die Website wird von Vercel betrieben, unsere E‑Mail von One.com. Diese Anbieter können Zugriff auf die Daten erhalten, soweit dies für die Erbringung ihrer Dienste uns gegenüber erforderlich ist. Das Kontaktformular wird auf Servern in Stockholm verarbeitet.",
        ],
      },
      {
        title: "Cookies und Besucherstatistik",
        body: [
          "Die Website setzt keine Cookies. Wir erfassen die Zahl der Besuche und die aufgerufenen Seiten, ohne dass einzelne Besucher identifiziert werden können.",
        ],
      },
      {
        title: "Ihre Rechte",
        body: [
          "Sie haben das Recht auf Auskunft darüber, welche Daten wir über Sie gespeichert haben, auf Berichtigung unrichtiger Daten und auf Löschung der Daten, wenn sie nicht mehr benötigt werden. Außerdem können Sie der Verarbeitung widersprechen. Wenden Sie sich an uns, wir helfen Ihnen weiter.",
          "Sind Sie nicht zufrieden damit, wie wir mit Ihren Daten umgehen, können Sie bei der schwedischen Datenschutzbehörde Integritetsskyddsmyndigheten (IMY) Beschwerde einlegen.",
        ],
      },
    ],
    questions: "Fragen zur Datenschutzerklärung?",
    contactLink: "Kontaktieren Sie uns",
  },

  notFound: {
    title: "Seite nicht gefunden",
    code: "Fehler 404",
    lead: "Die Seite wurde möglicherweise verschoben oder entfernt. Hier finden Sie unsere Geschäftsbereiche:",
    back: "Zur Startseite",
  },

  contactSection: {
    title: "Anfrage senden",
    lead: "Hinterlassen Sie Ihre Nummer, dann rufen wir Sie zurück. Das Angebot ist kostenlos.",
  },

  form: {
    thanks: "Danke, wir rufen Sie zurück!",
    thanksText:
      "Wir melden uns in der Regel innerhalb eines Werktags. Dringend? Rufen Sie uns an:",
    topicPrefix: "Anliegen:",
    phone: "Ihre Telefonnummer",
    phonePlaceholder: "070-123 45 67",
    phoneHint: "Wir rufen Sie zurück, in der Regel innerhalb eines Werktags.",
    phoneError:
      "Bitte geben Sie Ihre Telefonnummer ein, damit wir Sie zurückrufen können.",
    topicLegend: "Worum geht es?",
    optional: "(optional)",
    name: "Name",
    email: "E-Mail",
    message: "Wobei können wir Ihnen helfen?",
    messagePlaceholder: "Was soll gemacht werden, wo und wann?",
    honeypot: "Leer lassen",
    sending: "Wird gesendet…",
    submit: "Rückruf anfordern",
    privacyNote: "Wir verwenden Ihre Angaben nur für Ihr Anliegen.",
    privacyLink: "Datenschutzerklärung",
    error:
      "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an:",
    limited:
      "Sie haben in kurzer Zeit mehrere Anfragen gesendet. Bitte rufen Sie uns an:",
  },

  trust: {
    title: "Darauf können Sie sich verlassen",
    points: [
      {
        title: "Tarifvertrag",
        text: "Unsere Fachkräfte und Reinigungskräfte sind nach Tarifvertrag mit den schwedischen Gewerkschaften Byggnads bzw. Fastighets angestellt.",
      },
      {
        title: "Versicherung und F‑skatt",
        text: "Wir sind haftpflichtversichert, in Schweden für F‑skatt zugelassen und für die Mehrwertsteuer sowie als Arbeitgeber registriert.",
      },
      {
        title: "Solide Finanzen",
        text: "Die Kanitas AB hat mit AAA die höchste Bonität.",
      },
      {
        title: "Ordnung auf der Baustelle",
        text: "Schutzausrüstung und Eigenkontrollen bei jedem Auftrag, bei unseren Bauprojekten zudem eine eigene Bauleitung.",
      },
    ],
  },

  process: {
    title: "So läuft es ab",
    steps: [
      {
        title: "Sie melden sich",
        text: "Rufen Sie an, schreiben Sie eine E‑Mail oder hinterlassen Sie hier Ihre Nummer.",
      },
      {
        title: "Wir sehen uns den Auftrag an",
        text: "Bei Bedarf kommen wir vorbei und sehen uns alles vor Ort an, bevor wir kalkulieren.",
      },
      {
        title: "Sie erhalten ein Angebot",
        text: "Mit Preis, Umfang und Zeitplan.",
      },
      {
        title: "Wir führen den Auftrag aus",
        text: "Mit eigenem Personal und einem festen Ansprechpartner bis zur Übergabe.",
      },
    ],
  },

  careers: {
    title: "Arbeiten bei uns",
    text: "Fachkräfte und Baureiniger können sich gerne bei uns melden. Sie erhalten eine Anstellung nach Tarifvertrag sowie Arbeitskleidung und Schutzausrüstung.",
    trades: ["Zimmerer", "Betonbauer", "Maurer", "Baureiniger"],
    cta: "Interesse melden",
  },

  quality: {
    title: "Nachhaltigkeit und Umwelt",
    paragraphs: [
      "Nachhaltigkeit und Umweltschutz gehören dazu, wenn wir Aufträge planen und ausführen. Was wir bauen und renovieren, soll lange halten, und wir gehen sorgsam mit Material um.",
      "Wir achten auf den Umgang mit Abfall und darauf, wie sich die Arbeit auf die Umgebung auswirkt. Wir streben an, nach ISO-Normen zu arbeiten, zum Beispiel ISO 9001.",
    ],
  },

  groupFacts: [
    { label: "Gegründet", value: `${site.founded} in ${site.address.city}` },
    {
      label: "Gesellschaften in der Gruppe",
      value: String(groupCompanies.length),
    },
    {
      label: "Bonität",
      value: `${site.creditRating} für die ${site.legalName}`,
    },
    { label: "Tarifverträge", value: "Byggnads und Fastighets" },
    { label: "Versicherung", value: "Betriebshaftpflichtversicherung" },
    {
      label: "Steuern",
      value:
        "Für F‑skatt zugelassen, für die Mehrwertsteuer und als Arbeitgeber registriert",
    },
    {
      label: "Zertifizierung und Mitgliedschaften",
      value: "SafeTrade, Svenskt Näringsliv",
    },
    {
      label: "Qualität und Umwelt",
      value: "ISO-Normen angestrebt, zum Beispiel ISO 9001",
    },
  ],

  companyRoles: {
    "Kanitas AB": `Bau, Reinigung und Service seit ${site.founded}`,
    "Kanitas ENT AB": "Personalüberlassung, Baureinigung und Service",
    "Kanitas Bygg AB": "Hoch- und Tiefbau",
    "Kanitas Fastigheter AB": "Immobilienbesitz und -verwaltung",
    "Kanitas Trading AB":
      "Kauf, Verkauf und Vermietung von Maschinen und Fahrzeugen",
  },

  businesses: {
    bygg: {
      heading: "Bau und Renovierung",
      summary: "Bauprojekte, Renovierung und Bauservice",
      blurb:
        "Wir bauen für Immobilieneigentümer, Wohnungsgenossenschaften und Privatpersonen sowie als Subunternehmer unter anderem für NCC, Implenia und ByggPartner.",
    },
    stad: {
      heading: "Personalüberlassung und Baureinigung",
      summary: "Fachkräfte und Baureinigung, auch kurzfristig",
      blurb:
        "Wir stellen Bauunternehmen Fachkräfte und Baureiniger zur Verfügung, oft kurzfristig, und übernehmen die Baureinigung vor der Abnahme.",
    },
    trading: {
      heading: "Maschinen und Fahrzeuge",
      summary: "Kauf, Verkauf und Vermietung von Maschinen und Fahrzeugen",
      blurb:
        "Wir kaufen, verkaufen und vermieten Maschinen, Werkzeuge, Transporter und Nutzfahrzeuge, für unsere eigenen Baustellen und für andere.",
    },
    fastigheter: {
      heading: "Gewerbeflächen und Verwaltung",
      summary: "Werkstatt-, Lager- und Büroflächen zur Miete",
      blurb:
        "Wir vermieten Werkstatt-, Lager- und Büroflächen in Järfälla. Anpassungen und Instandhaltung erledigen wir selbst.",
    },
  },

  areas: {
    bygg: {
      h1: "Bauunternehmen in Stockholm",
      intro:
        "Neubau, Renovierung und Bauservice für Bauunternehmen, Immobilieneigentümer, Wohnungsgenossenschaften (BRF) und Privatpersonen im gesamten Großraum Stockholm.",
      servicesH2: "Bauleistungen",
      serviceType: "Bauleistungen und Bauservice",
      ctaLabel: "Angebot anfordern",
      services: [
        {
          title: "Neubau",
          text: "Komplette Bauprojekte, von den Erdarbeiten bis zum fertigen Gebäude.",
        },
        {
          title: "Renovierung und Umbau",
          text: "Wohnungen, Büros und andere Gewerberäume.",
        },
        {
          title: "Bauservice",
          text: "Instandhaltung, Reparaturen und Anpassungen im Rahmen eines Servicevertrags.",
        },
        {
          title: "Bäder und Nassräume",
          text: "Komplettsanierung, mit festen Partnerbetrieben für Sanitär und Heizung.",
        },
        {
          title: "Innenausbau und Tischlerarbeiten",
          text: "Innenwände, abgehängte Decken, Türen und maßgefertigte Einbauten.",
        },
        {
          title: "Erd- und Tiefbau",
          text: "Erdarbeiten, Gründungen, Drainage und Feinplanum.",
        },
        {
          title: "Abbruch und Sanierung",
          text: "Selektiver Rückbau sowie Schadstoff-, Brand- und Feuchtesanierung.",
        },
        {
          title: "Winterdienst",
          text: "Schneeräumung und Streudienst für Vertragskunden.",
        },
      ],
      related: {
        href: "/stad",
        label: "Baureinigung und zusätzliches Personal: Kanitas ENT",
      },
      process: {
        title: "So läuft ein Bauprojekt ab",
        steps: [
          {
            title: "Anfrage und Ortstermin",
            text: "Wir besprechen, was gemacht werden soll, und sehen uns alles vor Ort an.",
          },
          {
            title: "Angebot",
            text: "Festpreis oder Abrechnung nach Aufwand, mit Umfang und Zeitplan. Zusatzarbeiten werden vor der Ausführung schriftlich freigegeben.",
          },
          {
            title: "Planung",
            text: "Material, Termine und Personal werden eingeplant. Sie erhalten einen festen Ansprechpartner, der den Auftrag von Anfang bis Ende begleitet.",
          },
          {
            title: "Ausführung",
            text: "Eigenes Personal und eigene Bauleitung vor Ort, mit Eigenkontrollen während der Arbeit.",
          },
          {
            title: "Schlussbegehung und Übergabe",
            text: "Wir gehen die Arbeiten gemeinsam durch und übergeben die Protokolle der Eigenkontrollen sowie bei größeren Aufträgen die Revisionsunterlagen.",
          },
        ],
      },
      sections: [
        {
          title: "Unsere Kunden",
          layout: "columns",
          items: [
            {
              title: "Bauunternehmen",
              text: "Als Subunternehmer unter anderem für NCC, Implenia und ByggPartner, mit eigener Bauleitung vor Ort.",
            },
            {
              title: "Immobilieneigentümer",
              text: "Bauservice im Rahmenvertrag: Störungsbehebung, Mieterausbauten und planmäßige Instandhaltung.",
            },
            {
              title: "Wohnungsgenossenschaften",
              text: "Strangsanierung, Fassaden- und Balkonarbeiten sowie Renovierung von Gemeinschaftsräumen. Die Bewohner werden während der gesamten Bauzeit informiert.",
            },
            {
              title: "Privatpersonen",
              text: "Bäder, Anbauten und Renovierung von Einfamilienhäusern und Wohnungen.",
            },
          ],
          references: true,
        },
      ],
      callout: {
        title: "ROT-Abzug für Privatpersonen",
        text: "Wenn Sie Ihre Wohnung oder Ihr Haus renovieren, können Sie für die Arbeitskosten den ROT-Abzug erhalten, den schwedischen Steuerabzug für Handwerkerleistungen, für das Material jedoch nicht. Wir ziehen den Abzug direkt von der Rechnung ab, sodass Sie nur Ihren Anteil bezahlen.",
      },
      faq: [
        {
          q: "Was kostet ein Angebot?",
          a: "Nichts.",
        },
        {
          q: "Übernehmen Sie auch kleinere Aufträge?",
          a: "Ja, auch einzelne Reparaturen.",
        },
        {
          q: "Wie schnell können Sie beginnen?",
          a: "Mit Bauservice-Aufträgen können wir in der Regel innerhalb weniger Tage beginnen. Größere Bauprojekte planen wir nach dem Projektzeitplan.",
        },
        {
          q: "Haben Sie eigenes Personal?",
          a: "Ja, bei Bedarf verstärkt durch Fachkräfte von Kanitas ENT. Für Elektro, Sanitär, Heizung und Lüftung beauftragen wir feste Partnerbetriebe.",
        },
      ],
      description:
        "Kanitas Bygg: Bauunternehmen in Stockholm für Neubau, Renovierung, Bauservice und Abbruch. Eigenes Personal mit Tarifvertrag. Kostenloses Angebot anfordern.",
    },

    stad: {
      h1: "Personalüberlassung und Baureinigung in Stockholm",
      intro:
        "Wir stellen Bauunternehmen Fachkräfte und Baureiniger zur Verfügung und übernehmen die Baureinigung vor der Abnahme. Das gesamte Personal ist bei uns nach Tarifvertrag angestellt.",
      servicesH2: "Personalüberlassung und Reinigungsleistungen",
      serviceType: "Personalüberlassung und Baureinigung",
      ctaLabel: "Angebot anfordern",
      services: [
        {
          title: "Fachkräfte",
          text: "Zimmerer, Betonbauer, Maurer und Gerüstbauer, die unter Ihrer Bauleitung arbeiten.",
        },
        {
          title: "Kurzfristige Personalüberlassung",
          text: "Wenn jemand ausfällt oder der Zeitplan beschleunigt werden muss.",
        },
        {
          title: "Baureinigung",
          text: "Grobreinigung während der Bauphase und Endreinigung vor der Abnahme.",
        },
        {
          title: "Büro- und Gebäudereinigung",
          text: "Büros, Treppenhäuser und Gemeinschaftsräume, möglichst immer mit denselben Reinigungskräften.",
        },
        {
          title: "Umzugsreinigung",
          text: "Wohnungen und Gewerberäume, nach Checkliste.",
        },
        {
          title: "Grund- und Fensterreinigung",
          text: "Böden, Fenster und alles, was über die Unterhaltsreinigung hinausgeht.",
        },
      ],
      related: {
        href: "/bygg",
        label: "Bau und Renovierung: Kanitas Bygg",
      },
      tags: {
        title: "Berufe, die wir stellen",
        text: "Alle erhalten Arbeitskleidung und Schutzausrüstung von uns.",
        items: [
          "Zimmerer",
          "Betonbauer",
          "Maurer",
          "Gerüstbauer",
          "Baureiniger",
        ],
      },
      process: {
        title: "Baureinigung in vier Schritten",
        steps: [
          {
            title: "Grobreinigung",
            text: "Baustaub, Verschmutzungen und Verpackungen werden während der Bauzeit laufend entfernt.",
          },
          {
            title: "Feinreinigung",
            text: "Alle Flächen werden gereinigt: Holzeinbauten, Lüftungsgitter, Sicherungskästen, Fensterrahmen und Böden.",
          },
          {
            title: "Fensterreinigung",
            text: "Glas, Rahmen und Flügel, innen und außen. Aufkleber und Klebeband werden entfernt.",
          },
          {
            title: "Endreinigung",
            text: "Letzter Durchgang vor Abnahme und Einzug.",
          },
        ],
      },
      checklist: {
        title: "Das gehört zur Baureinigung",
        items: [
          "Böden werden gesaugt und feucht gewischt",
          "Fenster werden innen und außen geputzt",
          "Fensterbänke, Rahmen und Flügel werden abgewischt",
          "Türen, Zargen und Leisten werden abgewischt",
          "Steckdosen, Lichtschalter und Sicherungskasten werden entstaubt",
          "Lüftungsgitter und Heizkörper werden gereinigt",
          "Schränke und Schubladen werden innen und außen abgewischt",
          "Haushaltsgeräte werden innen und außen gereinigt",
          "Fliesen, Sanitärkeramik und Bodenablauf im Bad werden gereinigt",
          "Klebeband, Aufkleber und Schutzfolie werden entfernt",
          "Baustaub wird von allen Flächen entfernt",
          "Verpackungen und Abfall werden hinausgetragen",
        ],
      },
      sections: [
        {
          title: "So funktioniert unsere Personalüberlassung",
          layout: "list",
          items: [
            {
              title: "Keine Mittelsmänner",
              text: "Das Personal ist bei uns angestellt. So wissen Sie, wer auf Ihre Baustelle kommt.",
            },
            {
              title: "Ihre Bauleitung",
              text: "Sie leiten die Arbeiten vor Ort. Lohn und Versicherung übernehmen wir.",
            },
            {
              title: "Reserve aus eigenen Baustellen",
              text: "Bei Bedarf ziehen wir Personal von den eigenen Baustellen der Gruppe ab, sodass sich eine Lücke schnell schließen lässt.",
            },
            {
              title: "Kurze und lange Einsätze",
              text: "Eine Person für einige Tage oder ein ganzes Team für das gesamte Projekt.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Wie schnell können Sie Personal stellen?",
          a: "Einzelne Fachkräfte können wir oft schon am nächsten Werktag schicken. Für ein ganzes Team brauchen wir in der Regel einige Tage.",
        },
        {
          q: "Wie lange dauert eine Baureinigung?",
          a: "Für eine Wohnung brauchen wir in der Regel einen Tag, für größere Gewerbeflächen mehrere. Wir planen ausgehend vom Abnahmetermin.",
        },
        {
          q: "Was passiert, wenn bei der Abnahme die Reinigung beanstandet wird?",
          a: "Dann reinigen wir diese Flächen ohne Zusatzkosten nach.",
        },
        {
          q: "Bieten Sie laufende Reinigungsverträge an?",
          a: "Ja, für Büros, Treppenhäuser und Immobilien. Wir übernehmen auch einzelne Aufträge wie Umzugs- und Grundreinigungen.",
        },
      ],
      description:
        "Kanitas ENT: Personalüberlassung für Bauunternehmen sowie Baureinigung, Endreinigung und Büroreinigung in Stockholm. Eigenes Personal mit Tarifvertrag.",
    },

    maskiner: {
      h1: "Maschinen und Fahrzeuge mieten in Järfälla",
      intro:
        "Wir vermieten, kaufen und verkaufen Maschinen, Werkzeuge, Transporter und Nutzfahrzeuge. Es sind dieselben Maschinen, die wir auf unseren eigenen Baustellen einsetzen.",
      servicesH2: "Vermietung, Kauf und Verkauf",
      serviceType: "Vermietung und Verkauf von Maschinen und Fahrzeugen",
      ctaLabel: "Preis anfragen",
      contactTitle: "Anfrage an Kanitas Trading",
      contactLead:
        "Hinterlassen Sie Ihre Nummer, dann rufen wir Sie zurück und nennen Ihnen Preis und Verfügbarkeit.",
      services: [
        {
          title: "Maschinen und Werkzeuge mieten",
          text: "Bau- und Erdbaumaschinen sowie Werkzeuge für Ihr Projekt.",
        },
        {
          title: "Transporter mieten",
          text: "Kastenwagen und Nutzfahrzeuge für Handwerker und Unternehmen.",
        },
        {
          title: "Kauf und Verkauf",
          text: "Wir kaufen und verkaufen Maschinen und Fahrzeuge. Melden Sie sich, wenn Sie etwas verkaufen oder suchen.",
        },
      ],
      related: {
        href: "/bygg",
        label: "Bau und Renovierung: Kanitas Bygg",
      },
      process: {
        title: "So mieten Sie bei uns",
        steps: [
          {
            title: "Sagen Sie uns, was Sie brauchen",
            text: "Welche Maschine oder welches Fahrzeug und für wie lange.",
          },
          {
            title: "Preis und Verfügbarkeit",
            text: "Wir rufen Sie zurück und nennen Ihnen Preis und freie Termine.",
          },
          {
            title: "Vertrag und Mietdauer",
            text: "Wir schließen einen Mietvertrag. Abholung und Rückgabe erfolgen wie vereinbart.",
          },
        ],
      },
      faq: [
        {
          q: "Was kostet die Miete?",
          a: "Das hängt von der Maschine oder dem Fahrzeug und von der Mietdauer ab. Hinterlassen Sie Ihre Nummer, dann rufen wir Sie mit einem Preis zurück.",
        },
        {
          q: "Kann ich eine Maschine oder ein Fahrzeug bei Ihnen kaufen?",
          a: "Ja. Sagen Sie uns, was Sie suchen, dann melden wir uns, sobald wir etwas Passendes haben.",
        },
        {
          q: "Kaufen Sie Maschinen und Fahrzeuge an?",
          a: "Ja. Sagen Sie uns, was Sie verkaufen möchten, gerne mit Fotos, dann melden wir uns.",
        },
      ],
      description:
        "Kanitas Trading vermietet, kauft und verkauft Baumaschinen, Werkzeuge, Transporter und Nutzfahrzeuge in Järfälla und im Großraum Stockholm.",
    },

    lokaler: {
      h1: "Gewerbeflächen mieten in Järfälla",
      intro:
        "Werkstatt-, Lager- und Büroflächen in Järfälla. Anpassungen und Instandhaltung erledigen wir selbst.",
      servicesH2: "Gewerbeflächen und Verwaltung",
      serviceType: "Vermietung von Gewerbeflächen",
      ctaLabel: "Freie Flächen anfragen",
      contactTitle: "Freie Flächen anfragen",
      contactLead:
        "Hinterlassen Sie Ihre Nummer, dann sagen wir Ihnen, welche Flächen frei sind.",
      services: [
        {
          title: "Gewerbeflächen zur Miete",
          text: "Werkstatt-, Lager- und Büroflächen in Järfälla.",
        },
        {
          title: "Verwaltung",
          text: "Wir verwalten unsere eigenen Immobilien.",
        },
        {
          title: "Hausmeisterservice",
          text: "Objektbetreuung, Instandhaltung, Winterdienst und Pflege der Außenanlagen.",
        },
        {
          title: "Mieterausbau",
          text: "Kanitas Bygg passt die Fläche an Ihren Betrieb an.",
        },
      ],
      related: {
        href: "/bygg",
        label: "Umbau und Anpassung: Kanitas Bygg",
      },
      process: {
        title: "So mieten Sie eine Gewerbefläche",
        steps: [
          {
            title: "Melden Sie sich",
            text: "Sagen Sie uns, welche Art von Fläche Sie suchen, wie groß sie ungefähr sein soll und ab wann Sie sie brauchen.",
          },
          {
            title: "Besichtigung",
            text: "Wir zeigen Ihnen, was frei ist.",
          },
          {
            title: "Vertrag und Anpassung",
            text: "Wir schließen einen Vertrag und passen die Fläche bei Bedarf an.",
          },
          {
            title: "Einzug",
            text: "Sie ziehen ein. Objektbetreuung und Instandhaltung des Gebäudes übernehmen wir.",
          },
        ],
      },
      faq: [
        {
          q: "Welche Flächen sind gerade frei?",
          a: "Das ändert sich laufend. Hinterlassen Sie Ihre Nummer, dann sagen wir Ihnen, was verfügbar ist.",
        },
        {
          q: "Kann die Fläche an meinen Betrieb angepasst werden?",
          a: "Ja, Kanitas Bygg kann die Fläche umbauen und anpassen.",
        },
        {
          q: "Wer kümmert sich um die Instandhaltung?",
          a: "Objektbetreuung und Instandhaltung unserer Immobilien übernehmen wir selbst.",
        },
      ],
      description:
        "Kanitas Fastigheter vermietet Werkstatt-, Lager- und Büroflächen in Järfälla. Wir passen die Fläche an Ihren Betrieb an. Fragen Sie nach freien Flächen.",
    },
  },

  areaContactTitle: (name) => `Angebot von ${name} anfordern`,

  topics: {
    Bygg: "Bau und Renovierung",
    Bemanning: "Personalüberlassung",
    Städ: "Reinigung",
    Trading: "Maschinen und Fahrzeuge",
    Fastigheter: "Gewerbeflächen",
    Jobb: "Arbeiten bei uns",
    Annat: "Sonstiges",
  },

  certifications: {
    aaa: "AAA, höchste Bonität",
    byggnads: "Tarifvertrag Byggnads",
    fastighets: "Tarifvertrag Fastighets",
    safeTrade: "SafeTrade",
    svensktNaringsliv: "Svenskt Näringsliv",
  },

  photoAlt: {
    nybygge:
      "Mehrfamilienhaus im Bau in der Dämmerung, mit Baukran und beleuchteten Geschossen",
    jobbstart:
      "Zwei Handwerker besprechen am Servicewagen vor einem Mehrfamilienhaus den Bauplan",
    bygglag:
      "Handwerker tragen Gipskartonplatten aus einem Servicewagen in ein Mehrfamilienhaus",
    armering:
      "Bauarbeiter in Warnkleidung flechten Bewehrung auf einer Geschossdecke",
    badrum:
      "Fliesenleger verlegt Bodenfliesen in einem Bad während der Renovierung",
    renovering:
      "Frisch renoviertes Zimmer in einer Stockholmer Altbauwohnung mit Kachelofen und Fischgrätparkett",
    platsbesok:
      "Bauleiter bespricht mit einem Paar an dessen Küchentisch den Grundriss",
    snickare:
      "Trockenbauer montiert Gipskartonplatten an einer neuen Innenwand in einer Wohnung",
    byggstadning:
      "Zwei Reinigungskräfte bei der Baureinigung in einer frisch renovierten Wohnung",
    slutstadning:
      "Reinigungskraft wischt bei der Endreinigung die Schränke einer neuen Küche aus, während ein Kollege saugt",
    trapphus: "Reinigungskraft wischt das Treppenhaus eines Mehrfamilienhauses",
    team: "Mitarbeiter versammeln sich vor Arbeitsbeginn an den Servicewagen vor der Werkstatt",
    maskin:
      "Minibagger auf einem Anhänger, Transporter und ein Pritschenwagen auf dem Hof vor der Werkstatt",
    fordon:
      "Ein Transporter wird auf dem Hof vor der Werkstatt an einen Kunden übergeben",
    lokalvisning:
      "Besichtigung einer leeren Werkstatt- und Lagerfläche mit Zwischengeschoss und offenem Tor",
    fastighet:
      "Gewerbegebäude mit Mietflächen, durch ein offenes Tor sieht man in eine leere Halle",
  },
};

export default de;
