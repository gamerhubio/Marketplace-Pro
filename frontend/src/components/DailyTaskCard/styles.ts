import styled from "styled-components";

export const DailyTaskCardContainer = styled.div`
  background: url("/images/userdashboard/taskitem-bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
`;

export const DailyTaskInfo = styled.div<{ isOdd: boolean }>`
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
    color: ${({ isOdd }) => (!isOdd ? "#55C388" : "#eff1f6")};
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

export const StatusBtn = styled.div<{ isOdd: boolean }>`
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(11, 82, 189, 0.5);
  background: ${({ isOdd }) =>
    !isOdd
      ? "url('/images/userDashboard/taskmodal-btn1.png')"
      : "url('/images/userDashboard/taskmodal-btn2.png')"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 40px;
  margin-left: 32px;
  margin-top: 20px;
`;
