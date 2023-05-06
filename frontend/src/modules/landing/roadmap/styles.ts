import styled from "styled-components";

export const RoadmapSectionWrapper = styled.div`
  background: url("/images/landing/roadmap-bg.png") no-repeat;
  background-size: cover;
  background-position: center;
  padding: 80px 0;
  h1 {
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    font-family: "Space Grotesk";
    text-align: center;
    margin-bottom: 48px;
  }
  @media screen and (max-width: 600px) {
    padding: 50px 0;
  }
`;

export const RoadmapWrapper = styled.div`
  max-width: 842px;
  width: 95%;
  margin: auto;
`;

export const RoadmapItemWrapper = styled.div<{ active: Array<number> }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &::before {
    content: "";
    width: 1px;
    background: #821dd5;
    height: ${({ active }) =>
      active[0] === 0 || active[0] === active[1] ? "50%" : "100%"};
    bottom: ${({ active }) => active[0] === 0 && "0"};
    top: ${({ active }) => active[0] === active[1] && "0"};
    position: absolute;
    left: 50%;
    @media screen and (max-width: 600px) {
      left: 40px;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 10px 0;
  }
`;

export const RoadmapDescription = styled.div`
  &.none {
    visibility: hidden;
  }
  max-width: 267px;
  width: 100%;
  min-height: 116px;
  background: url("/images/landing/roadmap-item.png") no-repeat;
  background-size: 100% 100%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-weight: 400;
    font-size: 14px;
    word-break: break-all;
    line-height: 20px;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 600px) {
    order: 2;
    max-width: 400px;
    &.none {
      display: none;
    }
  }
`;

export const RoadmapDate = styled.div<{ active: number }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    background: ${({ active }) =>
      active % 2 === 0
        ? "linear-gradient(270deg, rgba(130, 29, 213, 0.3) 0%, #821dd5 51.35%, rgba(130, 29, 213, 0.3) 98.6%)"
        : "transparent"};
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  &::after {
    background: ${({ active }) =>
      active % 2 !== 0
        ? "linear-gradient(270deg, rgba(130, 29, 213, 0.3) 0%, #821dd5 51.35%, rgba(130, 29, 213, 0.3) 98.6%)"
        : "transparent"};
    @media screen and (max-width: 600px) {
      background: linear-gradient(
        270deg,
        rgba(130, 29, 213, 0.3) 0%,
        #821dd5 51.35%,
        rgba(130, 29, 213, 0.3) 98.6%
      );
    }
  }
  &::after,
  &::before {
    content: "";
    width: 100%;
    height: 1px;
  }
  div {
    display: flex;
    align-items: center;
    width: fit-content;
    height: 40px;
    padding: 0 24px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(120, 37, 215, 0.6);
    backdrop-filter: blur(6px);
    border-radius: 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    span {
      color: #ff1a9d;
      margin-right: 6px;
      white-space: nowrap;
    }
  }
  @media screen and (max-width: 600px) {
    min-width: 170px;
  }
  @media screen and (max-width: 425px) {
    min-width: 130px;
  }
`;
