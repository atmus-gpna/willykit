import { Meta, StoryObj } from "@storybook/react";
import InputExample from "./InputExample";

const meta: Meta<typeof InputExample> = {
  title: "InputExample",
  component: InputExample,
  args: {
    placeholder: "Enter text...",
    used: "modal",
    readOnly: true,
  },
};

export default meta;
type Story = StoryObj<typeof InputExample>;

export const Modal: Story = {};
