import React, { useState } from "react";
import { InputWrapper } from "./styles";
import { IconPasswordView } from "../SVGs";

type InputProps = {
  type?: string;
  value?: string;
  placeholder?: string;
} & React.HTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  value,
  type = "text",
}) => {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <InputWrapper>
      <input
        type={type === "password" ? (isPassword ? type : "text") : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
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
  );
};
