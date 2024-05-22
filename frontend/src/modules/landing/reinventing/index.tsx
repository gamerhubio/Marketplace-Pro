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
          <h1>
            Empowering games with AI technology</h1>
          <p>
            At GamerHub, we're revolutionizing the gaming industry by providing cutting-edge AI infrastructure tailored
            for game developers thereby improving the general experience for Gamers. Our platform offers a suite of powerful
            features designed to enhance gameplay experiences and streamline game development processes.

          </p>
          <Button width={231}>Open Marketplace</Button>
        </ReinventingTextWrapper>
        <ReinventingImg>
          <img src="/images/landing/reinventing.png" alt="" />
        </ReinventingImg>
      </ReinventingContainer>
    </ReinventingWrapper>
  );
};
