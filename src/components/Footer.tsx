import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";
import LanguageLinks from "@/components/LanguageLinks";
import Logo from "@/components/Logo";
import { dictionaries } from "@/content";
import { localeHref, type Locale } from "@/lib/i18n";
import {
  businesses,
  businessHref,
  businessSlugs,
  certifications,
  phoneFor,
  site,
  type CertificationId,
} from "@/lib/site";

export default function Footer({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const href = (path: string) => localeHref(locale, path);

  return (
    <>
      {/* Agreements and memberships, in greyscale so five brand colours do
          not compete with the page above. */}
      <section
        aria-label={t.footer.certifications}
        className="border-t border-line bg-paper"
      >
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-5 py-10 sm:px-6 lg:justify-between lg:px-8">
          {(Object.keys(certifications) as CertificationId[]).map((id) => (
            <li key={id}>
              <Image
                src={certifications[id].image}
                alt={t.certifications[id]}
                width={120}
                height={48}
                title={t.certifications[id]}
                style={{ height: certifications[id].h }}
                className="logo-mono w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </section>

      <footer className="bg-petrol-darker text-white">
        <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-12 lg:gap-8">
            <div className="col-span-2 lg:col-span-4">
              <Logo href={href("/")} label={t.common.logoHome} on="dark" />
              <p className="mt-6 max-w-xs leading-relaxed text-white/65">
                {t.footer.tagline}
              </p>
            </div>

            <nav aria-label={t.footer.businesses} className="lg:col-span-3">
              <p className="label text-white">{t.footer.businesses}</p>
              <ul className="mt-5 space-y-3">
                {businessSlugs.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={href(businessHref(slug))}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {businesses[slug].name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label={t.footer.company} className="lg:col-span-2">
              <p className="label text-white">{t.footer.company}</p>
              <ul className="mt-5 space-y-3">
                {t.footer.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={href(item.href)}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="col-span-2 sm:col-span-1 lg:col-span-3">
              <p className="label text-white">{t.footer.contact}</p>
              <ul className="mt-5 space-y-3 text-white/70">
                <li>
                  <a
                    href={site.phoneHref}
                    className="font-semibold text-white transition-colors hover:text-copper-soft"
                  >
                    {phoneFor(locale)}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-white"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.mapsHref}
                    className="transition-colors hover:text-white"
                  >
                    {site.address.street}, {site.address.postalCode}{" "}
                    {site.address.city}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Every language of this page, so each is one click and one
              crawl away from every other. */}
          <nav
            aria-label={t.common.language}
            className="mt-16 flex flex-col gap-3 border-t border-line-deep pt-7 text-sm sm:flex-row sm:items-center sm:gap-6"
          >
            <p className="flex items-center gap-2 text-white/55">
              <Globe className="h-4 w-4" aria-hidden="true" />
              {t.common.language}
            </p>
            <LanguageLinks
              locale={locale}
              className="flex flex-wrap gap-x-5 gap-y-2"
              linkClassName="text-white/70 transition-colors hover:text-white aria-[current=true]:font-semibold aria-[current=true]:text-white"
            />
          </nav>

          <div className="mt-7 flex flex-col gap-3 border-t border-line-deep py-7 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.legalName}, {t.common.orgNr}{" "}
              {site.orgnr}
            </p>
            <Link
              href={href("/integritetspolicy")}
              className="transition-colors hover:text-white"
            >
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
