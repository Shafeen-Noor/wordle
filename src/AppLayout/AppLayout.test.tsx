import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { describe, it, expect } from "vitest"
import AppLayout from "./AppLayout"

describe("AppLayout", () => {
  it("renders nav links", () => {
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>,
    )
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: /leaderboard/i }),
    ).toBeInTheDocument()
  })

  it("home link points to /", () => {
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>,
    )
    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute(
      "href",
      "/",
    )
  })
})
