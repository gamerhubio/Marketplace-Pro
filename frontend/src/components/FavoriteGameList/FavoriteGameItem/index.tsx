import React from "react";
import {
  FavoriteGameItemContainer,
  FavoriteGameItemWrapper,
  GameImage,
  GameItemInfo,
  GameType,
  GameTypeItem,
  GamerIcon,
  ViewItem,
} from "./styles";

export type FavoriteGameItemProps = {
  image: string;
  name: string;
  network: string;
  playernum: number;
};

export const FavoriteGameItem: React.FC<FavoriteGameItemProps> = ({
  image,
  name,
  network,
  playernum,
}) => {
  return (
    <FavoriteGameItemContainer>
      <FavoriteGameItemWrapper>
        <GameImage>
          <img src={image} alt="" />
        </GameImage>
        <GameItemInfo>
          <h1>{name}</h1>
          <h3>{network}</h3>
          <GamerIcon>
            <h4>{playernum} Active players</h4>
            <img src="/images/userdashboard/favoritelist/gameicon.png" alt="" />
          </GamerIcon>
          <GameType>
            <GameTypeItem>P2E</GameTypeItem>
            <GameTypeItem>Action</GameTypeItem>
            <GameTypeItem>Metaverse</GameTypeItem>
          </GameType>
        </GameItemInfo>
      </FavoriteGameItemWrapper>
      <ViewItem>
        <img src="/images/userdashboard/kebab.png" alt="" />
      </ViewItem>
    </FavoriteGameItemContainer>
  );
};
