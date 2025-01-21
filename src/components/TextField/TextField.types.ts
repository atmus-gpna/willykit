import { InputProps } from "../Input/Input.types";
import { InputLabelProps } from "../InputLabel/InputLabel.types";
import { TooltipProps } from "../Tooltip/Tooltip.types";

export interface TextFieldProps
  extends Omit<InputProps, "tooltip">,
    Omit<InputLabelProps, "children"> {
  label: string;
  slots?: {
    tooltip?: TooltipProps;
  };
}
