import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Icon from "../Icon";
import "@testing-library/jest-dom";
import { EIcons } from "../icon.types";

describe("Icon component", () => {
  it("отображение иконки", async () => {
    render(<Icon name={EIcons.pluse} color="red" width="24px" />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
