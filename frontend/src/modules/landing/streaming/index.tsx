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
      <h1>GamerHub</h1>
      <p>
        Aggregated crypto games, gaming guilds, metaverses and NFTs. GamerHub is
        an ecosystem for gamers to Play, Earn and Thrive through aggregated
        gameplay, enhanced rewards, and decentralized governance.
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
