import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://annafatsevych.github.io/cv/
export default defineConfig({
  base: "/cv/",
  plugins: [react()],
});
