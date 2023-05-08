import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { MerchStoreWrapper, SliderImgWrapper } from "./styles";
import { merchSlider } from "../data";

export const MerchStoreSection: React.FC = () => {
  return (
    <MerchStoreWrapper>
      <h1>Merch Store</h1>
      <p>
        e-commerce platform that allows players to purchase a wide range of
        gaming-related merchandise, including clothing, accessories,
        collectibles, and other items. This feature will provide players with a
        way to express their love for their favorite games and to connect with
        the gaming community.
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
