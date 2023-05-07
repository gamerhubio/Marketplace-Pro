import React from "react";
import {
  AppSignUpPageWrapper,
  CheckboxWrapper,
  FormInputWrapper,
  SignUpFormWrapper,
} from "./styles";
import { AppLayout } from "../../../layout";
import { AppButton, Button, Input } from "../../../components";
import { useNavigate } from "react-router-dom";

export const AppSignUpPage: React.FC = () => {
  const router = useNavigate();
  return (
    <AppLayout
      buttonContent={
        <AppButton onClick={() => router("/app/signup")}>
          Create account
        </AppButton>
      }
    >
      <AppSignUpPageWrapper>
        <h1>Create a Gamerhub account</h1>
        <SignUpFormWrapper>
          <FormInputWrapper>
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
          </FormInputWrapper>
          <Button onClick={() => router("/app/signin")}>Create Account</Button>
          <CheckboxWrapper htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <p>
              {"I agree to Gamerhub’s "}
              <span>Terms and Conditions</span> & <span>Privacy Policy</span>
            </p>
          </CheckboxWrapper>
        </SignUpFormWrapper>
      </AppSignUpPageWrapper>
    </AppLayout>
  );
};
