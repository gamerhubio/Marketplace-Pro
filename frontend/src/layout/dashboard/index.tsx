import React, { useState } from "react";
import {
  ContentWrapper,
  DashboardLayoutWrapper,
  MainContentWrapper,
} from "./styles";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export const DashboardLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handleSidebarClose = () => {
    setSidebarToggle(false);
  };

  return (
    <DashboardLayoutWrapper>
      <div className="main-wrapper">
        <Sidebar isOpen={sidebarToggle} onCancel={handleSidebarClose} />
        <MainContentWrapper>
          <Header onSidebar={() => setSidebarToggle((prev) => !prev)} />
          <ContentWrapper>{children}</ContentWrapper>
        </MainContentWrapper>
      </div>
      <Footer />
    </DashboardLayoutWrapper>
  );
};
