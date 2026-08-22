import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { areas, certifications, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Certification strip */}
      <div className="border-b border-line-dark">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-4 py-10 sm:px-6 lg:px-8">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center rounded-xl bg-white px-4 py-2"
              title={cert.name}
            >
              <Image
                src={cert.image}
                alt={cert.name}
                width={110}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo on="dark" />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-white/65">
            Familjeägd koncern i Järfälla med verksamhet inom bygg, städ,
            fastigheter och bil. Kvalitet och pålitlighet sedan {site.founded}.
          </p>
        </div>

        <nav aria-label="Verksamheter">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Verksamheter
          </p>
          <ul className="mt-5 space-y-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/${area.slug}`}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Företaget">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Företaget
          </p>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                href="/om-oss"
                className="text-white/75 transition-colors hover:text-white"
              >
                Om oss
              </Link>
            </li>
            <li>
              <Link
                href="/om-oss#referenser"
                className="text-white/75 transition-colors hover:text-white"
              >
                Referenser
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className="text-white/75 transition-colors hover:text-white"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Kontakt
          </p>
          <ul className="mt-5 space-y-3 text-white/75">
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-amber" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-amber" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-amber" aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </span>
            </li>
            <li className="pt-1 text-sm text-white/55">{site.openingHours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName} · Org.nr {site.orgnr}
          </p>
          <p>
            {site.address.street}, {site.address.postalCode} {site.address.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
