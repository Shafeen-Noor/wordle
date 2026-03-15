import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router"
import { describe, it, expect } from "vitest"
import Play from "./Play"

function renderPlay(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/play/${slug}`]}>
      <Routes>
        <Route path="/play/:slug" Component={Play} />
      </Routes>
    </MemoryRouter>,
  )
}

describe("Play page", () => {
  it("shows not found for unknown slug", () => {
    renderPlay("nonexistent-game-xyz")
    expect(screen.getByText(/game not found/i)).toBeInTheDocument()
  })

  it("shows go home link for unknown slug", () => {
    renderPlay("nonexistent-game-xyz")
    expect(screen.getByRole("link", { name: /go home/i })).toBeInTheDocument()
  })
})
