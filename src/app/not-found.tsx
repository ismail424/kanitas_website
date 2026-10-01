import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { indexNumber } from "@/lib/format";
import { businessHref, businesses } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-petrol">404</p>
          <h1 className="mt-5 display-1 text-ink">Sidan kunde inte hittas</h1>
          <p className="mt-6 lead text-muted">
            Sidan du letar efter finns inte längre eller har flyttats. Någon av
            de här kommer du troligen vidare med.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {businesses.map((business, index) => (
            <li key={business.slug} className="bg-paper">
              <Link
                href={businessHref(business)}
                className="group flex h-full gap-4 p-6 transition-colors hover:bg-paper-2"
              >
                <span className="index pt-0.5 text-sm text-copper-ink">
                  {indexNumber(index)}
                </span>
                <span>
                  <span className="block title text-ink group-hover:text-petrol">
                    {business.heading}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {business.name}
                  </span>
                </span>
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
