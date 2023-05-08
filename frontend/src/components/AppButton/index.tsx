import React from "react";
import { AppButtonWrapper } from "./styles";

export const AppButton: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <AppButtonWrapper onClick={onClick} className={className}>
      {children}
    </AppButtonWrapper>
  );
};
