import styled from "styled-components";

export const HomeSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: url("/images/landing/home-bg.png") no-repeat;
  background-size: cover;
  background-position: center;
  strong {
    color: #CE0076;
  }
`;

export const HomeSectionContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 100px;
  min-height: 840px;
  display: flex;
  > div {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
  }
  h1 {
    max-width: 704px;
    width: 100%;
    color: linear-gradient(92.04deg, #ffffff 0%, #d1adff 105.11%);
    background-clip: text;
    font-weight: 700;
    font-size: 56px;
    line-height: 64px;
    font-family: "Space Grotesk";
    margin: 0 auto;
    margin-bottom: 40px;
    margin-top: 100px;
  }
  strong {
    color: #CE0076;
  }
  @media screen and (max-width: 1300px) {
    padding: 30px;
    padding-top: 100px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 46px;
    }
  }
`;



export const HomeBtn = styled.div`
  position: relative;
  cursor: pointer;
  width: 240px;
  height: 64px;
  background: url("/images/landing/home-btn-bg.png");
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
`;

export const HomeSocialLinks = styled.div`
  margin-top: 10px;
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
  width: 340px;
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


export const HeroLeftSection = styled.div`
  margin-top: 10px;
  padding-top: 220px;
  background: url("/images/landing/home-character.png") no-repeat;
  background-size: 480px 600px;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  gap: 18px;
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





export const HeroCard = styled.div`
  background: url("/images/landing/hero-item-gradient.png") no-repeat;
  height: 100px;
  width: 285px;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  font-size: 14px;
  justify-self: start;
  p {
    max-width: 180px;
    strong {
      color: #CE0076;
    }
  }
`;
