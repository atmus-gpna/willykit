import React, { FC } from "react";
import Icon from "../Icon";
import { IIconProps } from "../icon.types";

const ExampleIcon: FC<IIconProps> = ({
  name = "pluse",
  color = "red",
  size = "14",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon name={name} color={color} size={size} />
    </div>
  );
};

export default ExampleIcon;
