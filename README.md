# Kanitas – kanitas.se

Webbplats för Kanitas, en familjeägd koncern i Järfälla med fyra
verksamhetsområden: bygg, städ, fastigheter och bil.

## Teknologier

- [Next.js 15](https://nextjs.org/) – React-ramverk (App Router, server components)
- [Tailwind CSS v4](https://tailwindcss.com/) – styling med designtokens i `src/app/globals.css`
- [TypeScript](https://www.typescriptlang.org/) – statisk typning
- [lucide-react](https://lucide.dev/) – ikoner
- [nodemailer](https://nodemailer.com/) + [zod](https://zod.dev/) – kontaktformulärets API

## Kom igång

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

### Produktion

```bash
npm run build
npm run start
```

### Miljövariabler

Kontaktformuläret skickar e-post via SMTP och behöver:

| Variabel | Beskrivning | Standard |
| --- | --- | --- |
| `EMAIL_PASSWORD` | SMTP-lösenord (krävs) | – |
| `SMTP_HOST` | SMTP-server | `send.one.com` |
| `SMTP_PORT` | SMTP-port | `465` |
| `SMTP_USER` | SMTP-användare/avsändare | `info@kanitas.se` |
| `CONTACT_RECIPIENT` | Mottagare av formulärmejl | `info@kanitas.se` |

## Struktur

- `src/app` – sidor (startsida, /bygg, /stad, /fastigheter, /bil, /om-oss, /kontakt), layout, API, sitemap/robots
- `src/components` – återanvändbara komponenter
- `src/lib/site.ts` – all webbplatsdata: kontaktuppgifter, verksamhetsområden, referenser, koncernbolag
- `public/images/photos` – optimerade foton (Unsplash)
- `public/references`, `public/images/cert` – kundlogotyper och certifikat

Företagsfakta och kontaktuppgifter ändras endast i `src/lib/site.ts`.
