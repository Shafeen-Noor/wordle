import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/wordle/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./setupTests.tsx"],
    globals: true,
  },
});
