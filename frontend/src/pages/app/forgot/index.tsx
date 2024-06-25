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
import { ConnectButton } from "@particle-network/connect-react-ui";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../utils";
import { setAuthToken, setCredit } from "../../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

export const AppForgotPage: React.FC = () => {

  const router = useNavigate();
  
  const dispatch = useDispatch()

  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true)

    const data = { email };

    try {
      const res = await axios.post(BASE_URL + "/forgot-password", data)
      dispatch(setAuthToken(res?.data?.accessToken))
      dispatch(setCredit(res?.data?._doc?.credit))
      toast.success("A password reset link has been sent to your mail")
      //close()
    } catch (e) {
      toast.error(e.response.data.msg)
    } finally {
      setLoading(false)
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
        <h1>Forgot Password</h1>
        <SignUpFormWrapper>
          <FormInputWrapper>
            <Input
              placeholder="Enter your email"
              value={email}
              type="email"
              //@ts-expect-error
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormInputWrapper>
          <Button loading={loading} onClick={handleSubmit}>Send Reset Link</Button>
          <CheckboxWrapper>
            <p>
              <span onClick={() => router("/app/signin")}>
                Sign In
              </span>
            </p>
          </CheckboxWrapper>
        </SignUpFormWrapper>
      </AppSignUpPageWrapper>
    </AppLayout>
  );
};


