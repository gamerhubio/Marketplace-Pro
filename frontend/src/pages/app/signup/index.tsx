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
import { toast } from "react-toastify";

export const AppSignUpPage: React.FC = () => {
  const address = useAccount();
  const router = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [agreement, setAgreement] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    //if (address) {
    const data = {
      email,
      username,
      wallets: [""],
      password: pwd,
    };
    console.log(agreement);
    setLoading(true)

    createUser(data)
      .then((data) => {
        //@ts-ignore
        setLoading(false)
        if (data && !(data as any).error) {
          
          router("/dashboard/home");
        }
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err.response.data.msg)
      });
    // } else {
    //   router("/app/wallet-connect");
    // }
  };

  function handleChecked(e: React.ChangeEvent<HTMLInputElement>): void {
    setAgreement(e.target.checked);
  }

  return (
    <AppLayout
      buttonContent={
        <AppButton onClick={() => router("/app/signin")}>Sign In</AppButton>
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
              type="email"
              //@ts-expect-error
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={pwd}
              //@ts-expect-error
              onChange={(e) => setPwd(e.target.value)}
            />
          </FormInputWrapper>
          {(!email || !username || !agreement || !pwd) && (
            <Button disabled>Create Account</Button>
          )}

          {email && username && agreement && pwd && (
            <Button loading={loading} onClick={handleSubmit}>Create Account</Button>
          )}

          <CheckboxWrapper htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={(e) => handleChecked(e)}
            />
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
