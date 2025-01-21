import type { Meta, StoryObj } from "@storybook/react";
import InputLabel from "../InputLabel";

const meta: Meta<typeof InputLabel> = {
  title: "InputLabel",
  component: InputLabel,
  args: {},
};

export default meta;
type Story = StoryObj<typeof InputLabel>;

export const InputLabelDefault: Story = {
  args: {
    children: "Label",
  },
};

export const InputLabelRequired: Story = {
  args: {
    children: "Label",
    required: true,
    tooltip: {
      placement: "bottom",
      children: "Текст всплывающей подсказки Текст всплывающей подсказки",
    },
  },
};
