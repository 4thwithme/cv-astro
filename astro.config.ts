import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  vite: { optimizeDeps: { exclude: ["@resvg/resvg-js"] } },
  scopedStyleStrategy: "where",
  build: { inlineStylesheets: "always" },
});
