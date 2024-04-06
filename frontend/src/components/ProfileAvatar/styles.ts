import styled from "styled-components";

export const ProfileWrapper = styled.div`
  border-left: 1px solid rgba(93, 119, 162, 0.15);
  border-right: 1px solid rgba(93, 119, 162, 0.15);
  height: 100%;
  align-items: center;
  display: flex;
  padding: 0 14px 0 20px;
  max-width: 273px;
  min-width: 273px;
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    min-width: auto;
    display: none;
  }
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

export const DropdownWrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  background: linear-gradient(
    92.43deg,
    rgba(255, 255, 255, 0.069) 0.38%,
    rgba(255, 255, 255, 0.015) 106.95%
  );
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  width: 100%;
  border-radius: 10px;
  left: 0;
  top: 75px;
  z-index: 11;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  padding: 10px 10px;
  span {
    display: flex;
    padding: 10px 20px;
    cursor: pointer;
    &:not(:last-child) {
      border-bottom: 1px solid #ffffff50;
    }
  }
`;
