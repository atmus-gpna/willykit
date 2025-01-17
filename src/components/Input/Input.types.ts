import { Ref } from "react";

export type InputProps = {
  used: "modal" | "header";
  placeholder?: string;
  error?: boolean;
  errorText?: string;
  readOnly?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
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
  classes?: {
    root?: string;
    focused?: string;
    disabled?: string;
    error?: string;
    startAdornment?: string;
    endAdornment?: string;
    input?: string;
    multiline?: string;
    hovered?: string;
  };
};
