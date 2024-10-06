"use client"; // 클라이언트 컴포넌트로 설정

import React, { useState } from "react";
import { validateInput } from "@/utils/comn";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
//   const [passwordError, setPasswordError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      const { isValid, errorMessage } = validateInput(name, value);
      setEmailError(isValid ? "" : errorMessage || '');
    }

    if (name === "password") {
      setPassword(value);
    //   const { isValid, errorMessage } = validateInput(name, value);
    //   setPasswordError(isValid ? "" : errorMessage || '');
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
      <label className="g_label" htmlFor="email">이메일</label>
      <input
        type="email"
        value={email}
        name="email"
        onChange={handleChange}
        placeholder="이메일을 입력하세요"
        required
        className="g_input"
      />
      {emailError && (
        <p className="g_invalid">유효한 이메일 주소를 입력해 주세요.</p>
      )}

      <label htmlFor="password" className="g_label mgt_1r">
        비밀번호
      </label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleChange}
        placeholder="비밀번호를 입력하세요"
        required
        className="g_input"
      />
      <p className="g_invalid">로그인 정보가 올바르지 않습니다.</p>

      <button
        type="button"
        onClick={handleLogin}
        className="g_btn mgt_1r"
      >
        로그인
      </button>
    </div>
  );
};

export default LoginForm;
