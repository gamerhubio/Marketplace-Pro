import styled from "styled-components";

export const GamerListContainer = styled.div`
  background: rgba(8, 13, 56, 0.1);
  border: 1px solid rgba(93, 119, 162, 0.15);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const GamerListHeader = styled.div`
  margin-left: 24px;
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  & > span {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
    margin-right: 18px;
  }
`;

export const ViewMoreBtn = styled.div`
  display: flex;
  align-items: center;
  span {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #9eaec7;
    margin-left: 5px;
  }
`;
export const GamerListUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
