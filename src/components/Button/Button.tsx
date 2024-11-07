import { FC } from "react";
import { ButtonProps } from "./button.types";
import { StyledButton } from "./styled";

const Button: FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  iconRight,
  iconLeft,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {iconLeft ? (
        <div style={{ display: "flex", gap: "20px" }}>
          <>{iconLeft}</>
          <p style={{ margin: 0, padding: 0 }}>{text}</p>
        </div>
      ) : iconRight ? (
        <div style={{ display: "flex", gap: "20px" }}>
          <p style={{ margin: 0, padding: 0 }}>{text}</p>
          <>{iconRight}</>
        </div>
      ) : (
        <p style={{ margin: 0, padding: 0 }}>{text}</p>
      )}
    </StyledButton>
  );
};

export default Button;
