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

export const DashboardGamePage: React.FC = () => {
  const router = useNavigate();
  return (
    <DashboardLayout>
      <GamePageWrapper>
        <BackWrapper onClick={() => router("/dashboard/home")}>
          <IconBack /> <span>Back</span>
        </BackWrapper>
        <PreviewImageWrapper>
          <img src="/images/userdashboard/images/twighlightbanner.png" alt="" />
        </PreviewImageWrapper>
        <PreviewDetailsWrapper>
          <PreviewSlider />
          <PreviewDetails />
        </PreviewDetailsWrapper>
        <GameDescription />
      </GamePageWrapper>
    </DashboardLayout>
  );
};
