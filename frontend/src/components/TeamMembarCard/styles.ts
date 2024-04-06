import styled from "styled-components";

export const MemberCardWrapper = styled.div`
  border-radius: 10px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background: linear-gradient(135deg, #d7007b 0%, #9747ff 100%);
    border-radius: 10px;
    opacity: 0.5;
  }
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    background: #021446;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  z-index: 2;
  img {
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  z-index: 2;
  position: relative;
  padding: 10px 10px 20px;
  h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    font-family: "Space Grotesk";
    margin-bottom: 10px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #bec9da;
    margin-bottom: 0px !important;
  }
`;
