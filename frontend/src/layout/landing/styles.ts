import styled from "styled-components";

export const LandingLayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(171.58deg, #01091f 7.81%, #00113c 152.33%);
`;

export const HeaderWrapper = styled.div`
  z-index: 1;
  height: 80px;
  position: absolute;
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
  display: flex;
`;

export const HeaderNavbar = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 32px;
  }
`;

export const HeaderNavItem = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #eff1f6;
`;

export const SignInBtn = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  border-radius: 5px;
  height: 48px;
  width: 116px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
`;
