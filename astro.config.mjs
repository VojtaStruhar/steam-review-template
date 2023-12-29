import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://vojtastruhar.github.io/",
  base: "/steam-review-template",
  integrations: [tailwind()],
});
