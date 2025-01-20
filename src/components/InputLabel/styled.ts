import styled from "styled-components";
import { InputLabelProps } from "./InputLabel.types";

export const StyledLabel = styled.label<InputLabelProps>`
  color: #00203399;
  display: flex;
  align-items: center;
  font-size: 11px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  gap: 5px;
  padding: 3px 6px;
`;
