import React, { useState } from "react";
import { FavoriteContainer, FavoriteList } from "./styles";
import { TabList } from "../../../../components/TabList";
import { favoriteTabNameList } from "./data";
import { ListEmptyComponent } from "../../../../components";
import { FavoriteGameListComponent } from "../../../../components/FavoriteGameList";
export const FavoriteListComponent: React.FC = () => {
  const [tab, setTab] = useState("empty");
  return (
    <FavoriteContainer>
      <TabList data={favoriteTabNameList} onTabChange={setTab} />
      <FavoriteList>
        {tab === "empty" && <ListEmptyComponent />}
        {tab === "game" && <FavoriteGameListComponent />}
      </FavoriteList>
    </FavoriteContainer>
  );
};
