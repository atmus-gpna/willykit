import { FC } from "react";
import { ButtonProps } from "./button.types";
import { ButtonWrapper, IconWrapper, StyledButton } from "./styled";

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
      {iconLeft && <IconWrapper position={"left"}>{iconLeft}</IconWrapper>}
      <ButtonWrapper>{text}</ButtonWrapper>
      {iconRight && <IconWrapper position={"right"}>{iconRight}</IconWrapper>}
    </StyledButton>
  );
};

export default Button;
