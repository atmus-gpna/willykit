import type { Meta, StoryObj } from "@storybook/react";
import Input from "../Input";

const meta: Meta<typeof Input> = {
  title: "TextArea",
  component: Input,
  args: {
    placeholder: "Enter text...",
    used: "modal",
    multiline: true,
    readOnly: true,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextAreaDefault: Story = {};

export const TextAreaError: Story = {
  args: {
    error: true,
    errorText: "Ошибка",
  },
};

export const TextAreaDisabled: Story = {
  args: {
    disabled: true,
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
};

export const TextAreaScroll: Story = {
  args: {
    readOnly: false,
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
};

export const TextAreaSize: Story = {
  args: {
    readOnly: false,
    width: 400,
    height: 200,
  },
};
