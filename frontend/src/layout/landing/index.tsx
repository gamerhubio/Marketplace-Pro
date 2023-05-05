import React from "react";
import { Header } from "./Header";
import { LandingLayoutWrapper } from "./styles";
import { Footer } from "./Footer";

export const LandingLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return (
    <LandingLayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LandingLayoutWrapper>
  );
};
