import styled from "styled-components";

export const PreviewSliderWrapper = styled.div`
  min-width: 50%;
  width: calc(100% - 449px);
  video,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .preview-slider {
    height: 290px;
    margin-bottom: 20px;
  }
  .preview-thumb-slider {
    height: 80px;
    .swiper-slide {
      img {
        border-radius: 5px;
      }
    }
  }
  .swiper-slide {
    position: relative;
    &::before {
      content: "";
      z-index: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
          0deg,
          rgba(1, 17, 61, 0.2),
          rgba(1, 17, 61, 0.2)
        ),
        url(web-meta-image.png);
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const VideoPlayBtn = styled.img`
  width: 124px !important;
  height: 124px !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
