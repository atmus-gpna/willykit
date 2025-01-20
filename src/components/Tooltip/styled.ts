import styled from "styled-components";

export const TooltipContainer = styled.div<{ open: boolean }>`
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
    bottom: 0;
    left: 20px;
    transition:
      opacity 0.2s ease-in-out,
      visibility 0.2s ease-in-out;
    z-index: 1000;
    white-space: nowrap;
  }

  &:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipArrow = styled.div<{ arrow: boolean }>`
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: ${(props) =>
    props.arrow ? "#333 transparent transparent transparent" : "transparent"};
  display: ${(props) => (props.arrow ? "block" : "none")};
`;
