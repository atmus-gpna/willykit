import { forwardRef, FC, Ref } from "react";
import { InputProps } from "./Input.types";
import { ErrorText, StyledInput, StyledTextarea, Adornment } from "./styled";
import { Container } from "../styled";
import classnames from "../../utils/classnames";

const InputBase: FC<InputProps> = ({
  readOnly = false,
  error = false,
  errorText = "Ошибка",
  autoFocus = false,
  disabled = false,
  variant = "standard",
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
    variant,
  };

  return (
    <Container
      width={width}
      height={height}
      fullWidth={fullWidth}
      className={classnames("input-wrapper", className)}
    >
      <div className="input-container">
        {startAdornment && (
          <Adornment position="start" className={classnames("input-adornment")}>
            {startAdornment}
          </Adornment>
        )}
        {multiline ? (
          <StyledTextarea
            data-testid="input"
            {...commonProps}
            {...props}
            ref={inputRef as Ref<HTMLTextAreaElement>}
            className={classnames("styled-textarea", className)}
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
            className={classnames("styled-input", className)}
            fullWidth={fullWidth}
          />
        )}
        {endAdornment && <Adornment position="end">{endAdornment}</Adornment>}
      </div>
      {error && variant !== "fieldset" && (
        <ErrorText $isTextArea={multiline}>{errorText}</ErrorText>
      )}
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
