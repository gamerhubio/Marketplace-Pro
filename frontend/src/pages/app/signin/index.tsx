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
import { toast } from "react-toastify";

export const AppSignInPage: React.FC = () => {
  const router = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [loading, setLoading] = useState(false)

  const address = useAccount();


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true)

    const data = {
      username,
      password: pwd,
    };
    login(data)
      .then((data) => {
        //@ts-ignore
        if (!data.error && data) {
          console.log("🚀 ~ .then ~ data:", data);
          //setGlobalState("isAuthenticated", true);
          // if (!address) {
          //   router("/app/wallet-connect");
          // } else {
          //   //check if user is subscribed
          //   checkSubscriptionState();
          // }
          setLoading(false)
          router("/dashboard/home");
        }
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err.response.data.msg)
        console.error(err);
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
          <Button loading={loading} onClick={handleSubmit}>Sign In</Button>
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


