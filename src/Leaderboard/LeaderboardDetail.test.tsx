import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router"
import { describe, it, expect } from "vitest"
import LeaderboardDetail from "./LeaderboardDetail"

function renderDetail(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/leaderboard/${slug}`]}>
      <Routes>
        <Route path="/leaderboard/:slug" Component={LeaderboardDetail} />
      </Routes>
    </MemoryRouter>,
  )
}

describe("LeaderboardDetail page", () => {
  it("renders the game title", () => {
    renderDetail("wordle")
    expect(screen.getByRole("heading", { name: /wordle/i })).toBeInTheDocument()
  })

  it("shows 10th place scorer", () => {
    renderDetail("wordle")
    expect(screen.getByText(/Jack/)).toBeInTheDocument()
  })

  it("shows not found for unknown game", () => {
    renderDetail("chess")
    expect(screen.getByText(/not found/i)).toBeInTheDocument()
  })
})
