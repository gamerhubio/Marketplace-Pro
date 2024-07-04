import React, { FormEvent, useState } from "react";
import { Button, Input } from "../../components";
import {
  CheckboxWrapper,
  FormInputWrapper,
  SignUpFormWrapper,
} from "../../pages/app/signup/styles";
import { createUser } from "../../scripts";
import { toast } from "react-toastify";
import { authRequest, BASE_URL } from "../../utils";
import { setAuthToken, setCredit, setNewAcct } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { authSchema, registerSchema } from "./schemas";
import { useFormik } from "formik";
import axios from "axios";

interface IProps {
  action: () => void;
  close: () => void;
}




const SignUp = ({ action, close } : IProps) => {

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
        close()
      } catch (e) {
        toast.error(e.response.data.msg)
      } 
      setLoading(false)
    },
  })

  const hasError = Boolean(errors.email || errors.username || errors.password || !values.agreement)

  return (
    <>
      <h2>Create a Gamerhub account</h2>
      <div className="container">
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
                <span onClick={action}> Sign In </span>
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
      </div>
    </>
  );
};


export default SignUp