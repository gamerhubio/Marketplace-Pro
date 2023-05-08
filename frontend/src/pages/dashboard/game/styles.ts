import styled from "styled-components";

export const GamePageWrapper = styled.div``;

export const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  span {
    margin-left: 8px;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #bec9da;
  }
`;

export const PreviewImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  img {
    width: 100%;
    max-height: 313px;
    object-fit: cover;
    border-radius: 5px;
  }
  @media screen and (max-width: 768px) {
    img {
      max-height: auto;
      height: 313px;
    }
  }
`;

export const PreviewDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
