import styled from "styled-components";

export const MarketplaceWrapper = styled.div`
  background: url("/images/landing/marketplace-bg.png");
  background-size: cover;
  background-position: center;
  padding: 80px 0 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    width: 95%;
    text-align: center;
    margin: auto;
  }
  h1 {
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    font-family: "Space Grotesk";
    margin-bottom: 16px;
  }
  p {
    max-width: 696px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #bec9da;
  }
  .gamerhub-slider {
    margin-top: 32px;
    .gamerhub-slider-item {
      min-height: 530px;
      @media screen and (max-width: 768px) {
        min-height: 400px;
      }
      @media screen and (max-width: 600px) {
        min-height: auto;
      }
    }
  }
  @media screen and (max-width: 600px) {
    padding: 50px 0;
  }
`;

export const SliderImgWrapper = styled.div`
  max-width: 735px;
  width: 95%;
  margin: auto;
  min-height: 370px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    min-height: auto;
    margin-bottom: 50px;
  }
`;
