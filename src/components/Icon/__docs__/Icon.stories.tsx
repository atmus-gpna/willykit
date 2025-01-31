import type { Meta, StoryObj } from "@storybook/react";
import ExampleIcon from "./ExampleIcon";
const meta: Meta<typeof ExampleIcon> = {
  title: "Icon",
  component: ExampleIcon,
};

export default meta;
type Story = StoryObj<typeof ExampleIcon>;

export const SingleIcon: Story = {
  args: {
    name: "pluse",
    color: "red",
    width: "14",
  },
};
