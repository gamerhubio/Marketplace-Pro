import { useState } from "react";
import { Button, Input } from "../../components";
import {
  CheckboxWrapper,
  FormInputWrapper,
  SignUpFormWrapper,
} from "../../pages/app/signup/styles";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  setAuthToken,
  setCredit,
  setUserData,
} from "../../store/slices/authSlice";
import { BASE_URL } from "../../utils";
import { authSchema } from "./schemas";
import axios from "axios";
import { useFormik } from "formik";

interface IProps {
  action: () => void;
  close: () => void;
  forgot: () => void;
}

const SignIn = ({ action, close, forgot }: IProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: authSchema,
      onSubmit: async (values) => {
        setLoading(true);
        try {
          const res = await axios.post(BASE_URL + "/auth/login", values, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
          dispatch(setAuthToken(res?.data?.accessToken));
          dispatch(setCredit(res?.data?._doc?.credit));
          close();
        } catch (e) {
          toast.error(e.response.data.msg);
        }
        setLoading(false);
      },
    });

  return (
    <>
      <h2>Sign In to Gamerhub</h2>
      <div className="container">
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
              showError={errors.username && touched.username}
            />

            <Input
              name="password"
              placeholder="Password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              showError={errors.password && touched.password}
            />

            <p
              onClick={forgot}
              style={{ textAlign: "left", width: "100%", cursor: "pointer" }}
            >
              Forgot Password?
            </p>
          </FormInputWrapper>
          <Button loading={loading} onClick={() => handleSubmit()}>
            Sign In
          </Button>
          <CheckboxWrapper>
            <p>
              {"Don't have an account "}
              <span onClick={action}>Create an Account</span>
            </p>
          </CheckboxWrapper>
        </SignUpFormWrapper>
      </div>
    </>
  );
};

export default SignIn;
