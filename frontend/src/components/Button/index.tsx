import React from "react";
import { ButtonWrapper } from "./styles";

export type ButtonProps = {
  width?: number;
  height?: number;
  bgColor?: string;
  fSize?: number;
  rounded?: number;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  width,
  height,
  disabled,
  bgColor,
  className,
  rounded,
  fSize,
  onClick,
}) => {
  return (
    <ButtonWrapper
      className={className}
      width={width}
      height={height}
      bgColor={bgColor}
      rounded={rounded}
      fSize={fSize}
      onClick={disabled ? () => {} : onClick}
      disabled={disabled}
    >
      {children}
    </ButtonWrapper>
  );
};
