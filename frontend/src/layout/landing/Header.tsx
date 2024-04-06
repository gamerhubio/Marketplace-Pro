import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenuIcon,
  HeaderNavItem,
  HeaderNavbar,
  HeaderWrapper,
  SignInBtn,
} from "./styles";
import { navLinkData } from "./data";
import { IconRightMenu } from "../../components";
import { MobileHeader } from "./MobileHeader";

export const Header: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const [headerSetting, setHeaderSetting] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setHeaderSetting(window.scrollY > 50);
  };

  return (
    <React.Fragment>
      <HeaderWrapper className={headerSetting ? "fixed" : ""}>
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
            {/* <SignInBtn href="#">Sign in</SignInBtn> */}
          </HeaderNavbar>
          <HeaderMenuIcon onClick={() => setMenu(true)}>
            <IconRightMenu />
          </HeaderMenuIcon>
        </HeaderContainer>
      </HeaderWrapper>
      <MobileHeader active={menu} onClose={() => setMenu(false)} />
    </React.Fragment>
  );
};
