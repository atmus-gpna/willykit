import { forwardRef } from "react";
import clsx from "clsx";
import { InputLabel } from "../InputLabel";
import { Container } from "../styled";
import Input from "../Input";
import { TextFieldProps } from "./TextField.types";

const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(
  (
    {
      label,
      used,
      className,
      fullWidth,
      slots,
      width = 200,
      required,
      ...props
    },
    ref,
  ) => {
    return (
      <Container
        fullWidth={fullWidth}
        width={width}
        className={clsx("text-field-wrapper", className)}
        data-testid="container"
      >
        {label && (
          <InputLabel tooltip={slots?.tooltip} required={required}>
            {label}
          </InputLabel>
        )}
        <Input
          ref={ref}
          used={used}
          {...props}
          fullWidth={fullWidth}
          width={width}
        />
      </Container>
    );
  },
);

TextField.displayName = "TextField";

export default TextField;
