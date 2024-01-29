import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  pointer-events: none;
  z-index: 99999;
  img {
    width: 200px;
  }
`;

export const MyMark: React.FC = () => {
  return (
    <Wrapper>
      <img src="/moses.png" alt="my_mark" />
    </Wrapper>
  );
};
