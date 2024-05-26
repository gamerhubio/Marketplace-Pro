import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { AppLayout } from "../../../layout";
import { AppButton, Button } from "../../../components";
import { HomeContainer, HomeWrapper, SliderImg, SliderItem } from "./styles";
import { appSliderData } from "../data";

export const AppHomePage: React.FC = () => {
  const router = useNavigate();
  const [activeIndex, setActiveIndex] = useState(false);
  return (
    <AppLayout
      buttonContent={
        <AppButton onClick={() => router("/app/signup")}>
          Create account
        </AppButton>
      }
    >
      <HomeWrapper bg={activeIndex}>
        <HomeContainer>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            onActiveIndexChange={(e) => setActiveIndex(e.activeIndex > 0)}
            className="app-home-slider"
          >
            <SwiperSlide>
              <SliderItem>
                <h2 style={{ maxWidth: "580px" }}>
                  <span>Enjoy</span> all your favourite Web3 games all on
                  GamerHub
                </h2>
                <p>One Subscription to experience the future of gaming</p>
              </SliderItem>
            </SwiperSlide>
            {appSliderData.map((item, key) => (
              <SwiperSlide key={key}>
                <SliderItem>
                  {item.img && (
                    <SliderImg width={item.img.width}>
                      <img src={item.img.src} alt="" />
                    </SliderImg>
                  )}
                  <h2>{item.text}</h2>
                  <p>{item.subText}</p>
                </SliderItem>
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            width={322}
            height={79}
            fSize={20}
            onClick={() => router("/dashboard/home")}
          >
            Get Started
          </Button>
        </HomeContainer>
      </HomeWrapper>
    </AppLayout>
  );
};
