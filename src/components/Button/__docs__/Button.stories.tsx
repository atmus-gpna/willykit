import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { Icons } from "../button.types";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Primary Button",
    primary: true,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
    icon: { position: "left", iconName: Icons.pluse, color: "red" },
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
