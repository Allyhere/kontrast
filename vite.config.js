import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app/"),
      components: path.resolve(__dirname, "./app/components/"),
      contexts: path.resolve(__dirname, "./contexts/"),
      pages: path.resolve(__dirname, "./app/pages"),
      utils: path.resolve(__dirname, "./app/utils"),
      assets: path.resolve(__dirname, "./app/assets"),
      hooks: path.resolve(__dirname, "./app/hooks"),
    },
  },
});
