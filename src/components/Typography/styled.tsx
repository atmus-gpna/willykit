import { ComponentType } from "react";
import styled from "styled-components";
import { ETypography, TTypography, TTypographyProps } from "./typography.types";
const typographyComponents: {
  [key in ETypography]: ComponentType<TTypographyProps>;
} = {
  h1: styled.h1``,
  h2: styled.h2``,
  h3: styled.h3``,
  h4: styled.h4``,
  h5: styled.h5``,
  h6: styled.h6``,
  p: styled.p``,
};

// Компонент для стилизованного элемента
const StyledTypography = styled(
  ({ format = "p", ...props }: { format?: TTypography } & TTypographyProps) => {
    const Tag = typographyComponents[format];
    return <Tag {...props} />;
  },
)<TTypographyProps>`
  line-height: ${(props) => props.lineHeight ?? 1};
  margin: ${(props) => props.margin ?? 0}px;
  padding: ${(props) => props.padding ?? 0}px;
  font-size: ${(props) => props.fontSize ?? 12}px;
  font-weight: ${(props) => props.fontWeight ?? 400};
  color: ${(props) => props.color ?? "#000"};
`;

export default StyledTypography;
