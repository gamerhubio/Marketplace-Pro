import styled from "styled-components";

export const GameListGridWrapper = styled.div``;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  img {
    width: 100%;
    border-radius: 8px;

    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridHeaderWraper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #eff1f6;
    margin: 0;
    margin-right: 16px;
    font-family: "Space Grotesk", sans-serif;
  }
`;

export const AllViewButton = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 48px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #bec9da;

  img {
    margin-left: 10px;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #eff1f6;
  }
`;
