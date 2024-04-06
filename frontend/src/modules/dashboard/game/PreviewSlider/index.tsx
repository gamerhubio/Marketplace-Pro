import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PreviewSliderWrapper, VideoPlayBtn } from "./styles";
import { sliderData } from "../data";

export const PreviewSlider: React.FC = () => {
  return (
    <PreviewSliderWrapper>
      <Swiper loop={true} spaceBetween={10} className="preview-slider">
        {sliderData.map((item, key) => (
          <SwiperSlide key={key}>
            <video poster={item.img} muted>
              <source src={item.video} type="video/mp4" />
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
        {sliderData.map((item, key) => (
          <SwiperSlide key={key}>
            <img src={item.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </PreviewSliderWrapper>
  );
};
