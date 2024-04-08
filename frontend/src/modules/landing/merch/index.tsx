import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { MerchStoreWrapper, SliderImgWrapper } from "./styles";
import { merchSlider } from "../data";

export const MerchStoreSection: React.FC = () => {
  return (
    <MerchStoreWrapper>
      <h1>
        Gamer Merch</h1>
      <p>
        Express your love for your favorite games and gamers. Users can create custom merchandise inspired by
        their favorite gaming titles and personalities. Let your gaming passion shine with Gamer Merch.
      </p>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        loop
        className="gamerhub-slider"
      >
        {merchSlider.map((item, key) => (
          <SwiperSlide className="gamerhub-slider-item" key={key}>
            <SliderImgWrapper>
              <img src={item} alt="" />
            </SliderImgWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </MerchStoreWrapper>
  );
};
