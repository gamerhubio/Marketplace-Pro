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

interface IProps {
  action: () => void;
  close: () => void;
}




const SignUp = ({ action, close } : IProps) => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [agreement, setAgreement] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    //if (address) {
    const data = {
      email,
      username,
      wallets: [""],
      password: pwd,
    };
    console.log(agreement);
    setLoading(true)

    try {
      const res = await authRequest().post(BASE_URL + "/auth/register", data)
      console.log(res.data.accessToken)
      dispatch(setAuthToken(res?.data?.accessToken))
      dispatch(setNewAcct(true))
      dispatch(setCredit(res?.data?._doc?.credit))
      close()
    } catch (e) {
      toast.error(e.response.data.msg)
    } finally {
      setLoading(false)
    }
  
  };

  function handleChecked(e: React.ChangeEvent<HTMLInputElement>): void {
    setAgreement(e.target.checked);
  }

  return (
    <>
        <h2>Create a Gamerhub account</h2>
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
                    placeholder="Email"
                    value={email}
                    type="email"
                    //@ts-expect-error
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                    placeholder="Password"
                    type="password"
                    value={pwd}
                    //@ts-expect-error
                    onChange={(e) => setPwd(e.target.value)}
                    />
                </FormInputWrapper>
                {(!email || !username || !agreement || !pwd) && (
                    <Button disabled>Create Account</Button>
                )}

                {email && username && agreement && pwd && (
                    <Button loading={loading} onClick={handleSubmit}>Create Account</Button>
                )}

                <CheckboxWrapper>
                    <p>
                    {"Already have an account "}
                        <span onClick={action}>
                            Sign In
                        </span>
                    </p>
                </CheckboxWrapper>

                <CheckboxWrapper htmlFor="checkbox">
                    <input
                    type="checkbox"
                    id="checkbox"
                    onChange={(e) => handleChecked(e)}
                    />
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