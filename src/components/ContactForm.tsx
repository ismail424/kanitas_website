"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  contactTopicLabels,
  contactTopics,
  site,
  type ContactTopic,
} from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full rounded-xs border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/70 outline-none transition focus:border-petrol focus:ring-2 focus:ring-petrol/25";

const labelClasses = "mb-2 block text-sm font-semibold text-ink";

const isTopic = (value: string | null): value is ContactTopic =>
  contactTopics.includes(value as ContactTopic);

export default function ContactForm({
  defaultTopic,
}: {
  defaultTopic?: ContactTopic;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [topic, setTopic] = useState<ContactTopic | "">(defaultTopic ?? "");
  const successRef = useRef<HTMLDivElement>(null);

  // A link such as /kontakt?amne=Trading arrives with its ärende chosen. Read
  // on the client so the page itself can stay static.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("amne");
    if (isTopic(requested)) setTopic(requested);
  }, []);

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
        className="border-l-4 border-ok bg-ok/10 p-8 outline-none"
        role="status"
      >
        <p className="display-3 text-ink">Tack!</p>
        <p className="mt-3 text-ink-soft">
          Vi svarar normalt inom ett dygn. Brådskande? Ring{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-petrol underline underline-offset-4"
          >
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-6">
      <fieldset className="sm:col-span-6">
        <legend className={labelClasses}>Vad gäller ärendet?</legend>
        <div className="grid grid-cols-1 gap-2 min-[22rem]:grid-cols-2 lg:grid-cols-3">
          {contactTopics.map((value) => (
            <label key={value} className="relative block cursor-pointer">
              <input
                type="radio"
                name="topic"
                value={value}
                checked={topic === value}
                onChange={() => setTopic(value)}
                className="peer sr-only"
              />
              <span className="flex h-full min-h-12 items-center rounded-xs border border-line bg-paper px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors sm:px-4 sm:text-base hover:border-petrol/50 peer-checked:border-petrol peer-checked:bg-petrol peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-copper">
                {contactTopicLabels[value]}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-3">
        <label htmlFor="name" className={labelClasses}>
          Namn <span className="text-error">*</span>
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={200}
          autoComplete="name"
          className={inputClasses}
          placeholder="Förnamn Efternamn"
        />
      </div>
      <div className="sm:col-span-3">
        <label htmlFor="phone" className={labelClasses}>
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
      <div className="sm:col-span-6">
        <label htmlFor="email" className={labelClasses}>
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
          placeholder="namn@foretag.se"
        />
      </div>
      <div className="sm:col-span-6">
        <label htmlFor="message" className={labelClasses}>
          Meddelande <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          className={inputClasses}
          placeholder="Vad ska göras, var och när?"
        />
      </div>

      {/* Honeypot – hidden from people, tempting for bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Företag</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted sm:order-1 sm:max-w-xs">
          Vi använder uppgifterna bara för att svara dig. Läs vår{" "}
          <Link
            href="/integritetspolicy"
            className="underline underline-offset-4 hover:text-ink"
          >
            integritetspolicy
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:order-2 sm:w-auto"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" aria-hidden="true" />
              Skickar…
            </>
          ) : (
            <>
              Skicka förfrågan
              <ArrowRight aria-hidden="true" />
            </>
          )}
        </button>
      </div>
      {status === "error" ? (
        <p className="text-sm font-medium text-error sm:col-span-6" role="alert">
          Något gick fel. Försök igen eller ring oss på {site.phone}.
        </p>
      ) : null}
    </form>
  );
}
