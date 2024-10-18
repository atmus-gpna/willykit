import { FC } from "react";
import { ButtonProps } from "./button.types";
import { StyledButton } from "./styled";
import { Icon } from "../Icon";

const Button: FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  icon = undefined,
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
      {icon ? (
        <div style={{ display: "flex", gap: "20px" }}>
          {icon?.position === "left" ? (
            <>
              <Icon name={icon?.iconName} color={icon?.color} />
              <p style={{ margin: 0, padding: 0 }}>{text}</p>
            </>
          ) : (
            <>
              <p style={{ margin: 0, padding: 0 }}>{text}</p>
              <Icon name={icon?.iconName} color={icon?.color} />
            </>
          )}
        </div>
      ) : (
        <p style={{ margin: 0, padding: 0 }}>{text}</p>
      )}
    </StyledButton>
  );
};

export default Button;
