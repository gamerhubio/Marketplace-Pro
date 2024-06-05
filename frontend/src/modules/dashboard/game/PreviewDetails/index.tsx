import React, { useState } from "react";
import {
  DetailsDivider,
  PlayButton,
  PreviewActionGroup,
  PreviewDetailsContainer,
  PreviewDetailsItem,
  RecommendButton,
  SocialWrapper,
} from "./styles";
import { IconFavourite, IconDiscord, IconTelegram, IconTwitter } from "../../../../components";
import useGame from "../../../../hooks/useGame";
import AuthModals from "../../../../components/AuthModals";

export const PreviewDetails: React.FC = () => {

  const [open, setOpen] = useState(false)

  const game = useGame()

  const getSocials = () => {
    const accounts = game.socials
    const socials = []

    if (accounts.discord) {
      socials.push({
        icon: <IconDiscord fill="#7D92B5" />,
        to: accounts.discord
      })
    }

    if (accounts.telegram) {
      socials.push({
        icon: <IconTelegram fill="#7D92B5" />,
        to: accounts.telegram
      })
    }

    if (accounts.twitter) {
      socials.push({
        icon: <IconTwitter fill="#7D92B5" />,
        to: accounts.twitter
      })
    }
 
    return socials
  }


  const playGame = () => {
    setOpen(true)
  }
  
  return (
    <PreviewDetailsContainer>

      <PreviewDetailsItem> 
        <span>Release status</span>
        <span> {game.status} </span>  
      </PreviewDetailsItem>

      {/* <PreviewDetailsItem> 
        <span> ICO Price </span>
        <span> ${game.tokenPrice} </span>  
      </PreviewDetailsItem> */}

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
          {getSocials().map((item, key) => (
            <a href={item.to} key={key} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          ))}
        </SocialWrapper>
      </PreviewDetailsItem>
      <PreviewActionGroup>
        <PlayButton onClick={playGame}>Play Game</PlayButton>
        <RecommendButton>
          <IconFavourite />
        </RecommendButton>
      </PreviewActionGroup>
      <AuthModals open={open} setOpen={setOpen} link={game.demoLive} />
    </PreviewDetailsContainer>
  );
};
