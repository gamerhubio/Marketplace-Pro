import React from "react";
import { AppButtonWrapper } from "./styles";

export const AppButton: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  onClick,
  className,
}) => {
  return (
    // @ts-ignore
    <AppButtonWrapper onClick={onClick} className={className}>
      {children}
    </AppButtonWrapper>
  );
};
