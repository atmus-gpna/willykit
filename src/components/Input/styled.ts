import styled, { css } from "styled-components";
import { AdornmentProps, InputProps } from "./Input.types";

const sharedStyles = css<InputProps>`
  border: ${(props) =>
    props.error ? "1px solid #EB5757" : "1px solid #0020331a"};
  outline: none;
  border-radius: ${(props) =>
    props.variant === "header"
      ? "6px"
      : props.variant === "fieldset"
        ? "0"
        : "2px"};
  padding: ${(props) =>
    props.variant === "header"
      ? "7px 8px"
      : props.variant === "fieldset"
        ? "7px 10px"
        : "5px 6px"};
  background: ${(props) =>
    props.disabled ? "#00203305" : props.readOnly ? "#fff" : "#F0F9FF"};
  color: ${(props) => (props.disabled ? "#0020334D" : "#002033e5")};
  width: ${(props) =>
    props.fullWidth
      ? `calc(100% - 22px)`
      : props.variant === "fieldset"
        ? `calc(100% - 22px)`
        : props.variant === "header"
          ? `calc(${props.width}px - 18px)`
          : `calc(${props.width}px - 14px)`};
  font-size: 11px;
  height: ${(props) =>
    props.height ? `calc(${props.height}px - 12px)` : "12px"};

  ${(props) =>
    props.startAdornment ? `height: calc(${props.height}px - 18px);` : ""}
  ${(props) =>
    props.startAdornment
      ? `padding-left: 24px; width: calc(${props.width}px - 32px);`
      : ""}
  ${(props) =>
    props.endAdornment
      ? `padding-right: 24px; width: calc(${props.width}px - 32px);`
      : ""}
      
  ${(props) =>
    props.startAdornment && props.endAdornment
      ? `padding-left: 24px; padding-right: 24px; width: calc(${props.width}px - 50px);`
      : ""}

  &::placeholder {
    color: #0020334d;
  }

  &:hover {
    border: ${(props) =>
      props.readOnly ? "1px solid #0020331a" : "1px solid #006fba66"};
  }

  &:focus {
    border: ${(props) =>
      props.readOnly ? "1px solid #0020331a" : "1px solid #006fba"};
  }
`;

const excludedProps = [
  "error",
  "fullWidth",
  "variant",
  "startAdornment",
  "endAdornment",
  "width",
  "height",
];

export const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop) => !excludedProps.includes(prop),
})<InputProps>`
  ${sharedStyles}
`;

export const StyledTextarea = styled.textarea.withConfig({
  shouldForwardProp: (prop) => !excludedProps.includes(prop),
})<
  Omit<
    InputProps,
    keyof Pick<
      InputProps,
      "type" | "multiline" | "endAdornment" | "startAdornment"
    >
  >
>`
  ${sharedStyles}
  min-height: 52px;
  resize: none;
  overflow-y: auto;
  padding-right: 8px;
  width: ${(props) =>
    props.fullWidth ? "100%" : `calc(${props.width}px - 16px)`};

  ${(props) => props.height && `height: ${props.height}px`}

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #00203326;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #0020330d;
    margin: 8px 0;
  }
`;

export const ErrorText = styled.div<{ $isTextArea?: boolean }>`
  margin-left: 6px;
  margin-top: ${({ $isTextArea }) => ($isTextArea ? "0" : "3px")};
  font-family: "Inter", sans-serif;
  font-size: 9px;
  line-height: 10.8px;
  color: #eb5757;
  overflow-wrap: break-word;
`;

export const Adornment = styled.div<AdornmentProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.position === "start" ? "left: 6px;" : "right: 6px;")}
  color: #b0cfe0;
  pointer-events: none;

  input,
  button,
  a {
    pointer-events: auto;
  }
`;
