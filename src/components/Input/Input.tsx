import { forwardRef, FC, Ref } from "react";
import { InputProps } from "./Input.types";
import { ErrorText, StyledInput, StyledTextarea, Adornment } from "./styled";
import clsx from "clsx";
import { Container } from "../styled";

const InputBase: FC<InputProps> = ({
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
      className={clsx("input-wrapper", className)}
    >
      <div className="input-container">
        {startAdornment && (
          <Adornment position="start" className={clsx("input-adornment")}>
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
      </div>
      {error && <ErrorText $isTextArea={multiline}>{errorText}</ErrorText>}
    </Container>
  );
};

export const Input = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>((props, ref) => (
  <InputBase
    {...props}
    inputRef={
      ref as (instance: HTMLInputElement | HTMLTextAreaElement | null) => void
    }
  />
));
Input.displayName = "Input";
