import styled from "styled-components";

export const AppLayoutWrapper = styled.div`
  background: url("/images/app/app-bg.png") no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  z-index: 10;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: -1px;
    background: linear-gradient(
      90deg,
      rgba(253, 53, 158, 0) 1.03%,
      #fd359e 6.88%,
      #fd359e 94.69%,
      rgba(253, 53, 158, 0) 100%
    );
  }
  &.fixed {
    background: rgb(1, 9, 31);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1240px;
  width: 95%;
  margin: auto;
`;

export const HeaderLogo = styled.div`
  max-width: 162px;
  width: 100%;
  margin-right: 20px;
  img {
    width: 100%;
  }
`;
