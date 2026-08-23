"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { contactTopics } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition focus:border-petrol focus:ring-2 focus:ring-petrol";

export default function ContactForm({
  defaultTopic,
}: {
  defaultTopic?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const successRef = useRef<HTMLDivElement>(null);

  // Move focus to the confirmation when the form is replaced by it
  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="rounded-2xl border border-ok/30 bg-ok/10 p-8 text-center outline-none"
        role="status"
      >
        <p className="font-display text-xl font-bold text-ink">
          Tack för ditt meddelande!
        </p>
        <p className="mt-2 text-muted">
          Vi återkommer till dig så snart som möjligt, oftast samma dag.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
          Namn <span className="text-error">*</span>
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={200}
          autoComplete="name"
          className={inputClasses}
          placeholder="Ditt namn"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
          E-post <span className="text-error">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          className={inputClasses}
          placeholder="din@epost.se"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink">
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          maxLength={40}
          autoComplete="tel"
          className={inputClasses}
          placeholder="070-123 45 67"
        />
      </div>
      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-semibold text-ink">
          Vad gäller ditt ärende?
        </label>
        <select
          id="topic"
          name="topic"
          defaultValue={defaultTopic ?? ""}
          className={inputClasses}
        >
          <option value="" disabled>
            Välj område
          </option>
          {contactTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
          Meddelande <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          className={inputClasses}
          placeholder="Berätta kort om ditt projekt eller ärende"
        />
      </div>

      {/* Honeypot – hidden from people, tempting for bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Företag</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-petrol px-8 py-3.5 font-semibold text-white transition-colors hover:bg-petrol-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : null}
          {status === "sending" ? "Skickar…" : "Skicka meddelande"}
        </button>
        {status === "error" ? (
          <p className="mt-3 text-sm font-medium text-error" role="alert">
            Något gick fel. Försök igen eller ring oss direkt.
          </p>
        ) : null}
        <p className="mt-3 text-sm text-muted">
          Vi använder dina uppgifter endast för att besvara ditt meddelande.
        </p>
      </div>
    </form>
  );
}
