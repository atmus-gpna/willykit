import { Meta, StoryObj } from "@storybook/react";
import TextFieldExample from "./TextFieldExample";

const meta: Meta<typeof TextFieldExample> = {
  title: "TextFieldExample",
  component: TextFieldExample,
  args: {
    placeholder: "Enter text...",
    used: "modal",
  },
};

export default meta;
type Story = StoryObj<typeof TextFieldExample>;

export const TextField: Story = {};
