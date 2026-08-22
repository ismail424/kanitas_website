import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60svh] items-center">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <p className="eyebrow justify-center text-pine">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink">
          Sidan kunde inte hittas
        </h1>
        <p className="mt-4 text-lg text-muted">
          Sidan du letar efter finns inte längre eller har flyttats.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-pine px-7 py-3 font-semibold text-white transition-colors hover:bg-pine-deep"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Till startsidan
        </Link>
      </div>
    </section>
  );
}
