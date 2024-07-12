import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { GamerHubWrapper, SliderImgWrapper } from "./styles";
import { gamerhubSlider } from "../data";

export const GamerHubSection: React.FC = () => {
  return (
    <GamerHubWrapper id="about">
      <h1 data-aos="fade-up"> <strong> Why </strong> GamerHub</h1>
      <p data-aos="fade-up">
        In the landscape of game development, integrating artificial intelligence (AI) has become a cornerstone for creating immersive and engaging gaming experiences. GamerHub stands at the forefront of this evolution, offering developers a robust platform equipped with powerful tools and resources to seamlessly integrate AI into their games.
      </p>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        loop
        className="gamerhub-slider"
        data-aos="fade-up">
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
