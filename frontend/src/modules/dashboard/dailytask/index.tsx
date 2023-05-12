import React from "react";
import {
  DailyTaskModalBG,
  DailyTaskModalContent,
  DailyTaskModalHeader,
  DailyTaskModalWrapper,
  ModalTabList,
  ModalTitle,
  TabButton,
} from "./styles";
import { DailyTaskCardComponent } from "../../../components/DailyTaskCard";

export const DailyTaskModal: React.FC = () => {
  return (
    <DailyTaskModalBG>
      <DailyTaskModalWrapper>
        <DailyTaskModalHeader>
          <ModalTitle>EARN GAMERHUB COINS</ModalTitle>
          <ModalTabList>
            <TabButton>DAILY</TabButton>
            <TabButton>CHALLENGES</TabButton>
            <TabButton>TOURNAMENTS</TabButton>
          </ModalTabList>
        </DailyTaskModalHeader>
        <DailyTaskModalContent>
          <DailyTaskCardComponent />
        </DailyTaskModalContent>
      </DailyTaskModalWrapper>
    </DailyTaskModalBG>
  );
};
