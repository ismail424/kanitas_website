import { FileText, HardHat, Phone, Ruler } from "lucide-react";
import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/site";

/** One icon per step, in the order of `processSteps`. */
const icons = [Phone, Ruler, FileText, HardHat];

/** How a job starts, in four steps. A page can give the steps its own heading. */
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
            className="absolute left-8 right-[18%] top-8 hidden h-px bg-line lg:block"
          />
          <ol className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {processSteps.map((step, index) => {
              const Icon = icons[index];
              return (
                <Reveal
                  key={step.title}
                  as="li"
                  delay={index * 90}
                  className="relative"
                >
                  <div className="relative grid h-16 w-16 place-items-center rounded-full border border-line bg-paper">
                    <Icon
                      className="h-7 w-7 text-petrol"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span className="index absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-copper-ink text-xs text-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 title text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-xs leading-relaxed text-muted">
                    {step.text}
                  </p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
