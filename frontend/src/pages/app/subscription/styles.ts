import styled from "styled-components";

export const AppSubscriptionPageWrapper = styled.div`
  padding: 100px 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * {
    width: 95%;
    text-align: center;
    margin: auto;
  }
  h1 {
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    font-family: "Space Grotesk";
    color: #fff;
    margin-bottom: 25px;
    span {
      color: #d00077;
    }
  }
  p {
    max-width: 496px;
    font-weight: 700;
    font-size: 18px;
    font-family: "Space Grotesk";
    line-height: 28px;
    margin-bottom: 25px;
  }
`;

export const PlanCardGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  max-width: 1155px;
  justify-content: space-between;
  & > :not(:first-child) {
    margin-left: 10px;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    & > :not(:first-child) {
      margin-left: 0px;
      margin-top: 30px;
    }
  }
`;

export const PlanCardWrapper = styled.div`
  background: linear-gradient(
    101.24deg,
    #2d3347 -1.38%,
    rgba(45, 51, 71, 0.4) 105.06%
  );
  border: 1px solid rgba(125, 146, 181, 0.2);
  backdrop-filter: blur(12px);
  border-radius: 39px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 336px;
  flex: 1;
  &.top-card {
    background: #0a1442;
    border-radius: 20px;
    max-width: 386px;
    min-width: 386px;
    margin-bottom: 22px;
  }
  @media screen and (max-width: 1080px) {
    max-width: 300px;
    &.top-card {
      max-width: 350px;
      min-width: 350px;
    }
  }
  @media screen and (max-width: 1024px) {
    max-width: 350px;
    width: 100%;
    min-width: auto;
    order: 2;
    &.top-card {
      min-width: auto;
      order: 1;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(158, 174, 199, 0.1);
  width: 100%;
`;

export const GamerAvatar = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  width: 75px;
  height: 82px;
  margin-right: 24px;
  border-radius: 5px;
  &.top-card-avatar {
    width: 105px;
    height: 115px;
  }
`;

export const GamerDesc = styled.div`
  font-family: "Space Grotesk";
  font-weight: 700;
  h3 {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 7px;
    white-space: nowrap;
  }
  h4 {
    font-size: 32px;
    line-height: 40px;
    padding-left: 9px;
    span {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

export const GamerPlanWrapper = styled.div`
  padding: 10px 20px 30px;
  width: 100%;

  p {
    &:not(:first-child) {
      margin-top: 26px;
      margin-bottom: 0;
    }
    text-align: left;
    display: flex;
    white-space: nowrap;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    div {
      margin-right: 19px;
    }
  }
`;
