import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppLayout } from "../../../layout";
import { AppButton, Button, Input } from "../../../components";
import {  AppSignUpPageWrapper, FormInputWrapper, SignUpFormWrapper } from "../signup/styles";
import { ConnectButton } from "@particle-network/connect-react-ui";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../utils";
import axios from "axios";
import { useFormik } from "formik";
import { resetPasswordSchema } from "../../../components/AuthModals/schemas";

export const AppResetPage: React.FC = () => {

  const router = useNavigate();
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()

  const { values, errors, touched, handleChange, handleBlur, handleSubmit }  = useFormik({
    initialValues: {
      password: "",
      confirmPassword: ""
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async(values) => {
      setLoading(true)
      try {
        const res = await axios.post(BASE_URL + "/forgot-password/reset", { password: values.password, token: searchParams.get("token")})
        toast.success('Password reset was successfully')
        setTimeout(() => {
          router("/app/signin")
        }, 2000)
      } catch (e) {
        toast.error(e.response.data.msg)
      } 
      setLoading(false)
    },
  })

  const hasError = Boolean(errors.password || errors.confirmPassword)

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
        <h1>Reset Password</h1>
        <SignUpFormWrapper>
          <FormInputWrapper>
            
            <Input
              name="password"
              placeholder="Password *"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              showError={errors.password && touched.password} />

            <Input
              name="confirmPassword"
              placeholder="Confirm Password *"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.confirmPassword}
              showError={errors.confirmPassword && touched.confirmPassword} />
          </FormInputWrapper>
          <Button disabled={hasError} loading={loading} onClick={() => handleSubmit()}>Reset</Button>
        </SignUpFormWrapper>
      </AppSignUpPageWrapper>
    </AppLayout>
  );
};


