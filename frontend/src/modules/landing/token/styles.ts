import styled from "styled-components";

export const TokenSectionWrapper = styled.div`
  padding: 80px 0;
  background: url("/images/landing/token-bg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 95%;
    text-align: center;
  }
  & > h1 {
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Space Grotesk";
    img {
      margin-left: 20px;
    }
  }
  & > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #bec9da;
    margin: 32px 0;
    max-width: 654px;
  }
  & > h3 {
    font-family: "Space Grotesk";
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    margin: 64px 0 32px;
  }
  @media screen and (max-width: 600px) {
    padding: 50px 0;
  }
`;

export const TokenButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TokenButton = styled.div`
  max-width: 231px;
  width: 100%;
  height: 48px;
  margin-left: 16px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  span {
    position: relative;
    z-index: 1;
  }
  &::before {
    content: "";
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    background: #010e31;
    border-radius: 5px;
    position: absolute;
    z-index: 1;
  }
  &::after {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    border-radius: 5px;
    background: linear-gradient(135deg, #d7007b 0%, #9747ff 100%);
  }
  @media screen and (max-width: 425px) {
    margin-left: 0;
    margin-top: 16px;
  }
`;

export const TokenomicsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
  flex-wrap: wrap;
  & > :not(:first-child) {
    margin-left: 88px;
  }
  @media screen and (max-width: 1024px) {
    justify-content: space-between;
    & > :not(:first-child) {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TokenomicsItem = styled.div`
  padding: 10px;
  text-align: left;
  text-transform: uppercase;

  h4 {
    white-space: nowrap;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 10px;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #bec9da;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const TokenomicsCardGroupWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 64px;
  @media screen and (max-width: 600px) {
    gap: 20px;
  }
`;
