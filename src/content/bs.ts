import { groupCompanies, site } from "@/lib/site";
import type { Dictionary } from "./types";

const bs: Dictionary = {
  meta: {
    title: "Kanitas | Gradnja, radna snaga, mašine i prostori u Stockholmu",
    description: `Kanitas iz općine ${site.address.city}: gradnja, ustupanje radnika i građevinsko čišćenje, mašine i vozila te poslovni prostori za najam u Stockholmu i okolini od ${site.founded}.`,
    keywords: [
      "građevinska firma Stockholm",
      "građevinske usluge Järfälla",
      "renoviranje Stockholm",
      "građevinsko čišćenje Stockholm",
      "čišćenje kancelarija Stockholm",
      "čišćenje nakon selidbe Stockholm",
      "zemljani radovi Stockholm",
      "rušenje i sanacija Stockholm",
    ],
    areaServed: "Šire područje Stockholma",
  },

  common: {
    skipToContent: "Preskoči na sadržaj",
    call: "Nazovite",
    requestQuote: "Zatražite ponudu",
    home: "Početna",
    phone: "Telefon",
    email: "E-mail",
    office: "Kancelarija",
    orgNr: "ID broj",
    ourClients: "Neki od naših klijenata",
    faq: "Česta pitanja",
    language: "Jezik",
    logoHome: "Kanitas, na početnu stranicu",
  },

  header: {
    mainMenu: "Glavni meni",
    mobileMenu: "Mobilni meni",
    businesses: "Djelatnosti",
    aboutGroup: "O grupi",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
  },

  nav: [
    { href: "/om-oss", label: "O nama" },
    { href: "/om-oss#referenser", label: "Reference" },
    { href: "/kontakt", label: "Kontakt" },
  ],

  footer: {
    tagline: `Gradnja, ustupanje radnika, mašine i poslovni prostori u Stockholmu i okolini od ${site.founded}.`,
    businesses: "Djelatnosti",
    company: "Firma",
    contact: "Kontakt",
    links: [
      { href: "/om-oss", label: "O nama" },
      { href: "/om-oss#bolagen", label: "Firme" },
      { href: "/om-oss#referenser", label: "Reference" },
      { href: "/kontakt", label: "Kontakt" },
    ],
    privacy: "Politika privatnosti",
    certifications: "Ugovori, kreditni rejting i članstva",
  },

  languageHint: {
    text: "Ova stranica je dostupna na bosanskom.",
    action: "Prikaži na bosanskom",
    dismiss: "Zatvori",
  },

  hero: {
    title: "Gradimo, ustupamo radnike, iznajmljujemo i upravljamo",
    lead: "Građevinski radovi, ustupanje radnika i građevinsko čišćenje, mašine i vozila te poslovni prostori za najam u cijelom Stockholmu i okolini.",
    trust: [
      `Kreditni rejting ${site.creditRating}`,
      "Kolektivni ugovori",
      `Od ${site.founded}. u općini ${site.address.city}`,
    ],
  },

  home: {
    title: "Kanitas | Gradnja, radna snaga, mašine i prostori u Stockholmu",
    description: `Kanitas iz općine ${site.address.city}: gradnja, ustupanje radnika i građevinsko čišćenje, mašine i vozila te prostori za najam u Stockholmu i okolini. Osnovan ${site.founded}.`,
    clientsHeading: "Među našim klijentima su",
    whatWeDo: {
      title: "Čime se bavimo",
      lead: "Gradnja je naša najveća djelatnost. Radimo za građevinske firme, vlasnike nekretnina, stambene zadruge (BRF) i privatna lica, a isti broj telefona važi i za ustupanje radnika, mašine i poslovne prostore.",
    },
    toBusiness: (name) => `Više o firmi ${name}`,
    contactBusiness: (name) => `Kontaktirajte firmu ${name}`,
    story: {
      title: "Od građevinske firme do grupe",
      text: `Kanitas je počeo kao građevinska firma u općini ${site.address.city}. S vremenom su ustupanje radnika, mašine i poslovni prostori dobili vlastite firme, ali je gradnja i dalje najveća djelatnost.`,
      link: "Više o grupi",
    },
    figures: {
      founded: `Osnovan u općini ${site.address.city}`,
      companies: "Firmi u grupi",
      creditRating: `Kreditni rejting firme ${site.legalName}`,
    },
    processLead:
      "Vlastiti radnici i jedna osoba za kontakt, od prvog razgovora do primopredaje.",
    contactTitle: "Zatražite ponudu",
  },

  about: {
    title: `O Kanitasu | Grupa firmi u općini ${site.address.city} od ${site.founded}. godine`,
    description: `Kanitas je osnovan ${site.founded}. u općini ${site.address.city} i danas ima ${groupCompanies.length} firmi za gradnju, ustupanje radnika, mašine i prostore. Kolektivni ugovori i kreditni rejting ${site.creditRating}.`,
    breadcrumb: "O nama",
    heading: "O Kanitasu",
    lead: `Grupa ima ${groupCompanies.length} firmi u oblasti gradnje, ustupanja radnika, mašina i poslovnih prostora. Sjedište je u općini ${site.address.city}.`,
    storyTitle: "Ukratko o Kanitasu",
    story: [
      `Kanitas je ${site.founded}. godine u općini ${site.address.city} počeo s gradnjom, građevinskim servisom i čišćenjem. Gradnja je i dalje najveća djelatnost. Radimo s vlastitim radnicima, a za elektroinstalacije, vodoinstalacije, grijanje i ventilaciju angažujemo stalne partnere.`,
      "Za ustupanje radnika, mašine i poslovne prostore imamo zasebne firme, ali za sve važi isti broj telefona.",
    ],
    factsTitle: "Osnovni podaci o grupi",
    companiesTitle: "Firme u grupi",
    companiesLead:
      "Kanitas AB je matično društvo i ima po jedno zavisno društvo za svaku djelatnost.",
    parentCompany: "Matično društvo",
    clientsTitle: "Neki od naših klijenata",
    contactTitle: "Javite nam se",
  },

  contactPage: {
    title: `Kontakt | Kanitas, ${site.address.city}`,
    description: `Kontaktirajte Kanitas iz općine ${site.address.city}: nazovite ${site.phoneAbroad}, pišite na ${site.email} ili ostavite svoj broj i nazvat ćemo vas.`,
    breadcrumb: "Kontakt",
    heading: "Kontaktirajte nas",
    lead: "Ostavite svoj broj i nazvat ćemo vas. Isti broj telefona i e‑mail adresa važe za sve firme u grupi.",
  },

  privacy: {
    title: "Politika privatnosti | Kanitas",
    description: `Kako ${site.legalName} obrađuje lične podatke dostavljene putem web stranice kanitas.se, obrasca za kontakt, e-maila ili telefona.`,
    heading: "Politika privatnosti",
    lead: `Kako ${site.legalName} obrađuje lične podatke koje nam date kada nas kontaktirate.`,
    sections: [
      {
        title: "Kontrolor podataka",
        body: [
          `Za obradu podataka dostavljenih putem stranice kanitas.se odgovorno je društvo ${site.legalName}, ID broj ${site.orgnr}, ${site.address.city}. Pitanja o obradi podataka pošaljite na ${site.email} ili nas nazovite na ${site.phoneAbroad}.`,
        ],
      },
      {
        title: "Koje podatke obrađujemo",
        body: [
          "Kada koristite obrazac za kontakt, obrađujemo vaš broj telefona, jedini podatak koji morate upisati, i podatke koje sami odlučite dodati: ime, e‑mail adresu, predmet upita i vašu poruku. Isto važi za podatke koje nam date kada nam pošaljete e‑mail ili nas nazovete.",
          "U obrazac nemojte unositi osjetljive lične podatke, na primjer podatke o zdravlju.",
        ],
      },
      {
        title: "Zašto ih obrađujemo",
        body: [
          "Podatke koristimo da odgovorimo na vaš upit, pripremimo ponudu i, ako se dogovorimo, izvedemo posao. Ako nam pošaljete prijavu za posao, koristimo ih da vas kontaktiramo u vezi sa zaposlenjem. Pravni osnov je naš legitimni interes da odgovaramo na upite. Kada zatražite ponudu ili nas angažujete, podatke obrađujemo kako bismo s vama mogli zaključiti i izvršiti ugovor.",
          "Podatke ne koristimo za marketing koji niste tražili i nikada ih ne prodajemo dalje.",
        ],
      },
      {
        title: "Koliko dugo ih čuvamo",
        body: [
          "Upiti koji ne dovedu do posla brišu se kada se predmet zaključi. Ako upit dovede do ugovora, podaci se čuvaju dok ugovor važi, a nakon toga onoliko dugo koliko to zahtijeva zakon, na primjer švedski Zakon o računovodstvu.",
        ],
      },
      {
        title: "S kim ih dijelimo",
        body: [
          `Ono što upišete u obrazac šalje se kao e‑mail na ${site.email} i čuva u našoj e‑pošti, a ne na web stranici. Ako se upit odnosi na drugu firmu u grupi, na primjer na Kanitas ENT AB za ustupanje radnika i čišćenje, proslijedit ćemo ga toj firmi. Kada pošaljete obrazac, vaša IP adresa se privremeno koristi za sprječavanje spama.`,
          "Web stranica je smještena kod firme Vercel, a naša e‑pošta kod firme One.com. Te firme mogu imati pristup podacima u mjeri u kojoj je to potrebno da nam pružaju svoje usluge. Obrazac za kontakt obrađuje se na serverima u Stockholmu.",
        ],
      },
      {
        title: "Kolačići i statistika posjeta",
        body: [
          "Web stranica ne postavlja kolačiće. Mjerimo broj posjeta i koje se stranice čitaju, a da se pojedinačni posjetioci ne mogu identifikovati.",
        ],
      },
      {
        title: "Vaša prava",
        body: [
          "Imate pravo saznati koje podatke imamo o vama, zatražiti ispravku netačnih podataka i brisanje podataka kada više nisu potrebni. Možete i uložiti prigovor na obradu. Kontaktirajte nas i pomoći ćemo vam.",
          "Ako niste zadovoljni načinom na koji postupamo s vašim podacima, možete podnijeti pritužbu švedskoj Agenciji za zaštitu privatnosti (IMY).",
        ],
      },
    ],
    questions: "Imate pitanja o ovoj politici?",
    contactLink: "Kontaktirajte nas",
  },

  notFound: {
    title: "Stranica ne postoji",
    code: "Greška 404",
    lead: "Možda je premještena ili uklonjena. Ovo su naše djelatnosti:",
    back: "Na početnu stranicu",
  },

  contactSection: {
    title: "Pošaljite upit",
    lead: "Ostavite svoj broj i nazvat ćemo vas. Ponuda je besplatna.",
  },

  form: {
    thanks: "Hvala, nazvat ćemo vas!",
    thanksText:
      "Obično se javljamo u roku od jednog radnog dana. Hitno? Nazovite",
    topicPrefix: "Predmet:",
    phone: "Vaš broj telefona",
    phonePlaceholder: "070-123 45 67",
    phoneHint: "Nazvat ćemo vas, obično u roku od jednog radnog dana.",
    phoneError: "Upišite svoj broj telefona i nazvat ćemo vas.",
    topicLegend: "O čemu se radi?",
    optional: "(neobavezno)",
    name: "Ime",
    email: "E-mail",
    message: "Kako vam možemo pomoći?",
    messagePlaceholder: "Šta treba uraditi, gdje i kada?",
    honeypot: "Ostavite prazno",
    sending: "Šalje se…",
    submit: "Nazovite me",
    privacyNote: "Podatke koristimo samo za vaš upit.",
    privacyLink: "Politika privatnosti",
    error: "Došlo je do greške. Pokušajte ponovo ili nas nazovite na",
    limited: "Poslali ste više upita za kratko vrijeme. Nazovite nas na",
  },

  trust: {
    title: "Pouzdan partner",
    points: [
      {
        title: "Kolektivni ugovori",
        text: "Naši kvalifikovani radnici i čistači zaposleni su po kolektivnom ugovoru sa švedskim sindikatom Byggnads ili Fastighets.",
      },
      {
        title: "Osiguranje i F‑skatt",
        text: "Imamo osiguranje od odgovornosti i odobren F‑skatt (švedski porezni status za firme), a registrovani smo i za PDV i kao poslodavac.",
      },
      {
        title: "Stabilne finansije",
        text: "Kanitas AB ima AAA, najviši kreditni rejting.",
      },
      {
        title: "Red na gradilištu",
        text: "Zaštitna oprema i interne kontrole na svakom poslu, a na našim projektima i vlastito vođenje radova.",
      },
    ],
  },

  process: {
    title: "Kako radimo",
    steps: [
      {
        title: "Javite nam se",
        text: "Nazovite, pošaljite e-mail ili ostavite svoj broj ovdje na stranici.",
      },
      {
        title: "Pogledamo posao",
        text: "Po potrebi dođemo na lice mjesta prije nego što izračunamo cijenu.",
      },
      {
        title: "Dobijete ponudu",
        text: "S cijenom, obimom posla i vremenskim planom.",
      },
      {
        title: "Uradimo posao",
        text: "S vlastitim radnicima i jednom osobom za kontakt sve do primopredaje.",
      },
    ],
  },

  careers: {
    title: "Posao kod nas",
    text: "Rado primamo prijave kvalifikovanih radnika i čistača na gradilištima. Kod nas dobijate zaposlenje po kolektivnom ugovoru, radnu odjeću i zaštitnu opremu.",
    trades: ["Tesari", "Betonirci", "Zidari", "Čistači na gradilištima"],
    cta: "Pošaljite prijavu",
  },

  quality: {
    title: "Održivost i okoliš",
    paragraphs: [
      "Održivost i briga o okolišu dio su načina na koji planiramo i izvodimo poslove. Želimo da ono što gradimo i renoviramo dugo traje i da se s materijalom postupa pažljivo.",
      "Vodimo računa o otpadu i o tome kako posao utiče na mjesto na kojem radimo. Nastojimo se pridržavati ISO standarda, na primjer ISO 9001.",
    ],
  },

  groupFacts: [
    {
      label: "Osnovan",
      value: `${site.founded}. u općini ${site.address.city}`,
    },
    { label: "Firme u grupi", value: String(groupCompanies.length) },
    {
      label: "Kreditni rejting",
      value: `${site.creditRating} za ${site.legalName}`,
    },
    { label: "Kolektivni ugovori", value: "Byggnads i Fastighets" },
    { label: "Osiguranje", value: "Osiguranje od odgovornosti" },
    {
      label: "Porez i PDV",
      value: "Odobren F‑skatt, registrovani za PDV i kao poslodavac",
    },
    {
      label: "Certifikati i članstva",
      value: "SafeTrade, Svenskt Näringsliv",
    },
    {
      label: "Kvalitet i okoliš",
      value: "Nastojimo se pridržavati ISO standarda, npr. ISO 9001",
    },
  ],

  companyRoles: {
    "Kanitas AB": `Gradnja, čišćenje i usluge od ${site.founded}.`,
    "Kanitas ENT AB": "Ustupanje radnika, građevinsko čišćenje i usluge",
    "Kanitas Bygg AB": "Izvođenje građevinskih i zemljanih radova",
    "Kanitas Fastigheter AB": "Posjedovanje nekretnina i upravljanje njima",
    "Kanitas Trading AB": "Kupovina, prodaja i iznajmljivanje mašina i vozila",
  },

  businesses: {
    bygg: {
      heading: "Gradnja i izvođenje radova",
      summary: "Izvođenje radova, renoviranje i građevinski servis",
      blurb:
        "Gradimo za vlasnike nekretnina, stambene zadruge i privatna lica, a kao podizvođač radimo za firme NCC, Implenia, ByggPartner i druge.",
    },
    stad: {
      heading: "Ustupanje radnika i građevinsko čišćenje",
      summary: "Kvalifikovani radnici i građevinsko čišćenje u kratkom roku",
      blurb:
        "Ustupamo kvalifikovane radnike i čistače izvođačima radova, često u kratkom roku, i radimo građevinsko čišćenje prije tehničkog prijema.",
    },
    trading: {
      heading: "Mašine i vozila",
      summary: "Kupovina, prodaja i iznajmljivanje mašina i vozila",
      blurb:
        "Kupujemo, prodajemo i iznajmljujemo mašine, alat, kombije i radna vozila, za naša gradilišta i za druge.",
    },
    fastigheter: {
      heading: "Poslovni prostori i upravljanje",
      summary: "Radionički, skladišni i kancelarijski prostori za najam",
      blurb:
        "Iznajmljujemo radioničke, skladišne i kancelarijske prostore u Järfälli. Prilagođavanje i održavanje radimo sami.",
    },
  },

  areas: {
    bygg: {
      h1: "Građevinska firma u Järfälli i Stockholmu",
      intro:
        "Novogradnja, renoviranje i građevinski servis za građevinske firme, vlasnike nekretnina, stambene zadruge i privatna lica u Järfälli i na cijelom širem području Stockholma.",
      servicesH2: "Građevinske usluge",
      serviceType: "Izvođenje građevinskih radova i građevinski servis",
      ctaLabel: "Zatražite ponudu",
      services: [
        {
          title: "Novogradnja",
          text: "Kompletna izgradnja, od zemljanih radova do gotovog objekta.",
        },
        {
          title: "Renoviranje i preuređenje",
          text: "Stanovi i kuće, kancelarije i drugi poslovni prostori.",
          href: "/bygg/renovering",
        },
        {
          title: "Građevinski servis",
          text: "Održavanje, popravke i prilagođavanja po stalnom ugovoru.",
          href: "/bygg/byggservice",
        },
        {
          title: "Kupatila i mokri čvorovi",
          text: "Kompletno renoviranje, uz stalne partnere za vodoinstalacije.",
          href: "/bygg/badrumsrenovering",
        },
        {
          title: "Suha gradnja i stolarski radovi",
          text: "Unutrašnji zidovi, spušteni plafoni, vrata i ugradni namještaj po mjeri.",
        },
        {
          title: "Zemljani radovi i niskogradnja",
          text: "Iskopi, temeljenje, drenaža i fino planiranje terena.",
        },
        {
          title: "Rušenje i sanacija",
          text: "Selektivno rušenje te sanacija objekata i štete od požara i vlage.",
        },
        {
          title: "Čišćenje snijega",
          text: "Čišćenje snijega i posipanje protiv poledice za ugovorne klijente.",
        },
      ],
      related: {
        href: "/stad",
        label: "Građevinsko čišćenje i dodatni radnici: Kanitas ENT",
      },
      process: {
        title: "Kako teče građevinski projekat",
        steps: [
          {
            title: "Upit i obilazak lokacije",
            text: "Razgovaramo o tome šta treba uraditi i pogledamo lokaciju.",
          },
          {
            title: "Ponuda",
            text: "Fiksna cijena ili obračun po utrošenom radu i materijalu, s obimom posla i vremenskim planom. Dodatni radovi se pismeno odobravaju prije izvođenja.",
          },
          {
            title: "Planiranje",
            text: "Naručujemo materijal, dogovaramo termine i raspoređujemo radnike. Dobijate osobu za kontakt koja prati posao od početka do kraja.",
          },
          {
            title: "Gradnja",
            text: "Vlastiti radnici i vođenje radova na licu mjesta, uz interne kontrole tokom rada.",
          },
          {
            title: "Završni pregled i primopredaja",
            text: "Zajedno pregledamo urađeno i predajemo vam zapisnike internih kontrola, a kod većih poslova i projekat izvedenog stanja.",
          },
        ],
      },
      sections: [
        {
          title: "Naši klijenti",
          layout: "columns",
          items: [
            {
              title: "Građevinske firme",
              text: "Kao podizvođač radimo za firme NCC, Implenia, ByggPartner i druge, s vlastitim vođenjem radova na licu mjesta.",
              href: "/bygg/underentreprenor",
            },
            {
              title: "Vlasnici nekretnina",
              text: "Građevinski servis po okvirnim ugovorima: otklanjanje kvarova, prilagođavanje prostora za zakupce i planirano održavanje.",
              href: "/bygg/byggservice",
            },
            {
              title: "Stambene zadruge (BRF)",
              text: "Zamjena vertikala, radovi na fasadama i balkonima te renoviranje zajedničkih prostorija. Stanare redovno obavještavamo tokom radova.",
              href: "/bygg/brf",
            },
            {
              title: "Privatna lica",
              text: "Kupatila, dogradnje i renoviranje kuća i stanova.",
              href: "/bygg/renovering",
            },
          ],
          references: true,
        },
      ],
      callout: {
        title: "ROT odbitak za privatna lica",
        text: "Ako renovirate svoj dom, možete dobiti ROT odbitak (švedski porezni odbitak) za troškove rada, ali ne i za materijal. Odbitak obračunavamo direktno na fakturi, tako da plaćate samo svoj dio.",
      },
      faq: [
        {
          q: "Koliko košta ponuda?",
          a: "Ništa.",
        },
        {
          q: "Preuzimate li i manje poslove?",
          a: "Da, čak i pojedinačne popravke.",
        },
        {
          q: "Koliko brzo možete početi?",
          a: "S građevinskim servisom obično možemo početi u roku od nekoliko dana. Veće projekte planiramo prema vremenskom planu projekta.",
        },
        {
          q: "Imate li vlastite radnike?",
          a: "Da, a po potrebi ekipu pojačamo kvalifikovanim radnicima iz firme Kanitas ENT. Za elektroinstalacije, vodoinstalacije, grijanje i ventilaciju angažujemo stalne partnere.",
        },
      ],
      description:
        "Kanitas Bygg: novogradnja, renoviranje, građevinski servis i rušenje u Järfälli i Stockholmu. Vlastiti radnici po kolektivnom ugovoru. Besplatna ponuda.",
    },

    stad: {
      h1: "Radna snaga i čišćenje u Järfälli i Stockholmu",
      intro:
        "Ustupamo kvalifikovane radnike i čistače izvođačima radova i radimo građevinsko čišćenje prije tehničkog prijema. Svi radnici su zaposleni kod nas po kolektivnom ugovoru.",
      servicesH2: "Ustupanje radnika i usluge čišćenja",
      serviceType: "Ustupanje radnika i građevinsko čišćenje",
      ctaLabel: "Zatražite ponudu",
      services: [
        {
          title: "Kvalifikovani radnici",
          text: "Tesari, betonirci, zidari i montažeri skela koji rade pod vašim rukovodstvom.",
        },
        {
          title: "Radnici u kratkom roku",
          text: "Kada neko odsustvuje ili se radovi moraju ubrzati.",
        },
        {
          title: "Građevinsko čišćenje",
          text: "Grubo čišćenje tokom gradnje i završno čišćenje prije tehničkog prijema.",
        },
        {
          title: "Čišćenje kancelarija i zgrada",
          text: "Kancelarije, stubišta i zajedničke prostorije, po mogućnosti uvijek s istim čistačima.",
        },
        {
          title: "Čišćenje nakon selidbe",
          text: "Stanovi i poslovni prostori, prema kontrolnoj listi.",
        },
        {
          title: "Generalno čišćenje i pranje prozora",
          text: "Podovi, prozori i ostalo što ne ulazi u redovno čišćenje.",
        },
      ],
      related: {
        href: "/bygg",
        label: "Gradnja i renoviranje: Kanitas Bygg",
      },
      tags: {
        title: "Koje radnike ustupamo",
        text: "Svima obezbjeđujemo radnu odjeću i zaštitnu opremu.",
        items: [
          "Tesari",
          "Betonirci",
          "Zidari",
          "Montažeri skela",
          "Čistači na gradilištima",
        ],
      },
      process: {
        title: "Građevinsko čišćenje u četiri koraka",
        steps: [
          {
            title: "Grubo čišćenje",
            text: "Građevinska prašina, ostaci materijala i ambalaža uklanjaju se redovno tokom gradnje.",
          },
          {
            title: "Fino čišćenje",
            text: "Čiste se sve površine: stolarija, ventilacione rešetke, razvodni ormarići, prozorski okviri i podovi.",
          },
          {
            title: "Pranje prozora",
            text: "Stakla, okviri i krila, iznutra i spolja. Uklanjaju se naljepnice i građevinska traka.",
          },
          {
            title: "Završno čišćenje",
            text: "Posljednje sređivanje prije tehničkog prijema i useljenja.",
          },
        ],
      },
      checklist: {
        title: "Šta obuhvata građevinsko čišćenje",
        items: [
          "Usisavanje i vlažno brisanje podova",
          "Pranje prozora iznutra i spolja",
          "Brisanje prozorskih dasaka, okvira i krila",
          "Brisanje vrata, štokova i lajsni",
          "Brisanje prašine s utičnica, prekidača i razvodnog ormarića",
          "Čišćenje ventilacionih rešetki i radijatora",
          "Brisanje ormarića i ladica iznutra i spolja",
          "Čišćenje bijele tehnike iznutra i spolja",
          "Čišćenje pločica, sanitarija i podnog slivnika u kupatilu",
          "Uklanjanje građevinske trake, naljepnica i zaštitne folije",
          "Uklanjanje građevinske prašine sa svih površina",
          "Iznošenje ambalaže i smeća",
        ],
      },
      sections: [
        {
          title: "Kako kod nas funkcioniše ustupanje radnika",
          layout: "list",
          items: [
            {
              title: "Bez posrednika",
              text: "Radnici su zaposleni kod nas, pa znate ko dolazi na gradilište.",
            },
            {
              title: "Vi vodite radove",
              text: "Vi rukovodite radom na licu mjesta, a platu i osiguranje snosimo mi.",
            },
            {
              title: "Rezerva s naših gradilišta",
              text: "Po potrebi prebacujemo radnike s gradilišta naše grupe, kako bi se upražnjeno mjesto brzo popunilo.",
            },
            {
              title: "Kratki i dugi angažmani",
              text: "Jedan radnik na nekoliko dana ili cijela ekipa za čitav projekat.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Koliko brzo možete obezbijediti radnike?",
          a: "Pojedinačne kvalifikovane radnike često možemo poslati već sljedećeg radnog dana. Za cijelu ekipu obično je potrebno nekoliko dana.",
        },
        {
          q: "Koliko traje građevinsko čišćenje?",
          a: "Za stan je obično potreban jedan dan, za veće prostore više dana. Planiramo prema datumu tehničkog prijema.",
        },
        {
          q: "Šta ako se na tehničkom prijemu pojave primjedbe na čišćenje?",
          a: "Te površine tada ponovo očistimo, bez dodatnih troškova.",
        },
        {
          q: "Nudite li ugovore o redovnom čišćenju?",
          a: "Da, za kancelarije, stubišta i zgrade. Preuzimamo i pojedinačne poslove, poput čišćenja nakon selidbe i generalnog čišćenja.",
        },
      ],
      description:
        "Kanitas ENT: ustupanje radnika građevinskim firmama, građevinsko i završno čišćenje te čišćenje kancelarija u Järfälli i Stockholmu. Kolektivni ugovor.",
    },

    maskiner: {
      h1: "Iznajmljivanje mašina i vozila u Järfälli",
      intro:
        "Iznajmljujemo, kupujemo i prodajemo mašine, alat, kombije i radna vozila. To su iste mašine koje koristimo na našim gradilištima.",
      servicesH2: "Iznajmljivanje, kupovina i prodaja",
      serviceType: "Iznajmljivanje i prodaja mašina i vozila",
      ctaLabel: "Pitajte za cijenu",
      contactTitle: "Upit za Kanitas Trading",
      contactLead: "Ostavite svoj broj i javit ćemo vam cijenu i dostupnost.",
      services: [
        {
          title: "Iznajmljivanje mašina i alata",
          text: "Građevinske mašine, mašine za zemljane radove i alat za vaš posao.",
        },
        {
          title: "Iznajmljivanje kombija",
          text: "Kombiji i radna vozila za majstore i firme.",
        },
        {
          title: "Kupovina i prodaja",
          text: "Kupujemo i prodajemo mašine i vozila. Javite nam se ako nešto prodajete ili tražite.",
        },
      ],
      related: {
        href: "/bygg",
        label: "Gradnja i renoviranje: Kanitas Bygg",
      },
      process: {
        title: "Kako unajmiti kod nas",
        steps: [
          {
            title: "Recite nam šta vam treba",
            text: "Koja mašina ili koje vozilo i na koliko dugo.",
          },
          {
            title: "Cijena i dostupnost",
            text: "Nazovemo vas i kažemo cijenu i kada je slobodno.",
          },
          {
            title: "Ugovor i period najma",
            text: "Potpišemo ugovor, a preuzimanje i vraćanje su prema dogovoru.",
          },
        ],
      },
      faq: [
        {
          q: "Koliko košta najam?",
          a: "Zavisi od mašine ili vozila i od toga koliko vam dugo treba. Ostavite svoj broj i javit ćemo vam cijenu.",
        },
        {
          q: "Mogu li od vas kupiti mašinu ili vozilo?",
          a: "Da. Recite nam šta tražite i javit ćemo vam se kada budemo imali nešto odgovarajuće.",
        },
        {
          q: "Kupujete li mašine i vozila?",
          a: "Da. Opišite šta želite prodati, po mogućnosti uz slike, i javit ćemo vam se.",
        },
      ],
      description:
        "Kanitas Trading iznajmljuje, kupuje i prodaje mašine, alat, kombije i radna vozila u Järfälli i na širem području Stockholma.",
    },

    lokaler: {
      h1: "Poslovni prostori za najam u Järfälli",
      intro:
        "Radionički, skladišni i kancelarijski prostori u Järfälli. Prilagođavanje i održavanje radimo sami.",
      servicesH2: "Poslovni prostori i upravljanje",
      serviceType: "Iznajmljivanje poslovnih prostora",
      ctaLabel: "Pitajte za slobodne prostore",
      contactTitle: "Pitajte za slobodne prostore",
      contactLead:
        "Ostavite svoj broj i reći ćemo vam koji su prostori slobodni.",
      services: [
        {
          title: "Prostori za najam",
          text: "Radionički, skladišni i kancelarijski prostori u Järfälli.",
        },
        {
          title: "Upravljanje",
          text: "Upravljamo vlastitim nekretninama.",
        },
        {
          title: "Usluge održavanja",
          text: "Nadzor, održavanje, čišćenje snijega i uređenje okoliša.",
        },
        {
          title: "Prilagođavanje prostora",
          text: "Kanitas Bygg prilagođava prostor potrebama vašeg poslovanja.",
        },
      ],
      related: {
        href: "/bygg",
        label: "Preuređenje i prilagođavanje: Kanitas Bygg",
      },
      process: {
        title: "Kako unajmiti prostor",
        steps: [
          {
            title: "Javite nam se",
            text: "Recite nam kakav prostor tražite, otprilike koliki i od kada vam treba.",
          },
          {
            title: "Razgledanje",
            text: "Pokažemo vam šta je slobodno.",
          },
          {
            title: "Ugovor i prilagođavanje",
            text: "Potpišemo ugovor i po potrebi prilagodimo prostor.",
          },
          {
            title: "Useljenje",
            text: "Vi se uselite, a nadzor i održavanje objekta su naša briga.",
          },
        ],
      },
      faq: [
        {
          q: "Koji su prostori trenutno slobodni?",
          a: "To se mijenja. Ostavite svoj broj i reći ćemo vam šta imamo.",
        },
        {
          q: "Može li se prostor prilagoditi mom poslovanju?",
          a: "Da, Kanitas Bygg može preurediti i prilagoditi prostor.",
        },
        {
          q: "Ko se brine o održavanju?",
          a: "Mi se brinemo o nadzoru i održavanju naših objekata.",
        },
      ],
      description:
        "Kanitas Fastigheter iznajmljuje radioničke, skladišne i kancelarijske prostore u Järfälli i prilagođava ih vašem poslovanju. Pitajte za slobodne prostore.",
    },
  },

  services: {
    badrumsrenovering: {
      label: "Renoviranje kupatila",
      h1: "Renoviranje kupatila u Järfälli i Stockholmu",
      intro:
        "Kompletno renoviramo kupatila i mokre čvorove u kućama, stanovima i stambenim zadrugama (BRF), od rušenja do gotove prostorije. Vodoinstalacije i elektroinstalacije rade naši stalni partneri, a vi imate jednu osobu za kontakt za cijeli posao.",
      servicesH2: "Šta obuhvata renoviranje kupatila",
      serviceType: "Renoviranje kupatila",
      ctaLabel: "Zatražite ponudu",
      contactTitle: "Zatražite ponudu za renoviranje kupatila",
      services: [
        {
          title: "Rušenje",
          text: "Stare pločice, pod i oprema se uklanjaju i odvoze.",
        },
        {
          title: "Hidroizolacija",
          text: "Nova hidroizolacija poda i zidova, koja štiti od vlage.",
        },
        {
          title: "Zidne i podne pločice",
          text: "Polaganje pločica na podove i zidove.",
        },
        {
          title: "Vodoinstalacije",
          text: "Cijevi, podni slivnik, tuš, WC i umivaonik postavlja naš stalni partner za vodoinstalacije.",
        },
        {
          title: "Struja i rasvjeta",
          text: "Elektroinstalaterske radove izvodi naš stalni partner.",
        },
        {
          title: "Namještaj i oprema",
          text: "Montaža ormarića, elementa s umivaonikom i dodatne opreme.",
        },
      ],
      related: {
        href: "/bygg/renovering",
        label: "Cijeli stan ili kuća: Renoviranje i preuređenje",
      },
      process: {
        title: "Kako teče renoviranje kupatila",
        steps: [
          {
            title: "Obilazak lokacije",
            text: "Pogledamo kupatilo i razgovaramo o tome šta želite da se uradi.",
          },
          {
            title: "Ponuda",
            text: "Fiksna cijena ili obračun po utrošenom radu i materijalu, s obimom posla i vremenskim planom. Dodatni radovi se pismeno odobravaju prije izvođenja.",
          },
          {
            title: "Renoviranje",
            text: "Vlastiti radnici i vođenje radova, uz interne kontrole tokom rada.",
          },
          {
            title: "Završni pregled",
            text: "Zajedno pregledamo kupatilo i predajemo vam zapisnike internih kontrola.",
          },
        ],
      },
      callout: {
        title: "ROT odbitak za renoviranje kupatila",
        text: "Kao privatno lice možete dobiti ROT odbitak (švedski porezni odbitak) za troškove rada, ali ne i za materijal. Odbitak obračunavamo direktno na fakturi, tako da plaćate samo svoj dio.",
      },
      faq: [
        {
          q: "Koliko košta renoviranje kupatila?",
          a: "Zavisi od veličine kupatila i od toga šta treba uraditi. Rado ćemo doći i pogledati, a ponuda je besplatna.",
        },
        {
          q: "Koliko traje?",
          a: "Zavisi od obima posla. Vremenski plan dobijate u ponudi, prije početka radova.",
        },
        {
          q: "Renovirate li kupatila u zadružnim stanovima?",
          a: "Da, i za vlasnike stanova i za stambene zadruge (BRF).",
        },
        {
          q: "Ko radi vodoinstalacije i struju?",
          a: "Naši stalni partneri. Ipak, za cijeli posao imate jednu osobu za kontakt kod nas.",
        },
      ],
      description:
        "Kanitas Bygg: renoviranje kupatila u Järfälli i Stockholmu, od rušenja i hidroizolacije do pločica, vode i struje. ROT odbitak na fakturi. Besplatna ponuda.",
    },

    renovering: {
      label: "Renoviranje i preuređenje",
      h1: "Renoviranje i preuređenje u Järfälli i Stockholmu",
      intro:
        "Renoviramo i preuređujemo stanove, kuće, kancelarije i druge poslovne prostore, s vlastitim radnicima i vlastitim vođenjem radova. Dobijate osobu za kontakt koja prati posao od početka do kraja.",
      servicesH2: "Šta radimo",
      serviceType: "Renoviranje i preuređenje",
      ctaLabel: "Zatražite ponudu",
      contactTitle: "Zatražite ponudu za renoviranje",
      services: [
        {
          title: "Stanovi i kuće",
          text: "Renoviranje cijelog doma ili samo jednog njegovog dijela.",
        },
        {
          title: "Dogradnje",
          text: "Dogradnje kuća.",
        },
        {
          title: "Kancelarije i poslovni prostori",
          text: "Preuređenje i prilagođavanje kancelarija i drugih poslovnih prostora.",
        },
        {
          title: "Prilagođavanje za zakupce",
          text: "Prilagođavanje prostora novom zakupcu, za vlasnike nekretnina.",
        },
        {
          title: "Unutrašnji zidovi i stolarski radovi",
          text: "Unutrašnji zidovi, spušteni plafoni, vrata i ugradni namještaj po mjeri.",
        },
        {
          title: "Rušenje",
          text: "Selektivno rušenje prije preuređenja.",
        },
      ],
      related: {
        href: "/bygg/badrumsrenovering",
        label: "Samo kupatilo: Renoviranje kupatila",
      },
      process: {
        title: "Kako teče renoviranje",
        steps: [
          {
            title: "Upit i obilazak lokacije",
            text: "Razgovaramo o tome šta treba uraditi i pogledamo lokaciju.",
          },
          {
            title: "Ponuda",
            text: "Fiksna cijena ili obračun po utrošenom radu i materijalu, s obimom posla i vremenskim planom. Dodatni radovi se pismeno odobravaju prije izvođenja.",
          },
          {
            title: "Planiranje",
            text: "Naručujemo materijal, dogovaramo termine i raspoređujemo radnike. Dobijate osobu za kontakt koja prati posao od početka do kraja.",
          },
          {
            title: "Renoviranje",
            text: "Vlastiti radnici i vođenje radova na licu mjesta, uz interne kontrole tokom rada.",
          },
          {
            title: "Završni pregled i primopredaja",
            text: "Zajedno pregledamo urađeno i predajemo vam zapisnike internih kontrola, a kod većih poslova i projekat izvedenog stanja.",
          },
        ],
      },
      callout: {
        title: "ROT odbitak za privatna lica",
        text: "Ako renovirate svoj dom, možete dobiti ROT odbitak (švedski porezni odbitak) za troškove rada, ali ne i za materijal. Odbitak obračunavamo direktno na fakturi, tako da plaćate samo svoj dio.",
      },
      faq: [
        {
          q: "Preuzimate li i manje poslove?",
          a: "Da, i pojedinačne popravke i manja renoviranja.",
        },
        {
          q: "Možete li preuzeti cijelo renoviranje?",
          a: "Da. Koordiniramo sve faze, a elektroinstalacije, vodoinstalacije, grijanje i ventilaciju rade naši stalni partneri.",
        },
        {
          q: "Fiksna cijena ili obračun po utrošenom radu?",
          a: "Može i jedno i drugo. To piše u ponudi, a dodatni radovi se pismeno odobravaju prije izvođenja.",
        },
        {
          q: "Koliko košta ponuda?",
          a: "Ništa.",
        },
      ],
      description:
        "Kanitas Bygg: renoviranje i preuređenje stanova, kuća, kancelarija i lokala u Järfälli i Stockholmu. Vlastiti radnici po kolektivnom ugovoru. Besplatna ponuda.",
    },

    byggservice: {
      label: "Građevinski servis",
      h1: "Građevinski servis za nekretnine u Stockholmu",
      intro:
        "Održavanje, popravke i prilagođavanje prostora za zakupce po okvirnom ili stalnom ugovoru, u Järfälli i na cijelom širem području Stockholma. S građevinskim servisom obično možemo početi u roku od nekoliko dana.",
      servicesH2: "Šta obuhvata građevinski servis",
      serviceType: "Građevinski servis i održavanje nekretnina",
      ctaLabel: "Pitajte za građevinski servis",
      contactTitle: "Pitajte za građevinski servis",
      services: [
        {
          title: "Otklanjanje kvarova",
          text: "Popravke kada se nešto pokvari.",
        },
        {
          title: "Planirano održavanje",
          text: "Održavanje prema planu održavanja zgrade.",
        },
        {
          title: "Prilagođavanje za zakupce",
          text: "Poslovni prostori i stanovi koji se prilagođavaju novim zakupcima.",
        },
        {
          title: "Okvirni ugovor",
          text: "Jedan ugovor za poslove koji se ponavljaju, ili pojedinačni poslovi po potrebi.",
        },
        {
          title: "Čišćenje snijega",
          text: "Čišćenje snijega i posipanje protiv poledice za ugovorne klijente.",
        },
        {
          title: "Čišćenje nakon radova",
          text: "Građevinsko čišćenje i čišćenje zgrada, koje radi Kanitas ENT.",
          href: "/stad",
        },
      ],
      related: {
        href: "/bygg/renovering",
        label: "Veća preuređenja: Renoviranje i preuređenje",
      },
      process: {
        title: "Kako funkcioniše građevinski servis",
        steps: [
          {
            title: "Javite nam se",
            text: "Nazovite, pošaljite e-mail ili ostavite svoj broj ovdje na stranici.",
          },
          {
            title: "Pogledamo posao",
            text: "Po potrebi dođemo na lice mjesta prije nego što izračunamo cijenu.",
          },
          {
            title: "Uradimo posao",
            text: "Vlastiti radnici, uz interne kontrole tokom rada.",
          },
          {
            title: "Primopredaja",
            text: "Kada je posao gotov, zajedno ga pregledamo.",
          },
        ],
      },
      faq: [
        {
          q: "Koliko brzo možete početi?",
          a: "S građevinskim servisom obično možemo početi u roku od nekoliko dana.",
        },
        {
          q: "Moramo li potpisati okvirni ugovor?",
          a: "Ne. Preuzimamo i pojedinačne poslove.",
        },
        {
          q: "Imate li vlastite radnike?",
          a: "Da, a po potrebi ekipu pojačamo kvalifikovanim radnicima iz firme Kanitas ENT. Za elektroinstalacije, vodoinstalacije, grijanje i ventilaciju angažujemo stalne partnere.",
        },
      ],
      description:
        "Kanitas Bygg: građevinski servis za vlasnike nekretnina u Järfälli i Stockholmu. Popravke, održavanje i prilagođavanje za zakupce po okvirnom ugovoru.",
    },

    brf: {
      label: "Vertikale i BRF",
      h1: "Zamjena vertikala i renoviranje BRF-a u Stockholmu",
      intro:
        "Za stambene zadruge (BRF) u Järfälli i Stockholmu radimo zamjenu vertikala, radove na fasadama i balkonima te renoviranje zajedničkih prostorija. Stanare redovno obavještavamo tokom radova.",
      servicesH2: "Šta radimo za stambene zadruge",
      serviceType: "Zamjena vertikala i renoviranje za stambene zadruge",
      ctaLabel: "Zatražite ponudu",
      contactTitle: "Zatražite ponudu za vašu stambenu zadrugu",
      services: [
        {
          title: "Zamjena vertikala",
          text: "Zamjena vodovodnih i kanalizacionih cijevi.",
        },
        {
          title: "Kupatila",
          text: "Renoviranje kupatila u stanovima, u sklopu istog projekta ili zasebno.",
          href: "/bygg/badrumsrenovering",
        },
        {
          title: "Fasade",
          text: "Renoviranje i popravke fasada.",
        },
        {
          title: "Balkoni",
          text: "Renoviranje balkona.",
        },
        {
          title: "Zajedničke prostorije",
          text: "Stubišta, perionice i druge zajedničke prostorije.",
        },
        {
          title: "Čišćenje",
          text: "Građevinsko čišćenje i čišćenje stubišta, koje radi Kanitas ENT.",
          href: "/stad",
        },
      ],
      process: {
        title: "Kako teče projekat za stambenu zadrugu",
        steps: [
          {
            title: "Upit i obilazak lokacije",
            text: "Razgovaramo o tome šta zadruga želi uraditi i pogledamo zgradu.",
          },
          {
            title: "Ponuda",
            text: "Fiksna cijena ili obračun po utrošenom radu i materijalu, s obimom posla i vremenskim planom. Dodatni radovi se pismeno odobravaju prije izvođenja.",
          },
          {
            title: "Planiranje i informisanje",
            text: "Naručujemo materijal, dogovaramo termine i raspoređujemo radnike, a stanari saznaju šta se dešava i kada.",
          },
          {
            title: "Radovi",
            text: "Vlastiti radnici i vođenje radova na licu mjesta, uz interne kontrole tokom rada.",
          },
          {
            title: "Završni pregled i primopredaja",
            text: "Urađeno pregledamo s upravnim odborom i predajemo zapisnike internih kontrola i projekat izvedenog stanja.",
          },
        ],
      },
      faq: [
        {
          q: "Kako stanari saznaju šta se dešava?",
          a: "Stanare obavještavamo prije i tokom radova, kako bi svi znali šta se dešava i kada.",
        },
        {
          q: "Imate li vlastite radnike?",
          a: "Da, s vlastitim vođenjem radova na licu mjesta. Za elektroinstalacije, vodoinstalacije, grijanje i ventilaciju angažujemo stalne partnere.",
        },
        {
          q: "Koliko košta ponuda?",
          a: "Ništa.",
        },
      ],
      description:
        "Kanitas Bygg: zamjena vertikala, radovi na fasadama i balkonima te renoviranje zajedničkih prostorija za BRF u Järfälli i Stockholmu. Besplatna ponuda.",
    },

    underentreprenor: {
      label: "Podizvođački radovi",
      h1: "Građevinski podizvođač u Stockholmu",
      intro:
        "Kao podizvođač radimo za građevinske firme, između ostalih za NCC, Implenia i ByggPartner, s vlastitim radnicima i vlastitim vođenjem radova na licu mjesta.",
      servicesH2: "Šta preuzimamo",
      serviceType: "Podizvođački građevinski radovi",
      ctaLabel: "Kontaktirajte nas",
      contactTitle: "Upit za podizvođačke radove",
      contactLead: "Recite nam nešto o projektu i nazvat ćemo vas.",
      services: [
        {
          title: "Suha gradnja",
          text: "Unutrašnji zidovi, spušteni plafoni i vrata.",
        },
        {
          title: "Stolarski radovi",
          text: "Ugradni namještaj po mjeri i drugi stolarski radovi.",
        },
        {
          title: "Zemljani radovi i niskogradnja",
          text: "Iskopi, temeljenje, drenaža i fino planiranje terena.",
        },
        {
          title: "Rušenje i sanacija",
          text: "Selektivno rušenje te sanacija objekata i štete od požara i vlage.",
        },
        {
          title: "Dodatni kvalifikovani radnici",
          text: "Tesari, betonirci i zidari iz firme Kanitas ENT kada vam treba pojačanje.",
          href: "/stad",
        },
        {
          title: "Građevinsko čišćenje",
          text: "Građevinsko i završno čišćenje prije tehničkog prijema, koje radi Kanitas ENT.",
          href: "/stad",
        },
      ],
      sections: [
        {
          title: "Zašto nas građevinske firme angažuju",
          layout: "columns",
          items: [
            {
              title: "Vlastito vođenje radova",
              text: "Sami vodimo svoje radove na licu mjesta.",
            },
            {
              title: "Kolektivni ugovor",
              text: "Naši kvalifikovani radnici zaposleni su po kolektivnom ugovoru sa švedskim sindikatom Byggnads.",
            },
            {
              title: "Red na gradilištu",
              text: "Zaštitna oprema i interne kontrole na svakom poslu.",
            },
            {
              title: "Stabilne finansije",
              text: "Kanitas AB ima AAA, najviši kreditni rejting. Imamo osiguranje od odgovornosti i odobren F‑skatt.",
            },
          ],
          references: true,
        },
      ],
      faq: [
        {
          q: "Za koje građevinske firme ste radili?",
          a: "Između ostalih za firme NCC, Implenia i ByggPartner.",
        },
        {
          q: "Možete li ekipu pojačati dodatnim radnicima?",
          a: "Da, kvalifikovanim radnicima iz firme Kanitas ENT, često u kratkom roku.",
        },
        {
          q: "Imate li F‑skatt i osiguranje?",
          a: "Da. Imamo osiguranje od odgovornosti i odobren F‑skatt, a registrovani smo i za PDV i kao poslodavac.",
        },
      ],
      description:
        "Kanitas Bygg radi kao podizvođač za građevinske firme u Stockholmu, među njima NCC i Implenia: suha gradnja, zemljani radovi i rušenje. Kolektivni ugovor.",
    },
  },

  areaContactTitle: (name) => `Zatražite ponudu od firme ${name}`,

  topics: {
    Bygg: "Gradnja i renoviranje",
    Bemanning: "Ustupanje radnika",
    Städ: "Čišćenje",
    Trading: "Mašine i vozila",
    Fastigheter: "Poslovni prostori",
    Jobb: "Posao kod nas",
    Annat: "Nešto drugo",
  },

  certifications: {
    aaa: "AAA, najviši kreditni rejting",
    byggnads: "Kolektivni ugovor Byggnads",
    fastighets: "Kolektivni ugovor Fastighets",
    safeTrade: "SafeTrade",
    svensktNaringsliv: "Svenskt Näringsliv",
  },

  photoAlt: {
    nybygge:
      "Stambena zgrada u izgradnji u sumrak, s građevinskom dizalicom i osvijetljenim spratovima",
    jobbstart:
      "Dva majstora pregledaju nacrt pored servisnog vozila ispred stambene zgrade",
    bygglag:
      "Majstori unose gipsane ploče iz servisnog vozila u stambenu zgradu",
    armering:
      "Radnici u reflektujućoj odjeći vežu armaturu na međuspratnoj konstrukciji",
    badrum: "Keramičar polaže podne pločice u kupatilu koje se renovira",
    renovering:
      "Novorenovirana soba u starijem stanu u Stockholmu, s kaljevom peći i parketom na riblju kost",
    platsbesok:
      "Poslovođa s parom pregleda tlocrt za njihovim kuhinjskim stolom",
    snickare: "Majstor montira gipsane ploče na novi unutrašnji zid u stanu",
    byggstadning:
      "Dvoje čistača radi građevinsko čišćenje u novorenoviranom stanu",
    slutstadning:
      "Čistačica briše ormariće iznutra u novoj kuhinji tokom završnog čišćenja, dok kolega usisava",
    trapphus: "Čistačica briše stubište mopom u stambenoj zgradi",
    team: "Radnici se okupljaju kod servisnih vozila ispred radionice prije početka radnog dana",
    maskin:
      "Mini bager na prikolici, kombiji i kamion s platformom u dvorištu ispred radionice",
    fordon: "Kombi se predaje klijentu u dvorištu ispred radionice",
    lokalvisning:
      "Razgledanje praznog radioničkog i skladišnog prostora s galerijom i otvorenim industrijskim vratima",
    fastighet:
      "Industrijska zgrada s prostorima za najam, gdje otvorena vrata vode u prazan prostor",
  },
};

export default bs;
