import React from "react";
import { TypographyProps } from "./typography.types";
import StyledTypography from "./styled";

const Typography: React.FC<TypographyProps> = ({
  format = "p",
  children,
  ...props
}) => {
  return (
    <StyledTypography format={format} {...props} role="typography">
      {children}
    </StyledTypography>
  );
};

export default Typography;
