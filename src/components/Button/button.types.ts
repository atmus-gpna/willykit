import { MouseEventHandler } from "react";
import { EIcons } from "../Icon/icon.types";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: {
    position: "left" | "right";
    iconName: keyof typeof EIcons;
    color?: string;
  } | null;
};
