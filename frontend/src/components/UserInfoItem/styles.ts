import styled from "styled-components";

export const UserInfoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(93, 119, 162, 0.15);
  }
`;

export const MainUserInfo = styled.div`
  margin-left: 12px;
  h1 {
    margin-top: 8px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #eff1f6;
  }
  h3 {
    margin-top: 4px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #7d92b5;
  }
`;
export const FollowBtn = styled.div`
  margin-right: 24.5px;
  margin-top: 16px;
  cursor: pointer;
  border: 1px solid #7d92b5;
  border-radius: 5px;
  height: 40px;
  max-width: 103px;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #bec9da;
`;
export const UserInfoItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UserAvatar = styled.div``;
