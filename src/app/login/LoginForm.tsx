"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import useAuthStore from "@/store/authStore";
import { validateField } from "@/utils/comn";
import InputField from "@/components/InputField";
import useToastStore from "@/store/toastStore";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [logining, setLogining] = useState(false);

  const errorMessage = useAuthStore((state) => state.errorMessage);
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const addToast = useToastStore((state) => state.addToast);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLogining(false);

    if (name === "email") {
      setEmail(value);
      const { isValid, errorMessage } = validateField(name, value);
      setEmailError(isValid ? "" : errorMessage || "");
    }

    if (name === "password") {
      setPassword(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      lf_login();
    }
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    lf_login();
  };

  const lf_login = async () => {
    if (!email || !password) {
      addToast("로그인 정보를 입력해 주세요.");
      return false;
    }

    setLogining(true);

    await login(email, password);

    const currentState = useAuthStore.getState();

    setLogining(false);
    if (currentState.isLoggedIn) {
      addToast("로그인에 성공하였습니다.");
      router.push("/");
    } else {
      addToast(currentState.errorMessage);
    }
  };

  return (
    <div className="g_form_container mgt_1r">
      <InputField
        label="이메일"
        type="email"
        value={email}
        name="email"
        placeholder="이메일을 입력하세요"
        onChange={handleChange}
        errorMessage={emailError}
      />

      <InputField
        label="비밀번호"
        type="password"
        value={password}
        name="password"
        placeholder="비밀번호를 입력하세요"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {/* {errorMessage && logining && <p className="g_invalid">{errorMessage}</p>} */}

      <button type="button" className="g_btn mgt_1r" onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
};

export default LoginForm;
