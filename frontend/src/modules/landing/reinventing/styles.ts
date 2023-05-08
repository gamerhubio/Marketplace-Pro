import styled from "styled-components";

export const ReinventingWrapper = styled.div`
  background: url("/images/landing/reinventing-bg.png") no-repeat;
  background-size: 100% 100%;
`;

export const ReinventingContainer = styled.div`
  padding: 134px 0;
  max-width: 1110px;
  margin: auto;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 100px 0;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    padding: 60px 0;
  }
`;

export const ReinventingTextWrapper = styled.div`
  max-width: 565px;
  width: 100%;
  h1 {
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    font-family: "Space Grotesk";
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 24px 0;
    color: #bec9da;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ReinventingImg = styled.div`
  max-width: 362px;
  img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;
