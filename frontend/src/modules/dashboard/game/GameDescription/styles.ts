import styled from "styled-components";

export const GameDescriptionWrapper = styled.div`
  margin-top: 24px;
  min-width: 50%;
  width: calc(100% - 449px);
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const TabWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(93, 119, 162, 0.1);
  display: flex;
  align-items: center;
`;

export const TabItem = styled.div<{ active: boolean }>`
  display: flex;
  height: 38px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  text-transform: uppercase;
  position: relative;
  font-family: "Space Grotesk";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ active }) => (active ? "#EFF1F6" : " #BEC9DA")};
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    background: ${({ active }) => (active ? "#d7007b" : "transparent")};
    height: 2px;
    width: 100%;
    border-radius: 1.5px;
  }
`;

export const TabContent = styled.div`
  margin-top: 22px;
`;

export const ContentTitle = styled.div`
  margin-bottom: 24px;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: #eff1f6;
  line-height: 36px;
`;

export const ContentText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bec9da;
  max-width: 629px;
  width: 100%;
`;

export const AboutButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  & > :not(:first-child) {
    margin-left: 10px;
  }
`;

export const AboutButton = styled.div`
  cursor: pointer;
  padding: 8px 24px;
  background: #0b082b;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bec9da;
`;
