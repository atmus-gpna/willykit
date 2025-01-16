import { FC, Ref } from "react";
import { InputProps } from "./Input.types";
import {
  ErrorText,
  StyledInput,
  StyledTextarea,
  Adornment,
  InputWrapper,
} from "./styled";
import clsx from "clsx";

const Input: FC<InputProps> = ({
  readOnly = false,
  error = false,
  errorText = "",
  autoFocus = false,
  disabled = false,
  used = "header",
  inputRef,
  width = 200,
  height,
  fullWidth,
  multiline = false,
  startAdornment,
  endAdornment,
  className,
  ...props
}) => {
  const commonProps = {
    disabled,
    error,
    readOnly,
    autoFocus,
    width,
    height,
    fullWidth,
    used,
  };

  return (
    <InputWrapper
      width={width}
      height={height}
      fullWidth={fullWidth}
      className={clsx("input-wrapper", className)}
    >
      {startAdornment && (
        <Adornment position="start">{startAdornment}</Adornment>
      )}
      {multiline ? (
        <StyledTextarea
          {...commonProps}
          {...props}
          ref={inputRef as Ref<HTMLTextAreaElement>}
          className={clsx("styled-textarea", className)}
        />
      ) : (
        <StyledInput
          {...commonProps}
          {...props}
          ref={inputRef as Ref<HTMLInputElement>}
          startAdornment={!!startAdornment}
          endAdornment={!!endAdornment}
          className={clsx("styled-input", className)}
        />
      )}
      {endAdornment && <Adornment position="end">{endAdornment}</Adornment>}
      {errorText && <ErrorText $isTextArea={multiline}>{errorText}</ErrorText>}
    </InputWrapper>
  );
};

export default Input;
