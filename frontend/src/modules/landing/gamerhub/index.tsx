import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { GamerHubWrapper, SliderImgWrapper } from "./styles";
import { gamerhubSlider } from "../data";

export const GamerHubSection: React.FC = () => {
  return (
    <GamerHubWrapper id="about">
      <h1>GamerHub</h1>
      <p>
        Our adaptive in-game difficulty system utilizes AI algorithms
        to dynamically adjust game difficulty in
        real-time, offering personalized challenges for players of all skill levels.
      </p>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        loop
        className="gamerhub-slider"
      >
        {gamerhubSlider.map((item, key) => (
          <SwiperSlide className="gamerhub-slider-item" key={key}>
            <SliderImgWrapper width={item.width}>
              <img src={item.img} alt="" />
            </SliderImgWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </GamerHubWrapper>
  );
};
