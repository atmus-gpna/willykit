import { forwardRef } from "react";
import { InputLabel } from "../InputLabel";
import { Container } from "../styled";
import Input from "../Input";
import { TextFieldProps } from "./TextField.types";
import classnames from "../../utils/classnames";
import { FieldSet } from "./styled";

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
      component = "input",
      ...props
    },
    ref,
  ) => {
    return (
      <Container
        fullWidth={fullWidth}
        width={width}
        className={classnames("text-field-wrapper", className)}
        component={component}
        data-testid="container"
      >
        {label && (
          <InputLabel
            component={component}
            tooltip={slots?.tooltip}
            required={required}
            error={component === "fieldset" && props.error}
            errorText={props.errorText}
            label={label}
          />
        )}
        {component === "input" ? (
          <Input
            ref={ref}
            fullWidth={fullWidth}
            width={width}
            variant={variant}
            {...props}
          />
        ) : component === "fieldset" ? (
          <FieldSet
            ref={ref}
            fullWidth={fullWidth}
            width={width}
            variant={variant}
            component={component}
            {...props}
          />
        ) : (
          // следующие варианты
          <></>
        )}
      </Container>
    );
  },
);

TextField.displayName = "TextField";

export default TextField;
