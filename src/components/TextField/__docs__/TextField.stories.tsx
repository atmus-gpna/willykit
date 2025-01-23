import type { Meta, StoryObj } from "@storybook/react";
import TextField from "../TextField";

const meta: Meta<typeof TextField> = {
  title: "TextField",
  component: TextField,
  args: {
    placeholder: "Enter text...",
    variant: "standard",
    readOnly: true,
    error: false,
    errorText: "Error",
    value: "",
    onChange: () => {},
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["standard", "header", "fieldset"],
      description: "Выберите вариант TextField",
      table: {
        type: { summary: `"standard" | "header" | "fieldset"` },
      },
    },
    type: {
      control: { type: "select" },
      options: [
        "text",
        "password",
        "email",
        "number",
        "date",
        "datetime-local",
        "month",
        "week",
        "time",
      ],
      description: "Выберите тип поля ввода",
      table: {
        type: { summary: "React.HTMLInputTypeAttribute" },
      },
    },
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
    readOnly: false,
    slots: {
      tooltip: {
        children: "Текст",
      },
    },
  },
};

export const TextFieldAutoFocus: Story = {
  args: {
    label: "Label",
    required: true,
    readOnly: false,
    autoFocus: true,
    slots: {
      tooltip: {
        children: "Текст Текст",
      },
    },
  },
};

export const TextFieldMultiline: Story = {
  args: {
    label: "Label",
    required: true,
    readOnly: false,
    multiline: true,
    slots: {
      tooltip: {
        children: "Текст подсказки",
      },
    },
  },
};

export const TextFieldMultilineError: Story = {
  args: {
    label: "Label",
    required: true,
    readOnly: false,
    multiline: true,
    error: true,
    errorText: "Текст ошибки",
    slots: {
      tooltip: {
        children: "Текст всплывающей",
        placement: "bottom",
      },
    },
  },
};

export const TextFieldFieldSet: Story = {
  args: {
    label: "Label",
    required: true,
    readOnly: false,
    type: "password",
    className: "custom-class",
    width: 300,
    slots: {
      tooltip: {
        children: "Текст всплывающей подсказки",
      },
    },
  },
};
