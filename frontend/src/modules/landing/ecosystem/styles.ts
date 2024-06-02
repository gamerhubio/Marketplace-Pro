import styled from "styled-components";

export const EcosystemSectionWrapper = styled.div`
  background: url("/images/landing/marketplace-bg.png");
  background-size: cover;
  background-position: center;
`;

export const EcosystemWrapper = styled.div`
  padding: 80px 0 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    text-align: center;
    margin: auto;
  }
  h1 {
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    font-family: "Space Grotesk";
    margin-bottom: 40px;
    strong {
      color: #CE0076;
    }
  }
  > div {
      display: flex;
      justify-content: space-between;
  }
  .more {
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    > div {
      flex-wrap: wrap;
      .img-margin {
        margin-top: 24px;
      }
    }
    .more {
      .img-margin {
        width: 100%;
      }
    }
  }
`;


export const EcosystemCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: "Space Grotesk";
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
    max-width: 400px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    .img-margin {
      margin-top: 24px;
    }
  }
`;

export const StreamingWrapper = styled.div`
  p {
    font-size: 12px;
    height: 80px;
  }
  
`

export const StreamingImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    align-self: end;
  }
  @media screen and (max-width: 425px) {
    min-height: 250px;
  }
`;


export const VideoPlayBtn = styled.img`
  width: 120px;
  height: 120px;
  /* top: 50%;
  left: 50%; */
  position: absolute;
  transform-origin: -50% -50%;
  z-index: 2;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;

export const StreamBtn = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 342px;
  width: 95%;
  z-index: 2;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    max-width: 250px;
  }
  @media screen and (max-width: 500px) {
    max-width: 150px;
  }
`;
