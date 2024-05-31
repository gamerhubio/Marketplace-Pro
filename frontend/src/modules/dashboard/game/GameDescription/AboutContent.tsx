import React from "react";
import {
  AboutButton,
  AboutButtonGroup,
  ContentText,
  ContentTitle,
  TabContent,
} from "./styles";

interface IProps {
  description: string
}

export const AboutContent = ({ description }: IProps) => {
  return (
    <TabContent>

      <ContentTitle>About</ContentTitle>

      <div>
      
        <ContentText>{description}</ContentText>
     
        <AboutButtonGroup>
          <AboutButton>Action</AboutButton>
          <AboutButton>P2E</AboutButton>
          <AboutButton>NFT</AboutButton>
        </AboutButtonGroup>
      </div>
    </TabContent>
  );
};
