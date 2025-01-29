import React from "react";
import Typography from "../Typography";
import { TTypographyProps } from "../typography.types";

const ExampleTypography: React.FC<TTypographyProps> = ({ ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography format={props.format} {...props} children={props.children} />
    </div>
  );
};

export default ExampleTypography;
