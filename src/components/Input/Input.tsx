import { FC } from "react";
import { InputProps } from "./Input.types";
import { ErrorText, StyledInput } from "./styled";

const Input: FC<InputProps> = ({
  readOnly = false,
  error = false,
  errorText = "",
  autoFocus = false,
  disabled = false,
  inputRef,
  ...props
}) => {
  return (
    <div>
      <StyledInput
        {...props}
        disabled={disabled}
        error={error}
        readOnly={readOnly}
        autoFocus={autoFocus}
        ref={inputRef}
      />
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </div>
  );
};

export default Input;
