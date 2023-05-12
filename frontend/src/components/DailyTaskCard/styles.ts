import styled from "styled-components";

export const DailyTaskCardContainer = styled.div`
  background: #202e60;
  opacity: 0.4;
  border: 1px solid #3952ac;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const DailyTaskInfo = styled.div`
  h1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #eff1f6;
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.24);
  }
  h2 {
    font-family: "Space Grotesk";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #eff1f6;
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.24);
  }
  padding-left: 24px;
  padding-top: 15.5px;
  padding-bottom: 14.5px;
`;

export const DailyTaskStatus = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 16px;
`;

export const TaskReward = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p {
    padding-left: 4px;
  }
`;

export const StatusBtn = styled.div`
  border: 1px solid #0b52bd;
  box-shadow: 0px 0px 10px rgba(11, 82, 189, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 40px;
  margin-left: 32px;
  margin-top: 20px;
`;
