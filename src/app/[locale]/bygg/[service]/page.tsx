import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaPage, { areaMetadata } from "@/components/AreaPage";
import { getContent, type LocaleParams } from "@/content";
import { serviceSlugs, type ServiceSlug } from "@/lib/site";

type Params = { params: Promise<{ locale: string; service: string }> };

// One page per construction service, built for every language.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

async function resolve({ params }: Params) {
  const { locale } = await getContent(params as LocaleParams);
  const { service } = await params;
  if (!serviceSlugs.includes(service as ServiceSlug)) notFound();
  return { locale, service: service as ServiceSlug };
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const { locale, service } = await resolve(props);
  return areaMetadata(locale, { service });
}

export default async function ServicePage(props: Params) {
  const { locale, service } = await resolve(props);
  return <AreaPage locale={locale} page={{ service }} />;
}
