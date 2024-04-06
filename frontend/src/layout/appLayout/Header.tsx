import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderLogo, HeaderWrapper } from "./styles";
import { AppLayoutProps } from ".";

export const Header: React.FC<AppLayoutProps> = ({ buttonContent }) => {
  const router = useNavigate();
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
    <HeaderWrapper className={headerSetting ? "fixed" : ""}>
      <HeaderContainer>
        <HeaderLogo onClick={() => router("/app/home")}>
          <img src="/images/app-logo.png" alt="" />
        </HeaderLogo>
        {buttonContent}
      </HeaderContainer>
    </HeaderWrapper>
  );
};
