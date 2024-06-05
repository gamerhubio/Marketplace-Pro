import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import {
  CheckboxWrapper,
  FormInputWrapper,
  SignUpFormWrapper,
} from "../../pages/app/signup/styles";
import { login } from "../../scripts";
import { setGlobalState } from "../../store";
import { toast } from "react-toastify";

interface IProps {
  action: () => void;
  close: () => void;
}

const SignIn = ({ action, close } : IProps) => {

  const [username, setUsername] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true)

    const data = {
      username,
      password: pwd,
    };
    login(data)
      .then((data) => {
        //@ts-ignore
        if (!data.error && data) {
          console.log("🚀 ~ .then ~ data:", data);
          setGlobalState("isAuthenticated", true);
          // if (!address) {
          //   router("/app/wallet-connect");
          // } else {
          //   //check if user is subscribed
          //   checkSubscriptionState();
          // }
          setLoading(false)
          close()
        }
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err.response.data.msg)
        console.error(err);
      });
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