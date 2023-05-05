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

export const HomeSection: React.FC = () => {
  return (
    <HomeSectionWrapper id="home">
      <HomeSectionContainer>
        <h1>Multichain Aggregator for Metaverses and games</h1>
        <HomeBtnGroup>
          <HomeBtn>Explore marketplace</HomeBtn>
          <HomeBtn>Get App</HomeBtn>
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
