import styled from "styled-components";

export const TooltipContainer = styled.div<{
  open: boolean;
  placement: string;
}>`
  position: relative;
  display: inline-block;

  .tooltip-text {
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
    opacity: ${(props) => (props.open ? "1" : "0")};
    background-color: #fff;
    box-shadow: 0px 2px 5px 0px #00203326;
    color: #00203399;
    text-align: center;
    border-radius: 6px;
    padding: 8px 10px;
    position: absolute;
    transition:
      opacity 0.2s ease-in-out,
      visibility 0.2s ease-in-out;
    z-index: 1000;
    width: max-content;
    ${(props) => {
      switch (props.placement) {
        case "bottom":
          return `
            bottom: auto;
            left: auto;
          `;
        case "right":
          return `
            bottom: 0;
            left: 20px;
          `;
        default:
          return `
            bottom: 0;
            left: 20px;
          `;
      }
    }}
  }

  &:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
`;
