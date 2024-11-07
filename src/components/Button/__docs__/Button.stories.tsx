import type { Meta, StoryObj } from "@storybook/react";
import ExampleButton from "./ExampleButton";
import { EIcons } from "../../Icon/icon.types";
import { Icon } from "../../Icon";
import React from "react";
const meta: Meta<typeof ExampleButton> = {
  title: "Button",
  component: ExampleButton,
};

export default meta;
type Story = StoryObj<typeof ExampleButton>;

export const Primary: Story = {
  args: {
    text: "Primary Button",
    primary: true,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button clicked"),
    iconLeft: (
      <Icon name={EIcons.pluse} color="red" size="14" />
    ) as unknown as typeof Icon,
  },
};
export const Secondary: Story = {
  args: {
    text: "Secondary Button",
    primary: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button clicked"),
    iconRight: (
      <Icon name={EIcons.pluse} color="green" size="14" />
    ) as unknown as typeof Icon,
  },
};

export const TextButton: Story = {
  args: {
    text: "just text",
    primary: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button clicked"),
  },
};
