import React from "react";
import {
  AboutButton,
  AboutButtonGroup,
  ContentText,
  ContentTitle,
  TabContent,
} from "./styles";
import { aboutDesc } from "../data";

export const TeamContent: React.FC = () => {
  return (
    <TabContent>
      <ContentTitle>Team</ContentTitle>
      <div>
        {aboutDesc.map((item, key) => (
          <ContentText key={key}>{item}</ContentText>
        ))}
        <AboutButtonGroup>
          <AboutButton>Action</AboutButton>
          <AboutButton>P2E</AboutButton>
          <AboutButton>NFT</AboutButton>
        </AboutButtonGroup>
      </div>
    </TabContent>
  );
};
