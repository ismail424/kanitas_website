import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ProcessSteps from "@/components/ProcessSteps";
import { getContent, type LocaleParams } from "@/content";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const { locale, t } = await getContent(params);
  return pageMetadata({
    locale,
    path: "/kontakt",
    title: t.contactPage.title,
    description: t.contactPage.description,
  });
}

export default async function KontaktPage({
  params,
}: {
  params: LocaleParams;
}) {
  const { locale, t } = await getContent(params);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.common.home,
        item: absoluteUrl(locale, "/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t.contactPage.breadcrumb,
        item: absoluteUrl(locale, "/kontakt"),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactSection
        locale={locale}
        as="h1"
        title={t.contactPage.heading}
        lead={t.contactPage.lead}
        className="pb-16 pt-16 sm:pb-20 sm:pt-20"
      />

      <ProcessSteps locale={locale} className="border-t border-line" />
    </>
  );
}
