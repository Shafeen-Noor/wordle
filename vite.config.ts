import { defineConfig } from "vitest/config"; 
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://github.com/Shafeen-Noor/wordle.git",
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./setupTests.tsx"],
    globals: true,
  },
});
