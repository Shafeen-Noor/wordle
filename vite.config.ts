import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/wordle/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./setupTests.tsx"],
    globals: true,
  },
  resolve: {
    alias: { "#shared": path.resolve(__dirname, "src/shared") },
  },
});
