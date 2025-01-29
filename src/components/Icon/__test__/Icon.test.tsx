import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Icon from "../Icon";
import React from "react";

describe("Icon component", () => {
  it("Icon should render correctly", () => {
    render(<Icon name="example-icon" />);
    const icon = screen.getByRole("icon");
    expect(icon).toBeInTheDocument();
  });
});
