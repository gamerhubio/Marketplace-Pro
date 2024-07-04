import { useState } from "react";
import { Button, Input } from "..";
import {
  CheckboxWrapper,
  FormInputWrapper,
  SignUpFormWrapper,
} from "../../pages/app/signup/styles";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../utils";
import { emailSchema } from "./schemas";
import { useFormik } from "formik";
import axios from "axios";

interface IProps {
  action: () => void;
  close: () => void;
}

const Forgot = ({ action, close } : IProps) => {

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
    <>
      <h2>Forgot Password</h2>
      <div className="container">
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
              <span onClick={action}>
                Login
              </span>
            </p>
          </CheckboxWrapper>
        </SignUpFormWrapper>
      </div>
    </>
  );
};


export default Forgot