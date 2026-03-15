# Wordle Platform

A multi-game web platform built with React, TypeScript, and Vite.

## Features

- **Wordle** — guess the 6-letter word in 6 attempts
- **Cats** — fetch a random cat image from cataas.com
- **Go** — coming soon
- **Leaderboard** — per-game top 10 scores

## Architecture

```
src/
  App.tsx              # Route definitions
  AppLayout/           # Nav shell + Outlet
  Home/                # Game list
  Play/                # Route-level game loader
  Leaderboard/         # List + detail views + data
  games/
    Wordle/Play/       # Game logic, context, Guessed, Keyboard
    Cats/Play/         # Data fetching with Suspense + ErrorBoundary
    Cats/api/          # get(), useCat(), useDog() via useAsync
    Go/Play/           # Placeholder
  shared/
    useAsync/          # Generic Promise-based data fetching hook
```

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command         | Description         |
| --------------- | ------------------- |
| `npm run dev`   | Start dev server    |
| `npm run build` | Type-check + build  |
| `npm run lint`  | Run all lint checks |
| `npm test`      | Run tests           |
