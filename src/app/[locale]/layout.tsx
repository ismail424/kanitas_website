import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import LanguageHint from "@/components/LanguageHint";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import { dictionaries, getContent, type LocaleParams } from "@/content";
import { localeHref, locales, ogLocales, type Locale } from "@/lib/i18n";
import type { LanguageHintCopy } from "@/content/types";
import {
  absoluteUrl,
  businessHref,
  businessSlugs,
  businesses,
  groupCompanies,
  site,
} from "@/lib/site";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#134b58",
};

/** Every language is built ahead, Swedish included (served at the root). */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Fallbacks for any page without its own metadata.
export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const { locale, t } = await getContent(params);
  return {
    metadataBase: new URL(site.url),
    title: {
      default: t.meta.title,
      template: "%s | Kanitas",
    },
    description: t.meta.description,
    keywords: t.meta.keywords,
    authors: [{ name: site.legalName, url: site.url }],
    openGraph: {
      type: "website",
      locale: ogLocales[locale],
      url: absoluteUrl(locale, "/"),
      siteName: site.legalName,
      title: t.meta.title,
      description: t.meta.description,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Kanitas" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/og.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    manifest: "/manifest.json",
    category: "business",
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: LocaleParams;
}>) {
  const { locale, t } = await getContent(params);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    url: absoluteUrl(locale, "/"),
    logo: `${site.url}/icon.svg`,
    image: `${site.url}/og.jpg`,
    description: t.meta.description,
    foundingDate: String(site.founded),
    taxID: site.orgnr,
    telephone: site.phoneIntl,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: t.meta.areaServed,
    // The parent site is a switchboard, so state the group explicitly rather
    // than letting one legal entity stand in for five.
    subOrganization: groupCompanies
      .filter((company) => company.orgnr !== site.orgnr)
      .map((company) => {
        const page = businessSlugs
          .map((slug) => businesses[slug])
          .find((business) => business.entities.includes(company.name))?.page;
        return {
          "@type":
            company.name === "Kanitas Bygg AB"
              ? ["GeneralContractor", "Organization"]
              : "Organization",
          "@id": `${site.url}/#org-${company.orgnr}`,
          name: company.name,
          ...(page ? { url: absoluteUrl(locale, page) } : {}),
          taxID: company.orgnr,
          description: t.companyRoles[company.name],
        };
      }),
  };

  return (
    <html lang={locale} className={`${inter.variable} ${archivo.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <a
          href="#innehall"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60] focus:rounded-lg focus:bg-petrol focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          {t.common.skipToContent}
        </a>
        <Header
          logo={
            <Logo href={localeHref(locale, "/")} label={t.common.logoHome} />
          }
          locale={locale}
          t={{
            ...t.header,
            call: t.common.call,
            requestQuote: t.common.requestQuote,
            phone: t.common.phone,
            language: t.common.language,
          }}
          nav={t.nav}
          businesses={businessSlugs.map((slug) => ({
            slug,
            name: businesses[slug].name,
            href: businessHref(slug),
            ...t.businesses[slug],
          }))}
        />
        <main id="innehall">{children}</main>
        <Footer locale={locale} />
        <LanguageHint
          locale={locale}
          hints={
            Object.fromEntries(
              locales.map((other) => [other, dictionaries[other].languageHint]),
            ) as Record<Locale, LanguageHintCopy>
          }
        />
        <Analytics />
      </body>
    </html>
  );
}
