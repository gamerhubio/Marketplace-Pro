import styled from "styled-components";

export const AppSignUpPageWrapper = styled.div`
  padding: 90px 0;
  height: 100vh;
  max-width: 600px;
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Space Grotesk";
    font-weight: 700;
    font-size: 42px;
    line-height: 52px;
    text-align: center;
    margin-bottom: 48px;
  }
`;

export const SignUpFormWrapper = styled.div`
  max-width: 432px;
  width: 100%;
  & > :not(:first-child) {
    margin-top: 32px;
  }
`;

export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & > :not(:first-child) {
    margin-top: 24px;
  }
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  span {
    cursor: pointer;
    color: #ff1a9d;
  }
  input {
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    margin-right: 6px;
    accent-color: #d7007b;
  }
`;
