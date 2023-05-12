import React from "react";
import {
  DailyTaskModalBG,
  DailyTaskModalContent,
  DailyTaskModalHeader,
  DailyTaskModalWrapper,
  ModalTabList,
  ModalTitle,
} from "./styles";

export const DailyTaskModal: React.FC = () => {
  return (
    <DailyTaskModalBG>
      <DailyTaskModalWrapper>
        <DailyTaskModalHeader>
          <ModalTitle>EARN GAMERHUB COINS</ModalTitle>
          <ModalTabList></ModalTabList>
        </DailyTaskModalHeader>
        <DailyTaskModalContent></DailyTaskModalContent>
      </DailyTaskModalWrapper>
    </DailyTaskModalBG>
  );
};
