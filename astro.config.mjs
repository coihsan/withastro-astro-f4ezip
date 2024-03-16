import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import astroRemark from "@astrojs/markdown-remark";
import preact from '@astrojs/preact';
import react from "@astrojs/react";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import markdownConfig from './src/lib/markdown.config'
import AstroPWA from '@vite-pwa/astro';
import webmanifest from 'astro-webmanifest';
// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind(), 
    react(), 
    preact(), 
    AstroPWA(),
    webmanifest({
      name: 'YourGrandpa Blog',
      config: {
        outfile: 'site.webmanifest',
      },
      // icon: 'src/images/your-icon.svg',
      short_name: 'YourGrandpa App',
      description: 'YourGrandpa documentation',
      start_url: '/',
      theme_color: '#3367D6',
      background_color: '#000000',
      display: 'standalone',
    }),
  ],
  build: {
    rollupOptions: {
      external: ['sanitize-html'],
    },
  },
  markdownOptions: {
    markdown: {
      remarkPlugins: [remarkReadingTime],
      extendDefaultPlugins: true,
    },
    integrations: [
      mdx({
        ...markdownConfig,
        extendPlugins: false,
      }),
    ],
    render: [
      astroRemark,
      {
        rehypePlugins: [
          "rehype-slug",
          ["rehype-autolink-headings", { behavior: "append" }],
          ["rehype-toc", { headings: ["h1", "h2"] }],
        ],
      },
    ],
  },
});
