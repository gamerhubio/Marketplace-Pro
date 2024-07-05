import React, { useState } from "react";
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
import { emailSchema } from "../../../components/AuthModals/schemas";
import { useFormik } from "formik";

const AppForgotPage: React.FC = () => {

  const router = useNavigate();
  
  const [loading, setLoading] = useState(false)

  const { values, errors, touched, handleChange, handleBlur, handleSubmit }  = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: emailSchema,
    onSubmit: async(values) => {
      setLoading(true)
      try {
        const res = await axios.post(BASE_URL + "/forgot-password", values)
        toast.success("A password reset link has been sent to your mail")
      } catch (e) {
        toast.error(e.response.data.msg)
      } 
      setLoading(false)
    },
  })

  return (
    <AppLayout
      buttonContent={
        <AppButton onClick={() => router("/app/signup")}>
          Create account
        </AppButton>
      }>
      <div style={{ display: "none" }}>
        <ConnectButton />
      </div>
      <AppSignUpPageWrapper>
        <h1>Forgot Password</h1>
        <SignUpFormWrapper>
          <FormInputWrapper>
            <Input
              name="email"
              placeholder="Email"
              value={values.email}
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              showError={errors.email && touched.email} />
 
          </FormInputWrapper>
          <Button disabled={Boolean(errors.email || values.email == "")} loading={loading} onClick={() => handleSubmit()}>Send Reset Link</Button>
          <CheckboxWrapper>
            <p>
              <span onClick={() => router("/app/signin")}>
                Login
              </span>
            </p>
          </CheckboxWrapper>
        </SignUpFormWrapper>
      </AppSignUpPageWrapper>
    </AppLayout>
  );
};


export default AppForgotPage