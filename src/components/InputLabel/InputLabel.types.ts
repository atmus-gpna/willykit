import { TooltipProps } from "../Tooltip/Tooltip.types";

export type InputLabelProps = {
  children: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  variant?: "filled" | "outlined" | "standard";
  tooltip?: TooltipProps;
};
