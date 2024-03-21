import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import astroRemark from "@astrojs/markdown-remark";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import markdownConfig from './src/lib/markdown.config';
import vercel from "@astrojs/vercel/serverless";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://yourgrandpa.vercel.app/",
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind(), 
    compressor({ gzip: true, brotli: false })
  ],
  build: {
    rollupOptions: {
      external: ['sanitize-html']
    }
  },
  markdownOptions: {
    markdown: {
      remarkPlugins: [remarkReadingTime],
      extendDefaultPlugins: true
    },
    integrations: [mdx({
      ...markdownConfig,
      extendPlugins: false
    })],
    render: [astroRemark, {
      rehypePlugins: ["rehype-slug", ["rehype-autolink-headings", {
        behavior: "append"
      }], ["rehype-toc", {
        headings: ["h1", "h2"]
      }]]
    }]
  },
  output: "server",
  adapter: vercel()
});