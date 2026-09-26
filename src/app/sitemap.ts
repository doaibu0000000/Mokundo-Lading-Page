import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

/** One-pager: satu entri dengan anchor utama. Perbarui lastModified saat konten besar berubah. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
