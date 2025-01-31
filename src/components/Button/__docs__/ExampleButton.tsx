import { FC } from "react";
import Button from "../Button";
import { ButtonProps } from "../button.types";

const ExampleButton: FC<ButtonProps> = ({
  disabled,
  onClick,
  primary,
  size,
  text,
  iconLeft,
  iconRight,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button
        size={size}
        text={text}
        disabled={disabled}
        onClick={onClick}
        primary={primary}
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
    </div>
  );
};

export default ExampleButton;
