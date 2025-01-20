import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import TextField from "../TextField";

describe("Компонент TextField", () => {
  it("отображает метку, если она передана", () => {
    render(<TextField label="Текст метки" />);
    expect(screen.getByText("Текст метки")).toBeInTheDocument();
  });

  it("отображает инпут", () => {
    render(<TextField />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("отображает инпут с переданными пропсами", () => {
    render(<TextField type="password" />);
    expect(screen.getByTestId("input")).toHaveAttribute("type", "password");
  });

  it("отображает контейнер с переданным классом", () => {
    render(<TextField className="my-class" />);
    const container = screen.getByText("Label *").closest(".my-class");
    expect(container).toBeInTheDocument();
  });

  it("отображает инпут без ширины 100%, если fullWidth=false", () => {
    render(<TextField />);
    expect(screen.getByRole("textbox")).not.toHaveStyle("width: 100%");
  });
});
