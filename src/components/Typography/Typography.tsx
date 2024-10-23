import React from "react";
import { TTypographyProps } from "./typography.types";
import StyledTypography from "./styled";

const Typography: React.FC<TTypographyProps> = ({
  format = "p",
  children,
  ...props
}) => {
  return (
    <StyledTypography format={format} {...props}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
