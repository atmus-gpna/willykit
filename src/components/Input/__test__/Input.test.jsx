import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../Input";

describe("Компонент Input", () => {
  it("должен корректно отобразиться", () => {
    render(<Input used="modal" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("должен отображать placeholder", () => {
    const placeholderText = "Введите текст";
    render(<Input used="modal" placeholder={placeholderText} />);
    const input = screen.getByPlaceholderText(placeholderText);
    expect(input).toBeInTheDocument();
  });

  it("должен отображать текст ошибки", () => {
    const errorText = "Это ошибка";
    render(<Input used="modal" error errorText={errorText} />);
    const error = screen.getByText(errorText);
    expect(error).toBeInTheDocument();
  });

  it("должен быть только для чтения, если установлен readOnly", () => {
    render(<Input used="modal" readOnly />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("readonly");
  });

  it("должен быть отключен, если установлен disabled", () => {
    render(<Input used="modal" disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("должен автоматически получать фокус, если установлен autoFocus", () => {
    render(<Input used="modal" autoFocus />);
    const input = screen.getByRole("textbox");
    expect(document.activeElement).toBe(input);
  });

  it("должен вызывать onChange при изменении значения", () => {
    const handleChange = vi.fn();
    render(<Input used="modal" onChange={handleChange} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "Новое значение" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("должен растягиваться на всю ширину, если установлен fullWidth", () => {
    render(<Input used="modal" fullWidth />);
    const container = screen.getByRole("textbox").parentElement;
    expect(container).toHaveStyle(`width: 100%`);
  });

  it("должен отображать ноду для startAdornment", () => {
    render(<Input used="modal" startAdornment={<div>Icon</div>} />);
    const startAdornment = screen.getByText("Icon");
    expect(startAdornment).toBeInTheDocument();
  });
});
