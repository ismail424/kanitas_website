import type { Metadata } from "next";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import './globals.css';

// Create a custom system with extended configuration for Chakra UI v3
const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6edf5" },
          100: { value: "#c1d2e8" },
          200: { value: "#9bb6da" },
          300: { value: "#759bcc" },
          400: { value: "#4f7fc0" },
          500: { value: "#124075" }, // Primary color
          600: { value: "#10366a" },
          700: { value: "#0d2c58" },
          800: { value: "#0a2346" },
          900: { value: "#071a34" }
        }
      },
      fonts: {
        body: { value: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
        heading: { value: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }
      }
    },
    semanticTokens: {
      colors: {
        // Map semantic tokens to our brand color palette
        primary: { value: "{colors.brand.500}" },
        success: { value: "#36B37E" },
        warning: { value: "#f7a400" },
        error: { value: "#FF5630" },
        "text.primary": { value: "#333333" }
      }
    }
  },
  // Disable CSS cascade layers if needed for compatibility
  disableLayers: false,
});

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
        <ChakraProvider value={system}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}