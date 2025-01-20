import type { Meta, StoryObj } from "@storybook/react";
import TextField from "../TextField";

const meta: Meta<typeof TextField> = {
  title: "TextField",
  component: TextField,
  args: {
    placeholder: "Enter text...",
    used: "modal",
    readOnly: true,
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const TextFieldModal: Story = {
  args: {
    label: "Label",
  },
};

export const TextFieldModalRequired: Story = {
  args: {
    label: "Label",
    required: true,
  },
};

export const TextFieldModalTooltip: Story = {
  args: {
    label: "Label",
    required: true,
    tooltip: "Текст",
    readOnly: false,
  },
};

export const TextFieldAutoFocus: Story = {
  args: {
    label: "Label",
    required: true,
    tooltip: "Текст Текст",
    readOnly: false,
    autoFocus: true,
  },
};

export const TextFieldMultiline: Story = {
  args: {
    label: "Label",
    required: true,
    tooltip: "Текст подсказки",
    readOnly: false,
    multiline: true,
  },
};

export const TextFieldMultilineError: Story = {
  args: {
    label: "Label",
    required: true,
    tooltip: "Текст всплывающей",
    readOnly: false,
    multiline: true,
    error: true,
  },
};

export const TextFieldTest: Story = {
  args: {
    label: "Label",
    required: true,
    tooltip: "Текст всплывающей подсказки",
    readOnly: false,
    type: "password",
    className: "custom-class",
    width: 100,
  },
};
