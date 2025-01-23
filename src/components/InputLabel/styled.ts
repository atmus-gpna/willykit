import styled from "styled-components";
import { InputLabelProps } from "./InputLabel.types";

export const StyledLabel = styled.label.withConfig({
  shouldForwardProp: (prop) => !["variant"].includes(prop),
})<{ variant: InputLabelProps["variant"] }>`
  color: #00203399;
  display: flex;
  align-items: center;
  font-size: 11px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  gap: 5px;
  padding: 3px 6px;

  ${(props) =>
    props.variant === "fieldset" &&
    `
      width: 100%;
      border: 1px solid #e5e9eb;
      background: #f9f9f9;
      padding: 7px 10px;
      border-right: none;
    `}
`;
