import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider"
import './globals.css';

export const metadata: Metadata = {
  title: "Kanitas AB - Professionella Bygg & Städtjänster i Stockholm",
  description: "Kanitas AB är ett ledande företag inom bygg- och städtjänster i Stockholm. Specialiserade på byggarbeten, renovering, byggservice, brandsanering och städtjänster för både privatpersoner och företag. Etablerade sedan 2011 med gedigen erfarenhet och hög kvalitet.",
  keywords: [
    "byggföretag Stockholm", 
    "byggservice", 
    "renovering", 
    "nybyggnation", 
    "byggstädning", 
    "kontorsstädning", 
    "brandsanering", 
    "fuktsanering", 
    "Järfälla", 
    "mark- och anläggningsentreprenader"
  ],
  authors: [{ name: "Kanitas AB" }],
  openGraph: {
    title: "Kanitas AB - Bygg & Städtjänster i Stockholm",
    description: "Professionella bygg- och städtjänster i Stockholm. Specialister på nybyggnation, renovering, byggservice och städning sedan 2011.",
    url: "https://kanitas.se",
    siteName: "Kanitas AB",
    images: [
      {
        url: "/logo_circle.png",
        width: 800,
        height: 600,
        alt: "Kanitas AB - Bygg & Städtjänster",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanitas AB - Professionella Bygg & Städtjänster",
    description: "Specialister på byggarbeten, renovering, och städtjänster i Stockholm sedan 2011. Kontakta oss för en offert!",
    images: ["/logo_circle.png"],
  },
  alternates: {
    canonical: "https://kanitas.se",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "business",
  manifest: "/manifest.json",
  metadataBase: new URL('https://kanitas.se'),
  verification: {
    google: "verification_token", // Replace with actual Google verification token if available
  },
  other: {
    "geo.region": "SE-AB",
    "geo.placename": "Järfälla",
    "og:phone_number": "073-994 80 47",
    "og:street-address": "Almarevägen 13, 176 76 Järfälla",
    "business:contact_data:street_address": "Almarevägen 13",
    "business:contact_data:locality": "Järfälla",
    "business:contact_data:postal_code": "176 76",
    "business:contact_data:country_name": "Sweden",
    "business:contact_data:email": "info@kanitas.se",
    "business:contact_data:phone_number": "+4673994 80 47",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo_circle.png" sizes="any" />
      </head>
      <body className="min-h-screen bg-white">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}