import styled from "styled-components";
import { InputProps } from "./Input.types";

export const StyledInput = styled.input<InputProps>`
  border: ${(props) =>
    props.error ? "1px solid #EB5757" : "1px solid #0020331a"};
  min-height: ${(props) => (props.used === "header" ? "28px" : "24px")};
  outline: none;
  border-radius: ${(props) => (props.used === "header" ? "6px" : "2px")};
  padding: 0 6px;
  background: ${(props) =>
    props.disabled ? "#00203305" : props.readOnly ? "#fff" : "#F0F9FF"};
  color: #002033e5;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  &::placeholder {
    color: #0020334d;
  }

  &:hover {
    border: 1px solid #006fba66;
  }

  &:focus {
    border: 1px solid #006fba;
  }
`;

export const ErrorText = styled.div`
  margin-left: 6px;
  margin-top: 3px;
  font-family: "Inter", sans-serif;
  font-size: 9px;
  line-height: 10.8px;
  color: #eb5757;
`;
