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
  classes?: string;
  fullWidth?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
};
