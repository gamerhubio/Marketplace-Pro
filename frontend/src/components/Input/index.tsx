import { useState, InputHTMLAttributes } from "react";
import { ErrorWrapper, InputContainerWrapper, InputWrapper } from "./styles";
import { IconPasswordView } from "../SVGs";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  error?: string;
  showError?: boolean;
};

export const Input = ({onChange, placeholder, error, showError, value, type = "text", ...props} : InputProps) => {
  
  const [isPassword, setIsPassword] = useState(true);

  return (
    <InputContainerWrapper>

      <InputWrapper showError={showError}>
        <input
          type={type === "password" ? (isPassword ? type : "text") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          // ref={ref}
          {...props}/>

        {type === "password" && (
          <div
            onMouseDown={() => setIsPassword(false)}
            onMouseUp={() => setIsPassword(true)}
            onMouseLeave={() => setIsPassword(true)}
          >
            <IconPasswordView />
          </div>
        )}
      </InputWrapper>
        
      {
        showError && <ErrorWrapper>{error}</ErrorWrapper>
      }

    </InputContainerWrapper>
  );
};
