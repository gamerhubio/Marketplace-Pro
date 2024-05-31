import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PreviewSliderWrapper, VideoPlayBtn } from "./styles";
import { sliderData } from "../data";
import useGame from "../../../../hooks/useGame";

export const PreviewSlider = ({video} : {video: string}) => {

  const game = useGame()

  return (
    <PreviewSliderWrapper>
      <Swiper loop={true} spaceBetween={10} className="preview-slider">
        {sliderData.map((item, key) => (
          <SwiperSlide key={key}>
            <video  muted>
              <source src={video}  />
            </video>
            <VideoPlayBtn src="/images/landing/streaming-play-btn.png" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        className="preview-thumb-slider"
      >
        {game.inGamePictures.map((item, key) => (
          <SwiperSlide key={key}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </PreviewSliderWrapper>
  );
};
