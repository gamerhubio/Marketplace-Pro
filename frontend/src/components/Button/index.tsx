import React from "react";
import { ButtonWrapper } from "./styles";

export type ButtonProps = {
  width?: number;
  height?: number;
  bgColor?: string;
  rounded?: number;
} & React.HTMLAttributes<HTMLElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  width,
  height,
  bgColor,
  className,
  rounded,
}) => {
  return (
    <ButtonWrapper
      className={className}
      width={width}
      height={height}
      bgColor={bgColor}
      rounded={rounded}
    >
      {children}
    </ButtonWrapper>
  );
};
