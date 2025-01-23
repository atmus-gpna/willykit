import { forwardRef } from "react";
import { InputLabel } from "../InputLabel";
import { Container } from "../styled";
import Input from "../Input";
import { TextFieldProps } from "./TextField.types";
import classnames from "../../utils/classnames";

const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(
  (
    {
      label,
      className,
      fullWidth,
      slots,
      width = 200,
      required,
      variant = "standard",
      ...props
    },
    ref,
  ) => {
    return (
      <Container
        fullWidth={fullWidth}
        width={width}
        className={classnames("text-field-wrapper", className)}
        variant={variant}
        data-testid="container"
      >
        {label && (
          <InputLabel
            variant={variant}
            tooltip={slots?.tooltip}
            required={required}
            error={variant === "fieldset" && props.error}
            errorText={props.errorText}
            label={label}
          />
        )}
        <Input
          ref={ref}
          variant={variant}
          fullWidth={fullWidth}
          width={width}
          {...props}
        />
      </Container>
    );
  },
);

TextField.displayName = "TextField";

export default TextField;
