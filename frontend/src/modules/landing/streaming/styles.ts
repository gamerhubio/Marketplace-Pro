import styled from "styled-components";

export const StreamingWrapper = styled.div`
  background: url("/images/landing/streaming-bg.png") no-repeat;
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
    }
  }
`;

export const SliderImgWrapper = styled.div`
  position: relative;
  max-width: 905px;
  width: 100%;
  margin: auto;
  min-height: 370px;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    width: 900px;
    position: relative;
    z-index: 1;
    border-radius: 10px;
  }
  &::after {
    content: "";
    background: linear-gradient(135deg, #f7931a 0%, #9747ff 100%);
    position: absolute;
    top: 0;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    left: 1px;
  }
`;

export const VideoPlayBtn = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  transform-origin: -50% -50%;
  z-index: 2;
  cursor: pointer;
`;

export const StreamBtn = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 342px;
  width: 95%;
  z-index: 2;
  cursor: pointer;
`;
