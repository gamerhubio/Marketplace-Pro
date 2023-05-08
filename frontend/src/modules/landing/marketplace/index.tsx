import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { MarketplaceWrapper, SliderImgWrapper } from "./styles";
import { marketplaceSlider } from "../data";

export const MarketplaceSection: React.FC = () => {
  return (
    <MarketplaceWrapper>
      <h1>P2P Marketplace</h1>
      <p>
        The in-game asset marketplace allows players to buy, sell, and trade
        in-game items and other digital assets. This feature will provide
        players with a new way to monetize their gaming activities and to build
        a collection of valuable in-game items.
      </p>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        loop
        className="gamerhub-slider"
      >
        {marketplaceSlider.map((item, key) => (
          <SwiperSlide className="gamerhub-slider-item" key={key}>
            <SliderImgWrapper>
              <img src={item} alt="" />
            </SliderImgWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </MarketplaceWrapper>
  );
};
