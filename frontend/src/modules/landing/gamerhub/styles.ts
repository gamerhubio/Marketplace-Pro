import styled from "styled-components";

export const GamerHubWrapper = styled.div`
  background: url("/images/landing/gamerhub-bg.png") no-repeat;
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
      min-height: 500px;
      @media screen and (max-width: 600px) {
        min-height: 400px;
      }
      @media screen and (max-width: 425px) {
        min-height: 350px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    padding: 50px 0;
  }
`;

export const SliderImgWrapper = styled.div<{ width: number }>`
  width: 95%;
  max-width: ${({ width }) => width}px;
  margin: auto;
  min-height: 370px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    min-height: 300px;
  }
`;
