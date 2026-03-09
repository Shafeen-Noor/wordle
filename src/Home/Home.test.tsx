import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import Home from "./Home";

describe("Home page", () => {
  it("renders a games heading", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: /games/i })).toBeInTheDocument();
  });

  it("has a play wordle link", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: /play wordle/i })).toHaveAttribute(
      "href",
      "/play/wordle",
    );
  });

  it("has a play go link", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: /play go/i })).toHaveAttribute(
      "href",
      "/play/go",
    );
  });
});
