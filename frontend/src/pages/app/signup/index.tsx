import React, { FormEvent, useState } from "react";
import {
  AppSignUpPageWrapper,
  CheckboxWrapper,
  FormInputWrapper,
  SignUpFormWrapper,
} from "./styles";
import { AppLayout } from "../../../layout";
import { AppButton, Button, Input } from "../../../components";
import { useNavigate } from "react-router-dom";
import { ConnectButton, useAccount } from "@particle-network/connect-react-ui";
import { createUser } from "../../../scripts";
import { setGlobalState } from "../../../store";

export const AppSignUpPage: React.FC = () => {
  const address = useAccount();
  const router = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (address) {
      const data = {
        email,
        username,
        wallets: [address],
      };

      createUser(data)
        .then((data) => {
          //@ts-ignore
          if (!data.error && data) {
            setGlobalState("isAuthenticated", true);
            setGlobalState("currentUser", data);
            router("/app/subscription");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      router("/app/wallet-connect");
    }
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
        <h1>Create a Gamerhub account</h1>
        <SignUpFormWrapper>
          <FormInputWrapper>
            <Input
              placeholder="Username"
              value={username}
              //@ts-expect-error
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              value={email}
              //@ts-expect-error
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <Input placeholder="Password" type="password" /> */}
          </FormInputWrapper>
          <Button onClick={handleSubmit}>Create Account</Button>
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
