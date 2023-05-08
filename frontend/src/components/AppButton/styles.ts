import styled from "styled-components";

export const AppButtonWrapper = styled.div`
  background: url("/images/app/app-btn-bg.png") no-repeat;
  background-size: 100% 100%;
  height: 48px;
  max-width: 184px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & > :not(:last-child) {
    margin-right: 10px;
  }
`;
