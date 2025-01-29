import { TooltipProps } from "../Tooltip/Tooltip.types";

export type InputLabelProps = {
  isFieldSet?: boolean;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  tooltip?: TooltipProps;
  error?: boolean;
  errorText?: string;
};
