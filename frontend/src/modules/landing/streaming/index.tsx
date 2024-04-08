import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import {
  SliderImgWrapper,
  StreamBtn,
  StreamingWrapper,
  VideoPlayBtn,
} from "./styles";
import { streamingSlider } from "../data";

export const StreamingSection: React.FC = () => {
  return (
    <StreamingWrapper>
      <h1>GameGPT</h1>
      <p>
        Meet GameGPT, your AI-powered in-game companion! From
        offering helpful hints and tips to engaging in meaningful conversations,
        GameGPT brings virtual worlds to life with its adaptive and responsive capabilities.
      </p>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        loop
        className="gamerhub-slider"
      >
        {streamingSlider.map((item, key) => (
          <SwiperSlide className="gamerhub-slider-item" key={key}>
            <SliderImgWrapper>
              <video poster={item.img} muted>
                <source src={item.video} type="video/mp4" />
              </video>
              <VideoPlayBtn
                src="/images/landing/streaming-play-btn.png"
                alt=""
              />
              <StreamBtn src="images/landing/streaming-btn-bg.png" alt="" />
            </SliderImgWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </StreamingWrapper>
  );
};
