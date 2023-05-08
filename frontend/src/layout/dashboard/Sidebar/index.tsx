import React from "react";
import {
  NavItem,
  SidebarLogo,
  SidebarMenu,
  SidebarOverLay,
  SidebarWrapper,
} from "./styles";
import { sidebarList } from "../data";
import { useLocation, useNavigate } from "react-router-dom";

export type SidebarProps = {
  isOpen: boolean;
  onCancel?: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onCancel }) => {
  const router = useNavigate();
  const location = useLocation();
  return (
    <>
      <SidebarWrapper isOpen={isOpen}>
        <SidebarLogo>
          <img src="/images/app-logo.png" alt="" />
        </SidebarLogo>
        <SidebarMenu>
          {sidebarList.map((item, key) => (
            <NavItem
              active={item.to === location.pathname}
              key={key}
              onClick={() => router(item.to)}
            >
              <div>
                <img src={item.icon} alt="" />
              </div>
              <span>{item.label}</span>
            </NavItem>
          ))}
        </SidebarMenu>
      </SidebarWrapper>
      <SidebarOverLay isOpen={isOpen} onClick={onCancel} />
    </>
  );
};
