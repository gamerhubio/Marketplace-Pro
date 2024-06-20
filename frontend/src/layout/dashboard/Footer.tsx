import React from "react";
import {
  FooterContainer,
  FooterDescWrapper,
  FooterLogo,
  FooterNavbarWrapper,
  FooterSocialNavbar,
  FooterWrapper,
} from "../landing/styles";
import { navLinkData, socialLinks } from "../landing/data";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper style={{position: "absolute", width: "100vw", left: 0, bottom: 0}}>
      <FooterContainer>
        <FooterDescWrapper>
          <FooterLogo>
            <img src="/images/logo.png" alt="" />
          </FooterLogo>
          <p>
          GamerHub is an AI infrastructure platform empowering gaming studios and developers with turnkey and custom solutions to seamlessly integrate advanced AI technologies into their games and metaverses.
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

      </FooterContainer>
    </FooterWrapper>
  );
};
