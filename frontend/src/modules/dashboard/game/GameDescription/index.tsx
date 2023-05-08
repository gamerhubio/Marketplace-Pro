import React, { useState } from "react";
import { GameDescriptionWrapper, TabItem, TabWrapper } from "./styles";
import { descTabs } from "../data";
import { AboutContent } from "./AboutContent";
import { TokenomicsContent } from "./TokenomicsContent";
import { TeamContent } from "./TeamContent";

export const GameDescription: React.FC = () => {
  const [tab, setTab] = useState("about");
  return (
    <GameDescriptionWrapper>
      <TabWrapper>
        {descTabs.map((item, key) => (
          <TabItem
            key={key}
            onClick={() => setTab(item.key)}
            active={tab === item.key}
          >
            {item.label}
          </TabItem>
        ))}
      </TabWrapper>
      {tab === "about" && <AboutContent />}
      {tab === "tokenomics" && <TokenomicsContent />}
      {tab === "team" && <TeamContent />}
    </GameDescriptionWrapper>
  );
};
