import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { dictionaries } from "@/content";
import { localeHref, type Locale } from "@/lib/i18n";
import {
  businessHref,
  businessSlugs,
  businesses,
  groupCompanies,
  site,
  type CompanyName,
} from "@/lib/site";

/** The verksamhet a legal entity carries first, so each box can link to it. */
const businessFor = (companyName: CompanyName) =>
  businessSlugs.find((slug) => businesses[slug].entities[0] === companyName);

/**
 * The group as a family tree: the parent company above, the four operating
 * companies below, joined by connecting lines. Org.nr and what
 * each company does sit in its box, the way a supplier register lists them.
 */
export default function GroupTree({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const parent = groupCompanies.find((c) => c.orgnr === site.orgnr)!;
  // The operating companies in the same order as the verksamheter.
  const children = businessSlugs
    .map((slug) =>
      groupCompanies.find((c) => c.name === businesses[slug].entities[0]),
    )
    .filter(
      (c): c is (typeof groupCompanies)[number] =>
        c !== undefined && c.orgnr !== site.orgnr,
    );

  return (
    <div>
      <Reveal className="mx-auto max-w-sm border-t-4 border-petrol bg-paper p-6 text-center shadow-card">
        <p className="text-sm font-medium text-copper-ink">
          {t.about.parentCompany}
        </p>
        <p className="mt-1 title text-ink">{parent.name}</p>
        <p className="index mt-1 text-sm text-muted">
          {t.common.orgNr} {parent.orgnr}
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          {t.companyRoles[parent.name]}
        </p>
      </Reveal>

      {/* Connectors, wide screens only: down from the parent, across, and
          down to each company. */}
      <div aria-hidden="true" className="relative hidden h-16 lg:block">
        <div className="absolute left-1/2 top-0 h-8 w-px bg-line-deep" />
        {/* Card centres in a four-column grid with 1.5rem gaps, written
            pre-multiplied: nested calc trips the CSS optimiser. */}
        <div className="absolute left-[calc(12.5%-0.5625rem)] right-[calc(12.5%-0.5625rem)] top-8 h-px bg-line-deep" />
        <div className="absolute left-[calc(12.5%-0.5625rem)] top-8 h-8 w-px bg-line-deep" />
        <div className="absolute left-[calc(37.5%-0.1875rem)] top-8 h-8 w-px bg-line-deep" />
        <div className="absolute left-[calc(62.5%+0.1875rem)] top-8 h-8 w-px bg-line-deep" />
        <div className="absolute left-[calc(87.5%+0.5625rem)] top-8 h-8 w-px bg-line-deep" />
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4 lg:gap-6">
        {children.map((company) => {
          const business = businessFor(company.name);
          return (
            <Reveal
              key={company.orgnr}
              as="li"
              className="flex flex-col border border-line bg-paper p-6"
            >
              <p className="title text-ink">{company.name}</p>
              <p className="index mt-1 text-sm text-muted">
                {t.common.orgNr} {company.orgnr}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {t.companyRoles[company.name]}
              </p>
              {business ? (
                <Link
                  href={localeHref(locale, businessHref(business))}
                  className="link-arrow mt-auto pt-5 text-sm text-petrol hover:text-ink"
                >
                  {t.businesses[business].heading}
                  <ArrowRight aria-hidden="true" />
                </Link>
              ) : null}
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
