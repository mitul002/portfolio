import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // On Vercel or local, host at root.
  // Only for GitHub Pages, use /portfolio/
  base: process.env.GITHUB_ACTIONS ? "/portfolio/" : "/",
});
