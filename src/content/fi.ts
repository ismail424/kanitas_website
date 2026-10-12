import { groupCompanies, site } from "@/lib/site";
import type { Dictionary } from "./types";

const fi: Dictionary = {
  meta: {
    title: "Kanitas | Rakentaminen, työvoima, koneet ja tilat Tukholmassa",
    description: `Kanitas ${site.address.city}ssa: rakennusurakat, henkilöstövuokraus ja rakennussiivous, koneet ja ajoneuvot sekä vuokrattavat toimitilat Suur-Tukholmassa vuodesta ${site.founded}.`,
    keywords: [
      "rakennusyritys Tukholma",
      "rakennuspalvelut Järfälla",
      "remontti Tukholma",
      "rakennussiivous Tukholma",
      "toimistosiivous Tukholma",
      "muuttosiivous Tukholma",
      "maarakennus Tukholma",
      "purku ja sanerointi Tukholma",
    ],
    areaServed: "Suur-Tukholma",
  },

  common: {
    skipToContent: "Siirry sisältöön",
    call: "Soita",
    requestQuote: "Pyydä tarjous",
    home: "Etusivu",
    phone: "Puhelin",
    email: "Sähköposti",
    office: "Toimisto",
    orgNr: "Org.nro",
    ourClients: "Joitakin asiakkaitamme",
    faq: "Usein kysyttyä",
    language: "Kieli",
    logoHome: "Kanitas, etusivulle",
  },

  header: {
    mainMenu: "Päävalikko",
    mobileMenu: "Mobiilivalikko",
    businesses: "Toimialat",
    aboutGroup: "Tietoa konsernista",
    openMenu: "Avaa valikko",
    closeMenu: "Sulje valikko",
  },

  nav: [
    { href: "/om-oss", label: "Meistä" },
    { href: "/om-oss#referenser", label: "Referenssit" },
    { href: "/kontakt", label: "Yhteystiedot" },
  ],

  footer: {
    tagline: `Rakentamista, henkilöstövuokrausta, koneita ja toimitiloja Suur-Tukholmassa vuodesta ${site.founded}.`,
    businesses: "Toimialat",
    company: "Yritys",
    contact: "Yhteystiedot",
    links: [
      { href: "/om-oss", label: "Meistä" },
      { href: "/om-oss#bolagen", label: "Yhtiöt" },
      { href: "/om-oss#referenser", label: "Referenssit" },
      { href: "/kontakt", label: "Yhteystiedot" },
    ],
    privacy: "Tietosuojaseloste",
    certifications: "Sopimukset, luottoluokitus ja jäsenyydet",
  },

  languageHint: {
    text: "Tämä sivu on saatavilla suomeksi.",
    action: "Näytä suomeksi",
    dismiss: "Sulje",
  },

  hero: {
    title: "Rakennamme, vuokraamme ja ylläpidämme",
    lead: "Rakennusurakat, henkilöstövuokraus ja rakennussiivous, koneet ja ajoneuvot sekä vuokrattavat toimitilat koko Suur-Tukholman alueella.",
    trust: [
      `Luottoluokitus ${site.creditRating}`,
      "Työehtosopimus",
      `${site.address.city}ssa vuodesta ${site.founded}`,
    ],
  },

  home: {
    title: "Kanitas | Rakentaminen, työvoima, koneet ja tilat Tukholmassa",
    description: `Kanitas ${site.address.city}ssa: rakennusurakat, henkilöstövuokraus ja rakennussiivous, koneet ja ajoneuvot sekä vuokrattavat toimitilat Suur-Tukholmassa. Perustettu ${site.founded}.`,
    clientsHeading: "Asiakkaitamme ovat muun muassa",
    whatWeDo: {
      title: "Tätä teemme",
      lead: "Rakentaminen on suurin toimialamme. Teemme töitä rakennusyhtiöille, kiinteistönomistajille, taloyhtiöille ja yksityishenkilöille. Samasta puhelinnumerosta tavoitat myös henkilöstövuokrauksen, koneet ja toimitilat.",
    },
    toBusiness: (name) => `Lue lisää: ${name}`,
    contactBusiness: (name) => `Ota yhteyttä: ${name}`,
    story: {
      title: "Rakennusliikkeestä konserniksi",
      text: `Kanitas aloitti rakennusliikkeenä ${site.address.city}ssa. Ajan myötä henkilöstövuokraus, koneet ja toimitilat saivat omat yhtiönsä, mutta rakentaminen on yhä suurin toimialamme.`,
      link: "Lisää konsernista",
    },
    figures: {
      founded: `Perustettu ${site.address.city}ssa`,
      companies: "Yhtiötä konsernissa",
      creditRating: `${site.legalName}:n luottoluokitus`,
    },
    processLead:
      "Oma henkilöstö ja yksi yhteyshenkilö ensimmäisestä puhelusta luovutukseen asti.",
    contactTitle: "Pyydä tarjous",
  },

  about: {
    title: `Tietoa Kanitasista | Konserni ${site.address.city}ssa vuodesta ${site.founded}`,
    description: `Vuonna ${site.founded} ${site.address.city}ssa perustettu Kanitas on ${groupCompanies.length} yhtiön konserni: rakentaminen, henkilöstövuokraus, koneet ja toimitilat. Työehtosopimus ja luottoluokitus ${site.creditRating}.`,
    breadcrumb: "Meistä",
    heading: "Tietoa Kanitasista",
    lead: `Konserniin kuuluu ${groupCompanies.length} yhtiötä, toimialoina rakentaminen, henkilöstövuokraus, koneet ja toimitilat. Toimistomme on ${site.address.city}ssa.`,
    storyTitle: "Lyhyesti Kanitasista",
    story: [
      `Kanitas aloitti vuonna ${site.founded} ${site.address.city}ssa rakennus-, huolto- ja siivoustöillä. Rakentaminen on yhä suurin toimialamme. Teemme työt omalla henkilöstöllämme, ja sähkö-, putki- ja ilmanvaihtotöissä käytämme vakituisia yhteistyökumppaneita.`,
      "Henkilöstövuokrauksella, koneilla ja toimitiloilla on omat yhtiönsä, mutta tavoitat kaikki samasta puhelinnumerosta.",
    ],
    factsTitle: "Konsernin perustiedot",
    companiesTitle: "Konsernin yhtiöt",
    companiesLead:
      "Kanitas AB on emoyhtiö, ja jokaisella toimialalla on oma tytäryhtiönsä.",
    parentCompany: "Emoyhtiö",
    clientsTitle: "Joitakin asiakkaitamme",
    contactTitle: "Ota yhteyttä",
  },

  contactPage: {
    title: `Yhteystiedot | Kanitas ${site.address.city}ssa`,
    description: `Ota yhteyttä Kanitasiin ${site.address.city}ssa: soita numeroon ${site.phoneAbroad}, lähetä sähköpostia osoitteeseen ${site.email} tai jätä numerosi, niin soitamme sinulle.`,
    breadcrumb: "Yhteystiedot",
    heading: "Ota yhteyttä",
    lead: "Jätä numerosi, niin soitamme sinulle. Konsernin kaikilla yhtiöillä on sama puhelinnumero ja sähköpostiosoite.",
  },

  privacy: {
    title: "Tietosuojaseloste | Kanitas",
    description: `Näin ${site.legalName} käsittelee henkilötietoja, jotka annat kanitas.se-sivustolla, yhteydenottolomakkeella, sähköpostitse tai puhelimitse.`,
    heading: "Tietosuojaseloste",
    lead: `Näin ${site.legalName} käsittelee henkilötietoja, jotka annat ottaessasi meihin yhteyttä.`,
    sections: [
      {
        title: "Rekisterinpitäjä",
        body: [
          `${site.legalName} (organisaationumero ${site.orgnr}, ${site.address.city}) on rekisterinpitäjä kanitas.se-sivuston kautta annettujen tietojen käsittelyssä. Jos sinulla on kysyttävää käsittelystä, kirjoita osoitteeseen ${site.email} tai soita numeroon ${site.phoneAbroad}.`,
        ],
      },
      {
        title: "Mitä tietoja käsittelemme",
        body: [
          "Kun käytät yhteydenottolomaketta, käsittelemme puhelinnumeroasi, joka on ainoa pakollinen tieto, sekä tietoja, jotka päätät itse lisätä: nimeäsi, sähköpostiosoitettasi, asiasi aihetta ja viestiäsi. Sama koskee tietoja, jotka annat lähettäessäsi meille sähköpostia tai soittaessasi meille.",
          "Älä kirjoita lomakkeeseen arkaluonteisia henkilötietoja, kuten terveyttä koskevia tietoja.",
        ],
      },
      {
        title: "Miksi käsittelemme niitä",
        body: [
          "Käytämme tietoja vastataksemme yhteydenottoosi ja laatiaksemme tarjouksen. Jos sovimme työstä, käytämme niitä myös toimeksiannon toteuttamiseen. Jos lähetät meille avoimen hakemuksen, käytämme tietoja ottaaksemme sinuun yhteyttä mahdollisen työpaikan tiimoilta. Käsittelyn oikeusperusteena on oikeutettu etumme vastata yhteydenottoihin. Kun pyydät tarjousta tai tilaat meiltä työn, käsittelemme tietoja, jotta voimme tehdä sopimuksen kanssasi ja täyttää sen.",
          "Emme käytä tietoja markkinointiin, jota et ole pyytänyt, emmekä koskaan myy niitä eteenpäin.",
        ],
      },
      {
        title: "Kuinka kauan säilytämme niitä",
        body: [
          "Yhteydenotot, jotka eivät johda toimeksiantoon, poistetaan, kun asia on käsitelty loppuun. Jos yhteydenotto johtaa sopimukseen, tietoja säilytetään sopimuksen voimassaoloajan ja sen jälkeen niin kauan kuin laki edellyttää, esimerkiksi Ruotsin kirjanpitolain mukaan.",
        ],
      },
      {
        title: "Kenelle tietoja luovutetaan",
        body: [
          `Lomakkeelle kirjoittamasi tiedot lähetetään sähköpostina osoitteeseen ${site.email} ja tallennetaan sähköpostiimme, ei verkkosivustolle. Jos asia koskee konsernin toista yhtiötä, esimerkiksi henkilöstövuokrauksessa ja siivouksessa Kanitas ENT AB:tä, välitämme sen kyseiselle yhtiölle. Kun lähetät lomakkeen, IP-osoitettasi käytetään tilapäisesti roskapostin torjuntaan.`,
          "Verkkosivuston palveluntarjoaja on Vercel ja sähköpostimme One.com. Ne voivat saada pääsyn tietoihin siltä osin kuin se on tarpeen niiden palvelujen tuottamiseksi meille. Yhteydenottolomakkeen lähetykset käsitellään Tukholmassa sijaitsevilla palvelimilla.",
        ],
      },
      {
        title: "Evästeet ja kävijätilastot",
        body: [
          "Sivusto ei tallenna evästeitä. Mittaamme käyntien määrää ja sitä, mitä sivuja luetaan, niin ettei yksittäisiä kävijöitä voida tunnistaa.",
        ],
      },
      {
        title: "Oikeutesi",
        body: [
          "Sinulla on oikeus saada tietää, mitä tietoja meillä on sinusta, saada virheelliset tiedot oikaistuksi ja saada tiedot poistetuksi, kun niitä ei enää tarvita. Voit myös vastustaa käsittelyä. Ota yhteyttä, niin autamme.",
          "Jos et ole tyytyväinen siihen, miten käsittelemme tietojasi, voit tehdä valituksen Ruotsin tietosuojaviranomaiselle (Integritetsskyddsmyndigheten, IMY).",
        ],
      },
    ],
    questions: "Onko sinulla kysyttävää tietosuojaselosteesta?",
    contactLink: "Ota yhteyttä",
  },

  notFound: {
    title: "Sivua ei löydy",
    code: "Virhe 404",
    lead: "Sivu on ehkä siirretty tai poistettu. Tässä toimialamme:",
    back: "Etusivulle",
  },

  contactSection: {
    title: "Jätä yhteydenottopyyntö",
    lead: "Jätä numerosi, niin soitamme sinulle. Tarjous on maksuton.",
  },

  form: {
    thanks: "Kiitos, soitamme sinulle!",
    thanksText:
      "Otamme yhteyttä yleensä yhden työpäivän kuluessa. Onko kiire? Soita numeroon",
    topicPrefix: "Aihe:",
    phone: "Puhelinnumerosi",
    phonePlaceholder: "070-123 45 67",
    phoneHint: "Soitamme sinulle yleensä yhden työpäivän kuluessa.",
    phoneError: "Kirjoita puhelinnumerosi, niin soitamme sinulle.",
    topicLegend: "Mitä asia koskee?",
    optional: "(vapaaehtoinen)",
    name: "Nimi",
    email: "Sähköposti",
    message: "Missä tarvitset apua?",
    messagePlaceholder: "Mitä pitää tehdä, missä ja milloin?",
    honeypot: "Jätä tyhjäksi",
    sending: "Lähetetään…",
    submit: "Pyydä soittoa",
    privacyNote: "Käytämme tietoja vain asiasi hoitamiseen.",
    privacyLink: "Tietosuojaseloste",
    error: "Jokin meni vikaan. Yritä uudelleen tai soita meille numeroon",
    limited:
      "Olet lähettänyt useita yhteydenottopyyntöjä lyhyessä ajassa. Soita meille numeroon",
  },

  trust: {
    title: "Turvallinen valinta",
    points: [
      {
        title: "Työehtosopimus",
        text: "Ammattilaisemme ja siivoojamme ovat työsuhteessa Byggnads- tai Fastighets-liiton työehtosopimuksen mukaisesti.",
      },
      {
        title: "Vakuutus ja F‑skatt",
        text: "Meillä on vastuuvakuutus ja F‑skatt-hyväksyntä, joka vastaa Suomen ennakkoperintärekisteriä. Meidät on myös merkitty arvonlisäverorekisteriin ja työnantajarekisteriin.",
      },
      {
        title: "Vakaa talous",
        text: "Kanitas AB:llä on korkein mahdollinen luottoluokitus, AAA.",
      },
      {
        title: "Järjestys työmaalla",
        text: "Suojavarusteet ja omavalvonta jokaisessa työssä sekä oma työnjohto urakoissamme.",
      },
    ],
  },

  process: {
    title: "Näin se toimii",
    steps: [
      {
        title: "Otat yhteyttä",
        text: "Soita, lähetä sähköpostia tai jätä numerosi tällä sivulla.",
      },
      {
        title: "Katsomme kohteen",
        text: "Tarvittaessa käymme paikan päällä ennen kuin laskemme hinnan.",
      },
      {
        title: "Saat tarjouksen",
        text: "Siinä on hinta, laajuus ja aikataulu.",
      },
      {
        title: "Teemme työn",
        text: "Omalla henkilöstöllämme, ja sama yhteyshenkilö on mukana luovutukseen asti.",
      },
    ],
  },

  careers: {
    title: "Töihin meille",
    text: "Otamme mielellämme vastaan avoimia hakemuksia rakennusalan ammattilaisilta ja rakennussiivoojilta. Meillä saat työehtosopimuksen mukaisen työsuhteen, työvaatteet ja suojavarusteet.",
    trades: ["Kirvesmies", "Betonityöntekijä", "Muurari", "Rakennussiivooja"],
    cta: "Lähetä avoin hakemus",
  },

  quality: {
    title: "Kestävyys ja ympäristö",
    paragraphs: [
      "Kestävyys ja ympäristötyö ovat osa sitä, miten suunnittelemme ja toteutamme työmme. Haluamme, että se, mitä rakennamme ja remontoimme, kestää ja että materiaaleja käytetään harkiten.",
      "Otamme huomioon syntyvät jätteet ja sen, miten työ vaikuttaa kohteeseen. Pyrimme noudattamaan ISO-standardeja, kuten ISO 9001:tä.",
    ],
  },

  groupFacts: [
    { label: "Perustettu", value: `${site.founded} ${site.address.city}ssa` },
    { label: "Yhtiöitä konsernissa", value: String(groupCompanies.length) },
    {
      label: "Luottoluokitus",
      value: `${site.creditRating} (${site.legalName})`,
    },
    { label: "Työehtosopimukset", value: "Byggnads ja Fastighets" },
    { label: "Vakuutus", value: "Vastuuvakuutus" },
    {
      label: "Verotus ja arvonlisävero",
      value:
        "F‑skatt-hyväksyntä (vastaa ennakkoperintärekisteriä), merkitty arvonlisävero- ja työnantajarekisteriin",
    },
    {
      label: "Sertifiointi ja jäsenyys",
      value: "SafeTrade, Svenskt Näringsliv",
    },
    {
      label: "Laatu ja ympäristö",
      value: "Pyrimme noudattamaan ISO-standardeja, kuten ISO 9001:tä",
    },
  ],

  companyRoles: {
    "Kanitas AB": `Rakentaminen, siivous ja huoltopalvelut vuodesta ${site.founded}`,
    "Kanitas ENT AB": "Henkilöstövuokraus, rakennussiivous ja huoltopalvelut",
    "Kanitas Bygg AB": "Rakennus- ja maarakennusurakat",
    "Kanitas Fastigheter AB": "Kiinteistöjen omistus ja ylläpito",
    "Kanitas Trading AB": "Koneiden ja ajoneuvojen osto, myynti ja vuokraus",
  },

  businesses: {
    bygg: {
      heading: "Rakentaminen ja urakointi",
      summary: "Urakat, remontit sekä korjaus- ja huoltotyöt",
      blurb:
        "Rakennamme kiinteistönomistajille, taloyhtiöille ja yksityishenkilöille sekä aliurakoitsijana muun muassa NCC:lle, Implenialle ja ByggPartnerille.",
    },
    stad: {
      heading: "Henkilöstövuokraus ja rakennussiivous",
      summary: "Ammattilaisia ja rakennussiivousta lyhyellä varoitusajalla",
      blurb:
        "Vuokraamme rakennusalan ammattilaisia ja rakennussiivoojia urakoitsijoille, usein lyhyellä varoitusajalla, ja teemme rakennussiivouksia ennen vastaanottotarkastusta.",
    },
    trading: {
      heading: "Koneet ja ajoneuvot",
      summary: "Koneiden ja ajoneuvojen osto, myynti ja vuokraus",
      blurb:
        "Ostamme, myymme ja vuokraamme koneita, työkaluja, pakettiautoja ja työajoneuvoja sekä omille työmaillemme että muille.",
    },
    fastigheter: {
      heading: "Toimitilat ja ylläpito",
      summary: "Verstas-, varasto- ja toimistotiloja vuokralle",
      blurb:
        "Vuokraamme verstas-, varasto- ja toimistotiloja Järfällassa. Muutostyöt ja kunnossapidon teemme itse.",
    },
  },

  areas: {
    bygg: {
      h1: "Rakennusyritys Järfällassa ja Tukholmassa",
      intro:
        "Uudisrakentamista, remontteja sekä korjaus- ja huoltotöitä rakennusyhtiöille, kiinteistönomistajille, taloyhtiöille ja yksityishenkilöille Järfällassa ja koko Suur-Tukholman alueella.",
      servicesH2: "Rakennuspalvelut",
      serviceType: "Rakennusurakointi sekä korjaus- ja huoltotyöt",
      ctaLabel: "Pyydä tarjous",
      services: [
        {
          title: "Uudisrakentaminen",
          text: "Kokonaisurakat maatöistä valmiiseen rakennukseen.",
        },
        {
          title: "Remontit ja muutostyöt",
          text: "Asunnot, toimistot ja muut tilat.",
          href: "/bygg/renovering",
        },
        {
          title: "Korjaus- ja huoltotyöt",
          text: "Kunnossapito, korjaukset ja muutostyöt jatkuvalla sopimuksella.",
          href: "/bygg/byggservice",
        },
        {
          title: "Kylpyhuoneet ja märkätilat",
          text: "Kokonaisremontit, putkityöt vakituisten yhteistyökumppaneiden kanssa.",
          href: "/bygg/badrumsrenovering",
        },
        {
          title: "Sisärakentaminen ja puusepäntyöt",
          text: "Väliseinät, alakatot, ovet ja paikalla rakennetut kalusteet.",
        },
        {
          title: "Maarakennus",
          text: "Maatyöt, perustustyöt, salaojitus ja hienotasaus.",
        },
        {
          title: "Purku ja sanerointi",
          text: "Valikoiva purku sekä rakennus-, palo- ja kosteusvauriosanerointi.",
        },
        {
          title: "Lumityöt",
          text: "Lumenauraus ja liukkaudentorjunta sopimusasiakkaille.",
        },
      ],
      related: {
        href: "/stad",
        label: "Rakennussiivous ja lisähenkilöstö: Kanitas ENT",
      },
      process: {
        title: "Näin rakennusprojekti etenee",
        steps: [
          {
            title: "Yhteydenotto ja kohdekäynti",
            text: "Käymme läpi, mitä pitää tehdä, ja katsomme kohteen.",
          },
          {
            title: "Tarjous",
            text: "Kiinteä hinta tai laskutyö sekä työn laajuus ja aikataulu. Lisätyöt hyväksytään kirjallisesti ennen niiden aloittamista.",
          },
          {
            title: "Suunnittelu",
            text: "Varaamme materiaalit ja henkilöstön ja sovimme aikataulut. Saat yhteyshenkilön, joka seuraa työtä alusta loppuun.",
          },
          {
            title: "Rakentaminen",
            text: "Oma henkilöstö ja työnjohto paikalla, omavalvonta koko työn ajan.",
          },
          {
            title: "Läpikäynti ja luovutus",
            text: "Käymme työn läpi yhdessä ja luovutamme omavalvonta-asiakirjat sekä suuremmissa töissä toteumapiirustukset.",
          },
        ],
      },
      sections: [
        {
          title: "Asiakkaamme",
          layout: "columns",
          items: [
            {
              title: "Rakennusyhtiöt",
              text: "Aliurakoitsijana muun muassa NCC:lle, Implenialle ja ByggPartnerille, omalla työnjohdolla.",
              href: "/bygg/underentreprenor",
            },
            {
              title: "Kiinteistönomistajat",
              text: "Korjaus- ja huoltotöitä puitesopimuksella: vikakorjaukset, vuokralaismuutostyöt ja suunnitelmallinen kunnossapito.",
              href: "/bygg/byggservice",
            },
            {
              title: "Taloyhtiöt (BRF)",
              text: "Putkiremontit, julkisivu- ja parvekeremontit sekä yhteisten tilojen remontit. Asukkaille tiedotetaan koko työn ajan.",
              href: "/bygg/brf",
            },
            {
              title: "Yksityishenkilöt",
              text: "Kylpyhuoneet, laajennukset sekä omakotitalojen ja asuntojen remontit.",
              href: "/bygg/renovering",
            },
          ],
          references: true,
        },
      ],
      callout: {
        title: "ROT-vähennys yksityishenkilöille",
        text: "Jos remontoit kotiasi, voit saada työn osuudesta ROT-vähennyksen (Ruotsin vastine kotitalousvähennykselle), mutta et materiaaleista. Vähennämme sen suoraan laskusta, joten maksat vain oman osuutesi.",
      },
      faq: [
        {
          q: "Mitä tarjous maksaa?",
          a: "Ei mitään.",
        },
        {
          q: "Teettekö myös pienempiä töitä?",
          a: "Kyllä, myös yksittäisiä korjauksia.",
        },
        {
          q: "Kuinka nopeasti voitte aloittaa?",
          a: "Korjaus- ja huoltotöissä pääsemme yleensä aloittamaan muutaman päivän kuluessa. Suuremmat urakat suunnittelemme projektin aikataulun mukaan.",
        },
        {
          q: "Onko teillä omaa henkilöstöä?",
          a: "Kyllä, tarvittaessa vahvistettuna Kanitas ENT:n ammattilaisilla. Sähkö-, putki- ja ilmanvaihtotöissä käytämme vakituisia yhteistyökumppaneita.",
        },
      ],
      description:
        "Kanitas Bygg tekee uudisrakentamista, remontteja sekä huolto- ja purkutöitä Järfällassa ja Tukholmassa. Oma henkilöstö työehtosopimuksella. Maksuton tarjous.",
    },

    stad: {
      h1: "Henkilöstövuokraus ja rakennussiivous Tukholmassa",
      intro:
        "Vuokraamme rakennusalan ammattilaisia ja rakennussiivoojia urakoitsijoille ja teemme rakennussiivouksia ennen vastaanottotarkastusta. Koko henkilöstö on meillä työsuhteessa työehtosopimuksen mukaisesti.",
      servicesH2: "Henkilöstövuokraus ja siivouspalvelut",
      serviceType: "Henkilöstövuokraus ja rakennussiivous",
      ctaLabel: "Pyydä tarjous",
      services: [
        {
          title: "Rakennusalan ammattilaiset",
          text: "Kirvesmiehiä, betonityöntekijöitä, muurareita ja telineasentajia, jotka työskentelevät tilaajan työnjohdon alaisuudessa.",
        },
        {
          title: "Henkilöstöä lyhyellä varoitusajalla",
          text: "Kun joku on poissa tai aikataulua pitää kiristää.",
        },
        {
          title: "Rakennussiivous",
          text: "Karkeasiivous rakentamisen aikana ja loppusiivous ennen vastaanottotarkastusta.",
        },
        {
          title: "Toimisto- ja kiinteistösiivous",
          text: "Toimistot, porraskäytävät ja yhteiset tilat, mahdollisuuksien mukaan aina samat siivoojat.",
        },
        {
          title: "Muuttosiivous",
          text: "Asunnot ja toimitilat tarkistuslistan mukaan.",
        },
        {
          title: "Suursiivous ja ikkunanpesu",
          text: "Lattiat, ikkunat ja muut säännöllisen siivouksen ulkopuoliset työt.",
        },
      ],
      related: {
        href: "/bygg",
        label: "Rakentaminen ja remontit: Kanitas Bygg",
      },
      tags: {
        title: "Vuokraamamme ammattilaiset",
        text: "Kaikilla on meiltä työvaatteet ja suojavarusteet.",
        items: [
          "Kirvesmies",
          "Betonityöntekijä",
          "Muurari",
          "Telineasentaja",
          "Rakennussiivooja",
        ],
      },
      process: {
        title: "Rakennussiivous neljässä vaiheessa",
        steps: [
          {
            title: "Karkeasiivous",
            text: "Rakennuspöly, roskat ja pakkausjätteet poistetaan jatkuvasti koko rakennusajan.",
          },
          {
            title: "Hienosiivous",
            text: "Kaikki pinnat puhdistetaan: kiintokalusteet, ilmanvaihtoventtiilit, sähkökeskukset, ikkunankarmit ja lattiat.",
          },
          {
            title: "Ikkunanpesu",
            text: "Lasit, karmit ja puitteet sisältä ja ulkoa. Tarrat ja rakennusteipit poistetaan.",
          },
          {
            title: "Loppusiivous",
            text: "Viimeinen läpikäynti ennen vastaanottotarkastusta ja sisäänmuuttoa.",
          },
        ],
      },
      checklist: {
        title: "Rakennussiivoukseen sisältyy",
        items: [
          "Lattiat imuroidaan ja nihkeäpyyhitään",
          "Ikkunat pestään sisältä ja ulkoa",
          "Ikkunalaudat, karmit ja puitteet pyyhitään",
          "Ovet, karmit ja listat pyyhitään",
          "Pistorasiat, valokatkaisijat ja sähkökeskus pyyhitään pölystä",
          "Ilmanvaihtoventtiilit ja patterit puhdistetaan",
          "Kaapit ja laatikot pyyhitään sisältä ja ulkoa",
          "Kodinkoneet puhdistetaan sisältä ja ulkoa",
          "Kylpyhuoneen laatat, saniteettikalusteet ja lattiakaivo puhdistetaan",
          "Rakennusteipit, tarrat ja suojamuovit poistetaan",
          "Rakennuspöly poistetaan kaikilta pinnoilta",
          "Pakkausmateriaalit ja roskat kannetaan pois",
        ],
      },
      sections: [
        {
          title: "Näin henkilöstövuokraus toimii meillä",
          layout: "list",
          items: [
            {
              title: "Ei välikäsiä",
              text: "Henkilöstö on meillä työsuhteessa, joten tiedät, kuka työmaalle tulee.",
            },
            {
              title: "Työnjohto on sinulla",
              text: "Johdat työtä paikan päällä. Me vastaamme palkoista ja vakuutuksista.",
            },
            {
              title: "Varahenkilöt omilta työmailta",
              text: "Tarvittaessa siirrämme henkilöstöä konsernin omilta työmailta, jotta puuttuva tekijä saadaan nopeasti korvattua.",
            },
            {
              title: "Lyhyet ja pitkät toimeksiannot",
              text: "Yksi henkilö muutamaksi päiväksi tai kokonainen työryhmä koko projektin ajaksi.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Kuinka nopeasti saatte henkilöstöä paikalle?",
          a: "Yksittäisen ammattilaisen voimme usein lähettää jo seuraavana työpäivänä. Kokonainen työryhmä vie yleensä muutaman päivän.",
        },
        {
          q: "Kauanko rakennussiivous kestää?",
          a: "Asunto vie yleensä päivän, suuremmat tilat useamman. Suunnittelemme työn vastaanottotarkastuksen päivämäärän mukaan.",
        },
        {
          q: "Mitä tapahtuu, jos tarkastaja huomauttaa siivouksesta?",
          a: "Siivoamme kyseiset pinnat uudelleen veloituksetta.",
        },
        {
          q: "Tarjoatteko jatkuvia siivoussopimuksia?",
          a: "Kyllä, toimistoihin, porraskäytäviin ja kiinteistöihin. Teemme myös yksittäisiä töitä, kuten muutto- ja suursiivouksia.",
        },
      ],
      description:
        "Kanitas ENT: henkilöstövuokraus rakennusyrityksille sekä rakennus-, loppu- ja toimistosiivous Järfällassa ja Tukholmassa. Työehtosopimus.",
    },

    maskiner: {
      h1: "Kone- ja ajoneuvovuokraus Järfällassa",
      intro:
        "Vuokraamme, ostamme ja myymme koneita, työkaluja, pakettiautoja ja työajoneuvoja. Ne ovat samoja koneita, joita käytämme omilla työmaillamme.",
      servicesH2: "Vuokraus, osto ja myynti",
      serviceType: "Koneiden ja ajoneuvojen vuokraus ja myynti",
      ctaLabel: "Kysy hintaa",
      contactTitle: "Kysy Kanitas Tradingilta",
      contactLead:
        "Jätä numerosi, niin soitamme ja kerromme hinnan ja saatavuuden.",
      services: [
        {
          title: "Koneiden ja työkalujen vuokraus",
          text: "Rakennus- ja maarakennuskoneet sekä työkalut työhösi.",
        },
        {
          title: "Pakettiauton vuokraus",
          text: "Pakettiautot ja työajoneuvot ammattilaisille ja yrityksille.",
        },
        {
          title: "Osto ja myynti",
          text: "Ostamme ja myymme koneita ja ajoneuvoja. Ota yhteyttä, jos myyt tai etsit jotain.",
        },
      ],
      related: {
        href: "/bygg",
        label: "Rakentaminen ja remontit: Kanitas Bygg",
      },
      process: {
        title: "Näin vuokraat meiltä",
        steps: [
          {
            title: "Kerro, mitä tarvitset",
            text: "Mikä kone tai ajoneuvo ja kuinka pitkäksi aikaa.",
          },
          {
            title: "Hinta ja saatavuus",
            text: "Soitamme ja kerromme hinnan ja sen, milloin kalusto on vapaana.",
          },
          {
            title: "Sopimus ja vuokra-aika",
            text: "Teemme sopimuksen, ja noudat ja palautat kaluston sovitusti.",
          },
        ],
      },
      faq: [
        {
          q: "Paljonko vuokraaminen maksaa?",
          a: "Se riippuu koneesta tai ajoneuvosta ja siitä, kuinka pitkään tarvitset sitä. Jätä numerosi, niin soitamme ja kerromme hinnan.",
        },
        {
          q: "Voinko ostaa teiltä koneen tai ajoneuvon?",
          a: "Kyllä. Kerro, mitä etsit, niin otamme yhteyttä, kun meillä on jotain sopivaa.",
        },
        {
          q: "Ostatteko koneita ja ajoneuvoja?",
          a: "Kyllä. Kerro, mitä haluat myydä, mieluiten kuvien kera, niin palaamme asiaan.",
        },
      ],
      description:
        "Kanitas Trading vuokraa, ostaa ja myy koneita, työkaluja, pakettiautoja ja työajoneuvoja Järfällassa ja Suur-Tukholmassa.",
    },

    lokaler: {
      h1: "Toimitilat vuokralle Järfällassa",
      intro:
        "Verstas-, varasto- ja toimistotiloja Järfällassa. Muutostyöt ja kunnossapidon teemme itse.",
      servicesH2: "Toimitilat ja ylläpito",
      serviceType: "Toimitilojen vuokraus",
      ctaLabel: "Kysy vapaita tiloja",
      contactTitle: "Kysy vapaita tiloja",
      contactLead: "Jätä numerosi, niin kerromme, mitkä tilat ovat vapaana.",
      services: [
        {
          title: "Toimitilat vuokralle",
          text: "Verstas-, varasto- ja toimistotiloja Järfällassa.",
        },
        {
          title: "Kiinteistöjen ylläpito",
          text: "Ylläpidämme ja hallinnoimme omia kiinteistöjämme.",
        },
        {
          title: "Kiinteistöhuolto",
          text: "Tarkastukset, kunnossapito, lumityöt ja piha-alueiden hoito.",
        },
        {
          title: "Tilojen muutostyöt",
          text: "Kanitas Bygg muokkaa tilan toimintasi tarpeisiin.",
        },
      ],
      related: {
        href: "/bygg",
        label: "Muutostyöt ja tilojen muokkaus: Kanitas Bygg",
      },
      process: {
        title: "Näin vuokraat toimitilan",
        steps: [
          {
            title: "Ota yhteyttä",
            text: "Kerro, millaista tilaa etsit, suunnilleen kuinka suurta ja milloin tarvitset sen.",
          },
          {
            title: "Esittely",
            text: "Näytämme vapaat tilat.",
          },
          {
            title: "Sopimus ja muutostyöt",
            text: "Teemme sopimuksen ja muokkaamme tilan tarvittaessa.",
          },
          {
            title: "Muutto",
            text: "Muutat sisään. Kiinteistön tarkastuksista ja kunnossapidosta huolehdimme me.",
          },
        ],
      },
      faq: [
        {
          q: "Mitä tiloja on nyt vapaana?",
          a: "Se vaihtelee. Jätä numerosi, niin kerromme, mitä on tarjolla.",
        },
        {
          q: "Voiko tilan muokata toimintani tarpeisiin?",
          a: "Kyllä, Kanitas Bygg voi tehdä tilaan muutostyöt ja muokata sen tarpeisiisi.",
        },
        {
          q: "Kuka huolehtii kunnossapidosta?",
          a: "Me huolehdimme kiinteistöjemme tarkastuksista ja kunnossapidosta.",
        },
      ],
      description:
        "Kanitas Fastigheter vuokraa verstas-, varasto- ja toimistotiloja Järfällassa. Muokkaamme tilan toimintasi tarpeisiin. Kysy vapaita tiloja.",
    },
  },

  services: {
    badrumsrenovering: {
      label: "Kylpyhuoneremontti",
      h1: "Kylpyhuoneremontti Järfällassa ja Tukholmassa",
      intro:
        "Teemme kylpyhuoneiden ja märkätilojen kokonaisremontteja omakotitaloihin, asuntoihin ja taloyhtiöihin purkutöistä valmiiseen kylpyhuoneeseen. Putki- ja sähkötyöt hoitavat vakituiset yhteistyökumppanimme, ja sinulla on yksi yhteyshenkilö koko työn ajan.",
      servicesH2: "Kylpyhuoneremonttiin sisältyy",
      serviceType: "Kylpyhuoneremontti",
      ctaLabel: "Pyydä tarjous",
      contactTitle: "Pyydä tarjous kylpyhuoneremontista",
      services: [
        {
          title: "Purku",
          text: "Vanhat laatat, lattiat ja kalusteet puretaan ja viedään pois.",
        },
        {
          title: "Vedeneristys",
          text: "Uusi vedeneristys lattiaan ja seiniin suojaamaan kosteudelta.",
        },
        {
          title: "Laatoitus",
          text: "Lattioiden ja seinien laatoitus.",
        },
        {
          title: "Putkityöt",
          text: "Putket, lattiakaivo, suihku, WC ja pesuallas. Työt tekee vakituinen putkialan kumppanimme.",
        },
        {
          title: "Sähkö ja valaistus",
          text: "Sähkötyöt tekee vakituinen yhteistyökumppanimme.",
        },
        {
          title: "Kalusteet",
          text: "Kaappien, allaskaapin ja varusteiden asennus.",
        },
      ],
      related: {
        href: "/bygg/renovering",
        label: "Koko asunnon remontti: Remontit ja muutostyöt",
      },
      process: {
        title: "Näin kylpyhuoneremontti etenee",
        steps: [
          {
            title: "Kohdekäynti",
            text: "Katsomme kylpyhuoneen ja käymme läpi, mitä haluat teettää.",
          },
          {
            title: "Tarjous",
            text: "Kiinteä hinta tai laskutyö sekä työn laajuus ja aikataulu. Lisätyöt hyväksytään kirjallisesti ennen niiden aloittamista.",
          },
          {
            title: "Remontti",
            text: "Oma henkilöstö ja työnjohto, omavalvonta koko työn ajan.",
          },
          {
            title: "Läpikäynti",
            text: "Käymme kylpyhuoneen läpi yhdessä ja luovutamme omavalvonta-asiakirjat.",
          },
        ],
      },
      callout: {
        title: "ROT-vähennys kylpyhuoneremontista",
        text: "Yksityishenkilönä voit saada työn osuudesta ROT-vähennyksen (Ruotsin vastine kotitalousvähennykselle), mutta et materiaaleista. Vähennämme sen suoraan laskusta, joten maksat vain oman osuutesi.",
      },
      faq: [
        {
          q: "Paljonko kylpyhuoneremontti maksaa?",
          a: "Se riippuu kylpyhuoneen koosta ja siitä, mitä siinä tehdään. Tulemme mielellämme katsomaan, ja tarjous on maksuton.",
        },
        {
          q: "Kauanko remontti kestää?",
          a: "Se riippuu työn laajuudesta. Saat aikataulun tarjouksessa ennen töiden alkua.",
        },
        {
          q: "Remontoitteko kylpyhuoneita osakeasunnoissa?",
          a: "Kyllä, sekä asuntojen omistajille että taloyhtiöille.",
        },
        {
          q: "Kuka tekee putki- ja sähkötyöt?",
          a: "Vakituiset yhteistyökumppanimme. Sinulla on silti meillä yksi yhteyshenkilö koko työn ajan.",
        },
      ],
      description:
        "Kanitas Bygg tekee kylpyhuoneremontteja Järfällassa ja Tukholmassa: purku, vedeneristys, laatoitus, putki- ja sähkötyöt. ROT-vähennys suoraan laskusta.",
    },

    renovering: {
      label: "Remontit ja muutostyöt",
      h1: "Remontit ja muutostyöt Järfällassa ja Tukholmassa",
      intro:
        "Remontoimme asuntoja, omakotitaloja, toimistoja ja muita tiloja ja teemme niihin muutostöitä omalla henkilöstöllämme ja työnjohdollamme. Saat yhteyshenkilön, joka seuraa työtä alusta loppuun.",
      servicesH2: "Tätä teemme",
      serviceType: "Remontit ja muutostyöt",
      ctaLabel: "Pyydä tarjous",
      contactTitle: "Pyydä tarjous remontista",
      services: [
        {
          title: "Asunnot ja omakotitalot",
          text: "Koko asunnon tai sen osan remontti.",
        },
        {
          title: "Laajennukset",
          text: "Omakotitalojen laajennukset.",
        },
        {
          title: "Toimistot ja toimitilat",
          text: "Toimistojen ja muiden toimitilojen muutostyöt ja muokkaus.",
        },
        {
          title: "Vuokralaismuutostyöt",
          text: "Tilat muokataan uuden vuokralaisen tarpeisiin kiinteistönomistajien toimeksiannosta.",
        },
        {
          title: "Väliseinät ja puusepäntyöt",
          text: "Väliseinät, alakatot, ovet ja paikalla rakennetut kalusteet.",
        },
        {
          title: "Purku",
          text: "Valikoiva purku ennen muutostöitä.",
        },
      ],
      related: {
        href: "/bygg/badrumsrenovering",
        label: "Vain kylpyhuone: Kylpyhuoneremontti",
      },
      process: {
        title: "Näin remontti etenee",
        steps: [
          {
            title: "Yhteydenotto ja kohdekäynti",
            text: "Käymme läpi, mitä pitää tehdä, ja katsomme kohteen.",
          },
          {
            title: "Tarjous",
            text: "Kiinteä hinta tai laskutyö sekä työn laajuus ja aikataulu. Lisätyöt hyväksytään kirjallisesti ennen niiden aloittamista.",
          },
          {
            title: "Suunnittelu",
            text: "Varaamme materiaalit ja henkilöstön ja sovimme aikataulut. Saat yhteyshenkilön, joka seuraa työtä alusta loppuun.",
          },
          {
            title: "Remontti",
            text: "Oma henkilöstö ja työnjohto paikalla, omavalvonta koko työn ajan.",
          },
          {
            title: "Läpikäynti ja luovutus",
            text: "Käymme työn läpi yhdessä ja luovutamme omavalvonta-asiakirjat sekä suuremmissa töissä toteumapiirustukset.",
          },
        ],
      },
      callout: {
        title: "ROT-vähennys yksityishenkilöille",
        text: "Jos remontoit kotiasi, voit saada työn osuudesta ROT-vähennyksen (Ruotsin vastine kotitalousvähennykselle), mutta et materiaaleista. Vähennämme sen suoraan laskusta, joten maksat vain oman osuutesi.",
      },
      faq: [
        {
          q: "Teettekö myös pienempiä töitä?",
          a: "Kyllä, myös yksittäisiä korjauksia ja pienempiä remontteja.",
        },
        {
          q: "Voitteko hoitaa koko remontin?",
          a: "Kyllä. Koordinoimme kaikki työvaiheet, ja sähkö-, putki- ja ilmanvaihtotyöt tekevät vakituiset yhteistyökumppanimme.",
        },
        {
          q: "Kiinteä hinta vai laskutyö?",
          a: "Kumpi tahansa käy. Se kirjataan tarjoukseen, ja lisätyöt hyväksytään kirjallisesti ennen niiden aloittamista.",
        },
        {
          q: "Mitä tarjous maksaa?",
          a: "Ei mitään.",
        },
      ],
      description:
        "Kanitas Bygg remontoi asuntoja, omakotitaloja, toimistoja ja toimitiloja ja tekee muutostöitä Järfällassa ja Tukholmassa. Oma henkilöstö työehtosopimuksella.",
    },

    byggservice: {
      label: "Korjaus- ja huoltotyöt",
      h1: "Kiinteistöjen korjaus- ja huoltotyöt Tukholmassa",
      intro:
        "Kunnossapitoa, korjauksia ja vuokralaismuutostöitä puitesopimuksella tai jatkuvalla sopimuksella Järfällassa ja koko Suur-Tukholman alueella. Korjaus- ja huoltotöissä pääsemme yleensä aloittamaan muutaman päivän kuluessa.",
      servicesH2: "Korjaus- ja huoltotöihin sisältyy",
      serviceType: "Korjaus- ja huoltotyöt sekä kiinteistöjen kunnossapito",
      ctaLabel: "Kysy korjaus- ja huoltotöistä",
      contactTitle: "Kysy korjaus- ja huoltotöistä",
      services: [
        {
          title: "Vikakorjaukset",
          text: "Korjaukset, kun jokin on mennyt rikki.",
        },
        {
          title: "Suunnitelmallinen kunnossapito",
          text: "Kunnossapito kiinteistön kunnossapitosuunnitelman mukaan.",
        },
        {
          title: "Vuokralaismuutostyöt",
          text: "Toimitilat ja asunnot muokataan uusien vuokralaisten tarpeisiin.",
        },
        {
          title: "Puitesopimus",
          text: "Yksi sopimus toistuville töille tai yksittäisiä toimeksiantoja tarpeen mukaan.",
        },
        {
          title: "Lumityöt",
          text: "Lumenauraus ja liukkaudentorjunta sopimusasiakkaille.",
        },
        {
          title: "Siivous työn jälkeen",
          text: "Rakennus- ja kiinteistösiivous Kanitas ENT:n kautta.",
          href: "/stad",
        },
      ],
      related: {
        href: "/bygg/renovering",
        label: "Suuremmat muutostyöt: Remontit ja muutostyöt",
      },
      process: {
        title: "Näin korjaus- ja huoltotyöt toimivat",
        steps: [
          {
            title: "Otat yhteyttä",
            text: "Soita, lähetä sähköpostia tai jätä numerosi tällä sivulla.",
          },
          {
            title: "Katsomme kohteen",
            text: "Tarvittaessa käymme paikan päällä ennen kuin laskemme hinnan.",
          },
          {
            title: "Teemme työn",
            text: "Oma henkilöstö, omavalvonta koko työn ajan.",
          },
          {
            title: "Luovutus",
            text: "Käymme työn läpi kanssasi, kun se on valmis.",
          },
        ],
      },
      faq: [
        {
          q: "Kuinka nopeasti voitte aloittaa?",
          a: "Korjaus- ja huoltotöissä pääsemme yleensä aloittamaan muutaman päivän kuluessa.",
        },
        {
          q: "Pitääkö meidän tehdä puitesopimus?",
          a: "Ei. Teemme myös yksittäisiä toimeksiantoja.",
        },
        {
          q: "Onko teillä omaa henkilöstöä?",
          a: "Kyllä, tarvittaessa vahvistettuna Kanitas ENT:n ammattilaisilla. Sähkö-, putki- ja ilmanvaihtotöissä käytämme vakituisia yhteistyökumppaneita.",
        },
      ],
      description:
        "Kanitas Bygg tekee korjaus- ja huoltotöitä kiinteistönomistajille Järfällassa ja Tukholmassa: vikakorjaukset, kunnossapito ja vuokralaismuutostyöt.",
    },

    brf: {
      label: "Putkiremontti ja taloyhtiöt",
      h1: "Taloyhtiön putkiremontti ja remontit Tukholmassa",
      intro:
        "Teemme putkiremontteja, julkisivu- ja parvekeremontteja sekä yhteisten tilojen remontteja asunto-osakeyhtiöille Järfällassa ja Tukholmassa. Asukkaille tiedotetaan koko työn ajan.",
      servicesH2: "Tätä teemme taloyhtiöille",
      serviceType: "Putkiremontit ja remontit asunto-osakeyhtiöille",
      ctaLabel: "Pyydä tarjous",
      contactTitle: "Pyydä tarjous taloyhtiölle",
      services: [
        {
          title: "Putkiremontti",
          text: "Vesi- ja viemäriputkien uusiminen.",
        },
        {
          title: "Kylpyhuoneet",
          text: "Asuntojen kylpyhuoneremontit samassa hankkeessa tai erikseen.",
          href: "/bygg/badrumsrenovering",
        },
        {
          title: "Julkisivut",
          text: "Julkisivujen remontit ja korjaukset.",
        },
        {
          title: "Parvekkeet",
          text: "Parvekkeiden remontit.",
        },
        {
          title: "Yhteiset tilat",
          text: "Porraskäytävät, pesutuvat ja muut yhteiset tilat.",
        },
        {
          title: "Siivous",
          text: "Rakennussiivous ja porraskäytävien siivous Kanitas ENT:n kautta.",
          href: "/stad",
        },
      ],
      process: {
        title: "Näin taloyhtiön hanke etenee",
        steps: [
          {
            title: "Yhteydenotto ja kohdekäynti",
            text: "Käymme läpi, mitä taloyhtiö haluaa tehdä, ja katsomme kiinteistön.",
          },
          {
            title: "Tarjous",
            text: "Kiinteä hinta tai laskutyö sekä työn laajuus ja aikataulu. Lisätyöt hyväksytään kirjallisesti ennen niiden aloittamista.",
          },
          {
            title: "Suunnittelu ja tiedottaminen",
            text: "Varaamme materiaalit ja henkilöstön ja sovimme aikataulut, ja asukkaat saavat tietää, mitä tapahtuu ja milloin.",
          },
          {
            title: "Työ",
            text: "Oma henkilöstö ja työnjohto paikalla, omavalvonta koko työn ajan.",
          },
          {
            title: "Läpikäynti ja luovutus",
            text: "Käymme työn läpi hallituksen kanssa ja luovutamme omavalvonta-asiakirjat ja toteumapiirustukset.",
          },
        ],
      },
      faq: [
        {
          q: "Miten asukkaat saavat tietää, mitä tapahtuu?",
          a: "Tiedotamme asukkaille ennen työtä ja sen aikana, jotta kaikki tietävät, mitä tapahtuu ja milloin.",
        },
        {
          q: "Onko teillä omaa henkilöstöä?",
          a: "Kyllä, ja oma työnjohto paikalla. Sähkö-, putki- ja ilmanvaihtotöissä käytämme vakituisia yhteistyökumppaneita.",
        },
        {
          q: "Mitä tarjous maksaa?",
          a: "Ei mitään.",
        },
      ],
      description:
        "Kanitas Bygg tekee taloyhtiöille putkiremontit, julkisivu- ja parvekeremontit sekä yhteisten tilojen remontit Järfällassa ja Tukholmassa. Maksuton tarjous.",
    },

    underentreprenor: {
      label: "Aliurakointi",
      h1: "Rakennusalan aliurakoitsija Tukholmassa",
      intro:
        "Toimimme aliurakoitsijana rakennusyhtiöille, muun muassa NCC:lle, Implenialle ja ByggPartnerille, omalla henkilöstöllämme ja omalla työnjohdollamme paikan päällä.",
      servicesH2: "Tätä teemme aliurakoitsijana",
      serviceType: "Rakennusalan aliurakointi",
      ctaLabel: "Ota yhteyttä",
      contactTitle: "Tiedustelu aliurakoinnista",
      contactLead: "Kerro projektista, niin soitamme sinulle.",
      services: [
        {
          title: "Sisärakentaminen",
          text: "Väliseinät, alakatot ja ovet.",
        },
        {
          title: "Puusepäntyöt",
          text: "Paikalla rakennetut kalusteet ja puusepäntyöt.",
        },
        {
          title: "Maarakennus",
          text: "Maatyöt, perustustyöt, salaojitus ja hienotasaus.",
        },
        {
          title: "Purku ja sanerointi",
          text: "Valikoiva purku sekä rakennus-, palo- ja kosteusvauriosanerointi.",
        },
        {
          title: "Lisää ammattilaisia",
          text: "Kirvesmiehiä, betonityöntekijöitä ja muurareita Kanitas ENT:ltä, kun tarvitset lisävoimia.",
          href: "/stad",
        },
        {
          title: "Rakennussiivous",
          text: "Rakennussiivous ja loppusiivous ennen vastaanottotarkastusta Kanitas ENT:n kautta.",
          href: "/stad",
        },
      ],
      sections: [
        {
          title: "Miksi rakennusyhtiöt valitsevat meidät",
          layout: "columns",
          items: [
            {
              title: "Oma työnjohto",
              text: "Johdamme omaa työtämme paikan päällä.",
            },
            {
              title: "Työehtosopimus",
              text: "Ammattilaisemme ovat työsuhteessa Byggnads-liiton työehtosopimuksen mukaisesti.",
            },
            {
              title: "Järjestys työmaalla",
              text: "Suojavarusteet ja omavalvonta jokaisessa työssä.",
            },
            {
              title: "Vakaa talous",
              text: "Kanitas AB:llä on korkein mahdollinen luottoluokitus, AAA. Meillä on vastuuvakuutus ja F‑skatt-hyväksyntä.",
            },
          ],
          references: true,
        },
      ],
      faq: [
        {
          q: "Keille rakennusyhtiöille olette tehneet töitä?",
          a: "Muun muassa NCC:lle, Implenialle ja ByggPartnerille.",
        },
        {
          q: "Voitteko vahvistaa työmaata lisähenkilöstöllä?",
          a: "Kyllä, Kanitas ENT:n ammattilaisilla, usein lyhyellä varoitusajalla.",
        },
        {
          q: "Onko teillä F‑skatt-hyväksyntä ja vakuutus?",
          a: "Kyllä. Meillä on vastuuvakuutus ja F‑skatt-hyväksyntä, ja meidät on merkitty arvonlisäverorekisteriin ja työnantajarekisteriin.",
        },
      ],
      description:
        "Kanitas Bygg on rakennusyhtiöiden, kuten NCC:n ja Implenian, aliurakoitsija Tukholmassa: sisärakentaminen, maarakennus ja purku. Oma työnjohto, työehtosopimus.",
    },
  },

  areaContactTitle: (name) => `Pyydä tarjous – ${name}`,

  topics: {
    Bygg: "Rakentaminen ja remontit",
    Bemanning: "Henkilöstövuokraus",
    Städ: "Siivous",
    Trading: "Koneet ja ajoneuvot",
    Fastigheter: "Toimitilat",
    Jobb: "Töihin meille",
    Annat: "Jokin muu",
  },

  certifications: {
    aaa: "AAA, korkein luottoluokitus",
    byggnads: "Työehtosopimus, Byggnads",
    fastighets: "Työehtosopimus, Fastighets",
    safeTrade: "SafeTrade",
    svensktNaringsliv: "Svenskt Näringsliv",
  },

  photoAlt: {
    nybygge:
      "Rakenteilla oleva kerrostalo iltahämärässä, rakennusnosturi ja valaistut kerrokset",
    jobbstart:
      "Kaksi ammattilaista käy piirustusta läpi huoltoauton vieressä kerrostalon edessä",
    bygglag: "Ammattilaiset kantavat kipsilevyjä huoltoautosta kerrostaloon",
    armering:
      "Huomiovaatteisiin pukeutunut rakennustyöntekijä sitoo raudoitusta välipohjalla",
    badrum: "Laatoittaja asentaa lattialaattoja remontoitavaan kylpyhuoneeseen",
    renovering:
      "Vastaremontoitu huone vanhassa tukholmalaisasunnossa, jossa on kaakeliuuni ja kalanruotoparketti",
    platsbesok:
      "Työnjohtaja käy pohjapiirustusta läpi pariskunnan kanssa heidän keittiönpöytänsä ääressä",
    snickare: "Kirvesmies asentaa kipsilevyjä uuteen väliseinään asunnossa",
    byggstadning:
      "Kaksi siivoojaa tekee rakennussiivousta vastaremontoidussa asunnossa",
    slutstadning:
      "Siivooja pyyhkii uuden keittiön kaappeja sisältä loppusiivouksessa työtoverin imuroidessa",
    trapphus: "Siivooja moppaa kerrostalon porraskäytävää",
    team: "Työntekijät kokoontuvat huoltoautojen luo verstaan edessä ennen päivän töitä",
    maskin:
      "Minikaivinkone perävaunulla, pakettiautoja ja lava-auto verstaan pihalla",
    fordon: "Pakettiauto luovutetaan asiakkaalle verstaan pihalla",
    lokalvisning:
      "Tyhjän verstas- ja varastotilan esittely, tilassa välitaso ja avoin nosto-ovi",
    fastighet:
      "Teollisuusrakennus, jossa on vuokrattavia tiloja ja avoin nosto-ovi tyhjään tilaan",
  },
};

export default fi;
