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
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 515px;
  width: 100%;
  height: 100%;
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
    & > div:first-child {
      display: none;
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
  @media screen and (max-width: 900px) {
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
  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
  @media screen and (max-width: 535px) {
    position: ${({ show }) => (show ? "absolute" : "relative")};
    max-width: ${({ show }) => (show ? "100%" : "fit-content")};
    z-index: 2;
    input {
      display: ${({ show }) => (show ? "block" : "none")};
    }
  }
`;
