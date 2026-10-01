import Link from "next/link";
import Image from "next/image";
import { LogoLockup } from "@/components/Logo";
import { businessHref, businesses, certifications, site } from "@/lib/site";

const companyLinks = [
  { href: "/om-oss", label: "Om oss" },
  { href: "/om-oss#bolagen", label: "Bolagen" },
  { href: "/om-oss#referenser", label: "Referenser" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <>
      {/* Agreements and memberships, in greyscale so five brand colours do
          not compete with the page above. */}
      <section
        aria-label="Avtal, kreditvärdighet och medlemskap"
        className="border-t border-line bg-paper"
      >
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-5 py-10 sm:px-6 lg:justify-between lg:px-8">
          {certifications.map((cert) => (
            <li key={cert.name}>
              <Image
                src={cert.image}
                alt={cert.name}
                width={120}
                height={48}
                title={cert.name}
                style={{ height: cert.h }}
                className="logo-mono w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </section>

      <footer className="bg-petrol-darker text-white">
        <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-4">
              <LogoLockup on="dark" className="h-14 w-auto" />
              <p className="mt-6 max-w-xs leading-relaxed text-white/65">
                Bygg, bemanning, maskiner och lokaler i Storstockholm sedan{" "}
                {site.founded}.
              </p>
            </div>

            <nav aria-label="Verksamheter" className="lg:col-span-3">
              <p className="label text-white">Verksamheter</p>
              <ul className="mt-5 space-y-3">
                {businesses.map((business) => (
                  <li key={business.slug}>
                    <Link
                      href={businessHref(business)}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {business.heading}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Företaget" className="lg:col-span-2">
              <p className="label text-white">Företaget</p>
              <ul className="mt-5 space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-3">
              <p className="label text-white">Kontakt</p>
              <ul className="mt-5 space-y-3 text-white/70">
                <li>
                  <a
                    href={site.phoneHref}
                    className="font-semibold text-white transition-colors hover:text-copper-soft"
                  >
                    {site.phone}
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
                  {site.address.city}, {site.address.region}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-line-deep py-7 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.legalName}, org.nr{" "}
              {site.orgnr}
            </p>
            <Link
              href="/integritetspolicy"
              className="transition-colors hover:text-white"
            >
              Integritetspolicy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
