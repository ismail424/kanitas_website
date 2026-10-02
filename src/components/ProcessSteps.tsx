import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/site";

/*
 * Line icons for the four steps, drawn on a 48-unit grid. Every stroke has
 * pathLength 1 so the "draw" animation (globals.css) can trace it in as the
 * step scrolls into view.
 */
const icons = [
  // A phone with a call going out.
  <g key="phone">
    <path
      pathLength={1}
      className="draw"
      d="M17 7h10a3 3 0 0 1 3 3v28a3 3 0 0 1-3 3H17a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3Z"
    />
    <path pathLength={1} className="draw" d="M20 35h4" />
    <path pathLength={1} className="draw" d="M35 16a8 8 0 0 1 0 12" />
    <path pathLength={1} className="draw" d="M39 12a14 14 0 0 1 0 20" />
  </g>,
  // A house looked over with a magnifier.
  <g key="visit">
    <path pathLength={1} className="draw" d="M6 23 20 11l14 12" />
    <path pathLength={1} className="draw" d="M10 20v18h20V20" />
    <path pathLength={1} className="draw" d="M17 38v-9h6v9" />
    <circle pathLength={1} className="draw" cx="34" cy="31" r="6" />
    <path pathLength={1} className="draw" d="m38.5 35.5 5 5" />
  </g>,
  // A quote with a tick.
  <g key="quote">
    <path pathLength={1} className="draw" d="M12 5h17l9 9v29H12Z" />
    <path pathLength={1} className="draw" d="M29 5v9h9" />
    <path pathLength={1} className="draw" d="M18 21h14M18 27h14" />
    <path pathLength={1} className="draw" d="m19 35 4 4 8-8" />
  </g>,
  // A hard hat.
  <g key="work">
    <path pathLength={1} className="draw" d="M8 33a16 16 0 0 1 32 0" />
    <path pathLength={1} className="draw" d="M5 33h38v5H5Z" />
    <path pathLength={1} className="draw" d="M20 17v-5h8v5" />
    <path pathLength={1} className="draw" d="M24 12v21" />
  </g>,
];

/**
 * How a job starts, in four steps, each with a line icon that draws itself.
 * A page can give the steps its own heading.
 */
export default function ProcessSteps({
  title = "Så går det till",
  className = "",
}: {
  title?: string;
  className?: string;
}) {
  return (
    <section className={`py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="display-2 max-w-2xl text-ink">{title}</h2>
        </Reveal>
        <div className="relative mt-16">
          {/* The thread that joins the steps on a wide screen. */}
          <div
            aria-hidden="true"
            className="absolute left-8 right-[18%] top-8 hidden lg:block"
          >
            <Reveal variant="line" className="h-px bg-line" />
          </div>
          <ol className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.title}
                as="li"
                delay={index * 140}
                className="relative"
              >
                <div className="relative grid h-16 w-16 place-items-center rounded-full border border-line bg-paper">
                  <svg
                    viewBox="0 0 48 48"
                    className="h-9 w-9 fill-none stroke-petrol"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {icons[index]}
                  </svg>
                  <span className="index absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-copper-ink text-xs text-white">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 title text-ink">{step.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-muted">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
