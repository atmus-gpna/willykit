import React, { FC } from "react";
import Button from "../Button";
import { ButtonProps, Icons } from "../button.types";

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  primary = true,
  size = "small",
  text = "Button",
  icon = {
    iconName: Icons.pluse,
    position: "left",
    color: "red",
  },
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
        icon={icon}
      />
    </div>
  );
};

export default Example;
