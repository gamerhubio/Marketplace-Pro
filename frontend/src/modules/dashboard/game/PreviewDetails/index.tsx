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
import useGame from "../../../../hooks/useGame";

export const PreviewDetails: React.FC = () => {

  const game = useGame()
  
  return (
    <PreviewDetailsContainer>

      <PreviewDetailsItem> 
        <span>Release status</span>
        <span> {game.status} </span>  
      </PreviewDetailsItem>

      <PreviewDetailsItem> 
        <span> ICO Price </span>
        <span> ${game.tokenPrice} </span>  
      </PreviewDetailsItem>

      <PreviewDetailsItem> 
        <span>Chain</span>
        <span> {game.blockchains?.[0]} </span>  
      </PreviewDetailsItem>

      <PreviewDetailsItem> 
        <span>Token</span>
        <span> {game.tokenTicker} </span>  
      </PreviewDetailsItem>

      <DetailsDivider>
        <img src="/images/userdashboard/games.png" alt="" />
      </DetailsDivider>

      <PreviewDetailsItem> 
        <span> Language </span>
        <span> {game.language} </span>  
      </PreviewDetailsItem>

      <PreviewDetailsItem> 
        <span> Developer </span>
        <span> {game.developers} </span>  
      </PreviewDetailsItem>

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
