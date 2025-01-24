import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../Input";
import Icon from "../../Icon/Icon";
import { EIcons } from "../../Icon/icon.types";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  args: {
    placeholder: "Enter text...",
    variant: "standard",
    readOnly: false,
  },
};

const icon = {
  iconName: EIcons.pluse,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputStandard: Story = {
  args: {},
};

export const InputFilled: Story = {
  args: {
    variant: "filled",
  },
};

export const InputReadOnly: Story = {
  args: {
    readOnly: true,
    value: "Text",
  },
};

export const InputError: Story = {
  args: {
    readOnly: true,
    value: "Text",
    error: true,
    errorText: "Описание ошибки",
  },
};

export const InputFullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const InputEndAdornment: Story = {
  args: {
    endAdornment: <Icon name={icon?.iconName} />,
  },
};

export const InputStartAdornment: Story = {
  args: {
    startAdornment: <input type="checkbox" />,
  },
};
