import { FormEvent, useState } from "react";
import { Button, Input } from "../../components";
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

const SignIn = ({ action, close } : IProps) => {

  const dispatch = useDispatch()

  const [username, setUsername] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true)

    const data = { username, password: pwd, };

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
      <h2>Sign In to Gamerhub</h2>
      <div className="container">
        <SignUpFormWrapper>
          <FormInputWrapper>
            <Input
              placeholder="Username"
              value={username}
              //@ts-expect-error
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={pwd}
              //@ts-expect-error
              onChange={(e) => setPwd(e.target.value)}
            />
          </FormInputWrapper>
          <Button loading={loading} onClick={handleSubmit}>Sign In</Button>
          <CheckboxWrapper>
            <p>
              {"Don't have an account "}
              <span onClick={action}>
                Create an Account
              </span>
            </p>
          </CheckboxWrapper>
        </SignUpFormWrapper>
      </div>
    </>
  );
};


export default SignIn