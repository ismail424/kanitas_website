import { Plus } from "lucide-react";

/**
 * Questions as native disclosures: every answer is in the HTML for search
 * engines and the FAQPage data, but a reader scans questions, not a wall of
 * answers. Opening animates where the browser supports it (globals.css).
 */
export default function FaqList({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="faq group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <span className="title text-ink transition-colors group-hover:text-petrol">
              {item.q}
            </span>
            <span
              aria-hidden="true"
              className="-mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-xs border border-line text-petrol transition-colors group-open:border-petrol group-open:bg-petrol group-open:text-white"
            >
              <Plus className="h-4 w-4 transition-transform duration-300 group-open:rotate-45" />
            </span>
          </summary>
          <p className="max-w-3xl pb-7 pr-12 leading-relaxed text-ink-soft">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
