import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { describe, it, expect } from "vitest"
import LeaderboardList from "./LeaderboardList"

describe("LeaderboardList page", () => {
  it("renders the leaderboard heading", () => {
    render(
      <MemoryRouter>
        <LeaderboardList />
      </MemoryRouter>,
    )
    expect(
      screen.getByRole("heading", { name: /leaderboard/i }),
    ).toBeInTheDocument()
  })

  it("shows top 3 scores for Wordle", () => {
    render(
      <MemoryRouter>
        <LeaderboardList />
      </MemoryRouter>,
    )
    expect(screen.getByText(/Alice/)).toBeInTheDocument()
    expect(screen.getByText(/Bob/)).toBeInTheDocument()
    expect(screen.getByText(/Charlie/)).toBeInTheDocument()
  })

  it("does not show 4th place on list page", () => {
    render(
      <MemoryRouter>
        <LeaderboardList />
      </MemoryRouter>,
    )
    expect(screen.queryByText(/Diana/)).not.toBeInTheDocument()
  })
})
