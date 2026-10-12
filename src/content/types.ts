import type {
  AreaSlug,
  BusinessSlug,
  CertificationId,
  CompanyName,
  ContactTopic,
  PhotoName,
  ServiceSlug,
} from "@/lib/site";

/** A short title and one sentence: a service, a step, a point. */
export interface TextItem {
  title: string;
  text: string;
  /** A page that tells more, without language prefix ("/bygg/brf") */
  href?: string;
}

/** A link inside the site, written without language prefix ("/om-oss"). */
export interface SiteLink {
  href: string;
  label: string;
}

/**
 * A section on an area page. `columns` sets the items side by side, `steps`
 * numbers them because they happen in order, and `list` sets them beside the
 * heading on the page's one tinted band.
 */
export interface AreaSection {
  title: string;
  layout: "columns" | "steps" | "list";
  items: TextItem[];
  /** Follow the items with the client logos. */
  references?: boolean;
}

/** The words of an area page; photos and topic live in `areaPages`. */
export interface AreaCopy {
  /** Keyword-bearing page heading, also the second half of the tab title */
  h1: string;
  /** One or two sentences under the h1 */
  intro: string;
  /** Keyword-bearing heading for the services */
  servicesH2: string;
  /** schema.org serviceType for the area's Service JSON-LD */
  serviceType: string;
  /** Label for the primary action */
  ctaLabel: string;
  /** Heading of the contact section; `areaContactTitle` by default */
  contactTitle?: string;
  /** Line under that heading, when the default about quotes does not fit */
  contactLead?: string;
  services: TextItem[];
  /** One line linking to the sister business, after the services */
  related?: SiteLink;
  /** How a job runs, told beside a photograph. */
  process?: { title: string; steps: TextItem[] };
  /** A short list of things, e.g. the trades we staff. */
  tags?: { title: string; text: string; items: string[] };
  sections?: AreaSection[];
  /** Everything a job includes, as a ticked list. */
  checklist?: { title: string; items: string[] };
  /** One fact set apart, e.g. how ROT works. */
  callout?: { title: string; text: string };
  /** Rendered with FAQPage structured data */
  faq?: { q: string; a: string }[];
  /** Meta description */
  description: string;
}

/** A page for one construction service, under /bygg. Its h1 is the page
 *  heading itself; photos and topic live in `servicePages`. */
export interface ServiceCopy extends AreaCopy {
  /** Short name for links between the service pages, e.g. "Badrum" */
  label: string;
}

export interface BusinessCopy {
  /** What the verksamhet does, used as its heading. */
  heading: string;
  /** One line for the menu. */
  summary: string;
  /** One or two sentences for its tile on the home page. */
  blurb: string;
}

/** Page title and meta description. */
export interface PageMeta {
  title: string;
  description: string;
}

/** Strings for the contact form. Plain strings only: it is a client component. */
export interface FormCopy {
  thanks: string;
  /** Followed by the phone number and a full stop. */
  thanksText: string;
  /** "Ärende:" shown before a pre-selected topic */
  topicPrefix: string;
  phone: string;
  phonePlaceholder: string;
  phoneHint: string;
  phoneError: string;
  topicLegend: string;
  optional: string;
  name: string;
  email: string;
  message: string;
  messagePlaceholder: string;
  /** Label of the hidden spam trap */
  honeypot: string;
  sending: string;
  submit: string;
  privacyNote: string;
  privacyLink: string;
  /** Both followed by the phone number and a full stop. */
  error: string;
  limited: string;
}

/** Offer of this language to a visitor whose browser prefers it. Shown in
 *  the language it offers, so plain strings. */
export interface LanguageHintCopy {
  text: string;
  action: string;
  dismiss: string;
}

export interface Dictionary {
  /** Fallbacks for any page without its own metadata, and site-wide data. */
  meta: PageMeta & { keywords: string[]; areaServed: string };
  common: {
    skipToContent: string;
    /** Before the phone number: "Ring 070-…" */
    call: string;
    requestQuote: string;
    /** First crumb in breadcrumbs */
    home: string;
    phone: string;
    email: string;
    office: string;
    orgNr: string;
    ourClients: string;
    faq: string;
    language: string;
    /** Accessible name of the logo link */
    logoHome: string;
  };
  header: {
    mainMenu: string;
    mobileMenu: string;
    businesses: string;
    aboutGroup: string;
    openMenu: string;
    closeMenu: string;
  };
  /** Header links after the businesses menu. */
  nav: SiteLink[];
  footer: {
    tagline: string;
    businesses: string;
    company: string;
    contact: string;
    links: SiteLink[];
    privacy: string;
    certifications: string;
  };
  languageHint: LanguageHintCopy;
  hero: {
    title: string;
    lead: string;
    trust: string[];
  };
  home: PageMeta & {
    clientsHeading: string;
    whatWeDo: { title: string; lead: string };
    toBusiness: (name: string) => string;
    contactBusiness: (name: string) => string;
    story: { title: string; text: string; link: string };
    figures: { founded: string; companies: string; creditRating: string };
    processLead: string;
    contactTitle: string;
  };
  about: PageMeta & {
    breadcrumb: string;
    heading: string;
    lead: string;
    storyTitle: string;
    story: string[];
    factsTitle: string;
    companiesTitle: string;
    companiesLead: string;
    parentCompany: string;
    clientsTitle: string;
    contactTitle: string;
  };
  contactPage: PageMeta & {
    breadcrumb: string;
    heading: string;
    lead: string;
  };
  privacy: PageMeta & {
    heading: string;
    lead: string;
    sections: { title: string; body: string[] }[];
    questions: string;
    contactLink: string;
  };
  notFound: {
    title: string;
    code: string;
    lead: string;
    back: string;
  };
  contactSection: { title: string; lead: string };
  form: FormCopy;
  trust: { title: string; points: TextItem[] };
  process: { title: string; steps: TextItem[] };
  careers: {
    title: string;
    text: string;
    trades: string[];
    cta: string;
  };
  quality: { title: string; paragraphs: string[] };
  /** The facts a procurement function checks before shortlisting a supplier. */
  groupFacts: { label: string; value: string }[];
  /** What each legal entity does, by company name. */
  companyRoles: Record<CompanyName, string>;
  businesses: Record<BusinessSlug, BusinessCopy>;
  areas: Record<AreaSlug, AreaCopy>;
  services: Record<ServiceSlug, ServiceCopy>;
  areaContactTitle: (name: string) => string;
  topics: Record<ContactTopic, string>;
  certifications: Record<CertificationId, string>;
  photoAlt: Record<PhotoName, string>;
}
