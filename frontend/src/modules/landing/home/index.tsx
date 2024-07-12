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
        <div className="right">

          <h1 data-aos="fade-up">
            <strong>AI</strong> Infrastructure for Metaverses and Games
          </h1>
    
          <HomeBtn data-aos="fade-up" onClick={() => router("/dashboard/home")}>
            Explore marketplace
          </HomeBtn>
    
          <HomeSocialLinks data-aos="fade-up">
            {socialLinks.map((item, key) => (
              <SocialItem key={key} href={item.link} target="_blank">
                {item.icon}
              </SocialItem>
            ))}
          </HomeSocialLinks>
        </div>

        <HeroLeftSection>

          <HeroCard data-aos="fade-up">
            <img src={hammer} height={"40px"} width={"40px"} alt="" />
            <p><strong>Publish </strong>AI-powered games with a few clicks</p>
          </HeroCard>

          <HeroCard data-aos="fade-up" style={{alignSelf: "end"}}>
            <img src={asset} height={"40px"} width={"40px"} alt="" />
            <p><strong>Access </strong>a curated marketplace for AI games</p>
          </HeroCard>

          <HeroCard data-aos="fade-up">
            <img src={controller} height={"40px"} width={"40px"} alt="" />
            <p><strong>Enable</strong>in-game companions to improve experience and rewards.</p>
          </HeroCard>
          
        </HeroLeftSection>

      </HomeSectionContainer>

    </HomeSectionWrapper>
  );
};
