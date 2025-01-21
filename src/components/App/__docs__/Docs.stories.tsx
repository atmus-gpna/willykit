import type { Meta, StoryObj } from "@storybook/react";
import App from "../../App/App";

const meta: Meta<typeof App> = {
  title: "App",
  component: App,
  args: {
    placeholder: "Enter text...",
    used: "modal",
    readOnly: true,
  },
};

export default meta;
type Story = StoryObj<typeof App>;

export const TextFieldModal: Story = {
  args: {},
};
