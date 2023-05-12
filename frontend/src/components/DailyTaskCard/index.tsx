import React from "react";
import {
  DailyTaskCardContainer,
  DailyTaskInfo,
  DailyTaskStatus,
  StatusBtn,
  TaskReward,
} from "./styles";

export const DailyTaskCardComponent: React.FC = () => {
  return (
    <DailyTaskCardContainer>
      <DailyTaskInfo>
        <h1>PLAY 5 GAMES</h1>
        <h2>0/5</h2>
      </DailyTaskInfo>
      <DailyTaskStatus>
        <TaskReward>
          <img src="/images/userdashboard/credit.png" alt="credit" />
          <p>10</p>
        </TaskReward>
        <StatusBtn>GO</StatusBtn>
      </DailyTaskStatus>
    </DailyTaskCardContainer>
  );
};
