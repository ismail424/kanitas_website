import Link from "next/link";
import Image from "next/image";
import { LogoLockup, Mark } from "@/components/Logo";
import { indexNumber } from "@/lib/format";
import { businessHref, businesses, certifications, site } from "@/lib/site";

export default function Footer() {
  return (
    <>
      {/* Certification band. The marks are flattened into the band so they
          read as one row of credentials, not five pasted white boxes. */}
      <section
        aria-label="Certifikat och medlemskap"
        className="border-t border-line bg-paper"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:justify-between lg:gap-12 lg:px-8">
          <p className="label shrink-0 text-muted">
            Avtal, kreditvärdighet & medlemskap
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:justify-end">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={120}
                  height={48}
                  title={cert.name}
                  className="logo-flat h-10 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="relative isolate overflow-hidden bg-petrol-darker text-white">
        {/* The K, large and quiet, as the footer's one piece of graphics. */}
        <Mark
          className="pointer-events-none absolute -bottom-24 -right-16 -z-10 h-[30rem] w-auto fill-white/[0.035] sm:-right-8"
        />

        <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <LogoLockup on="dark" className="h-16 w-auto" />
              <p className="mt-7 max-w-sm text-[0.95rem] leading-relaxed text-white/65">
                Byggentreprenader, bemanning och byggstädning, maskiner och
                fordon samt lokaler att hyra. Fyra verksamheter i Järfälla, med
                egen personal på kollektivavtal sedan {site.founded}.
              </p>
            </div>

            <nav aria-label="Verksamheter" className="lg:col-span-4">
              <p className="label text-copper-soft">Verksamheter</p>
              <ul className="mt-6 divide-y divide-line-deep border-y border-line-deep">
                {businesses.map((business, index) => (
                  <li key={business.slug}>
                    <Link
                      href={businessHref(business)}
                      className="group flex items-baseline gap-4 py-3 transition-colors"
                    >
                      <span className="index w-6 shrink-0 text-xs text-white/50">
                        {indexNumber(index)}
                      </span>
                      <span className="text-white/85 transition-colors group-hover:text-white">
                        {business.heading}
                        <span className="text-white/50"> · {business.name}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-4 lg:gap-8">
              <nav aria-label="Företaget">
                <p className="label text-copper-soft">Företaget</p>
                <ul className="mt-6 space-y-3">
                  {[
                    { href: "/om-oss", label: "Om oss" },
                    { href: "/om-oss#bolagen", label: "Bolagen" },
                    { href: "/om-oss#referenser", label: "Referenser" },
                    { href: "/kontakt", label: "Kontakt" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-white/75 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <p className="label text-copper-soft">Kontakt</p>
                <ul className="mt-6 space-y-3 text-white/75">
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
          </div>

          <div className="mt-20 flex flex-col gap-4 border-t border-line-deep py-7 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {site.legalName}. Alla rättigheter
              förbehållna.
              <span className="mx-2 text-white/30" aria-hidden="true">
                |
              </span>
              <span className="whitespace-nowrap">Org.nr {site.orgnr}</span>
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link
                  href="/integritetspolicy"
                  className="transition-colors hover:text-white"
                >
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <Link
                  href="/om-oss#bolagen"
                  className="transition-colors hover:text-white"
                >
                  Bolagsuppgifter
                </Link>
              </li>
              <li>Verksamma i hela Storstockholm</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
