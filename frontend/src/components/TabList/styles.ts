import styled from "styled-components";

export const TabWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(93, 119, 162, 0.1);
  display: flex;
  overflow-x: hidden;
  align-items: center;
`;

export const TabItem = styled.div<{ active: boolean }>`
  display: flex;
  height: 38px;
  cursor: pointer;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  text-transform: uppercase;
  position: relative;
  font-family: "Space Grotesk";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ active }) => (active ? "#EFF1F6" : " #BEC9DA")};
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    background: ${({ active }) => (active ? "#d7007b" : "transparent")};
    height: 2px;
    width: 100%;
    border-radius: 1.5px;
  }
`;
