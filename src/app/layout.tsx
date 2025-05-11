import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider"
import './globals.css';
export const metadata: Metadata = {
  title: "Kanitas AB - Professionella Bygg & Städtjänster i Stockholm",
  description: "Sveriges ledande företag inom bygg- och städtjänster i Stockholm. Expertis inom byggarbeten, renovering, byggservice, brandsanering och städtjänster för både privatpersoner och företag sedan 2011.",
  keywords: [
    "byggföretag Stockholm", 
    "byggservice Stockholm",
    "renovering Stockholm", 
    "professionell renovering",
    "byggstädning Stockholm", 
    "kontorsstädning Stockholm", 
    "brandsanering Stockholm", 
    "fuktsanering Stockholm", 
    "byggentreprenad Järfälla", 
    "mark- och anläggningsarbeten Stockholm"
  ],
  authors: [{ name: "Kanitas AB", url: "https://kanitas.se" }],
  openGraph: {
    title: "Kanitas AB - Professionella Bygg & Städtjänster i Stockholm",
    description: "Sveriges ledande byggföretag och städbolag i Stockholm. Specialister på nybyggnation, renovering, byggservice och städning sedan 2011. Kontakta oss för en kostnadsfri offert!",
    url: "https://kanitas.se",
    siteName: "Kanitas AB",
    images: [
      {
        url: "/images/logo_side.png",  // Using the wider image for better link previews
        width: 1200,
        height: 630,
        alt: "Kanitas AB - Professionella Bygg & Städtjänster i Stockholm",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanitas AB - Professionella Bygg & Städtjänster i Stockholm",
    description: "Sveriges ledande byggföretag och städbolag i Stockholm sedan 2011. Specialister på byggarbeten, renovering, och städtjänster. Kontakta oss för en kostnadsfri offert!",
    images: ["/images/logo_side.png"],  // Using the wider image here too
    creator: "@KanitasAB",
  },
  alternates: {
    canonical: "https://kanitas.se",
    languages: {
      'sv-SE': 'https://kanitas.se',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
    "geo.position": "59.4253;17.8345", // Add approximate coordinates for Järfälla
    "ICBM": "59.4253, 17.8345", // Same coordinates in ICBM format
    "og:phone_number": "+46739948047", // Formatted with country code and no spaces
    "og:street-address": "Almarevägen 13, 176 76 Järfälla",
    "business:contact_data:street_address": "Almarevägen 13",
    "business:contact_data:locality": "Järfälla",
    "business:contact_data:postal_code": "176 76",
    "business:contact_data:region": "Stockholm",
    "business:contact_data:country_name": "Sweden",
    "business:contact_data:email": "info@kanitas.se",
    "business:contact_data:phone_number": "+46739948047",
    "business:hours:day": "mon,tue,wed,thu,fri", // Adding business hours
    "business:hours:start": "08:00",
    "business:hours:end": "17:00",
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