import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Paragraph from "../Typography";

describe("Paragraph component", () => {
  it("Paragraph should render correctly", () => {
    render(<Paragraph>Test</Paragraph>);
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
  });
});
