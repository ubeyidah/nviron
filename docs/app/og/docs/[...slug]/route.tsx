import { getPageImage, source } from "@/lib/source";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { generate as DefaultImage } from "fumadocs-ui/og";

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const pageSlug = slug.slice(0, -1);
  const page = source.getPage(pageSlug.length > 0 ? pageSlug : undefined);
  if (!page) notFound();

  return new ImageResponse(
    (
      <DefaultImage
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        title={(page.data as any).title}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        description={(page.data as any).description}
        site="Nviron"
      />
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

export async function generateStaticParams() {
  const pages = await source.generateParams();

  return pages.map((page) => ({
    slug: getPageImage(page.slug).segments,
  }));
}
