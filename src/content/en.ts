import { groupCompanies, site } from "@/lib/site";
import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    title: "Kanitas | Construction, staffing, machinery & premises, Stockholm",
    description: `Kanitas in ${site.address.city}: construction, staffing and construction cleaning, machinery and vehicles, and premises to rent across Greater Stockholm since ${site.founded}.`,
    keywords: [
      "construction company Stockholm",
      "builders Järfälla",
      "renovation Stockholm",
      "construction cleaning Stockholm",
      "office cleaning Stockholm",
      "move-out cleaning Stockholm",
      "groundworks Stockholm",
      "demolition and remediation Stockholm",
    ],
    areaServed: "Greater Stockholm",
  },

  common: {
    skipToContent: "Skip to content",
    call: "Call",
    requestQuote: "Request a quote",
    home: "Home",
    phone: "Phone",
    email: "Email",
    office: "Office",
    orgNr: "Org. no.",
    ourClients: "Some of our clients",
    faq: "Frequently asked questions",
    language: "Language",
    logoHome: "Kanitas home page",
  },

  header: {
    mainMenu: "Main menu",
    mobileMenu: "Mobile menu",
    businesses: "Businesses",
    aboutGroup: "About the group",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  nav: [
    { href: "/om-oss", label: "About us" },
    { href: "/om-oss#referenser", label: "Clients" },
    { href: "/kontakt", label: "Contact" },
  ],

  footer: {
    tagline: `Construction, staffing, machinery and premises in Greater Stockholm since ${site.founded}.`,
    businesses: "Businesses",
    company: "Company",
    contact: "Contact",
    links: [
      { href: "/om-oss", label: "About us" },
      { href: "/om-oss#bolagen", label: "Group companies" },
      { href: "/om-oss#referenser", label: "Clients" },
      { href: "/kontakt", label: "Contact" },
    ],
    privacy: "Privacy policy",
    certifications: "Agreements, credit rating and memberships",
  },

  languageHint: {
    text: "This page is available in English.",
    action: "View in English",
    dismiss: "Close",
  },

  hero: {
    title: "We build, staff, rent out and manage",
    lead: "Construction contracting, staffing and construction cleaning, machinery and vehicles, and premises to rent across Greater Stockholm.",
    trust: [
      `${site.creditRating} credit rating`,
      "Collective agreements",
      `Based in ${site.address.city} since ${site.founded}`,
    ],
  },

  home: {
    title: "Kanitas | Construction, staffing, machinery & premises, Stockholm",
    description: `Kanitas in ${site.address.city}: construction, staffing and construction cleaning, machinery and vehicles, and premises to rent in Greater Stockholm. Founded in ${site.founded}.`,
    clientsHeading: "Clients include",
    whatWeDo: {
      title: "What we do",
      lead: "Construction is our largest business. We work for construction companies, property owners, housing cooperatives (BRFs) and private clients, and you can reach staffing, machinery and premises on the same phone number.",
    },
    toBusiness: (name) => `Go to ${name}`,
    contactBusiness: (name) => `Contact ${name}`,
    story: {
      title: "From building firm to group",
      text: `Kanitas started as a building firm in ${site.address.city}. Over time, staffing, machinery and premises moved into companies of their own, but construction is still our largest business.`,
      link: "More about the group",
    },
    figures: {
      founded: `Founded in ${site.address.city}`,
      companies: "Companies in the group",
      creditRating: `Credit rating for ${site.legalName}`,
    },
    processLead:
      "Our own staff and one contact person, from the first call to handover.",
    contactTitle: "Request a quote",
  },

  about: {
    title: `About Kanitas | A group based in ${site.address.city} since ${site.founded}`,
    description: `Founded in ${site.address.city} in ${site.founded}, Kanitas is now a group of ${groupCompanies.length} companies in construction, staffing, machinery and premises. Collective agreements, ${site.creditRating} credit rating.`,
    breadcrumb: "About us",
    heading: "About Kanitas",
    lead: `The group has ${groupCompanies.length} companies in construction, staffing, machinery and premises. Our office is in ${site.address.city}.`,
    storyTitle: "Kanitas in brief",
    story: [
      `Kanitas started out in ${site.address.city} in ${site.founded}, doing construction, building maintenance and cleaning. Construction is still our largest business. We work with our own staff and bring in regular partners for electrical, plumbing and ventilation work.`,
      "Staffing, machinery and premises are run as separate companies, but you can reach them all on the same phone number.",
    ],
    factsTitle: "Facts about the group",
    companiesTitle: "Companies in the group",
    companiesLead:
      "Kanitas AB is the parent company, with a subsidiary for each business.",
    parentCompany: "Parent company",
    clientsTitle: "Some of our clients",
    contactTitle: "Get in touch",
  },

  contactPage: {
    title: `Contact | Kanitas in ${site.address.city}`,
    description: `Contact Kanitas in ${site.address.city}, Stockholm: call ${site.phoneAbroad}, email ${site.email} or leave your number and we'll call you back.`,
    breadcrumb: "Contact",
    heading: "Contact us",
    lead: "Leave your number and we'll call you back. The same phone number and email address cover every company in the group.",
  },

  privacy: {
    title: "Privacy policy | Kanitas",
    description: `How ${site.legalName} processes personal data submitted via kanitas.se, in the contact form, by email and by phone, and what your rights are.`,
    heading: "Privacy policy",
    lead: `How ${site.legalName} processes the personal data you provide when you contact us.`,
    sections: [
      {
        title: "Data controller",
        body: [
          `${site.legalName}, reg. no. ${site.orgnr}, ${site.address.city}, is the controller for the processing of personal data submitted via kanitas.se. If you have questions about the processing, email ${site.email} or call ${site.phoneAbroad}.`,
        ],
      },
      {
        title: "What data we process",
        body: [
          "When you use the contact form, we process your phone number, which is the only required field, and any details you choose to add: name, email address, what your enquiry is about and your message. The same applies to details you give us when you email or call us.",
          "Please do not include sensitive personal data in the form, such as information about your health.",
        ],
      },
      {
        title: "Why we process it",
        body: [
          "We use the data to answer your enquiry, prepare a quote and, if we reach an agreement, carry out the work. If you register your interest in a job, we use it to contact you about employment. The legal basis is our legitimate interest in answering enquiries. When you request a quote or hire us, we process the data in order to enter into and perform our contract with you.",
          "We do not use the data for marketing you have not asked for, and we never sell it on.",
        ],
      },
      {
        title: "How long we keep it",
        body: [
          "Enquiries that do not lead to a job are deleted once the matter is closed. If an enquiry leads to a contract, the data is kept for as long as the contract is in force and after that for as long as the law requires, for example under the Swedish Accounting Act.",
        ],
      },
      {
        title: "Who we share it with",
        body: [
          `What you write in the form is sent by email to ${site.email} and stored in our email, not on the website. If your enquiry concerns another company in the group, such as Kanitas ENT AB for staffing and cleaning, we forward it to that company. When you submit the form, your IP address is used temporarily to stop spam.`,
          "The website is hosted by Vercel and our email by One.com. They may have access to the data to the extent needed to provide their services to us. The contact form is processed on servers in Stockholm.",
        ],
      },
      {
        title: "Cookies and visitor statistics",
        body: [
          "The website does not set any cookies. We count visits and which pages are read, without individual visitors being identifiable.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "You have the right to know what data we hold about you, to have incorrect data corrected and to have your data deleted when it is no longer needed. You can also object to the processing. Contact us and we will help you.",
          "If you are not satisfied with how we handle your data, you can lodge a complaint with the Swedish Authority for Privacy Protection (IMY).",
        ],
      },
    ],
    questions: "Questions about this policy?",
    contactLink: "Contact us",
  },

  notFound: {
    title: "Page not found",
    code: "Error 404",
    lead: "It may have been moved or removed. Here are our businesses:",
    back: "Go to the home page",
  },

  contactSection: {
    title: "Send an enquiry",
    lead: "Leave your number and we'll call you back. Quotes are free.",
  },

  form: {
    thanks: "Thank you, we'll call you back!",
    thanksText:
      "We normally get back to you within one working day. Urgent? Call",
    topicPrefix: "Enquiry:",
    phone: "Your phone number",
    phonePlaceholder: "070-123 45 67",
    phoneHint: "We'll call you back, normally within one working day.",
    phoneError: "Enter your phone number and we'll call you back.",
    topicLegend: "What is it about?",
    optional: "(optional)",
    name: "Name",
    email: "Email",
    message: "What do you need help with?",
    messagePlaceholder: "What needs doing, where and when?",
    honeypot: "Leave blank",
    sending: "Sending…",
    submit: "Call me back",
    privacyNote: "We only use your details for your enquiry.",
    privacyLink: "Privacy policy",
    error: "Something went wrong. Try again or call us on",
    limited: "You have sent several enquiries in a short time. Call us on",
  },

  trust: {
    title: "A safe choice",
    points: [
      {
        title: "Collective agreements",
        text: "Our tradespeople and cleaners are employed under collective agreements with the trade unions Byggnads or Fastighets.",
      },
      {
        title: "Insurance and F‑tax",
        text: "We have liability insurance, are approved for F‑tax and are registered for VAT and as an employer.",
      },
      {
        title: "Sound finances",
        text: "Kanitas AB has the highest credit rating, AAA.",
      },
      {
        title: "A well-run site",
        text: "Protective equipment and quality checks on every job, and our own site management on our contracts.",
      },
    ],
  },

  process: {
    title: "How it works",
    steps: [
      {
        title: "You get in touch",
        text: "Call, email or leave your number here on the website.",
      },
      {
        title: "We look at the job",
        text: "If needed, we visit the site before we price the job.",
      },
      {
        title: "You get a quote",
        text: "Covering price, scope and schedule.",
      },
      {
        title: "We do the job",
        text: "With our own staff and one contact person all the way to handover.",
      },
    ],
  },

  careers: {
    title: "Work with us",
    text: "Tradespeople and construction cleaners are welcome to register their interest. We offer employment under a collective agreement, workwear and protective equipment.",
    trades: [
      "Carpenters",
      "Concrete workers",
      "Bricklayers",
      "Construction cleaners",
    ],
    cta: "Register your interest",
  },

  quality: {
    title: "Sustainability and the environment",
    paragraphs: [
      "Sustainability and environmental work are part of how we plan and carry out our jobs. We want what we build and renovate to last, and materials to be used with care.",
      "We take waste and the work's impact on the site into account. We aim to follow ISO standards such as ISO 9001.",
    ],
  },

  groupFacts: [
    { label: "Founded", value: `${site.founded} in ${site.address.city}` },
    { label: "Companies in the group", value: String(groupCompanies.length) },
    {
      label: "Credit rating",
      value: `${site.creditRating} for ${site.legalName}`,
    },
    { label: "Collective agreements", value: "Byggnads and Fastighets" },
    { label: "Insurance", value: "Liability insurance" },
    {
      label: "Tax and VAT",
      value: "Approved for F‑tax, registered for VAT and as an employer",
    },
    {
      label: "Certification and membership",
      value: "SafeTrade, Svenskt Näringsliv",
    },
    {
      label: "Quality and environment",
      value: "Aims to follow ISO standards such as ISO 9001",
    },
  ],

  companyRoles: {
    "Kanitas AB": `Construction, cleaning and maintenance since ${site.founded}`,
    "Kanitas ENT AB": "Staffing, construction cleaning and services",
    "Kanitas Bygg AB": "Construction and groundworks contracting",
    "Kanitas Fastigheter AB": "Property ownership and management",
    "Kanitas Trading AB":
      "Buying, selling and hiring out machinery and vehicles",
  },

  businesses: {
    bygg: {
      heading: "Construction and contracting",
      summary: "Contracting, renovation and building maintenance",
      blurb:
        "We build for property owners, housing cooperatives and private clients, and work as a subcontractor to NCC, Implenia and ByggPartner, among others.",
    },
    stad: {
      heading: "Staffing and construction cleaning",
      summary: "Tradespeople and construction cleaning at short notice",
      blurb:
        "We supply tradespeople and construction cleaners to contractors, often at short notice, and do construction cleaning before inspection.",
    },
    trading: {
      heading: "Machinery and vehicles",
      summary: "Buying, selling and hiring out machinery and vehicles",
      blurb:
        "We buy, sell and hire out machinery, tools, vans and work vehicles, for our own projects and for others.",
    },
    fastigheter: {
      heading: "Premises and property management",
      summary: "Workshop, warehouse and office space to rent",
      blurb:
        "We rent out workshop, warehouse and office space in Järfälla. We handle alterations and maintenance ourselves.",
    },
  },

  areas: {
    bygg: {
      h1: "Construction company in Järfälla and Stockholm",
      intro:
        "New builds, renovation and building maintenance for construction companies, property owners, housing cooperatives (BRFs) and private clients in Järfälla and across Greater Stockholm.",
      servicesH2: "Construction services",
      serviceType: "Construction contracting and building maintenance",
      ctaLabel: "Request a quote",
      services: [
        {
          title: "New builds",
          text: "Complete contracts, from groundworks to the finished building.",
        },
        {
          title: "Renovation and conversion",
          text: "Homes, offices and other premises.",
          href: "/bygg/renovering",
        },
        {
          title: "Building maintenance",
          text: "Upkeep, repairs and alterations under an ongoing agreement.",
          href: "/bygg/byggservice",
        },
        {
          title: "Bathrooms and wet rooms",
          text: "Full renovations, with regular partners for plumbing.",
          href: "/bygg/badrumsrenovering",
        },
        {
          title: "Fit-out and joinery",
          text: "Internal walls, suspended ceilings, doors and built-in fittings.",
        },
        {
          title: "Groundworks",
          text: "Excavation, foundations, drainage and fine grading.",
        },
        {
          title: "Demolition and remediation",
          text: "Selective demolition, plus building, fire and damp remediation.",
        },
        {
          title: "Snow clearance",
          text: "Snow clearance and gritting for contract customers.",
        },
      ],
      related: {
        href: "/stad",
        label: "Construction cleaning and extra staff: Kanitas ENT",
      },
      process: {
        title: "How a building project works",
        steps: [
          {
            title: "Enquiry and site visit",
            text: "We go through what needs doing and look at the site.",
          },
          {
            title: "Quote",
            text: "Fixed price or time and materials, with scope and schedule. Any additional work is approved in writing before it is carried out.",
          },
          {
            title: "Planning",
            text: "Materials, dates and staffing are booked. You get one contact person who follows the job from start to finish.",
          },
          {
            title: "The build",
            text: "Our own staff and site management, with quality checks as the work progresses.",
          },
          {
            title: "Final walkthrough and handover",
            text: "We go through the job together and hand over the quality check records and, on larger jobs, as-built drawings.",
          },
        ],
      },
      sections: [
        {
          title: "Our clients",
          layout: "columns",
          items: [
            {
              title: "Construction companies",
              text: "As a subcontractor to NCC, Implenia and ByggPartner, among others, with our own site management.",
              href: "/bygg/underentreprenor",
            },
            {
              title: "Property owners",
              text: "Building maintenance under framework agreements: reactive repairs, tenant fit-outs and planned maintenance.",
              href: "/bygg/byggservice",
            },
            {
              title: "Housing cooperatives",
              text: "Pipe replacement (stambyte), façade and balcony work, and renovation of communal areas. Residents are kept informed throughout.",
              href: "/bygg/brf",
            },
            {
              title: "Private clients",
              text: "Bathrooms, extensions and renovation of houses and flats.",
              href: "/bygg/renovering",
            },
          ],
          references: true,
        },
      ],
      callout: {
        title: "ROT deduction for private clients",
        text: "If you renovate your home, you can claim the Swedish ROT tax deduction on labour costs, but not on materials. We take the deduction straight off the invoice, so you only pay your share.",
      },
      faq: [
        {
          q: "How much does a quote cost?",
          a: "Nothing.",
        },
        {
          q: "Do you take on smaller jobs too?",
          a: "Yes, even one-off repairs.",
        },
        {
          q: "How soon can you start?",
          a: "We can normally start building maintenance work within a few days. Larger contracts are planned around the project's schedule.",
        },
        {
          q: "Do you have your own staff?",
          a: "Yes, supplemented when needed by tradespeople from Kanitas ENT. For electrical, plumbing and ventilation work we bring in regular partners.",
        },
      ],
      description:
        "Kanitas Bygg does new builds, renovation, building maintenance and demolition in Järfälla and Stockholm. Own staff on collective agreements. Free quotes.",
    },

    stad: {
      h1: "Staffing and construction cleaning in Järfälla",
      intro:
        "We supply tradespeople and construction cleaners to contractors and do construction cleaning before inspection. All our staff are employed by us under collective agreements.",
      servicesH2: "Staffing and cleaning services",
      serviceType: "Staffing and construction cleaning",
      ctaLabel: "Request a quote",
      services: [
        {
          title: "Tradespeople",
          text: "Carpenters, concrete workers, bricklayers and scaffolders working under your site management.",
        },
        {
          title: "Staffing at short notice",
          text: "When someone is absent or the schedule needs to be accelerated.",
        },
        {
          title: "Construction cleaning",
          text: "Rough cleaning during the build and a final clean before inspection.",
        },
        {
          title: "Office and property cleaning",
          text: "Offices, stairwells and communal areas, with the same cleaners wherever possible.",
        },
        {
          title: "Move-out cleaning",
          text: "Homes and premises, to a checklist.",
        },
        {
          title: "Deep cleaning and window cleaning",
          text: "Floors, windows and anything beyond the regular cleaning.",
        },
      ],
      related: {
        href: "/bygg",
        label: "Construction and renovation: Kanitas Bygg",
      },
      tags: {
        title: "Trades we supply",
        text: "We provide everyone with workwear and protective equipment.",
        items: [
          "Carpenters",
          "Concrete workers",
          "Bricklayers",
          "Scaffolders",
          "Construction cleaners",
        ],
      },
      process: {
        title: "Construction cleaning in four steps",
        steps: [
          {
            title: "Rough clean",
            text: "Construction dust, spills and packaging are removed as the build progresses.",
          },
          {
            title: "Detailed clean",
            text: "Every surface is cleaned: joinery, vents, fuse boxes, window frames and floors.",
          },
          {
            title: "Window cleaning",
            text: "Glass, frames and sashes, inside and out. Labels and construction tape are removed.",
          },
          {
            title: "Final clean",
            text: "The last pass before inspection and moving in.",
          },
        ],
      },
      checklist: {
        title: "What construction cleaning includes",
        items: [
          "Floors vacuumed and mopped",
          "Windows cleaned inside and out",
          "Window sills, frames and sashes wiped",
          "Doors, frames and skirting boards wiped",
          "Sockets, switches and fuse box dusted",
          "Vents and radiators cleaned",
          "Cupboards and drawers wiped inside and out",
          "Appliances cleaned inside and out",
          "Bathroom tiles, sanitaryware and floor drain cleaned",
          "Construction tape, labels and protective plastic removed",
          "Construction dust removed from all surfaces",
          "Packaging and rubbish taken out",
        ],
      },
      sections: [
        {
          title: "How our staffing works",
          layout: "list",
          items: [
            {
              title: "No middlemen",
              text: "Our staff are employed by us, so you know who is coming to your site.",
            },
            {
              title: "Your site management",
              text: "You lead the work on site. We take care of pay and insurance.",
            },
            {
              title: "Backup from our own projects",
              text: "When needed, we move staff from the group's own projects, so a gap can be filled quickly.",
            },
            {
              title: "Short and long assignments",
              text: "One person for a few days or a whole team for the entire project.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "How quickly can you supply staff?",
          a: "We can often send individual tradespeople as soon as the next working day. A whole team normally takes a few days.",
        },
        {
          q: "How long does construction cleaning take?",
          a: "A flat normally takes a day; larger premises take several. We plan around the inspection date.",
        },
        {
          q: "What if the inspector finds fault with the cleaning?",
          a: "We clean those areas again at no extra cost.",
        },
        {
          q: "Do you offer regular cleaning contracts?",
          a: "Yes, for offices, stairwells and properties. We also take one-off jobs such as move-out and deep cleaning.",
        },
      ],
      description:
        "Kanitas ENT supplies tradespeople to construction companies and does construction, final and office cleaning in Järfälla and Stockholm. Collective agreements.",
    },

    maskiner: {
      h1: "Machinery and vehicle hire in Järfälla",
      intro:
        "We hire out, buy and sell machinery, tools, vans and work vehicles. They are the same machines we use on our own projects.",
      servicesH2: "Hire, buying and selling",
      serviceType: "Machinery and vehicle hire and sales",
      ctaLabel: "Ask for a price",
      contactTitle: "Ask Kanitas Trading",
      contactLead:
        "Leave your number and we'll call you back with a price and availability.",
      services: [
        {
          title: "Machinery and tool hire",
          text: "Construction and earthmoving machinery and tools for your job.",
        },
        {
          title: "Van hire",
          text: "Vans and work vehicles for tradespeople and businesses.",
        },
        {
          title: "Buying and selling",
          text: "We buy and sell machinery and vehicles. Get in touch if you are selling or looking for something.",
        },
      ],
      related: {
        href: "/bygg",
        label: "Construction and renovation: Kanitas Bygg",
      },
      process: {
        title: "How to hire from us",
        steps: [
          {
            title: "Tell us what you need",
            text: "Which machine or vehicle, and for how long.",
          },
          {
            title: "Price and availability",
            text: "We call you back with a price and tell you when it is available.",
          },
          {
            title: "Agreement and hire period",
            text: "We sign an agreement, and you collect and return it as arranged.",
          },
        ],
      },
      faq: [
        {
          q: "How much does it cost to hire?",
          a: "It depends on the machine or vehicle and how long you need it. Leave your number and we'll call you back with a price.",
        },
        {
          q: "Can I buy a machine or vehicle from you?",
          a: "Yes. Tell us what you are looking for and we'll get in touch when we have something suitable.",
        },
        {
          q: "Do you buy machinery and vehicles?",
          a: "Yes. Tell us what you want to sell, ideally with photos, and we'll get back to you.",
        },
      ],
      description:
        "Kanitas Trading hires out, buys and sells machinery, tools, vans and work vehicles in Järfälla and Greater Stockholm. Ask us for a price.",
    },

    lokaler: {
      h1: "Commercial premises to rent in Järfälla",
      intro:
        "Workshop, warehouse and office space in Järfälla. We handle alterations and maintenance ourselves.",
      servicesH2: "Premises and property management",
      serviceType: "Commercial premises rental",
      ctaLabel: "Ask about available premises",
      contactTitle: "Ask about available premises",
      contactLead:
        "Leave your number and we'll tell you which premises are available.",
      services: [
        {
          title: "Premises to rent",
          text: "Workshop, warehouse and office space in Järfälla.",
        },
        {
          title: "Property management",
          text: "We manage our own properties.",
        },
        {
          title: "Property services",
          text: "Regular checks, maintenance, snow clearance and grounds care.",
        },
        {
          title: "Tenant fit-out",
          text: "Kanitas Bygg adapts the premises to your business.",
        },
      ],
      related: {
        href: "/bygg",
        label: "Conversion and fit-out: Kanitas Bygg",
      },
      process: {
        title: "How to rent premises",
        steps: [
          {
            title: "Get in touch",
            text: "Tell us what kind of premises you are looking for, roughly how large and when you need them.",
          },
          {
            title: "Viewing",
            text: "We show you what is available.",
          },
          {
            title: "Lease and fit-out",
            text: "We sign a lease and adapt the premises if needed.",
          },
          {
            title: "Moving in",
            text: "You move in. We handle regular checks and maintenance of the property.",
          },
        ],
      },
      faq: [
        {
          q: "Which premises are available right now?",
          a: "It varies. Leave your number and we'll tell you what we have.",
        },
        {
          q: "Can the premises be adapted to my business?",
          a: "Yes, Kanitas Bygg can convert and adapt the premises.",
        },
        {
          q: "Who takes care of maintenance?",
          a: "We handle regular checks and maintenance of our properties.",
        },
      ],
      description:
        "Kanitas Fastigheter rents out workshop, warehouse and office space in Järfälla. We adapt the premises to your business. Ask us what is available.",
    },
  },

  services: {
    badrumsrenovering: {
      label: "Bathroom renovation",
      h1: "Bathroom renovation in Järfälla and Stockholm",
      intro:
        "We fully renovate bathrooms and wet rooms in houses, flats and housing cooperatives (BRFs), from strip-out to the finished room. Plumbing and electrical work is done by our regular partners, and you have one contact person for the whole job.",
      servicesH2: "What a bathroom renovation includes",
      serviceType: "Bathroom renovation",
      ctaLabel: "Request a quote",
      contactTitle: "Request a quote for a bathroom renovation",
      services: [
        {
          title: "Strip-out",
          text: "Old tiles, flooring and fittings are removed and taken away.",
        },
        {
          title: "Waterproofing",
          text: "A new waterproof membrane on the floor and walls, protecting against moisture.",
        },
        {
          title: "Wall and floor tiles",
          text: "Tiling on floors and walls.",
        },
        {
          title: "Plumbing",
          text: "Pipes, floor drain, shower, toilet and washbasin, by our regular plumbing partner.",
        },
        {
          title: "Electrics and lighting",
          text: "Electrical work by our regular partner.",
        },
        {
          title: "Fittings",
          text: "Cabinets, vanity unit and accessories fitted.",
        },
      ],
      related: {
        href: "/bygg/renovering",
        label: "Renovating the whole home: Renovation and conversion",
      },
      process: {
        title: "How a bathroom renovation works",
        steps: [
          {
            title: "Site visit",
            text: "We look at the bathroom and go through what you want done.",
          },
          {
            title: "Quote",
            text: "Fixed price or time and materials, with scope and schedule. Any additional work is approved in writing before it is carried out.",
          },
          {
            title: "The renovation",
            text: "Our own staff and site management, with quality checks as the work progresses.",
          },
          {
            title: "Final walkthrough",
            text: "We go through the bathroom together and hand over the quality check records.",
          },
        ],
      },
      callout: {
        title: "ROT deduction on bathroom renovation",
        text: "As a private client, you can claim the ROT tax deduction on labour costs, but not on materials. We take the deduction straight off the invoice, so you only pay your share.",
      },
      faq: [
        {
          q: "How much does a bathroom renovation cost?",
          a: "It depends on the size of the bathroom and what needs doing. We are happy to come and take a look, and the quote is free.",
        },
        {
          q: "How long does it take?",
          a: "It depends on the scope. You get a schedule in the quote, before the work starts.",
        },
        {
          q: "Do you renovate bathrooms in cooperative flats?",
          a: "Yes, for both flat owners and housing cooperatives (BRFs).",
        },
        {
          q: "Who does the plumbing and electrical work?",
          a: "Our regular partners. You still have one contact person with us for the whole job.",
        },
      ],
      description:
        "Kanitas Bygg renovates bathrooms in Järfälla and Stockholm: strip-out, waterproofing, tiling, plumbing and electrics. ROT deducted on the invoice. Free quotes.",
    },

    renovering: {
      label: "Renovation and conversion",
      h1: "Renovation and conversion in Järfälla & Stockholm",
      intro:
        "We renovate and convert flats, houses, offices and other premises, with our own staff and our own site management. You get one contact person who follows the job from start to finish.",
      servicesH2: "What we do",
      serviceType: "Renovation and conversion",
      ctaLabel: "Request a quote",
      contactTitle: "Request a quote for a renovation",
      services: [
        {
          title: "Flats and houses",
          text: "Renovation of the whole home or parts of it.",
        },
        {
          title: "Extensions",
          text: "Extensions to houses.",
        },
        {
          title: "Offices and premises",
          text: "Conversion and adaptation of offices and other premises.",
        },
        {
          title: "Tenant fit-outs",
          text: "Premises adapted for a new tenant, for property owners.",
        },
        {
          title: "Internal walls and joinery",
          text: "Internal walls, suspended ceilings, doors and built-in fittings.",
        },
        {
          title: "Demolition",
          text: "Selective demolition ahead of the conversion.",
        },
      ],
      related: {
        href: "/bygg/badrumsrenovering",
        label: "Just the bathroom: Bathroom renovation",
      },
      process: {
        title: "How a renovation works",
        steps: [
          {
            title: "Enquiry and site visit",
            text: "We go through what needs doing and look at the site.",
          },
          {
            title: "Quote",
            text: "Fixed price or time and materials, with scope and schedule. Any additional work is approved in writing before it is carried out.",
          },
          {
            title: "Planning",
            text: "Materials, dates and staffing are booked. You get one contact person who follows the job from start to finish.",
          },
          {
            title: "The renovation",
            text: "Our own staff and site management, with quality checks as the work progresses.",
          },
          {
            title: "Final walkthrough and handover",
            text: "We go through the job together and hand over the quality check records and, on larger jobs, as-built drawings.",
          },
        ],
      },
      callout: {
        title: "ROT deduction for private clients",
        text: "If you renovate your home, you can claim the ROT tax deduction on labour costs, but not on materials. We take the deduction straight off the invoice, so you only pay your share.",
      },
      faq: [
        {
          q: "Do you take on smaller jobs too?",
          a: "Yes, even one-off repairs and smaller renovations.",
        },
        {
          q: "Can you take care of the whole renovation?",
          a: "Yes. We coordinate every stage, and electrical, plumbing and ventilation work is done by our regular partners.",
        },
        {
          q: "Fixed price or time and materials?",
          a: "Either. It is set out in the quote, and any additional work is approved in writing before it is carried out.",
        },
        {
          q: "How much does a quote cost?",
          a: "Nothing.",
        },
      ],
      description:
        "Kanitas Bygg renovates and converts flats, houses, offices and other premises in Järfälla and Stockholm. Own staff on collective agreements. Free quotes.",
    },

    byggservice: {
      label: "Building maintenance",
      h1: "Building maintenance for landlords in Stockholm",
      intro:
        "Maintenance, repairs and tenant fit-outs under a framework or ongoing agreement, in Järfälla and across Greater Stockholm. We can normally start building maintenance work within a few days.",
      servicesH2: "What building maintenance includes",
      serviceType: "Building and property maintenance",
      ctaLabel: "Ask about building maintenance",
      contactTitle: "Ask about building maintenance",
      services: [
        {
          title: "Reactive repairs",
          text: "Repairs when something has broken.",
        },
        {
          title: "Planned maintenance",
          text: "Maintenance in line with the property's maintenance plan.",
        },
        {
          title: "Tenant fit-outs",
          text: "Premises and flats adapted for new tenants.",
        },
        {
          title: "Framework agreements",
          text: "One agreement for recurring work, or one-off jobs when needed.",
        },
        {
          title: "Snow clearance",
          text: "Snow clearance and gritting for contract customers.",
        },
        {
          title: "Cleaning after the job",
          text: "Construction cleaning and property cleaning from Kanitas ENT.",
          href: "/stad",
        },
      ],
      related: {
        href: "/bygg/renovering",
        label: "Larger conversions: Renovation and conversion",
      },
      process: {
        title: "How building maintenance works",
        steps: [
          {
            title: "You get in touch",
            text: "Call, email or leave your number here on the website.",
          },
          {
            title: "We look at the job",
            text: "If needed, we visit the site before we price the job.",
          },
          {
            title: "We do the job",
            text: "With our own staff and quality checks as the work progresses.",
          },
          {
            title: "Handover",
            text: "We go through the job with you once it is finished.",
          },
        ],
      },
      faq: [
        {
          q: "How soon can you start?",
          a: "We can normally start building maintenance work within a few days.",
        },
        {
          q: "Do we have to sign a framework agreement?",
          a: "No. We also take on one-off jobs.",
        },
        {
          q: "Do you have your own staff?",
          a: "Yes, supplemented when needed by tradespeople from Kanitas ENT. For electrical, plumbing and ventilation work we bring in regular partners.",
        },
      ],
      description:
        "Building maintenance for property owners in Järfälla and Stockholm: repairs, upkeep and tenant fit-outs under framework agreements. Collective agreements.",
    },

    brf: {
      label: "Housing cooperatives",
      h1: "Pipe replacement and BRF renovation in Stockholm",
      intro:
        "We carry out pipe replacement (stambyte), façade and balcony work and renovation of communal areas for housing cooperatives (BRFs) in Järfälla and Stockholm. Residents are kept informed throughout.",
      servicesH2: "What we do for BRFs",
      serviceType: "Pipe replacement and renovation for housing cooperatives",
      ctaLabel: "Request a quote",
      contactTitle: "Request a quote for your BRF",
      services: [
        {
          title: "Pipe replacement",
          text: "Replacement of water and waste pipes.",
        },
        {
          title: "Bathrooms",
          text: "Bathroom renovation in the flats, as part of the same project or separately.",
          href: "/bygg/badrumsrenovering",
        },
        {
          title: "Façades",
          text: "Renovation and repair of façades.",
        },
        {
          title: "Balconies",
          text: "Renovation of balconies.",
        },
        {
          title: "Communal areas",
          text: "Stairwells, laundry rooms and other communal areas.",
        },
        {
          title: "Cleaning",
          text: "Construction cleaning and stairwell cleaning from Kanitas ENT.",
          href: "/stad",
        },
      ],
      process: {
        title: "How a BRF project works",
        steps: [
          {
            title: "Enquiry and site visit",
            text: "We go through what the cooperative wants to do and look at the property.",
          },
          {
            title: "Quote",
            text: "Fixed price or time and materials, with scope and schedule. Any additional work is approved in writing before it is carried out.",
          },
          {
            title: "Planning and information",
            text: "Materials, dates and staffing are booked, and residents are told what is happening and when.",
          },
          {
            title: "The work",
            text: "Our own staff and site management, with quality checks as the work progresses.",
          },
          {
            title: "Final walkthrough and handover",
            text: "We go through the job with the board and hand over the quality check records and as-built drawings.",
          },
        ],
      },
      faq: [
        {
          q: "How are residents kept informed?",
          a: "We inform residents before and during the work, so everyone knows what is happening and when.",
        },
        {
          q: "Do you have your own staff?",
          a: "Yes, with our own site management. For electrical, plumbing and ventilation work we bring in regular partners.",
        },
        {
          q: "How much does a quote cost?",
          a: "Nothing.",
        },
      ],
      description:
        "Kanitas Bygg does pipe replacement, façade and balcony work and renovation of communal areas for BRFs in Järfälla and Stockholm. Own staff, free quotes.",
    },

    underentreprenor: {
      label: "Subcontracting",
      h1: "Construction subcontractor in Stockholm",
      intro:
        "We work as a subcontractor to construction companies, including NCC, Implenia and ByggPartner, with our own staff and our own site management.",
      servicesH2: "What we take on",
      serviceType: "Construction subcontracting",
      ctaLabel: "Contact us",
      contactTitle: "Subcontracting enquiry",
      contactLead: "Tell us about the project and we'll call you back.",
      services: [
        {
          title: "Fit-out",
          text: "Internal walls, suspended ceilings and doors.",
        },
        {
          title: "Joinery",
          text: "Built-in fittings and joinery work.",
        },
        {
          title: "Groundworks",
          text: "Excavation, foundations, drainage and fine grading.",
        },
        {
          title: "Demolition and remediation",
          text: "Selective demolition, plus building, fire and damp remediation.",
        },
        {
          title: "Extra tradespeople",
          text: "Carpenters, concrete workers and bricklayers from Kanitas ENT when you need more hands.",
          href: "/stad",
        },
        {
          title: "Construction cleaning",
          text: "Construction cleaning and a final clean before inspection, from Kanitas ENT.",
          href: "/stad",
        },
      ],
      sections: [
        {
          title: "Why construction companies hire us",
          layout: "columns",
          items: [
            {
              title: "Our own site management",
              text: "We manage our own work on site.",
            },
            {
              title: "Collective agreements",
              text: "Our tradespeople are employed under collective agreements with Byggnads.",
            },
            {
              title: "A well-run site",
              text: "Protective equipment and quality checks on every job.",
            },
            {
              title: "Sound finances",
              text: "Kanitas AB has AAA, the highest credit rating. We have liability insurance and F‑tax approval.",
            },
          ],
          references: true,
        },
      ],
      faq: [
        {
          q: "Which construction companies have you worked for?",
          a: "NCC, Implenia and ByggPartner, among others.",
        },
        {
          q: "Can you supply extra staff?",
          a: "Yes, tradespeople from Kanitas ENT, often at short notice.",
        },
        {
          q: "Do you have F‑tax and insurance?",
          a: "Yes. We have liability insurance, are approved for F‑tax and are registered for VAT and as an employer.",
        },
      ],
      description:
        "Construction subcontractor in Stockholm for NCC and Implenia, among others: fit-out, groundworks and demolition. Own site management, collective agreements.",
    },
  },

  areaContactTitle: (name) => `Request a quote from ${name}`,

  topics: {
    Bygg: "Construction and renovation",
    Bemanning: "Staffing",
    Städ: "Cleaning",
    Trading: "Machinery and vehicles",
    Fastigheter: "Premises",
    Jobb: "Working for us",
    Annat: "Something else",
  },

  certifications: {
    aaa: "AAA, the highest credit rating",
    byggnads: "Byggnads collective agreement",
    fastighets: "Fastighets collective agreement",
    safeTrade: "SafeTrade",
    svensktNaringsliv: "Svenskt Näringsliv",
  },

  photoAlt: {
    nybygge:
      "Block of flats under construction at dusk, with a tower crane and lit floors",
    jobbstart:
      "Two tradespeople going through the drawings by the service van outside a block of flats",
    bygglag:
      "Tradespeople carrying plasterboard from a service van into a block of flats",
    armering: "Worker in high-visibility clothing tying rebar on a floor slab",
    badrum: "Tiler laying floor tiles in a bathroom under renovation",
    renovering:
      "Newly renovated room in an older Stockholm flat with a tiled stove and herringbone parquet",
    platsbesok:
      "Site manager going through the floor plan with a couple at their kitchen table",
    snickare: "Carpenter fitting plasterboard to a new internal wall in a flat",
    byggstadning:
      "Two cleaners doing construction cleaning in a newly renovated flat",
    slutstadning:
      "Cleaner wiping out the cupboards in a new kitchen during the final clean while a colleague vacuums",
    trapphus: "Cleaner mopping the stairwell of a block of flats",
    team: "Staff gathering by the service vans outside the workshop before the day's work",
    maskin:
      "Mini excavator on a trailer, vans and a flatbed truck in the yard outside the workshop",
    fordon:
      "A van being handed over to a customer in the yard outside the workshop",
    lokalvisning:
      "Viewing of an empty workshop and warehouse unit with a mezzanine and an open roller door",
    fastighet:
      "Industrial building with units to rent, one roller door open onto an empty unit",
  },
};

export default en;
