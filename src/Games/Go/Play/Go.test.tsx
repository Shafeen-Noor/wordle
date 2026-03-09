import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Go from "./Go";

describe("Go page", () => {
  it("renders the heading", () => {
    render(<Go />);
    expect(screen.getByRole("heading", { name: /go/i })).toBeInTheDocument();
  });

  it("shows coming soon message", () => {
    render(<Go />);
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
  });
});
