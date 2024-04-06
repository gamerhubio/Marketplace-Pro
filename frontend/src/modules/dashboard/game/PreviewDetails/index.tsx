import React from "react";
import {
  DetailsDivider,
  PlayButton,
  PreviewActionGroup,
  PreviewDetailsContainer,
  PreviewDetailsItem,
  RecommendButton,
  SocialWrapper,
} from "./styles";
import { detailsData1, detailsData2, socialData } from "../data";
import { IconFavourite } from "../../../../components";

export const PreviewDetails: React.FC = () => {
  return (
    <PreviewDetailsContainer>
      {detailsData1.map((item, key) => (
        <PreviewDetailsItem key={key}>
          <span>{item.label}</span>
          <span>{item.value}</span>
        </PreviewDetailsItem>
      ))}
      <DetailsDivider>
        <img src="/images/userdashboard/games.png" alt="" />
      </DetailsDivider>
      {detailsData2.map((item, key) => (
        <PreviewDetailsItem key={key}>
          <span>{item.label}</span>
          <span>{item.value}</span>
        </PreviewDetailsItem>
      ))}
      <PreviewDetailsItem>
        <span>Community</span>
        <SocialWrapper>
          {socialData.map((item, key) => (
            <a href={item.to} key={key} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          ))}
        </SocialWrapper>
      </PreviewDetailsItem>
      <PreviewActionGroup>
        <PlayButton>Play Game</PlayButton>
        <RecommendButton>
          <IconFavourite />
        </RecommendButton>
      </PreviewActionGroup>
    </PreviewDetailsContainer>
  );
};
