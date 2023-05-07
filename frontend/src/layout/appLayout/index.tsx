import React from "react";
import { AppLayoutWrapper } from "./styles";
import { Header } from "./Header";

export type AppLayoutProps = {
  buttonContent: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  buttonContent,
}) => {
  return (
    <AppLayoutWrapper>
      <Header buttonContent={buttonContent} />
      {children}
    </AppLayoutWrapper>
  );
};
