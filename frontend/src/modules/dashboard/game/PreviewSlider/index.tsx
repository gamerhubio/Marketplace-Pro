import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PreviewSliderWrapper, VideoPlayBtn } from "./styles";
import { sliderData } from "../data";
import useGame from "../../../../hooks/useGame";
import YouTube from 'react-youtube';


export const PreviewSlider = ({video} : {video: string}) => {

  const game = useGame()

  const opts = {
    height: '280',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function ready(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }


  return (
    <PreviewSliderWrapper>

      <YouTube 
        videoId={game.youtubeId === "NA" ? "T2mqtwFCHF0" : game.youtubeId } 
        opts={opts} 
        onReady={ready}
        loading={"lazy"}
        style={{background: "black", marginBottom: "20px"}}
        />

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
