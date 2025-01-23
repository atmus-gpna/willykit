import { Meta, StoryObj } from "@storybook/react";
import TextFieldExample from "./TextFieldExample";

const meta: Meta<typeof TextFieldExample> = {
  title: "TextFieldExample",
  component: TextFieldExample,
  args: {
    placeholder: "Enter text...",
    variant: "standard",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["standard", "header", "fieldset"],
      description: "Select the variant of the TextField",
      table: {
        type: { summary: `"standard" | "header" | "fieldset"` },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextFieldExample>;

export const TextField: Story = {};
