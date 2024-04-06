import React from "react";
import {
  CloseButton,
  HeaderLogo,
  MobileHeaderContainer,
  MobileHeaderNavItem,
  MobileHeaderNavbar,
  MobileHeaderOverLay,
  MobileHeaderWrapper,
  SignInBtn,
} from "./styles";
import { navLinkData } from "./data";

export type MobileHeaderProps = {
  active: boolean;
  onClose?: () => void;
};

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  active,
  onClose,
}) => {
  return (
    <React.Fragment>
      <MobileHeaderWrapper active={active}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <MobileHeaderContainer>
          <HeaderLogo>
            <img src="/images/logo.png" alt="" />
          </HeaderLogo>
          <MobileHeaderNavbar>
            {navLinkData.map((item, key) => (
              <MobileHeaderNavItem key={key} href={item.to} onClick={onClose}>
                {item.label}
              </MobileHeaderNavItem>
            ))}
            <SignInBtn className="mobile" href="#">
              Sign in
            </SignInBtn>
          </MobileHeaderNavbar>
        </MobileHeaderContainer>
      </MobileHeaderWrapper>
      <MobileHeaderOverLay active={active} onClick={onClose} />
    </React.Fragment>
  );
};
