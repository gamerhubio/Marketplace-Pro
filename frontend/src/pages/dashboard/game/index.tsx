import React from "react";
import { DashboardLayout } from "../../../layout";
import {
  BackWrapper,
  GamePageWrapper,
  PreviewDetailsWrapper,
  PreviewImageWrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { IconBack } from "../../../components";
import {
  GameDescription,
  PreviewDetails,
  PreviewSlider,
} from "../../../modules/dashboard";
import useGame from "../../../hooks/useGame";

export const DashboardGamePage: React.FC = () => {
  
  const router = useNavigate();
  
  const game = useGame()

  return (
    <DashboardLayout>
      <GamePageWrapper>
        <BackWrapper onClick={() => router("/dashboard/home")}>
          <IconBack /> <span>Back</span>
        </BackWrapper>
        <PreviewImageWrapper>
          <img src={game.banner} alt="" />
        </PreviewImageWrapper>
        <PreviewDetailsWrapper>
          <PreviewSlider video={game.demoVideo} />
          <PreviewDetails />
        </PreviewDetailsWrapper>
        <GameDescription game={game} />
      </GamePageWrapper>
    </DashboardLayout>
  );
};
