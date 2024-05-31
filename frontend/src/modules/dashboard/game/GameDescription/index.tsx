import React, { useState } from "react";
import { GameDescriptionWrapper } from "./styles";
import { descTabs } from "../data";
import { AboutContent } from "./AboutContent";
import { TokenomicsContent } from "./TokenomicsContent";
import { TeamContent } from "./TeamContent";
import { TabList } from "../../../../components";
import { IGameData } from "../../../../pages/dashboard/data";

interface IProps {
  game: IGameData
}

export const GameDescription = ({ game } : IProps) => {
  const [tab, setTab] = useState("about");
  return (
    <GameDescriptionWrapper>
      <TabList data={descTabs} onTabChange={setTab} />
      {tab === "about" && <AboutContent description={game.description} />}
      {tab === "tokenomics" && <TokenomicsContent />}
      {tab === "team" && <TeamContent />}
    </GameDescriptionWrapper>
  );
};
