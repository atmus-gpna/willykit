import type { Meta, StoryObj } from "@storybook/react";
import ExampleTypography from "./ExampleTypography";

const meta: Meta<typeof ExampleTypography> = {
  title: "Typography",
  component: ExampleTypography,
};

export default meta;
type Story = StoryObj<typeof ExampleTypography>;

export const Primary: Story = {
  args: {
    lineHeight: 2,
    fontWeight: 600,
    fontSize: 16,
    margin: 10,
    padding: 2,
    format: "p",
  },
};

export const Secondary: Story = {
  args: {
    lineHeight: 2,
    fontWeight: 400,
    fontSize: 20,
    margin: 10,
    padding: 2,
    format: "h1",
  },
};
