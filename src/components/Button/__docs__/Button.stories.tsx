import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { EIcons } from "../../Icon/icon.types";
const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Modal: Story = {
  args: {
    text: "Primary Button",
    primary: true,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
    icon: { position: "right", iconName: EIcons.qrcode, color: "red" },
  },
};
export const Secondary: Story = {
  args: {
    text: "Secondary Button",
    primary: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
    icon: undefined,
  },
};
