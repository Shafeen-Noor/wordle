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
  cats: {
    title: "Cats",
    Play: lazy(() => import("./Cats/Play")),
  },
};

export default games;
