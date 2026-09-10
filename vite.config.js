import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

const entry = (p) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    // A multi-page build rather than client-side routing: GitHub Pages serves
    // real index.html files at these paths, so /sparingly/ and its privacy
    // policy work as direct links with no router and no 404 redirect hack.
    // App Store review opens both URLs cold, so they have to resolve on their own.
    rollupOptions: {
      input: {
        main: entry("index.html"),
        sparingly: entry("sparingly/index.html"),
        sparinglyPrivacy: entry("sparingly/privacy-policy/index.html"),
      },
    },
  },
});
