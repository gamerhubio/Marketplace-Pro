import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { MarketplaceWrapper, SliderImgWrapper } from "./styles";
import { marketplaceSlider } from "../data";

export const MarketplaceSection: React.FC = () => {
  return (
    <MarketplaceWrapper>
      <h1>
        AI Anti-Cheat System</h1>
      <p>
        Leveraging advanced AI detection mechanisms, our anti-cheat system actively monitors gameplay
        for suspicious behavior and swiftly identifies and addresses cheating attempts.
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
