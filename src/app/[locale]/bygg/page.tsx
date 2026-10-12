import type { Metadata } from "next";
import AreaPage, { areaMetadata } from "@/components/AreaPage";
import { getContent, type LocaleParams } from "@/content";

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const { locale } = await getContent(params);
  return areaMetadata(locale, "bygg");
}

export default async function ByggPage({ params }: { params: LocaleParams }) {
  const { locale } = await getContent(params);
  return <AreaPage locale={locale} slug="bygg" />;
}
