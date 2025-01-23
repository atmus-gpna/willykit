import { TooltipProps } from "../Tooltip/Tooltip.types";

export type InputLabelProps = {
  variant: "standard" | "header" | "fieldset";
  label?: string;
  disabled?: boolean;
  required?: boolean;
  tooltip?: TooltipProps;
  error?: boolean;
  errorText?: string;
};
