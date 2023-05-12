import React, { useState } from "react";
import { FavoriteContainer, FavoriteListWrapper } from "./styles";
import { TabList } from "../../../../components/TabList";
import { favoriteTabNameList } from "./data";
import { ListEmptyComponent } from "../../../../components";
import { FavoriteGameListComponent } from "../../../../components/FavoriteGameList";
export const FavoriteList: React.FC = () => {
  const [tab, setTab] = useState("empty");
  return (
    <FavoriteContainer>
      <TabList data={favoriteTabNameList} onTabChange={setTab} />
      <FavoriteListWrapper>
        {tab === "empty" && <ListEmptyComponent />}
        {tab === "game" && <FavoriteGameListComponent />}
      </FavoriteListWrapper>
    </FavoriteContainer>
  );
};
