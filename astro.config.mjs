import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import astroRemark from "@astrojs/markdown-remark";
import react from "@astrojs/react";
import { remarkReadingTime } from './remark-reading-time.mjs';
// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  markdownOptions: {
    render: [
        astroRemark,
        {
            rehypePlugins: [
                "rehype-slug",
                [
                    "rehype-autolink-headings",
                    { behavior: "append"},
                ],
                [
                    "rehype-toc",
                    { headings: ["h1", "h2"] }
                ]
            ],
        },
    ],
},
});