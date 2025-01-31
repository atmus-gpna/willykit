import { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
};
