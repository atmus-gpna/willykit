import styled from "styled-components";
import { ButtonProps } from "./button.types";

export const StyledButton = styled.button<ButtonProps>`
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  background-color: ${(props) => (props.primary ? "#55b0ff" : "#c4e9f4")};
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
        ? "9px 30px 11px"
        : "14px 30px 16px"};
`;

export const ButtonWrapper = styled.div`
  margin: 0;
  padding: 0;
  flex: 1;
  text-align: center;
`;

interface IIconWrapperProps {
  position: "left" | "right";
}

export const IconWrapper = styled.div<IIconWrapperProps>`
  display: flex;
  align-items: center;
`;
