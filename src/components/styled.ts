import styled, { css } from "styled-components";

const excludedProps = ["fullWidth", "width", "height", "variant"];

interface ContainerProps {
  fullWidth?: boolean;
  width?: number;
  height?: number;
  variant?: string;
}

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !excludedProps.includes(prop),
})<ContainerProps>`
  position: relative;
  width: ${(props) => (props.fullWidth ? "100%" : `${props.width}px`)};
  ${(props) => props.height && `height: ${props.height}px`};

  ${(props) =>
    props.variant === "fieldset" &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      & > * {
        flex: 1;
        max-width: 50%;
        box-sizing: border-box;
      }
    `}

  .input-container {
    position: relative;
  }
`;
