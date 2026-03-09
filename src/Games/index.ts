// src/Games/index.ts
import { lazy } from "react";
import type { Game } from "./types";

const games: Record<string, Game> = {
  wordle: {
    title: "Wordle",
    Play: lazy(() => import("./Wordle/Play")),
  },
  go: {
    title: "Go",
    Play: lazy(() => import("./Go/Play")),
  },
};

export default games;
