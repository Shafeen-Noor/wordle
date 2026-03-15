export type Score = {
  name: string
  score: number
}

export type LeaderboardData = {
  [slug: string]: {
    title: string
    scores: Score[]
  }
}

const leaderboardData: LeaderboardData = {
  wordle: {
    title: "Wordle",
    scores: [
      { name: "Alice", score: 980 },
      { name: "Bob", score: 870 },
      { name: "Charlie", score: 810 },
      { name: "Diana", score: 760 },
      { name: "Eve", score: 700 },
      { name: "Frank", score: 650 },
      { name: "Grace", score: 600 },
      { name: "Hank", score: 540 },
      { name: "Ivy", score: 490 },
      { name: "Jack", score: 430 },
    ],
  },
  go: {
    title: "Go",
    scores: [
      { name: "Zara", score: 1200 },
      { name: "Yusuf", score: 1100 },
      { name: "Xena", score: 950 },
      { name: "Will", score: 900 },
      { name: "Vera", score: 850 },
      { name: "Uma", score: 800 },
      { name: "Theo", score: 740 },
      { name: "Sasha", score: 690 },
      { name: "Rosa", score: 620 },
      { name: "Quinn", score: 570 },
    ],
  },
}

export default leaderboardData
