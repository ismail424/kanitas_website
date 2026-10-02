import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { careers, contactHref } from "@/lib/site";

const trades = ["Snickare", "Betongarbetare", "Murare", "Byggstädare"];

/** Jobs: who we hire and how to get in touch. */
export default function Careers({ className = "" }: { className?: string }) {
  return (
    <section className={`py-24 sm:py-32 ${className}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal variant="scale" className="lg:col-span-6">
          <div className="relative aspect-[3/2] overflow-hidden bg-paper-2">
            <Photo name="team" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
          <h2 className="display-2 text-ink">{careers.title}</h2>
          <p className="mt-5 lead text-muted">{careers.text}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {trades.map((trade) => (
              <li
                key={trade}
                className="rounded-full border border-line px-4 py-1.5 text-sm font-medium text-ink-soft"
              >
                {trade}
              </li>
            ))}
          </ul>
          <Link
            href={contactHref(careers.topic)}
            className="btn btn-primary mt-10"
          >
            Skicka en intresseanmälan
            <ArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
