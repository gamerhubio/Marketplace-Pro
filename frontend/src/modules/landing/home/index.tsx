import React from "react";
import {
  HomeBtn,
  HomeBtnGroup,
  HomeSectionContainer,
  HomeSectionWrapper,
  HomeSocialLinks,
  SocialItem,
} from "./styles";
import { socialLinks } from "./data";
import { useNavigate } from "react-router-dom";

export const HomeSection: React.FC = () => {
  const router = useNavigate();
  return (
    <HomeSectionWrapper id="home">
      <HomeSectionContainer>
        <h1>AI Infrastructure for Metaverses and Games</h1>
        <HomeBtnGroup>
          <HomeBtn onClick={() => router("/app/home")}>
            Explore marketplace
          </HomeBtn>
          {/* <HomeBtn>Get App</HomeBtn> */}
        </HomeBtnGroup>
        <HomeSocialLinks>
          {socialLinks.map((item, key) => (
            <SocialItem key={key} href={item.link} target="_blank">
              {item.icon}
            </SocialItem>
          ))}
        </HomeSocialLinks>
      </HomeSectionContainer>
    </HomeSectionWrapper>
  );
};
