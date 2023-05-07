import styled from "styled-components";

export const ConnectWalletWrapper = styled.div<{ show: boolean }>`
  background: linear-gradient(
    101.24deg,
    #2d3347 -1.38%,
    rgba(45, 51, 71, 0.4) 105.06%
  );
  border: 1px solid rgba(125, 146, 181, 0.2);
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 10px;
  width: 100%;
  margin-top: ${({ show }) => (show ? "32px" : 0)} !important;
  padding: ${({ show }) => (show ? "30px" : 0)};
  height: ${({ show }) => (show ? "auto" : 0)};
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  & > :not(:first-child) {
    margin-top: 25px;
  }
`;

export const TitleWrapper = styled.div`
  font-family: "Space Grotesk";
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
`;

export const WalletWrapper = styled.div`
  border-bottom: 1px solid rgba(158, 174, 199, 0.1);
  height: 56px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
