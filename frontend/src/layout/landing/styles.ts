import styled from "styled-components";
import { MobileHeaderProps } from "./MobileHeader";

export const LandingLayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(171.58deg, #01091f 7.81%, #00113c 152.33%);
`;

export const HeaderWrapper = styled.div`
  z-index: 10;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: -1px;
    background: linear-gradient(
      90deg,
      rgba(253, 53, 158, 0) 1.03%,
      #fd359e 6.88%,
      #fd359e 94.69%,
      rgba(253, 53, 158, 0) 100%
    );
  }
  &.fixed {
    background: rgb(1, 9, 31);
  }
`;

export const CloseButton = styled.div`
  font-size: 30px;
  line-height: 40px;
  right: 10px;
  top: 10px;
  position: absolute;
  z-index: 10;
  display: none;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1240px;
  width: 95%;
  margin: auto;
`;

export const HeaderLogo = styled.div`
  display: flex;
  max-width: 193px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

export const HeaderNavbar = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 32px;
  }
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const HeaderMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 850px) {
    display: flex;
  }
`;

export const HeaderNavItem = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #eff1f6;
`;

export const SignInBtn = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  border-radius: 5px;
  height: 48px;
  width: 116px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  &.mobile {
    width: 100%;
  }
`;

export const FooterWrapper = styled.div`
  background: url("/images/landing/footer-bg.png");
  background-size: 100% 100%;
  padding: 80px 0;
  min-height: 527px;
`;

export const FooterContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  & > * {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const FooterDescWrapper = styled.div`
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #bec9da;
    max-width: 423px;
    width: 100%;
    margin: 24px 0 32px;
  }
  h6 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #eff1f6;
    margin-bottom: 20px;
  }
`;

export const FooterNavbarWrapper = styled.div`
  & > :not(:first-child) {
    margin-top: 24px;
  }
  a {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #eff1f6;
  }
  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  max-width: 193px;
  width: 100%;
  img {
    width: 100%;
  }
`;

export const FooterSocialNavbar = styled.div`
  color: white;
  & > :not(:first-child) {
    margin-left: 24px;
  }
`;

export const MobileHeaderWrapper = styled.div<MobileHeaderProps>`
  position: fixed;
  z-index: 10;
  max-width: 320px;
  width: 100%;
  height: 100vh;
  background-color: #000000a0;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 5px 5px #ffffff30;
  right: ${({ active }) => (active ? 0 : "-325px")};
  top: 0;
`;

export const MobileHeaderContainer = styled.div`
  position: relative;
  padding: 60px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MobileHeaderNavbar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  & > :not(:first-child) {
    margin-top: 30px;
  }
`;

export const MobileHeaderNavItem = styled.a`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #eff1f6;
`;

export const MobileHeaderOverLay = styled.div<MobileHeaderProps>`
  position: fixed;
  z-index: 9;
  background-color: #00000080;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  top: 0;
  left: 0;
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
`;
