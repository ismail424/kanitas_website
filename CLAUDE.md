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
- Logotypen (`src/components/logo-paths.ts`) är ren geometri: namnet KANITAS i Mona Sans som konturer, i en färg, där K:ets nedre ben står fritt. K:et ensamt är favikon och appikon (`src/app/icon.svg` följer webbläsarens ljusa/mörka läge). Ändra inte koordinaterna för hand
- Ikoner: lucide-react
- Språk: Engelska för kod och kommentarer. Ingen synlig text hårdkodas i komponenter, den ligger i ordlistorna under `src/content`
- Filstruktur:
  - `/src/app/[locale]`: Sidor och layout, en gång för alla språk
  - `/src/app/[locale]/bygg/[service]`: En sida per byggtjänst (badrumsrenovering, renovering, byggservice, brf, underentreprenor), så att sökningar som "badrumsrenovering järfälla" landar på rätt sida. Uppbyggnad i `servicePages` i `site.ts`, text under `services` i ordlistorna
  - `/src/app`: API-routes, sitemap/robots, ikoner
  - `/src/components`: Återanvändbara komponenter (får `locale` som prop)
  - `/src/content`: All text per språk: `sv.ts` är källan, `en.ts`, `bs.ts`, `de.ts`, `fi.ts` översättningar, `types.ts` formen alla måste följa
  - `/src/lib/site.ts`: Fakta och sidornas uppbyggnad (kontaktuppgifter, verksamheter, fotoregister, referenser, koncernbolag)
  - `/src/lib/i18n.ts`: Språken, och länkar med rätt språkprefix (`localeHref`)
  - `/public`: Statiska filer (bilder, fonts)

## Viktigt
- Innehållsspråk: Svenska på roten (`/bygg`), samt engelska, bosniska, tyska och finska under `/en`, `/bs`, `/de`, `/fi` (`/en/bygg`). `next.config.ts` skriver om rotens sökvägar till `/sv` internt; `/sv/...` omdirigeras till roten
- Ändrad eller ny text ändras i alla fem ordlistor; TypeScript stoppar bygget om någon saknas. Interna länkar skrivs utan prefix och går genom `localeHref`
- Varje sida får canonical, hreflang och OpenGraph via `pageMetadata` i `site.ts`; sitemapen listar alla språkversioner
- Webbplatsens fokus: Koncernen Kanitas med fyra verksamheter — bygg (kärnverksamhet), bemanning och byggstädning (Kanitas ENT), maskiner och fordon (Kanitas Trading) samt lokaler (Kanitas Fastigheter)
- Kontaktuppgifter och företagsfakta ändras ENDAST i `src/lib/site.ts`
- Kontaktformuläret skickar via `/api/send-email` (SMTP-konfiguration via miljövariabler, mottagare är hårdkodad server-side av säkerhetsskäl)
