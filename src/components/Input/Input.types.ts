import { Ref } from "react";

export type InputProps = {
  variant: "standard" | "header" | "fieldset";
  placeholder?: string;
  error?: boolean;
  errorText?: string;
  readOnly?: boolean;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  className?: string;
  fullWidth?: boolean;
  inputRef?: Ref<HTMLInputElement> | Ref<HTMLTextAreaElement>;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  width?: number;
  height?: number;
  multiline?: boolean;
  type?: React.HTMLInputTypeAttribute;
};

export interface AdornmentProps {
  position: "start" | "end";
}
