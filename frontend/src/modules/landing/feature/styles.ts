import styled from "styled-components";

export const FeatureSectionWrapper = styled.div`
  width: 100%;
  background: url("/images/landing/home-feature-bg.png") no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
`;

export const FeatureSectionContainer = styled.div`
  padding: 100px;
  height: 1212px;
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
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

