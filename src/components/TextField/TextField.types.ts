import { InputProps } from "../Input/Input.types";
import { InputLabelProps } from "../InputLabel/InputLabel.types";
import { TooltipProps } from "../Tooltip/Tooltip.types";

export interface TextFieldProps extends InputProps, InputLabelProps {
  slots?: {
    tooltip?: TooltipProps;
  };
}
