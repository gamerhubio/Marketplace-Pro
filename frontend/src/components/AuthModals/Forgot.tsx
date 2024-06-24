import { FormEvent, useState } from "react";
import { Button, Input } from "..";
import {
  CheckboxWrapper,
  FormInputWrapper,
  SignUpFormWrapper,
} from "../../pages/app/signup/styles";
import { login } from "../../scripts";
import { toast } from "react-toastify";
import useAuthState from "../../hooks/useAuthState";
import { useDispatch } from "react-redux";
import { setAuthToken, setCredit, setUserData } from "../../store/slices/authSlice";
import { authRequest, BASE_URL } from "../../utils";

interface IProps {
  action: () => void;
  close: () => void;
}

const Forgot = ({ action, close } : IProps) => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true)

    const data = { email };

    try {
      const res = await authRequest().post(BASE_URL + "/auth/login", data)
      dispatch(setAuthToken(res?.data?.accessToken))
      dispatch(setCredit(res?.data?._doc?.credit))
      close()
    } catch (e) {
      toast.error(e.response.data.msg)
    } finally {
      setLoading(false)
    }

  };

  return (
    <>
      <h2>Forgot Password</h2>
      <div className="container">
        <SignUpFormWrapper>
          <FormInputWrapper>
            <Input
              placeholder="Email"
              value={email}
              type="email"
              //@ts-expect-error
              onChange={(e) => setEmail(e.target.value)}
            />

          </FormInputWrapper>
          <Button loading={loading} onClick={handleSubmit}>Send Reset Link</Button>
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