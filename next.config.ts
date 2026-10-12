import type { NextConfig } from "next";
import { defaultLocale, locales } from "./src/lib/i18n";

const prefixed = locales.filter((locale) => locale !== defaultLocale);

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Swedish is served at the root and every other language under its
  // prefix (src/lib/i18n.ts). All of them share the [locale] route tree, so
  // a root path is the Swedish page under /sv, and /sv itself redirects
  // back to the root so each page has one address.
  async redirects() {
    return [
      { source: "/sv", destination: "/", permanent: true },
      { source: "/sv/:path*", destination: "/:path*", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/", destination: "/sv" },
      {
        source: `/:path((?!(?:${prefixed.join("|")}|api|og|_next|_vercel)(?:/|$)).+)`,
        destination: "/sv/:path",
      },
    ];
  },
  // Basic hardening for every response: no MIME sniffing, no framing by
  // other sites, and only the origin in the referrer sent to other sites.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
