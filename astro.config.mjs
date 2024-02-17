import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx({remarkPlugins:[remarkMath], rehypePlugins:[rehypeKatex]})],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'material-theme-lighter',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ["python"],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shikiji.netlify.app/guide/transformers
      // Find common transformers: https://shikiji.netlify.app/packages/transformers
      transformers: [],
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  }
});