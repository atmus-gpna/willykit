import { FC, Ref } from "react";
import { InputProps } from "./Input.types";
import { ErrorText, StyledInput, StyledTextarea, Adornment } from "./styled";
import clsx from "clsx";
import { Container } from "../styled";

const Input: FC<InputProps> = ({
  readOnly = false,
  error = false,
  errorText = "Ошибка",
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
  const commonProps = {
    disabled,
    error,
    readOnly,
    autoFocus,
    width,
    height,
    used,
  };

  return (
    <Container
      width={width}
      height={height}
      fullWidth={fullWidth}
      className={clsx("input-wrapper", classes.root, className)}
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
          data-testid="input"
          {...commonProps}
          {...props}
          ref={inputRef as Ref<HTMLTextAreaElement>}
          className={clsx("styled-textarea", className)}
          fullWidth={fullWidth}
        />
      ) : (
        <StyledInput
          data-testid="input"
          {...commonProps}
          {...props}
          ref={inputRef as Ref<HTMLInputElement>}
          startAdornment={!!startAdornment}
          endAdornment={!!endAdornment}
          className={clsx("styled-input", className)}
          fullWidth={fullWidth}
        />
      )}
      {endAdornment && <Adornment position="end">{endAdornment}</Adornment>}
      {error && <ErrorText $isTextArea={multiline}>{errorText}</ErrorText>}
    </Container>
  );
};

export default Input;
