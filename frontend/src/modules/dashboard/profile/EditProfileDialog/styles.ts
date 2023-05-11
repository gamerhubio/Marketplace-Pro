import styled from "styled-components";

export const EditProfileDialogContainer = styled.div<{ visible?: boolean }>`
  background: rgba(3, 6, 26, 0.6);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export const EditProfileWrapper = styled.div<{ visible?: boolean }>`
  padding: 24px;
  background: #0a1442;
  border-radius: 10px;
  max-width: 432px;
  width: 95%;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;
export const EditProfileTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  img {
    margin-top: 10px;
    cursor: pointer;
  }
  p {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #eff1f6;
    margin-top: 8px;
    margin-left: 16px;
  }
`;

export const EditProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileAvatar = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #bec9da;
  }
`;

export const ProfileForm = styled.div`
  margin-top: 24px;
`;

export const SaveBtn = styled.div`
  span {
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #ffffff;
  }
  background: linear-gradient(100.43deg, #b30066 0%, #800049 103%);
  border-radius: 5px;
  padding: 10px 40px;
  cursor: pointer;
`;

export const ProfileName = styled.div`
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #eff1f6;
    margin-bottom: 4px;
  }
`;

export const ProfileEmail = styled.div`
  margin-top: 24px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #eff1f6;
  }
`;

export const ResetData = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    margin-left: 3px;
  }
`;
