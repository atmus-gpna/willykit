import React from "react";
import Typography from "../Typography";
import { TypographyProps } from "../typography.types";

const ExampleTypography: React.FC<TypographyProps> = ({ ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography format={props.format} {...props}>
        Текст
      </Typography>
    </div>
  );
};

export default ExampleTypography;
