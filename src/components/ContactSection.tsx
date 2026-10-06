import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site, type ContactTopic } from "@/lib/site";

export default function ContactSection({
  title = "Skicka en förfrågan",
  lead = "Lämna ditt nummer så ringer vi upp. Offerten är kostnadsfri.",
  topic,
  as = "h2",
  className = "py-16 sm:py-20",
}: {
  title?: string;
  lead?: string;
  /** Pre-selected ärende in the form, e.g. "Bygg" on the bygg page */
  topic?: ContactTopic;
  /** h1 where the section is the page, as on /kontakt */
  as?: "h1" | "h2";
  /** Vertical padding, so a page can tighten it. */
  className?: string;
}) {
  return (
    <section id="kontakt" className={`bg-paper-2 ${className}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-5">
          <SectionHeading as={as} title={title} lead={lead} />

          <dl className="mt-12 space-y-7">
            <div>
              <dt className="text-sm text-muted">Telefon</dt>
              <dd className="mt-1">
                <a
                  href={site.phoneHref}
                  className="display-3 text-petrol transition-colors hover:text-ink"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">E-post</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg font-semibold text-ink transition-colors hover:text-petrol"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Kontor</dt>
              <dd className="mt-1 text-lg font-semibold text-ink">
                {site.address.city}, {site.address.region}
              </dd>
            </div>
          </dl>
        </Reveal>

        {/* On a phone the form runs edge to edge, so the fields keep their
            full width instead of sitting inside two sets of margins. */}
        <Reveal className="lg:col-span-7">
          <div className="-mx-5 bg-paper px-5 py-8 sm:mx-0 sm:p-10">
            <ContactForm defaultTopic={topic} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
