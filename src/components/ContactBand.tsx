import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

/**
 * Closing call to action for pages without a form of their own: the way to
 * the form, plus the number and address for those who would rather call or
 * write.
 */
export default function ContactBand({
  title = "Begär en offert",
}: {
  title?: string;
}) {
  return (
    <section className="bg-paper-2">
      <Reveal className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-12 lg:items-end lg:gap-16 lg:px-8">
        <div className="lg:col-span-7">
          <h2 className="display-2 text-ink">{title}</h2>
          <p className="mt-4 lead text-muted">
            Offerten är kostnadsfri. Vi svarar normalt inom ett dygn.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 lg:col-span-5 lg:items-end">
          <Link href="/kontakt" className="btn btn-primary">
            Skicka en förfrågan
            <ArrowRight aria-hidden="true" />
          </Link>
          <p className="flex flex-wrap gap-x-6 gap-y-2 text-ink-soft">
            <a
              href={site.phoneHref}
              className="font-semibold text-ink transition-colors hover:text-petrol"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-petrol"
            >
              {site.email}
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
