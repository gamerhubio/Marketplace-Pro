import styled from "styled-components";

export const GamerAvatar = styled.div`
  img {
    width: 120px;
    height: 120px;
  }
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const GamerInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;

export const FollowSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

export const Followers = styled.div`
  h6 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #7d92b5;
  }
  p {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #eff1f6;
  }
`;

export const Following = styled.div`
  margin-left: 30px;
  h6 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #7d92b5;
  }
  p {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #eff1f6;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const GamerMainInfo = styled.div`
  h1 {
    font-family: "Space Grotesk", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #bec9da;
  }
  p {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #9eaec7;
  }
`;

export const GamerLevelInfo = styled.div`
  border-bottom: 1px solid rgba(215, 0, 123, 0.3);
  margin-top: 8px;
  span {
    border-bottom: 1px solid #d7007b;
  }
`;
