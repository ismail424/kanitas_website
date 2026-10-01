import Link from "next/link";
import Photo from "@/components/Photo";
import type { PhotoName } from "@/lib/site";

export type Crumb = { href: string; label: string };

/**
 * Hero for every page below the home page: text on deep petrol, and the page's
 * photograph bleeding off the right edge from where the text column ends. On a
 * phone the photograph follows the text instead of sitting behind it, so the
 * headline never competes with an image for contrast.
 */
export default function PageHero({
  crumbs,
  kicker,
  title,
  lead,
  photo,
  actions,
}: {
  /** Trail after "Kanitas"; the last crumb is the current page. */
  crumbs: Crumb[];
  /** Above the headline: a lockup or an eyebrow. */
  kicker?: React.ReactNode;
  title: string;
  lead?: string;
  photo?: PhotoName;
  actions?: React.ReactNode;
}) {
  const trail = [{ href: "/", label: "Kanitas" }, ...crumbs];

  return (
    <section className="surface-blueprint overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-20 ${
            photo ? "lg:w-7/12 lg:pr-14" : "max-w-3xl"
          }`}
        >
          <nav aria-label="Brödsmulor">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/60">
              {trail.map((crumb, index) => {
                const current = index === trail.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-2">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-white/35">
                        /
                      </span>
                    ) : null}
                    {current ? (
                      <span aria-current="page" className="text-white/85">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-white"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          {kicker ? <div className="mt-12 sm:mt-14">{kicker}</div> : null}

          <h1
            className={`display-1 text-white ${kicker ? "mt-7" : "mt-12 sm:mt-14"}`}
          >
            {title}
          </h1>
          {lead ? (
            <p className="mt-7 max-w-2xl lead text-white/75">{lead}</p>
          ) : null}
          {actions ? (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {actions}
            </div>
          ) : null}
        </div>
      </div>

      {photo ? (
        <div className="hero-photo relative aspect-[16/10] sm:aspect-[2/1] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto">
          <Photo name={photo} priority sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      ) : null}
    </section>
  );
}
