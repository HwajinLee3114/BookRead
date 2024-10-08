"use client";

import React, { useState } from "react";
import { validateField } from "@/utils/comn";
import InputField from "@/components/InputField";

const JoinForm: React.FC = () => {
  const [nick, setNick] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRePassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [repasswordError, setRePasswordError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "nickname") {
      setNick(value);
      // 닉네임 검증 로직 추가
    }

    if (name === "email") {
      setEmail(value);
      const { isValid, errorMessage } = validateField(name, value);
      setEmailError(isValid ? "" : errorMessage || "");
    }

    if (name === "password") {
      setPassword(value);
      const { isValid, errorMessage } = validateField(name, value);
      setPasswordError(isValid ? "" : errorMessage || "");
    }

    if (name === "repassword") {
      setRePassword(value);
      const { isValid, errorMessage } = validateField(name, value, password);
      setRePasswordError(isValid ? "" : errorMessage || "");
    }
  };

  const handleDuplicateCheck = () => {};

  const handleLogin = async () => {
    const loginData = {
      email,
      password,
    };

    console.log("회원가입 시도:", JSON.stringify(loginData));
    // API 요청을 통해 로그인 처리
  };

  return (
    <div className="g_form_container mgt_1r">
      <InputField
        label="닉네임"
        type="text"
        value={nick}
        name="nickname"
        placeholder="닉네임을 입력하세요"
        onChange={handleChange}
        buttonLabel="중복확인"
        onButtonClick={handleDuplicateCheck}
      />

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
        errorMessage={passwordError}
      />

      <InputField
        label="비밀번호 확인"
        type="password"
        value={repassword}
        name="repassword"
        placeholder="비밀번호를 입력하세요"
        onChange={handleChange}
        errorMessage={repasswordError}
      />

      <button type="button" onClick={() => handleLogin} className="g_btn mgt_1r">
        회원가입
      </button>
    </div>
  );
};

export default JoinForm;
