import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { dictionaries } from "@/content";
import { localeHref, type Locale } from "@/lib/i18n";
import { careersTopic, contactHref } from "@/lib/site";

/** Jobs: who we hire and how to get in touch. */
export default function Careers({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const t = dictionaries[locale];
  const careers = t.careers;
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[3/2] overflow-hidden bg-paper-2">
            <Photo
              name="team"
              alt={t.photoAlt.team}
              sizes="(min-width: 1280px) 576px, (min-width: 1024px) calc(50vw - 64px), 100vw"
            />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8">
          <h2 className="display-2 text-ink">{careers.title}</h2>
          <p className="mt-5 lead text-muted">{careers.text}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {careers.trades.map((trade) => (
              <li
                key={trade}
                className="rounded-full border border-line bg-paper-2 px-4 py-2 text-sm font-medium text-ink"
              >
                {trade}
              </li>
            ))}
          </ul>
          <Link
            href={localeHref(locale, contactHref(careersTopic))}
            className="btn btn-primary mt-10"
          >
            {careers.cta}
            <ArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
