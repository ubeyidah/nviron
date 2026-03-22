import { source } from "@/lib/source";
import { notFound } from "next/navigation";

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const text = await (
    page.data as { getText: (type: "raw") => Promise<string> }
  ).getText("raw");

  return new Response(text, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}

export async function generateStaticParams() {
  return source.generateParams();
}
