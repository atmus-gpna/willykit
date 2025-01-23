import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import InputLabel from "../InputLabel";

describe("Компонент InputLabel", () => {
  it("отображает содержимое корректно", () => {
    render(<InputLabel label="Текст метки" />);
    expect(screen.getByText("Текст метки")).toBeInTheDocument();
  });

  it("отображает астериск при наличии свойства required", () => {
    render(<InputLabel required label="Текст метки" />);
    expect(
      screen.getByText((content) => content.includes("*")),
    ).toBeInTheDocument();
  });

  it("отображает иконку подсказки при наличии свойства tooltip", () => {
    render(<InputLabel tooltip label="Текст метки" />);
    expect(screen.getByRole("icon")).toBeInTheDocument();
  });

  it("не отображает иконку подсказки при отсутствии свойства tooltip", () => {
    render(<InputLabel label="Текст метки" />);
    expect(screen.queryByRole("icon")).not.toBeInTheDocument();
  });
});
