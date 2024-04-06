import styled from "styled-components";

export const TeamSectionWrapper = styled.div`
  padding: 80px 0 200px;
  max-width: 1200px;
  width: 95%;
  margin: auto;
  & > * {
    text-align: center;
  }
  h1 {
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    font-family: "Space Grotesk";
    margin-bottom: 16px;
  }
  p {
    max-width: 620px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #bec9da;
    margin: auto;
    margin-bottom: 38px;
  }
  @media screen and (max-width: 600px) {
    padding: 50px 0;
  }
`;

export const TeamMemberCardGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
