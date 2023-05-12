import styled from "styled-components";

export const DashboardHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  justify-content: space-between;
  position: relative;
  & > div:first-child {
    display: none;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(128, 0, 73, 0) 1.03%,
      #800054 7.28%,
      #800054 93.76%,
      rgba(128, 0, 73, 0) 100%
    );
  }
  @media screen and (max-width: 1024px) {
    & > div:first-child {
      display: flex;
      align-items: center;
    }
  }
`;

export const HeaderActionsWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  .mobile {
    width: fit-content;
    padding: 0 15px;
    background: linear-gradient(
      92.43deg,
      rgba(255, 255, 255, 0.23) 0.38%,
      rgba(255, 255, 255, 0.05) 106.95%
    );
    border: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border-radius: 5px;
  }
  @media screen and (max-width: 900px) {
    order: 1;
    max-width: 100%;
    justify-content: flex-end;
  }
  @media screen and (max-width: 768px) {
    & > div {
      border: none;
      width: fit-content;
    }
    & > :not(:first-child) {
      margin-left: 12px;
    }
  }
  @media screen and (max-width: 650px) {
    max-width: fit-content;
    width: fit-content;
    margin-left: 10px;
  }
`;

export const MLogo = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    max-width: 90px;
    width: 100%;
    display: flex;
    margin: 0 16px;
  }
`;

export const MMenu = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const SearchInputWrapper = styled.div<{ show: boolean }>`
  background-color: #0b1032;
  border-radius: 5px;
  height: 48px;
  max-width: 305px;
  width: 100%;
  display: flex;
  align-items: center;
  input {
    font-weight: 400;
    font-size: 15px;
    padding: 0 23px;
    background-color: transparent;
    border: none;
    outline: none;
    font-family: "DM Sans", sans-serif !important;
    line-height: 24px;
    flex: 1;
    color: #ffffff;
    &::placeholder {
      color: #5d77a2;
    }
  }
  img {
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    position: ${({ show }) => (show ? "absolute" : "relative")};
    max-width: ${({ show }) => (show ? "100%" : "fit-content")};
    z-index: 2;
    left: 0;
    input {
      display: ${({ show }) => (show ? "block" : "none")};
    }
  }
`;

export const HeaderRightSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const WalletButtonWrapper = styled.div`
  max-width: 220px;
  border-left: 1px solid rgba(93, 119, 162, 0.15);
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const AlarmWrapper = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid rgba(93, 119, 162, 0.15);
  height: 100%;
  cursor: pointer;
  justify-content: center;
  width: 100%;
  max-width: 72px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const TaskWrapper = styled.div`
  display: flex;
  height: 100%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-left: 1px solid rgba(93, 119, 162, 0.15);
  width: 100%;
  max-width: 150px;
  img {
    margin-right: 10px;
  }
  span {
    margin-right: 15px;
    font-family: "Space Grotesk";
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #eff1f6;
  }
  @media screen and (max-width: 400px) {
    img {
      margin-right: 5px;
    }
    span {
      margin-right: 5px;
    }
  }
`;
