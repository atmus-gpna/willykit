import styled from "styled-components";

const excludedProps = ["fullWidth", "width", "height"];

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !excludedProps.includes(prop),
})<{
  fullWidth?: boolean;
  width?: number;
  height?: number;
}>`
  position: relative;
  width: ${(props) => (props.fullWidth ? "100%" : `${props.width}px`)};

  ${(props) => props.height && `height: ${props.height}px`}

  .input-container {
    position: relative;
  }
`;
