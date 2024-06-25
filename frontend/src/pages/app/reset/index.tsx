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
import { BASE_URL } from "../../../utils";
import { setAuthToken, setCredit } from "../../../store/slices/authSlice";
import useAuthState from "../../../hooks/useAuthState";
import { useDispatch } from "react-redux";

export const AppResetPage: React.FC = () => {
  const router = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [loading, setLoading] = useState(false)

  const address = useAccount();

  const { authRequest } = useAuthState()
  const dispatch = useDispatch()


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true)
 
    const data = { password };

    if (password.length < 6) {
      toast.error("Passwords too short, atleast 6 characters")
    }
    else if (password != confirm) {
      toast.error("Passwords donnot match")
    }

    try {
      const res = await authRequest().post(BASE_URL + "/auth/login", data)
      dispatch(setAuthToken(res?.data?.accessToken))
      dispatch(setCredit(res?.data?._doc?.credit))
      router("/dashboard/home")
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
        <h1>Reset Password</h1>
        <SignUpFormWrapper>
          <FormInputWrapper>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              //@ts-expect-error
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="Confirm Password*"
              type="password"
              value={confirm}
              //@ts-expect-error
              onChange={(e) => setConfirm(e.target.value)}
            />
          </FormInputWrapper>
          <Button loading={loading} onClick={handleSubmit}>Reset</Button>

        </SignUpFormWrapper>
      </AppSignUpPageWrapper>
    </AppLayout>
  );
};


