import React from "react";
import {
  HeroCard,
  HeroLeftSection,
  HomeBtn,
  HomeSectionContainer,
  HomeSectionWrapper,
  HomeSocialLinks,
  SocialItem,
} from "./styles";
import { socialLinks } from "./data";
import { useNavigate } from "react-router-dom";
import hammer from "./assets/hammer.png";
import asset from "./assets/asset.png";
import controller from "./assets/controller.png";

export const HomeSection: React.FC = () => {
  const router = useNavigate();
  return (
    <HomeSectionWrapper id="home">
      <HomeSectionContainer>
        <div>

          <h1>
            <strong>AI</strong> Infrastructure for Metaverses and Games
          </h1>
    
          <HomeBtn onClick={() => router("/dashboard/home")}>
            Explore marketplace
          </HomeBtn>
    
          <HomeSocialLinks>
            {socialLinks.map((item, key) => (
              <SocialItem key={key} href={item.link} target="_blank">
                {item.icon}
              </SocialItem>
            ))}
          </HomeSocialLinks>
        </div>

        <HeroLeftSection>

          <HeroCard>
            <img src={hammer} height={"40px"} width={"40px"} alt="" />
            <p><strong>Publish </strong>AI-powered games with a few clicks</p>
          </HeroCard>

          <HeroCard style={{alignSelf: "end"}}>
            <img src={asset} height={"40px"} width={"40px"} alt="" />
            <p><strong>Access </strong>a curated marketplace for AI games</p>
          </HeroCard>

          <HeroCard>
            <img src={controller} height={"40px"} width={"40px"} alt="" />
            <p><strong>Enable</strong>in-game companions to improve experience and rewards.</p>
          </HeroCard>
          
        </HeroLeftSection>

      </HomeSectionContainer>
      
    </HomeSectionWrapper>
  );
};
