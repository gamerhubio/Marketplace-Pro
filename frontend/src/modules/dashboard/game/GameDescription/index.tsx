import React, { useState } from "react";
import { GameDescriptionWrapper } from "./styles";
import { descTabs } from "../data";
import { AboutContent } from "./AboutContent";
import { TokenomicsContent } from "./TokenomicsContent";
import { TeamContent } from "./TeamContent";
import { TabList } from "../../../../components";

export const GameDescription: React.FC = () => {
  const [tab, setTab] = useState("about");
  return (
    <GameDescriptionWrapper>
      <TabList data={descTabs} onTabChange={setTab} />
      {tab === "about" && <AboutContent />}
      {tab === "tokenomics" && <TokenomicsContent />}
      {tab === "team" && <TeamContent />}
    </GameDescriptionWrapper>
  );
};
