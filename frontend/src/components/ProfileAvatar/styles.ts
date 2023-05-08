import styled from "styled-components";

export const ProfileWrapper = styled.div`
  border-left: 1px solid rgba(93, 119, 162, 0.15);
  height: 100%;
  align-items: center;
  display: flex;
  padding: 0 14px 0 20px;
  max-width: 273px;
  width: 100%;
`;

export const ProfileAvatarWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
`;

export const ProfileInfoWrapper = styled.div`
  margin-left: 10px;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const ProfileInfo = styled.div`
  color: #bec9da;
  width: 100%;
  height: 40px;
  margin-right: 10px;
  position: relative;
  * {
    margin: 0;
    font-weight: 400;
  }
  h2 {
    font-size: 14px;
    line-height: 20px;
  }
  p {
    font-size: 11px;
    line-height: 16px;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    background-color: #d7007b;
  }
  &::before {
    width: 100%;
    opacity: 0.3;
  }
  &::after {
    width: 56%;
    background-color: #d7007b;
  }
`;
