import styled from "styled-components";

export const FavoriteGameItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(93, 119, 162, 0.15);
  }
`;

export const FavoriteGameItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GameImage = styled.div``;

export const GameType = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 9px;
  flex-wrap: wrap;
`;

export const GameTypeItem = styled.div`
  background: #0b082b;
  border-radius: 5px;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  text-align: justify;
  color: #bec9da;
  margin-left: 8px;
`;

export const GameItemInfo = styled.div`
  margin-left: 12px;
  h1 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    color: #eff1f6;
    margin-top: 3px;
  }
  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    color: #9eaec7;
    margin-top: 6px;
  }
  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #55c388;
    margin-top: 6px;
  }
`;

export const ViewItem = styled.div`
  margin-right: 24px;
  cursor: pointer;
`;

export const GamerIcon = styled.div`
  display: flex;
  flex-direction: row;
  img {
    margin-left: 10px;
  }
  align-items: center;
`;
