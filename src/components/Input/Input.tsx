import { FC, Ref, useState } from "react";
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
  classes = {},
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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
      className={clsx("input-wrapper", classes.root, className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {startAdornment && (
        <Adornment
          position="start"
          className={clsx("input-adornment", classes.startAdornment)}
        >
          {startAdornment}
        </Adornment>
      )}
      {multiline ? (
        <StyledTextarea
          {...commonProps}
          {...props}
          ref={inputRef as Ref<HTMLTextAreaElement>}
          className={clsx(
            "styled-textarea",
            classes.multiline,
            error && classes.error,
            isHovered && classes.hovered,
            isFocused && classes.focused,
            disabled && classes.disabled,
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      ) : (
        <StyledInput
          {...commonProps}
          {...props}
          ref={inputRef as Ref<HTMLInputElement>}
          startAdornment={!!startAdornment}
          endAdornment={!!endAdornment}
          className={clsx(
            "styled-input",
            classes.input,
            error && classes.error,
            isHovered && classes.hovered,
            isFocused && classes.focused,
            disabled && classes.disabled,
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      )}
      {endAdornment && (
        <Adornment
          position="end"
          className={clsx("input-adornment", classes.endAdornment)}
        >
          {endAdornment}
        </Adornment>
      )}
      {errorText && (
        <ErrorText $isTextArea={multiline} className={clsx("input-error-text")}>
          {errorText}
        </ErrorText>
      )}
    </InputWrapper>
  );
};

export default Input;
