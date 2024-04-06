import styled from "styled-components";

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GamerProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  align-items: flex-start;
  background-image: url("/images/userdashboard/images/profile_back.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const GameListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const RightSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  width: 100%;
  margin-left: 40px;
  @media screen and (max-width: 1240px) {
    max-width: 100%;
    margin-left: 0;
    margin-top: 40px;
  }
`;

export const EditProfileSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: center;
  cursor: pointer;
  margin-right: 24px;
  p {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #eff1f6;
  }
  img {
    width: fit-content;
    height: fit-content;
    margin-left: 10px;
  }
`;

export const DashboardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1240px) {
    flex-direction: column;
  }
`;

export const FavoriteMark = styled.div`
  span {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
  }
  display: flex;
  align-items: center;
`;
