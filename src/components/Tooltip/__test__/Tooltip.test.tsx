import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import Tooltip from "../Tooltip";

describe("Компонент Tooltip", () => {
  it("Компонент Tooltip рендерится корректно", () => {
    render(
      <Tooltip open={true} placement="right">
        Текст тултипа
      </Tooltip>,
    );

    const tooltipText = screen.getByText("Текст тултипа");
    expect(tooltipText).toBeInTheDocument();
  });

  it("Текст тултипа видим, когда `open` равно true", () => {
    render(
      <Tooltip open={true} placement="right">
        Видимый текст тултипа
      </Tooltip>,
    );

    const tooltipText = screen.getByText("Видимый текст тултипа");
    expect(tooltipText).toHaveStyle("visibility: visible");
    expect(tooltipText).toHaveStyle("opacity: 1");
  });

  it("Корректно применено размещение тултипа (право)", () => {
    render(
      <Tooltip open={true} placement="right">
        Тултип с размещением справа
      </Tooltip>,
    );

    const tooltipContainer = screen.getByText(
      "Тултип с размещением справа",
    ).parentElement;
    expect(tooltipContainer).toHaveStyle(`left: "20px"`);
    expect(tooltipContainer).toHaveStyle(`bottom: "0"`);
  });

  it("Корректно применено размещение тултипа (низ)", () => {
    render(
      <Tooltip open={true} placement="bottom">
        Тултип с размещением снизу
      </Tooltip>,
    );

    const tooltipContainer = screen.getByText(
      "Тултип с размещением снизу",
    ).parentElement;
    expect(tooltipContainer).toHaveStyle("bottom: auto");
    expect(tooltipContainer).toHaveStyle("left: auto");
  });
});
