import { FC } from "react";
import { TextFieldProps } from "./TextField.types";
import clsx from "clsx";
import Input from "../Input";
import { InputLabel } from "../InputLabel";
import { Container } from "../styled";

const TextField: FC<TextFieldProps> = ({
  label,
  used,
  tooltip,
  className,
  fullWidth,
  width = 200,
  required,
  ...props
}) => {
  return (
    <Container
      fullWidth={fullWidth}
      width={width}
      className={clsx("text-field-wrapper", className)}
    >
      {label && (
        <InputLabel tooltip={tooltip} required={required}>
          {label}
        </InputLabel>
      )}
      <Input
        used={used}
        {...props}
        fullWidth={fullWidth}
        width={width}
        className={clsx("text-field-input")}
      />
    </Container>
  );
};

export default TextField;
