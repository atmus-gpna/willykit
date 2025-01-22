import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tooltip from "../Tooltip";

describe("Tooltip Component", () => {
  test("renders Tooltip component correctly", () => {
    render(
      <Tooltip open={true} placement="right">
        Tooltip Text
      </Tooltip>,
    );

    // Check if tooltip text is rendered
    const tooltipText = screen.getByText("Tooltip Text");
    expect(tooltipText).toBeInTheDocument();
  });

  test("tooltip text is visible when open is true", () => {
    render(
      <Tooltip open={true} placement="right">
        Visible Tooltip Text
      </Tooltip>,
    );

    const tooltipText = screen.getByText("Visible Tooltip Text");
    expect(tooltipText).toHaveStyle("visibility: visible");
    expect(tooltipText).toHaveStyle("opacity: 1");
  });

  test("tooltip placement is applied correctly (right)", () => {
    render(
      <Tooltip open={true} placement="right">
        Tooltip with Right Placement
      </Tooltip>,
    );

    const tooltipContainer = screen.getByText(
      "Tooltip with Right Placement",
    ).parentElement;
    expect(tooltipContainer).toHaveStyle(`left: "20px"`);
    expect(tooltipContainer).toHaveStyle(`bottom: "0"`);
  });

  test("tooltip placement is applied correctly (bottom)", () => {
    render(
      <Tooltip open={true} placement="bottom">
        Tooltip with Bottom Placement
      </Tooltip>,
    );

    const tooltipContainer = screen.getByText(
      "Tooltip with Bottom Placement",
    ).parentElement;
    expect(tooltipContainer).toHaveStyle("bottom: auto");
    expect(tooltipContainer).toHaveStyle("left: auto");
  });
});
