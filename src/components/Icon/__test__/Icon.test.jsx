import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Icon from "../Icon";

describe("Icon component", () => {
    it("Icon should render correctly", () => {
        render(<Icon />);
        const icon = screen.getByRole("icon");
        expect(icon).toBeInTheDocument();
    });
});
