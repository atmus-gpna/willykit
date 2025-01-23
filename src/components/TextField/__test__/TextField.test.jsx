import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import TextField from "../TextField";
import { vi } from "vitest";

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
    render(<TextField className="custom-class" />);
    expect(screen.getByTestId("container")).toHaveClass("custom-class");
  });

  it("отображает инпут без ширины 100%, если fullWidth=false", () => {
    render(<TextField />);
    expect(screen.getByRole("textbox")).not.toHaveStyle("width: 100%");
  });

  it("отображает placeholder, если он передан", () => {
    render(<TextField placeholder="Write something..." />);
    expect(
      screen.getByPlaceholderText("Write something..."),
    ).toBeInTheDocument();
  });

  it("отображает ошибку, если она передана", () => {
    render(<TextField error errorText="Error" />);
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("отображает значение, если оно передано", () => {
    render(<TextField value="Hello World" />);
    expect(screen.getByRole("textbox")).toHaveValue("Hello World");
  });

  it("вызывает onChange, когда значение изменяется", () => {
    const onChange = vi.fn();
    render(<TextField value="Hello World" onChange={onChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "New Value" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("отображает disabled, если оно передано", () => {
    render(<TextField disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("отображает readOnly, если оно передано", () => {
    render(<TextField readOnly />);
    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
  });
});
