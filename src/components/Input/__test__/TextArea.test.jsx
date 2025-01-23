import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../Input";

describe("Компонент Input с multiline", () => {
  it("должен рендериться как textarea, если установлен пропс multiline", () => {
    render(<Input variant="standard" multiline />);
    const textarea = screen.getByRole("textbox");
    expect(textarea.tagName).toBe("TEXTAREA");
  });

  it("должен отображать placeholder для textarea", () => {
    const placeholderText = "Введите текст";
    render(
      <Input variant="standard" multiline placeholder={placeholderText} />,
    );
    const textarea = screen.getByPlaceholderText(placeholderText);
    expect(textarea).toBeInTheDocument();
  });

  it("должен отображать текст ошибки для textarea", () => {
    const errorText = "Это ошибка";
    render(<Input variant="standard" multiline error errorText={errorText} />);
    const error = screen.getByText(errorText);
    expect(error).toBeInTheDocument();
  });

  it("должен быть только для чтения, если установлен пропс readOnly", () => {
    render(<Input variant="standard" multiline readOnly />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("readonly");
  });

  it("должен быть отключен, если установлен пропс disabled", () => {
    render(<Input variant="standard" multiline disabled />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeDisabled();
  });

  it("должен автоматически получать фокус, если установлен autoFocus", () => {
    render(<Input variant="standard" multiline autoFocus />);
    const textarea = screen.getByRole("textbox");
    expect(document.activeElement).toBe(textarea);
  });

  it("должен вызывать onChange при изменении значения в textarea", () => {
    const handleChange = vi.fn();
    render(<Input variant="standard" multiline onChange={handleChange} />);
    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "Новое значение" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("должен растягиваться на всю ширину, если установлен fullWidth", () => {
    render(<Input variant="standard" multiline fullWidth />);
    const container = screen.getByRole("textbox").parentElement;
    expect(container).toHaveStyle(`width: "100%"`);
  });

  it("должен применить переданный className", () => {
    const customClass = "custom-textarea-class";
    render(<Input variant="standard" multiline className={customClass} />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass(customClass);
  });
});
