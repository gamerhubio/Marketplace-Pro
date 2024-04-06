import styled from "styled-components";

export const DailyTaskModalWrapper = styled.div<{ visible: boolean }>`
  display: flex;
  position: fixed;
  z-index: 101;
  flex-direction: column;
  background: url("/images/userdashboard/taskmodal-bg.png") no-repeat;
  background-size: 100% 100%;
  min-height: 622px;
  padding-bottom: 25px;
  max-height: 622px;
  top: 80px;
  right: 50%;
  max-width: 708px;
  width: 100%;
  transform: translateX(50%);
  .close-btn {
    position: absolute;
    right: 2px;
    cursor: pointer;
    top: 2px;
  }
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  @media screen and (max-width: 600px) {
    .close-btn {
      display: none;
    }
    max-height: 100%;
    min-height: 100%;
    background: linear-gradient(171.58deg, #001447 7.81%, #2e003d 152.33%);
    top: 72px;
  }
`;
export const DailyTaskModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #113c57;
  margin-bottom: 24px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TabButton = styled.div<{ active: boolean }>`
  font-family: "Space Grotesk";
  font-style: normal;
  height: 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #eff1f6;
  cursor: pointer;
  text-transform: uppercase;
  width: 116px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  background: ${({ active }) =>
      active
        ? "url('/images/userdashboard/taskmodal-tab-active.png')"
        : "url('/images/userdashboard/taskmodal-tab.png')"}
    no-repeat;
  background-size: 100% 100%;
  margin-bottom: -2px;
`;

export const DailyTaskModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px 35px 15px;
  overflow-y: auto;
  & > :not(:first-child) {
    margin-top: 8px;
  }
  @media screen and (max-width: 600px) {
    padding: 15px 20px 15px;
  }
`;

export const ModalTitle = styled.div`
  font-family: "Space Grotesk";
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #eff1f6;
  margin-left: 35px;
  margin-top: 21.5px;
  display: flex;
  align-items: center;
  div {
    display: none;
    transform: rotate(-90deg);
  }
  @media screen and (max-width: 600px) {
    div {
      display: block;
    }
  }
`;

export const ModalTabList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-left: 79px;
  margin-top: 19px;
  margin-right: 34px;
  margin-top: 19px;
  @media screen and (max-width: 600px) {
    margin-left: 20px;
  }
`;

export const DailyTaskModalBG = styled.div<{ visible: boolean }>`
  display: flex;
  position: fixed;
  z-index: 100;
  justify-content: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  @media screen and (max-width: 600px) {
    background-color: transparent;
  }
`;
