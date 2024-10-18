import { MouseEventHandler } from "react";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: { position: "left" | "right"; iconName: Icons; color?: string } | null;
};

export const enum Icons {
  "pluse" = "pluse",
}
