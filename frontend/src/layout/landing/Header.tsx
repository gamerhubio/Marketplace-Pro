import React from "react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderNavItem,
  HeaderNavbar,
  HeaderWrapper,
  SignInBtn,
} from "./styles";
import { navLinkData } from "./data";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>
          <img src="/images/logo.png" alt="" />
        </HeaderLogo>
        <HeaderNavbar>
          {navLinkData.map((item, key) => (
            <HeaderNavItem key={key} href={item.to}>
              {item.label}
            </HeaderNavItem>
          ))}
          <SignInBtn href="#">Sign in</SignInBtn>
        </HeaderNavbar>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
