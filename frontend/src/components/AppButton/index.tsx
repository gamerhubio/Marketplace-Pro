import React from "react";
import { AppButtonWrapper } from "./styles";

export const AppButton: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  onClick,
}) => {
  return <AppButtonWrapper onClick={onClick}>{children}</AppButtonWrapper>;
};
