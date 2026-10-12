import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { VIEWBOX, WORD_D } from "@/components/logo-paths";
import { dictionaries } from "@/content";
import { isLocale, locales } from "@/lib/i18n";
import {
  areaPages,
  areaSlugs,
  businessSlugs,
  businesses,
  phoneFor,
  photos,
  site,
  type AreaSlug,
  type PhotoName,
} from "@/lib/site";

// Drawn once at build, one card per page and language, as a JPEG small
// enough for every app's link preview (WhatsApp skips large images).
export const dynamic = "force-static";
export const dynamicParams = false;

const pages = [
  "home",
  ...areaSlugs,
  "om-oss",
  "kontakt",
  "integritetspolicy",
] as const;

type Page = (typeof pages)[number];

export function generateStaticParams() {
  return locales.flatMap((locale) => pages.map((page) => ({ locale, page })));
}

const isArea = (page: Page): page is AreaSlug =>
  areaSlugs.includes(page as AreaSlug);

/** What a card says and shows: the page's own headline over its photo. */
function card(locale: (typeof locales)[number], page: Page) {
  const t = dictionaries[locale];
  if (isArea(page)) {
    const slug = businessSlugs.find((b) => businesses[b].page === `/${page}`)!;
    return {
      title: t.areas[page].h1,
      line: `${areaPages[page].name} · ${t.businesses[slug].summary}`,
      photo: areaPages[page].heroPhoto,
    };
  }
  const cards: Record<
    Exclude<Page, AreaSlug>,
    { title: string; line: string; photo: PhotoName }
  > = {
    home: { title: t.hero.title, line: t.footer.tagline, photo: "nybygge" },
    "om-oss": {
      title: t.about.heading,
      line: t.about.lead,
      photo: "jobbstart",
    },
    kontakt: {
      title: t.contactPage.heading,
      line: `${phoneFor(locale)} · ${site.email}`,
      photo: "team",
    },
    integritetspolicy: {
      title: t.privacy.heading,
      line: t.footer.tagline,
      photo: "nybygge",
    },
  };
  return cards[page];
}

const file = (path: string) => readFile(join(process.cwd(), path));

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string; page: string }> },
) {
  const { locale, page } = await params;
  if (!isLocale(locale) || !pages.includes(page as Page)) {
    return new Response("Not found", { status: 404 });
  }

  const { title, line, photo } = card(locale, page as Page);
  const [archivo, inter, interSemi, image] = await Promise.all([
    file("src/app/og/fonts/Archivo-Bold.ttf"),
    file("src/app/og/fonts/Inter-Regular.ttf"),
    file("src/app/og/fonts/Inter-SemiBold.ttf"),
    file(`public${photos[photo].src}`),
  ]);
  const [, , logoWidth, logoHeight] = VIEWBOX.compact.split(" ").map(Number);

  const png = new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: "#082a33",
        fontFamily: "Inter",
        color: "white",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/jpeg;base64,${image.toString("base64")}`}
        alt=""
        width={1200}
        height={630}
        style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1200,
          height: 630,
          backgroundImage:
            "linear-gradient(90deg, rgba(8,42,51,0.94) 0%, rgba(8,42,51,0.82) 55%, rgba(8,42,51,0.6) 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "64px 72px 56px",
        }}
      >
        <svg
          width={340}
          height={(340 * logoHeight) / logoWidth}
          viewBox={VIEWBOX.compact}
        >
          <path d={WORD_D} fill="white" />
        </svg>
        <div
          style={{
            display: "flex",
            maxWidth: 960,
            fontFamily: "Archivo",
            fontSize: title.length > 42 ? 56 : 68,
            lineHeight: 1.06,
            letterSpacing: -1.5,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 48,
            fontSize: 26,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          <div style={{ display: "flex", maxWidth: 820 }}>{line}</div>
          <div style={{ display: "flex", fontWeight: 600, color: "white" }}>
            kanitas.se
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Archivo", data: archivo, weight: 700 },
        { name: "Inter", data: inter, weight: 400 },
        { name: "Inter", data: interSemi, weight: 600 },
      ],
    },
  );
  const jpeg = await sharp(Buffer.from(await png.arrayBuffer()))
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  return new Response(new Uint8Array(jpeg), {
    headers: { "Content-Type": "image/jpeg" },
  });
}
