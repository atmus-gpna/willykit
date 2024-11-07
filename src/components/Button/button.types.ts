import { MouseEventHandler } from "react";
import { Icon } from "../Icon";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconRight?: typeof Icon;
  iconLeft?: typeof Icon;
};
