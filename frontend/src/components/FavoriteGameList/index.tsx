import React from "react";
import { favoriteTabNameList } from "./data";
import { FavoriteGameListContainer } from "./styles";
import { FavoriteGameItem } from "./FavoriteGameItem";

export const FavoriteGameListComponent: React.FC = () => {
  return (
    <FavoriteGameListContainer>
      {favoriteTabNameList.map((item, key) => {
        return (
          <FavoriteGameItem
            key={key}
            image={item.image}
            name={item.name}
            network={item.network}
            playernum={item.playernum}
          />
        );
      })}
    </FavoriteGameListContainer>
  );
};
