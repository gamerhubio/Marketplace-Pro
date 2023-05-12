import styled from "styled-components";

export const RecentInfoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(93, 119, 162, 0.15);
  }
`;

export const RecentInfoItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

export const RecentImage = styled.div``;

export const MainItemInfo = styled.div`
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

export const ViewItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 16px;
  margin-bottom: 16px;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  p {
    /* font-family: "Avenir"; */
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 24px;
    color: #9eaec7;
  }
  img {
    width: fit-content;
    height: fit-content;
    margin-left: 10px;
  }
`;
