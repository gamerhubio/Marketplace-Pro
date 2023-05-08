import styled from "styled-components";

export const HomeSectionWrapper = styled.div`
  width: 100%;
  background: url("/images/landing/home-bg.png") no-repeat;
  background-size: cover;
  background-position: center;
`;

export const HomeSectionContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  padding: 100px 0;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  h1 {
    max-width: 704px;
    width: 100%;
    background: linear-gradient(92.04deg, #ffffff 0%, #d1adff 105.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
    font-size: 56px;
    line-height: 64px;
    font-family: "Space Grotesk";
    text-align: center;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 46px;
    }
  }
`;

export const HomeBtnGroup = styled.div`
  display: flex;
  align-items: center;
  & > :first-child {
    margin-right: 70px;
  }
  @media screen and (max-width: 768px) {
    & > :first-child {
      margin-right: 40px;
    }
  }
  @media screen and (max-width: 560px) {
    flex-direction: column;
    & > :first-child {
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
`;

export const HomeBtn = styled.div`
  cursor: pointer;
  width: 240px;
  height: 63px;
  background: url("/images/landing/home-btn-bg.png");
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
`;

export const HomeSocialLinks = styled.div`
  position: absolute;
  right: 0;
  bottom: 100px;
  padding: 24px;
  background: linear-gradient(
    99.21deg,
    rgba(255, 255, 255, 0.128) -2.23%,
    rgba(255, 255, 255, 0.024) 108.31%
  );
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 42px;
  }
  @media screen and (max-width: 768px) {
    transform: translate(50%, 0);
    right: 50%;
  }
  @media screen and (max-width: 560px) {
    position: static;
    transform: translate(0, 0);
    margin-top: 40px;
    & > :not(:first-child) {
      margin-left: 24px;
    }
  }
`;

export const SocialItem = styled.a`
  display: inline-flex;
`;
