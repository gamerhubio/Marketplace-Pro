import styled from "styled-components";

export const DashboardLayoutWrapper = styled.div`
  padding-bottom: 50px;
  position: relative;
  padding-left: 264px;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(171.58deg, #00113c 7.81%, #260033 152.33%);
  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }
`;

export const MainContentWrapper = styled.div`
  padding: 0;
  width: 95%;
  margin: auto;
`;

export const ContentWrapper = styled.div`
  padding: 20px 0;
`;
