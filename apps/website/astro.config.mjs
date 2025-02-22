// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import url122 from "@url122/astro";
const site = "https://bcuw.xyz";
// https://astro.build/config
export default defineConfig({
  site,

  integrations: [tailwind({
    applyBaseStyles: false,
  }), react(), mdx(), sitemap(), url122({
    prefix: "bcw",
    extraPages: [
      "/"
    ]
  })],

  output: "static",
  adapter: netlify(),
});