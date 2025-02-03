import { FC } from "react";
import Icon from "../Icon";
import { IIconProps } from "../icon.types";

const ExampleIcon: FC<IIconProps> = ({
  name = "pluse",
  color = "red",
  width = "14",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon name={name} color={color} width={width} />
    </div>
  );
};

export default ExampleIcon;
