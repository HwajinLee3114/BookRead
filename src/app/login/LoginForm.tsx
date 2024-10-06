"use client"; // 클라이언트 컴포넌트로 설정

import React, { useState } from "react";
import { validateField } from "@/utils/comn";
import InputField from "@/components/InputField";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      const { isValid, errorMessage } = validateField(name, value);
      setEmailError(isValid ? "" : errorMessage || "");
    }

    if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    const loginData = {
      email,
      password,
    };

    console.log("로그인 시도:", JSON.stringify(loginData));
    // API 요청을 통해 로그인 처리
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
      />

      <p className="g_invalid">로그인 정보가 올바르지 않습니다.</p>

      <button type="button" onClick={handleLogin} className="g_btn mgt_1r">
        로그인
      </button>
    </div>
  );
};

export default LoginForm;
