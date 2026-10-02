# Kommandon och riktlinjer för Kanitas webbplats

## Kommandon
- Utveckling: `npm run dev` (använder turbopack)
- Bygge: `npm run build`
- Start: `npm run start`
- Lint: `npm run lint`

## Kodstilar
- Använd Typescript för alla komponenter
- Följ Next.js 15 konventioner och App Router (server components som standard)
- Använd Tailwind CSS v4 för all styling — designtokens definieras i `src/app/globals.css` under `@theme`
- Inga hårdkodade färger i komponenter: använd tokens (paper, ink, muted, petrol, copper m.fl.)
- Typsnitt: Archivo (rubriker, med breddaxel) och Inter (brödtext); typklasser som `display-1`, `title`, `label` och knappar (`btn btn-primary` m.fl.) definieras i `globals.css`
- Logotypen (`src/components/logo-paths.ts`) är ren geometri: K-märket ritat i exakta polygoner och ordmärket satt i Jost som konturer. Ändra inte koordinaterna för hand
- Ikoner: lucide-react
- Språk: Svenska för användargränssnitt, engelska för kod och kommentarer
- Filstruktur:
  - `/src/app`: Sidor, layout, API-routes, sitemap/robots
  - `/src/components`: Återanvändbara komponenter
  - `/src/lib/site.ts`: All webbplatsdata (kontaktuppgifter, verksamheter, fotoregister, referenser, koncernbolag)
  - `/public`: Statiska filer (bilder, fonts)

## Viktigt
- Innehållsspråk: Svenska
- Webbplatsens fokus: Koncernen Kanitas med fyra verksamheter — bygg (kärnverksamhet), bemanning och byggstädning (Kanitas ENT), maskiner och fordon (Kanitas Trading) samt lokaler (Kanitas Fastigheter)
- Kontaktuppgifter och företagsfakta ändras ENDAST i `src/lib/site.ts`
- Kontaktformuläret skickar via `/api/send-email` (SMTP-konfiguration via miljövariabler, mottagare är hårdkodad server-side av säkerhetsskäl)
