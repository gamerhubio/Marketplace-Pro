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
`;

export const RoadmapWrapper = styled.div`
  max-width: 842px;
  width: 95%;
  margin: auto;
`;

export const RoadmapItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RoadmapDescription = styled.div`
  &.none {
    visibility: hidden;
  }
  max-width: 267px;
  width: 100%;
`;

export const RoadmapDate = styled.div`
  flex: 1;
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
    }
  }
`;
