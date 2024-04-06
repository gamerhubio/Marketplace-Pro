import styled from "styled-components";

export const InputWrapper = styled.div`
  background: #0a1f5c;
  height: 48px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  input {
    padding: 0;
    flex: 1;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    &::placeholder {
      color: #9eaec7aa;
    }
  }
`;
