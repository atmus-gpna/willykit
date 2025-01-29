import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Typography from "../Typography";

describe("Typography component", () => {
  it("Typography should render correctly", () => {
    render(<Typography>Test typography</Typography>);
    const typography = screen.getByText("Test typography");
    expect(typography).toBeInTheDocument();
  });
});
