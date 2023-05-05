import styled from "styled-components";
import { ButtonProps } from ".";

export const ButtonWrapper = styled.div<ButtonProps>`
  max-width: ${({ width }) => (width ? width + "px" : "100%")};
  width: 100%;
  height: ${({ height }) => (height ? height + "px" : "48px")};
  background: ${({ bgColor }) =>
    bgColor
      ? bgColor
      : "linear-gradient(92.66deg, #D7007B 0.42%, #B30166 102.61%);"};
  border-radius: ${({ rounded }) => (rounded ? rounded + "px" : "5px")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
`;
