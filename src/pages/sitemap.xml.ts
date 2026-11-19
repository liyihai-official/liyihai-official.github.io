import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Sitemap with hreflang alternates for every page that exists in both languages.
const langs = ['en', 'zh'] as const;
const hreflang = { en: 'en', zh: 'zh-CN' } as const;

export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const groups: Array<Partial<Record<(typeof langs)[number], string>>> = [];

  for (const page of ['', 'projects/', 'skills/', 'blog/']) {
    groups.push(Object.fromEntries(langs.map(l => [l, `/${l}/${page}`])));
  }

  const posts = await getCollection('blog');
  const byKey = new Map<string, Partial<Record<(typeof langs)[number], string>>>();
  for (const post of posts) {
    const key = post.slug.replace(/-(en|zh)$/, '');
    const group = byKey.get(key) ?? {};
    group[post.data.lang] = `/${post.data.lang}/blog/${post.slug}/`;
    byKey.set(key, group);
  }
  groups.push(...byKey.values());

  const entries = groups.flatMap(group =>
    langs.filter(l => group[l]).map(l => {
      const links = langs
        .filter(other => group[other])
        .map(other => `    <xhtml:link rel="alternate" hreflang="${hreflang[other]}" href="${url(group[other]!)}"/>`);
      if (group.en) links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url(group.en)}"/>`);
      return `  <url>\n    <loc>${url(group[l]!)}</loc>\n${links.join('\n')}\n  </url>`;
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
