import React from "react";
import {
  FooterContainer,
  FooterDescWrapper,
  FooterLogo,
  FooterNavbarWrapper,
  FooterSocialNavbar,
  FooterWrapper,
} from "./styles";
import { navLinkData, socialLinks } from "./data";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterDescWrapper>
          <FooterLogo>
            <img src="/images/logo.png" alt="" />
          </FooterLogo>
          <p>
            At GamerHub, we're revolutionizing the gaming industry by providing
            cutting-edge AI infrastructure tailored for game developers.
          </p>
          <h6>Connect with the community</h6>
          <FooterSocialNavbar>
            {socialLinks.map((item, key) => (
              <a href={item.link} target="_blank" key={key} rel="noreferrer">
                {item.icon}
              </a>
            ))}
          </FooterSocialNavbar>
        </FooterDescWrapper>
        <FooterNavbarWrapper>
          {navLinkData.map((item, key) => (
            <a href={item.to} key={key}>
              {item.label}
            </a>
          ))}
        </FooterNavbarWrapper>
      </FooterContainer>
    </FooterWrapper>
  );
};
