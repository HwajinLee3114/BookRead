"use client"; // 클라이언트 컴포넌트로 설정

import React, { useState } from "react";
import { validateInput } from "@/utils/comn";

const JoinForm: React.FC = () => {
  const [nick, setNick] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  //   const [passwordError, setPasswordError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "nickname") {
      setNick(value);
    }

    if (name === "email") {
      setEmail(value);
      const { isValid, errorMessage } = validateInput(name, value);
      setEmailError(isValid ? "" : errorMessage || "");
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

    console.log("회원가입 시도:", JSON.stringify(loginData));
    // API 요청을 통해 로그인 처리
  };

  return (
    <div className="g_form_container mgt_1r">
      <label className="g_label" htmlFor="email">
        닉네임
      </label>
      <div className="g_input_wrap">
        <input
          type="text"
          value={nick}
          name="nickname"
          onChange={handleChange}
          placeholder="닉네임을 입력하세요"
          required
          className="g_input"
        />
        <button className="g_btn check">중복확인</button>
      </div>
      <p className="g_invalid">중복된 닉네임 입니다.</p>

      <label className="g_label" htmlFor="email">
        이메일
      </label>
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
      <p className="g_invalid">비밀번호는 영문, 숫자, 특수문자 포함 8자 이상입니다.</p>

      <label htmlFor="password" className="g_label mgt_1r">
        비밀번호 확인
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
      <p className="g_invalid">비밀번호가 일치하지 않습니다.</p>

      <button type="button" onClick={handleLogin} className="g_btn mgt_1r">
        회원가입
      </button>
    </div>
  );
};

export default JoinForm;
