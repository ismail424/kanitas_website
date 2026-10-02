import Reveal from "@/components/Reveal";
import { history } from "@/lib/site";

/**
 * The group's story as a timeline: a line that draws itself along, and each
 * step arriving on it in turn. Vertical on a phone, horizontal from desktop.
 */
export default function History() {
  return (
    <div className="relative mt-14">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[7px] hidden lg:block"
      >
        <Reveal variant="line" className="h-px bg-line-deep" />
      </div>
      <ol className="relative grid grid-cols-1 gap-10 border-l border-line-deep pl-8 lg:grid-cols-4 lg:gap-8 lg:border-l-0 lg:pl-0">
        {history.map((step, index) => (
          <Reveal
            key={step.title}
            as="li"
            delay={300 + index * 220}
            className="relative lg:pt-10"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[2.45rem] top-1 h-4 w-4 rounded-full border-2 border-copper bg-paper-2 lg:left-0 lg:top-0"
            />
            <p className="text-sm font-semibold text-copper-ink">{step.when}</p>
            <h3 className="mt-2 title text-ink">{step.title}</h3>
            <p className="mt-2 max-w-xs leading-relaxed text-muted">
              {step.text}
            </p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
