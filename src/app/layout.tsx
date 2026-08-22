import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e1c18",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kanitas – Byggföretag & städfirma i Stockholm",
    template: "%s | Kanitas",
  },
  description:
    "Kanitas är ett familjeägt bygg- och städföretag i Järfälla. Nybyggnation, renovering, byggservice och byggstädning i Storstockholm sedan 2011.",
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
  authors: [{ name: site.legalName, url: site.url }],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: site.url,
    siteName: site.legalName,
    title: "Kanitas – Byggföretag & städfirma i Stockholm",
    description:
      "Familjeägt bygg- och städföretag i Järfälla. Kvalitet i hela Storstockholm sedan 2011.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Kanitas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanitas – Byggföretag & städfirma i Stockholm",
    description:
      "Familjeägt bygg- och städföretag i Järfälla. Kvalitet i hela Storstockholm sedan 2011.",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "Organization"],
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  image: `${site.url}/og.jpg`,
  foundingDate: String(site.founded),
  taxID: site.orgnr,
  telephone: "+46706653248",
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  areaServed: "Storstockholm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${archivo.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <a
          href="#innehall"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60] focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:font-semibold focus:text-dark-deep"
        >
          Hoppa till innehållet
        </a>
        <Header />
        <main id="innehall">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
