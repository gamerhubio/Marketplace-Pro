import React from "react";
import {
  DailyTaskCardContainer,
  DailyTaskInfo,
  DailyTaskStatus,
  StatusBtn,
  TaskReward,
} from "./styles";

type CardProps = {
  title: string;
  amount: string;
  credit: number;
  isOdd: boolean;
};

export const DailyTaskCard: React.FC<CardProps> = ({
  title,
  amount,
  credit,
  isOdd,
}) => {
  return (
    <DailyTaskCardContainer>
      <DailyTaskInfo isOdd={isOdd}>
        <h1>{title}</h1>
        <h2>{amount}</h2>
      </DailyTaskInfo>
      <DailyTaskStatus>
        <TaskReward>
          <img src="/images/userdashboard/credit.png" alt="credit" />
          <p>{credit}</p>
        </TaskReward>
        <StatusBtn isOdd={isOdd}>{!isOdd ? "GO" : "CLAIM"}</StatusBtn>
      </DailyTaskStatus>
    </DailyTaskCardContainer>
  );
};
