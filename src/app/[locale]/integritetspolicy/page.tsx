import type { Metadata } from "next";
import Link from "next/link";
import { getContent, type LocaleParams } from "@/content";
import { localeHref } from "@/lib/i18n";
import { pageMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const { locale, t } = await getContent(params);
  return pageMetadata({
    locale,
    path: "/integritetspolicy",
    title: t.privacy.title,
    description: t.privacy.description,
  });
}

/** Plain policy text: what the site actually collects and why, nothing more. */
export default async function IntegritetspolicyPage({
  params,
}: {
  params: LocaleParams;
}) {
  const { locale, t } = await getContent(params);
  return (
    <>
      <section className="pb-24 pt-16 sm:pb-32 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="display-page text-ink">{t.privacy.heading}</h1>
            <p className="mt-6 lead text-muted">{t.privacy.lead}</p>

            <div className="mt-14 divide-y divide-line border-y border-line">
              {t.privacy.sections.map((section) => (
                <div key={section.title} className="py-9">
                  <h2 className="display-3 text-ink">{section.title}</h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 text-muted">
              {t.privacy.questions}{" "}
              <Link
                href={localeHref(locale, "/kontakt")}
                className="font-semibold text-petrol underline underline-offset-4 hover:text-ink"
              >
                {t.privacy.contactLink}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
