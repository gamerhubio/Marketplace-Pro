import styled from "styled-components";

export const TokenomicsCardWrapper = styled.div`
  position: relative;
  max-width: 355px;
  width: 100%;
  background: linear-gradient(135deg, #d7007b 0%, #9747ff 100%);
  border-radius: 10px;
  padding: 20px 20px 26px;
  contain: content;
  &::after {
    position: absolute;
    content: "";
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    border-radius: 10px;
    background: #011038;
  }
  & > img {
    position: absolute;
    z-index: 1;
    bottom: -22px;
    right: -33px;
    width: 136px;
    height: 136px;
    opacity: 0.15;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  z-index: 2;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const CardTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  font-family: "Space Grotesk";
  margin: 8px 0 10px;
`;

export const CardDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #bec9da;
`;
