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
import { authSchema } from "../../../components/AuthModals/schemas";
import axios from "axios";
import { useFormik } from "formik";

const AppSignInPage: React.FC = () => {
  const router = useNavigate();
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const { values, errors, touched, handleChange, handleBlur, handleSubmit }  = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: authSchema,
    onSubmit: async(values) => {
      setLoading(true)
      try {
        const res = await axios.post(BASE_URL + "/auth/login", values)
        dispatch(setAuthToken(res?.data?.accessToken))
        dispatch(setCredit(res?.data?._doc?.credit))
        router("/dashboard/home")
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
              name="username"
              placeholder="Username"
              value={values.username}
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username}
              showError={errors.username && touched.username} />

            <Input
              name="password"
              placeholder="Password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              showError={errors.password && touched.password}/>

            <p onClick={() => router("/app/forgot")} style={{textAlign: "left", width: "100%", cursor: "pointer"}}>Forgot Password?</p> 

          </FormInputWrapper>
          <Button loading={loading} onClick={() => handleSubmit()}>Sign In</Button>
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


export default AppSignInPage