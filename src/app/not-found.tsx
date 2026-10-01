import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { businessHref, businesses } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="pb-24 pt-16 sm:pb-32 sm:pt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-muted">Fel 404</p>
          <h1 className="mt-4 display-page text-ink">Sidan finns inte</h1>
          <p className="mt-6 lead text-muted">
            Den kan ha flyttats eller tagits bort. Här är våra verksamheter:
          </p>
        </div>

        <ul className="mt-12 grid max-w-4xl grid-cols-1 gap-x-12 sm:grid-cols-2">
          {businesses.map((business) => (
            <li key={business.slug} className="border-t border-line">
              <Link
                href={businessHref(business)}
                className="group flex items-center justify-between gap-6 py-5"
              >
                <span>
                  <span className="block title text-ink transition-colors group-hover:text-petrol">
                    {business.heading}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {business.name}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-petrol transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className="btn btn-primary mt-12">
          <ArrowLeft aria-hidden="true" />
          Till startsidan
        </Link>
      </div>
    </section>
  );
}
