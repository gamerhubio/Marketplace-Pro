import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "../../../layout";
import { AppButton, Button, Input } from "../../../components";
import {
  AppSignUpPageWrapper,
  CheckboxWrapper,
  FormInputWrapper,
  SignUpFormWrapper,
} from "../signup/styles";
import { ConnectButton, useAccount } from "@particle-network/connect-react-ui";
import { login } from "../../../scripts";
import { setGlobalState, useGlobalState } from "../../../store";
import { checkSubscription } from "../../../scripts/user";

export const AppSignInPage: React.FC = () => {
  const router = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [currentUser] = useGlobalState("currentUser");

  const address = useAccount();

  const checkSubscriptionState = () => {
    checkSubscription(
      //@ts-expect-error
      currentUser.id || JSON.parse(window.localStorage.getItem("user")).id
    )
      .then((data) => {
        if (data.error) {
          console.log(data);
        }
        //if true is returned

        if (data.msg) {
          //go to dashboard
          router("/dashboard/home");
        } else {
          router("/app/subscription");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      username,
      password: pwd,
    };
    login(data)
      .then((data) => {
        //@ts-ignore
        if (!data.error && data) {
          console.log("🚀 ~ .then ~ data:", data);
          setGlobalState("isAuthenticated", true);
          // if (!address) {
          //   router("/app/wallet-connect");
          // } else {
          //   //check if user is subscribed
          //   checkSubscriptionState();
          // }
          router("/dashboard/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AppLayout
      buttonContent={
        <AppButton onClick={() => router("/app/signup")}>
          Create account
        </AppButton>
      }
    >
      <div style={{ display: "none" }}>
        <ConnectButton />
      </div>
      <AppSignUpPageWrapper>
        <h1>Sign In to Gamerhub</h1>
        <SignUpFormWrapper>
          <FormInputWrapper>
            <Input
              placeholder="Username"
              value={username}
              //@ts-expect-error
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={pwd}
              //@ts-expect-error
              onChange={(e) => setPwd(e.target.value)}
            />
          </FormInputWrapper>
          <Button onClick={handleSubmit}>Sign In</Button>
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
