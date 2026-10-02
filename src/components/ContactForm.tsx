"use client";

import { useEffect, useId, useRef, useState } from "react";
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

/** A Swedish number has at least seven digits, area code included. */
const isPhone = (value: string) => value.replace(/\D/g, "").length >= 7;

/**
 * A callback request in two steps. It opens with one field, the phone
 * number, because that is all we need to call back. Once a number is typed
 * the optional details unfold below it, and the same button sends either.
 */
export default function ContactForm({
  defaultTopic,
}: {
  defaultTopic?: ContactTopic;
}) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [topic, setTopic] = useState<ContactTopic | "">(defaultTopic ?? "");
  const phoneRef = useRef<HTMLInputElement>(null);
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

  function onPhoneChange(value: string) {
    setPhone(value);
    if (isPhone(value)) {
      setRevealed(true);
      setPhoneError(false);
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isPhone(phone)) {
      setPhoneError(true);
      phoneRef.current?.focus();
      return;
    }

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
        <p className="display-3 text-ink">Tack, vi ringer upp!</p>
        <p className="mt-3 text-ink-soft">
          Vi hör av oss normalt inom en arbetsdag. Brådskande? Ring{" "}
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
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor={`${id}-phone`} className={labelClasses}>
        Ditt telefonnummer
      </label>
      <input
        ref={phoneRef}
        id={`${id}-phone`}
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
        maxLength={40}
        value={phone}
        onChange={(event) => onPhoneChange(event.target.value)}
        aria-invalid={phoneError}
        aria-describedby={`${id}-phone-hint`}
        className={`${inputClasses} text-lg`}
        placeholder="070-123 45 67"
      />
      <p
        id={`${id}-phone-hint`}
        className={`mt-2 text-sm ${phoneError ? "font-medium text-error" : "text-muted"}`}
      >
        {phoneError
          ? "Skriv ditt telefonnummer så ringer vi upp."
          : "Vi ringer upp, normalt inom en arbetsdag."}
      </p>

      {/* The optional details. Hidden and inert until a number is typed, then
          they unfold; none of them is required. */}
      <div
        inert={!revealed}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none ${
          revealed ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="-mx-1 overflow-hidden px-1">
          <div className="space-y-6 pb-2 pt-8">
            <fieldset>
              <legend className={labelClasses}>
                Vad gäller det?{" "}
                <span className="font-normal text-muted">(valfritt)</span>
              </legend>
              <div className="flex flex-wrap gap-2">
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
                    <span className="flex min-h-11 items-center rounded-xs border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-petrol/50 peer-checked:border-petrol peer-checked:bg-petrol peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-copper">
                      {contactTopicLabels[value]}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor={`${id}-name`} className={labelClasses}>
                  Namn{" "}
                  <span className="font-normal text-muted">(valfritt)</span>
                </label>
                <input
                  id={`${id}-name`}
                  name="name"
                  maxLength={200}
                  autoComplete="name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor={`${id}-email`} className={labelClasses}>
                  E-post{" "}
                  <span className="font-normal text-muted">(valfritt)</span>
                </label>
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  maxLength={200}
                  autoComplete="email"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${id}-message`} className={labelClasses}>
                Vad behöver du hjälp med?{" "}
                <span className="font-normal text-muted">(valfritt)</span>
              </label>
              <textarea
                id={`${id}-message`}
                name="message"
                maxLength={5000}
                rows={3}
                className={inputClasses}
                placeholder="Vad ska göras, var och när?"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Honeypot – hidden from people, tempting for bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${id}-company`}>Företag</label>
        <input
          id={`${id}-company`}
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" aria-hidden="true" />
              Skickar…
            </>
          ) : (
            <>
              Ring upp mig
              <ArrowRight aria-hidden="true" />
            </>
          )}
        </button>
        <p className="text-sm text-muted sm:max-w-xs sm:text-right">
          Vi använder uppgifterna bara för ditt ärende.{" "}
          <Link
            href="/integritetspolicy"
            className="underline underline-offset-4 hover:text-ink"
          >
            Integritetspolicy
          </Link>
        </p>
      </div>
      {status === "error" ? (
        <p className="mt-4 text-sm font-medium text-error" role="alert">
          Något gick fel. Försök igen eller ring oss på {site.phone}.
        </p>
      ) : null}
    </form>
  );
}
