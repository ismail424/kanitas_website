import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import './globals.css';

export const metadata: Metadata = {
  title: "Kanitas AB - Professionella Bygg & Städtjänster i Sverige",
  description: "Kanitas AB erbjuder högkvalitativa bygg- och städtjänster i Sverige. Vi är specialiserade på byggarbeten, renoveringar och nybyggnation för både privatkunder och företag, med fokus på kvalitet och pålitlighet. Kontakta oss för en offert!",
  keywords: ["byggföretag", "städtjänster", "renovering", "nybyggnation", "byggprojekt", "kontorsstädning", "Stockholm", "Sverige"],
  authors: [{ name: "Kanitas AB" }],
  openGraph: {
    title: "Kanitas AB - Bygg & Städtjänster",
    description: "Professionella bygg- och städtjänster i Sverige",
    url: "https://kanitas.se",
    siteName: "Kanitas AB",
    images: [
      {
        url: "/logo_circle.png",
        width: 800,
        height: 600,
        alt: "Kanitas AB Logo",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  manifest: "/manifest.json",
  themeColor: "#124075",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo_circle.png" sizes="any" />
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="forced-colors" content="none" />
      </head>
      <body className="min-h-screen bg-white">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}