import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  height: 280px;
  width: 100%;
  margin-bottom: 26px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const WelcomeImageWrapper = styled.div`
  max-width: 60%;
  width: 100%;
  margin-right: 32px;
  height: 100%;
  background: linear-gradient(0deg, rgba(38, 0, 51, 0.2), rgba(38, 0, 51, 0.2)),
    url("/images/userdashboard/images/welcome.png") no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  & > div {
    position: relative;
    z-index: 1;
    padding: 24px;
    color: #eff1f6;
    h1 {
      font-weight: 700;
      font-size: 42px;
      line-height: 52px;
      margin: 0;
      margin-bottom: 4px;
    }
    p {
      font-weight: 400;
      max-width: 336px;
      width: 100%;
      margin: 0;
      margin-bottom: 14px;
      font-size: 14px;
      line-height: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: 280px;
    margin-bottom: 20px;
  }
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      2.62deg,
      rgba(38, 0, 51, 0.8) 2.19%,
      rgba(38, 0, 51, 0) 97.85%
    );
    border-radius: 10px;
  }
`;

export const ConnectWalletButton = styled.div`
  height: 48px;
  width: 222px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/images/userdashboard/button.png") no-repeat;
  background-size: 100% 100%;
  padding: 0;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const WelcomeRecentAddedWrapper = styled.div`
  flex: 1;
  padding: 16px 24px;

  background: url("/images/userdashboard/images/swift.png") no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 10px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(38, 0, 51, 0.8) 0%,
      rgba(38, 0, 51, 0.5) 15.64%,
      rgba(56, 72, 97, 0) 103.57%
    );
    border-radius: 10px;
  }
  h1 {
    position: relative;
    z-index: 1;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #ffffff;
    font-family: "Space Grotesk", sans-serif;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 280px;
    margin-bottom: 20px;
  }
`;

export const GridGroupWraper = styled.div`
  & > :not(:first-child) {
    margin-top: 56px;
  }
`;
