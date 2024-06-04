import styled from "styled-components";

export const PartnerSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  
`;


export const PartnersWrapper = styled.div`
  overflow-x: hidden;
  padding: 80px 72px;
  max-width: 1440px;
  width: 100%;
  height: 500px;
  h1 {
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    font-family: "Space Grotesk";
    margin-bottom: 40px;
    text-align: center;
    strong {
      color: #CE0076;
    }
  }
  > div {
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
    margin-bottom: 50px;
    gap: 10px;
    img {
      min-width: 100px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 60px 8px;
  }
`;


export const PartnersCardWrapper = styled.div`
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
    flex-wrap: wrap;
    .img-margin {
      margin-top: 24px;
    }
    img {
      max-width: 100px;
      background: red;
      padding: 20px;
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;

    }
  }

`;