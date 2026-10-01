import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site, type ContactTopic } from "@/lib/site";

export default function ContactSection({
  title = "Skicka en förfrågan",
  lead = "Ange omfattning, plats och önskad tidpunkt så återkommer vi med ett förslag. Kostnadsfritt och utan förpliktelser.",
  topic,
}: {
  title?: string;
  lead?: string;
  /** Pre-selected ärende in the form, e.g. "Bygg" on the bygg page */
  topic?: ContactTopic;
}) {
  return (
    <section id="kontakt" className="border-t border-line bg-paper-2">
      <div className="mx-auto grid grid-cols-1 max-w-7xl gap-14 px-4 py-24 sm:px-6 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-5">
          <SectionHeading eyebrow="Kontakt" title={title} lead={lead} />

          <dl className="mt-12 divide-y divide-line border-y border-line">
            <div className="py-5">
              <dt className="label text-muted">Telefon</dt>
              <dd className="mt-1.5">
                <a
                  href={site.phoneHref}
                  className="display-3 text-petrol transition-colors hover:text-ink"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="py-5">
              <dt className="label text-muted">E-post</dt>
              <dd className="mt-1.5">
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg font-semibold text-ink transition-colors hover:text-petrol"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="py-5">
              <dt className="label text-muted">Ort</dt>
              <dd className="mt-1.5 text-lg font-semibold text-ink">
                {site.address.city}, {site.address.region}
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-muted">
            Samma nummer och adress gäller alla fyra verksamheter. Vi arbetar i
            hela Storstockholm.
          </p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <div className="border border-line bg-paper p-6 sm:p-10">
            <ContactForm defaultTopic={topic} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
