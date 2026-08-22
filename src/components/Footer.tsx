import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { activeAreas, certifications, site } from "@/lib/site";

export default function Footer() {
  return (
    <>
      {/* Certification band — light, calm, evenly sized */}
      <section
        aria-label="Certifikat och medlemskap"
        className="border-t border-line bg-paper-2"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Trygghet, avtal & certifikat
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {certifications.map((cert) => (
              <Image
                key={cert.name}
                src={cert.image}
                alt={cert.name}
                width={120}
                height={48}
                title={cert.name}
                className="h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-umbra text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <Logo on="dark" />
            <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-white/60">
              Kanitas är ett bygg- och städföretag i Järfälla. Sedan{" "}
              {site.founded} utför vi byggentreprenader, byggservice och
              städuppdrag i hela Storstockholm.
            </p>
          </div>

          <nav aria-label="Verksamheter">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-sand">
              Verksamheter
            </p>
            <ul className="mt-6 space-y-3.5">
              {activeAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/${area.slug}`}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Företaget">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-sand">
              Företaget
            </p>
            <ul className="mt-6 space-y-3.5">
              <li>
                <Link
                  href="/om-oss"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link
                  href="/om-oss#referenser"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Referenser
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-sand">
              Kontakt
            </p>
            <ul className="mt-6 space-y-3.5 text-white/70">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sand" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-sand" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-sand" aria-hidden="true" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </li>
              <li className="pt-1 text-sm text-white/45">{site.openingHours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line-umbra">
          <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs font-medium tracking-wide text-white/40 sm:px-6 lg:px-8">
            © {new Date().getFullYear()} {site.legalName} · Org.nr{" "}
            {site.orgnr}
          </p>
        </div>
      </footer>
    </>
  );
}
