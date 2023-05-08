import styled from "styled-components";

export const PreviewDetailsContainer = styled.div`
  width: 381px;
  max-width: 50%;
  margin-left: 68px;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    margin-top: 40px;
  }
`;

export const PreviewDetailsItem = styled.div`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  line-height: 24px;
  align-items: center;
  justify-content: space-between;
  span:first-child {
    color: #9eaec7;
  }
  span:last-child {
    color: #eff1f6;
  }
`;

export const DetailsDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  img {
    margin: 0 3px;
    opacity: 0.5;
  }
  &::after,
  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(179, 0, 102, 0) 0%,
      #b30066 50.14%,
      rgba(179, 0, 102, 0) 100.29%
    );
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
  }
  & > :not(:first-child) {
    margin-left: 16px;
  }
`;

export const PreviewActionGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const PlayButton = styled.div`
  background: url("/images/userdashboard/play-button.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  height: 56px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecommendButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/images/userdashboard/recommend-button.png") no-repeat;
  min-width: 56px;
  height: 56px;
  margin-left: 16px;
  background-size: 100% 100%;
  cursor: pointer;
`;
