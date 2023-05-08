import styled from "styled-components";

export const ScrollTopWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 50px;
  right: 60px;
  z-index: 8;
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(253, 53, 158, 0.7);
  box-shadow: 0 0 10px 1px rgb(253, 53, 158);
  border-radius: 100%;
  transform: ${({ visible }) => (visible ? "scale(1)" : "scale(0)")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;
