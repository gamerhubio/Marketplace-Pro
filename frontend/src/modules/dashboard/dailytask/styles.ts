import styled from "styled-components";

export const DailyTaskModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(171.58deg, #001447 7.81%, #2e003d 152.33%);
  border: 1px solid #113c57;
  border-radius: 20px;
  height: 622px;
`;
export const DailyTaskModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #113c57;
`;

export const TabButton = styled.div`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #eff1f6;
  border: 1px solid #d7007b4d;
  width: 116px;
  text-align: center;
  margin-left: 5px;
  border-radius: 10px;
  background: linear-gradient(
    95.04deg,
    rgba(250, 0, 143, 0.32) 0%,
    rgba(250, 0, 143, 0.13) 106.73%
  );
  border: 1px solid rgba(215, 0, 123, 0.5);
`;

export const DailyTaskModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
  margin-right: 35px;
`;

export const ModalTitle = styled.div`
  font-family: "Space Grotesk";
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #eff1f6;
  margin-left: 35px;
  margin-top: 21.5px;
`;

export const ModalTabList = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 79px;
  margin-top: 19px;
  margin-right: 34px;
  margin-top: 19px;
`;

export const DailyTaskModalBG = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;
