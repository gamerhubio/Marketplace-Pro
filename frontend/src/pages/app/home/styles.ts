import styled from "styled-components";

export const HomeWrapper = styled.div<{ bg: boolean }>`
  min-height: 100vh;
  padding-top: 90px;
  background: ${({ bg }) =>
      !bg
        ? "url('/images/app/slider/slider1-bg.png')"
        : "url('/images/app/slider/slider2-bg.png')"}
    no-repeat;
  background-size: cover;
  background-position: center;
`;

export const HomeContainer = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .app-home-slider {
    width: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .swiper-wrapper {
      align-items: center;
    }
  }
`;

export const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
  font-family: "Space Grotesk";
  & > * {
    width: 95%;
    text-align: center;
    margin: auto;
  }
  h2 {
    max-width: 695px;
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    margin-bottom: 5px;
    span {
      color: #ce0076;
    }
  }
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    max-width: 496px;
  }
`;

export const SliderImg = styled.div<{ width: number }>`
  max-width: ${({ width }) => width}px;
  display: flex;
  margin-bottom: 12px;
  img {
    width: 100%;
  }
`;
