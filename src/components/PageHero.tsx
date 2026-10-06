import Photo from "@/components/Photo";
import type { PhotoName } from "@/lib/site";

/**
 * Hero for every page below the home page: headline and a short lead on
 * petrol, and the page's photograph bleeding off the right edge from where the
 * text column ends. On a phone the photograph follows the text.
 */
export default function PageHero({
  title,
  lead,
  photo,
  actions,
}: {
  title: string;
  lead?: string;
  photo: PhotoName;
  actions?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-petrol-darker">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:flex lg:min-h-[26rem] lg:items-center lg:px-8">
        <div className="py-14 sm:py-16 lg:w-7/12 lg:pr-16">
          <h1 className="display-page text-white">{title}</h1>
          {lead ? (
            <p className="mt-6 max-w-xl lead text-white/75">{lead}</p>
          ) : null}
          {actions ? (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              {actions}
            </div>
          ) : null}
        </div>
      </div>

      <div className="hero-photo relative aspect-[16/10] sm:aspect-[2/1] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto">
        <Photo name={photo} priority sizes="(min-width: 1024px) 45vw, 100vw" />
      </div>
    </section>
  );
}
