import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface CommonsPage {
  pageid: number;
  title: string;
  imageinfo?: Array<{
    url?: string;
    descriptionurl?: string;
    extmetadata?: {
      ImageDescription?: { value?: string };
      Artist?: { value?: string };
      LicenseShortName?: { value?: string };
    };
  }>;
}

interface CommonsResponse {
  query?: {
    pages?: Record<string, CommonsPage>;
  };
}

function cleanQuery(value: string) {
  return value
    .replace(/\[[^\]]*\]/g, "")
    .replace(/\b(lesson|module|chapter)\s*\d+\b/gi, "")
    .replace(/\b(complete|introduction to|introduction|workflow|guide)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 100);
}

export async function GET(request: NextRequest) {
  const rawQuery = request.nextUrl.searchParams.get("q") || "machine learning";
  const query = cleanQuery(rawQuery) || "machine learning";

  const url = new URL("https://commons.wikimedia.org/w/api.php");
  url.searchParams.set("action", "query");
  url.searchParams.set("generator", "search");
  url.searchParams.set("gsrsearch", query);
  url.searchParams.set("gsrnamespace", "6");
  url.searchParams.set("gsrlimit", "6");
  url.searchParams.set("prop", "imageinfo");
  url.searchParams.set("iiprop", "url|extmetadata");
  url.searchParams.set("iiurlwidth", "1200");
  url.searchParams.set("format", "json");
  url.searchParams.set("formatversion", "2");

  try {
    const response = await fetch(url.toString(), {
      headers: {
        Accept: "application/json",
        "Api-User-Agent": "CloudLearn/1.0 (educational learning platform)",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return NextResponse.json({ images: [], query }, { status: 200 });
    }

    const data = (await response.json()) as CommonsResponse;
    const pages = Object.values(data.query?.pages || {});

    const images = pages
      .map((page) => {
        const info = page.imageinfo?.[0];
        if (!info?.url) return null;

        const description =
          info.extmetadata?.ImageDescription?.value
            ?.replace(/<[^>]+>/g, "")
            .replace(/\s+/g, " ")
            .trim() || "";

        const artist =
          info.extmetadata?.Artist?.value
            ?.replace(/<[^>]+>/g, "")
            .replace(/\s+/g, " ")
            .trim() || "";

        const license =
          info.extmetadata?.LicenseShortName?.value
            ?.replace(/<[^>]+>/g, "")
            .trim() || "";

        return {
          id: page.pageid,
          title: page.title.replace(/^File:/i, ""),
          description,
          artist,
          license,
          imageUrl: info.url,
          pageUrl:
            info.descriptionurl ||
            `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title.replace(/ /g, "_"))}`,
        };
      })
      .filter(Boolean)
      .slice(0, 3);

    return NextResponse.json(
      { images, query },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch {
    return NextResponse.json({ images: [], query }, { status: 200 });
  }
}

