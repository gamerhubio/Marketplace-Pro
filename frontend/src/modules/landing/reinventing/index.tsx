import React from "react";
import {
  ReinventingContainer,
  ReinventingImg,
  ReinventingTextWrapper,
  ReinventingWrapper,
} from "./styles";
import { Button } from "../../../components";

export const ReinventingSection: React.FC = () => {
  return (
    <ReinventingWrapper>
      <ReinventingContainer>
        <ReinventingTextWrapper>
          <h1>Reinventing The P2E Gaming Experience</h1>
          <p>
            Access to explore, buy and play games from multiple blockchains
            GamerHub gives users true digital ownership and control over their
            games, user data and in-game assets. The game aggregator framework
            is backed and governed by the gaming community.
          </p>
          <Button width={231}>Open app</Button>
        </ReinventingTextWrapper>
        <ReinventingImg>
          <img src="/images/landing/reinventing.png" alt="" />
        </ReinventingImg>
      </ReinventingContainer>
    </ReinventingWrapper>
  );
};
