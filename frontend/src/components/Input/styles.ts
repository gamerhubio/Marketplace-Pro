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
    background-color: #0a1f5c !important;
    border: none;
    outline: none;
    color: white !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    -webkit-box-shadow: 0 0 0 30px #0a1f5c inset !important;
    -webkit-color: white !important;
    &::placeholder {
      color: #9eaec7aa;
    }
    outline: none;
  }
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #0a1f5c inset !important;
    -webkit-color: white !important;
    outline: none;
    outline: hidden;
  }
  hover:input {
    outline: none;
  }
`;
