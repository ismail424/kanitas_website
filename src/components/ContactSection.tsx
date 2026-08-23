import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function ContactSection({
  title = "Skicka en förfrågan",
  lead = "Ange omfattning, plats och önskad tidpunkt så återkommer vi med ett förslag. Kostnadsfritt och utan förpliktelser.",
  topic,
}: {
  title?: string;
  lead?: string;
  /** Pre-selected ärende in the form, e.g. "Bygg" on the bygg page */
  topic?: string;
}) {
  return (
    <section id="kontakt" className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Kontakt" title={title} lead={lead} />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <ul className="space-y-6">
              <li className="border-t border-line pt-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                    Telefon
                  </p>
                  <a
                    href={site.phoneHref}
                    className="text-lg font-semibold text-ink hover:text-petrol"
                  >
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="border-t border-line pt-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                    E-post
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lg font-semibold text-ink hover:text-petrol"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="border-t border-line pt-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                    Ort
                  </p>
                  <p className="text-lg font-semibold text-ink">
                    {site.address.city}, {site.address.region}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Vi arbetar i hela Storstockholm.
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <div className="border-t border-line pt-8">
              <ContactForm defaultTopic={topic} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
