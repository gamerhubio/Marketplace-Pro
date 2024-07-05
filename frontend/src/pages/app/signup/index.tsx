import React, { useState } from "react";
import {
  AppSignUpPageWrapper,
  CheckboxWrapper,
  FormInputWrapper,
  SignUpFormWrapper,
} from "./styles";
import { AppLayout } from "../../../layout";
import { AppButton, Button, Input } from "../../../components";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "@particle-network/connect-react-ui";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../utils";
import { setAuthToken, setCredit, setNewAcct } from "../../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { registerSchema } from "../../../components/AuthModals/schemas";
import axios from "axios";

const AppSignUpPage: React.FC = () => {

  const router = useNavigate();  
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)


  const { values, errors, touched, handleChange, handleBlur, handleSubmit }  = useFormik({
    initialValues: {
      email: "",
      username: "",
      wallets: [""],
      password: "",
      agreement: false
    },
    validationSchema: registerSchema,
    onSubmit: async(values) => {
      setLoading(true)
      try {
        const res = await axios.post(BASE_URL + "/auth/register", values)
        dispatch(setAuthToken(res?.data?.accessToken))
        dispatch(setNewAcct(true))
        dispatch(setCredit(res?.data?._doc?.credit))
        router("/dashboard/home")
      } catch (e) {
        toast.error(e.response.data.msg)
      } 
      setLoading(false)
    },
  })

  const hasError = Boolean(errors.email || errors.username || errors.password || !values.agreement)

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
              name="username"
              value={values.username}
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username}
              showError={errors.username && touched.username} />

            <Input
              name="email"
              placeholder="Email"
              value={values.email}
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              showError={errors.email && touched.email} />

            <Input
              name="password"
              placeholder="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              showError={errors.password && touched.password}/>

          </FormInputWrapper>

          <Button disabled={hasError} loading={loading} onClick={() => handleSubmit()}>Create Account</Button>
      
          <CheckboxWrapper>
              <p>
              {"Already have an account "}
                <span onClick={() => router("/app/signin")}> Sign In </span>
              </p>
          </CheckboxWrapper>

          <CheckboxWrapper htmlFor="checkbox">
            <input
              name="agreement"
              type="checkbox"
              id="checkbox"
              onChange={handleChange}/>
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


export default AppSignUpPage
