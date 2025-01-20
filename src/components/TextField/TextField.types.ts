import { InputProps } from "../Input/Input.types";
import { InputLabelProps } from "../InputLabel/InputLabel.types";

export interface TextFieldProps extends InputProps, InputLabelProps {
  label: string;
  tooltip?: string;
  error?: boolean;
  errorText?: string;
}
