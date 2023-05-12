import styled from "styled-components";

export const ListEmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export const ListEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    margin-top: 16px;
  }
`;

export const ExploreGameBtn = styled.div`
  span {
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #ffffff;
  }
  margin-top: 28px;
  background: #b30066;
  border-radius: 10px;
  padding: 12px 54px;
`;
