import styled from "styled-components";
import { SidebarProps } from "./";

export const SidebarWrapper = styled.div<SidebarProps>`
  position: fixed;
  left: 0;
  top: 0;
  background: #060d33;
  width: 264px;
  min-height: 100vh;
  transition: all 0.3s;
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    right: 0;
    top: 0;
    background: linear-gradient(
      rgba(179, 0, 102, 0) 0%,
      #b30066 21.35%,
      #b30066 75%,
      rgba(179, 0, 102, 0) 100%
    );
  }
  & > div {
    position: relative;
    padding: 0 16px 30px;
    height: 100vh;
    overflow-y: auto;
  }
  @media screen and (max-width: 1024px) {
    z-index: 999;
    left: ${({ isOpen }) => (isOpen ? "0px" : "-264px")};
    & > div {
      padding-top: 20px;
    }
  }
`;

export const SidebarOverLay = styled.div<SidebarProps>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.3s;
  width: 100vw;
  height: 100vh;
  background-color: #00000080;
  backdrop-filter: blur(10px);
  z-index: 998;
  position: fixed;
`;

export const SidebarLogo = styled.div`
  padding: 30px 0 40px;
  display: flex;
  justify-content: center;
  img {
    cursor: pointer;
  }
`;

export const SidebarMenu = styled.div`
  & > :not(:first-child) {
    margin-top: 8px;
  }
`;

export const NavItem = styled.div<{ active: boolean }>`
  text-decoration: none;
  display: flex;
  align-items: center;
  background: ${({ active }) =>
      active ? "url('/images/userdashboard/sidebar-selection.png')" : ""}
    no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  height: 56px;
  width: 100%;
  padding: 0 30px;
  img {
    width: 24px;
    height: 24px;
  }
  span {
    margin-left: 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #bec9da;
  }
`;
