import React from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "../../../layout";
import { AppButton, Button, Input } from "../../../components";
import {
  AppSignUpPageWrapper,
  CheckboxWrapper,
  FormInputWrapper,
  SignUpFormWrapper,
} from "../signup/styles";

export const AppSignInPage: React.FC = () => {
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
        <h1>Sign In to Gamerhub</h1>
        <SignUpFormWrapper>
          <FormInputWrapper>
            <Input placeholder="Username" />
            <Input placeholder="Password" type="password" />
          </FormInputWrapper>
          <Button onClick={() => router("/app/wallet-connect")}>Sign In</Button>
          <CheckboxWrapper>
            <p>
              {"Don't have an account "}
              <span onClick={() => router("/app/signup")}>
                Create an Account
              </span>
            </p>
          </CheckboxWrapper>
        </SignUpFormWrapper>
      </AppSignUpPageWrapper>
    </AppLayout>
  );
};
