import { FC } from "react";
import { TypographyProps } from "./typography.types";
import StyledTypography from "./styled";

const Typography: FC<TypographyProps> = ({
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
