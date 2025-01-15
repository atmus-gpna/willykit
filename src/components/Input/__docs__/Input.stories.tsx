import type { Meta, StoryObj } from "@storybook/react";
import Input from "../Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  args: {
    placeholder: "Enter text...",
    used: "modal",
    readOnly: true,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const ModalWithError: Story = {
  args: {
    error: true,
    errorText: "Ошибка",
  },
};

export const ModalEdditable: Story = {
  args: {
    readOnly: false,
  },
};

export const ModalDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
    readOnly: false,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const Header: Story = {
  args: {
    used: "header",
  },
};

export const HeaderWidthError: Story = {
  args: {
    used: "header",
    error: true,
    errorText: "Ошибка",
  },
};

export const HeaderEdditable: Story = {
  args: {
    used: "header",
    readOnly: false,
  },
};

export const HeaderDisabled: Story = {
  args: {
    used: "header",
    disabled: true,
  },
};

export const HeaderAutoFocus: Story = {
  args: {
    used: "header",
    autoFocus: true,
    readOnly: false,
  },
};
