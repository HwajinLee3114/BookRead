"use client";

import React, { useState } from "react";
import { validateField } from "@/utils/comn";
import InputField from "@/components/InputField";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";

const JoinForm: React.FC = () => {
  const [nickname, setNickname] = useState<string>("");
  const [isDupl, setIsDupl] = useState<boolean>(false); // 닉네임 중복 여부
  const [duplMsg, setDuplMsg] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRePassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [repasswordError, setRePasswordError] = useState<string>("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "nickname") {
      setNickname(value);
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

  const handleDuplicateCheck = async () => {
    const { data, error } = await supabase
      .from("member")
      .select("*")
      .ilike("nickname", `%${nickname}%`);

    if (error) {
      alert(error.message);
      return;
    }

    const dataLength = data.length || 0;

    if (dataLength === 0) {
      setDuplMsg("사용 가능한 닉네임입니다.");
    } else {
      setIsDupl(true);
      setDuplMsg("이미 사용 중인 닉네임입니다.");
    }
  };

  const handleJoin = async () => {
    console.info('join data',{
      email,
      password,
      options: {
        data: {
          nickname: nickname,
          sns_type: null,
        },
      },
    })
    const { data, error: joinError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname: nickname,
          sns_type: null,
        },
      },
    });

    if (joinError) {
      console.error("회원가입 중 오류가 발생했습니다.", joinError.message);
      return;
    }

    const user = data.user;
    if (user) {
      console.info("회원가입 완료", user);
      alert('회원가입이 완료되었습니다.');
      router.push('/login');
    }
  };

  return (
    <div className="g_form_container mgt_1r">
      <InputField
        label="닉네임"
        type="text"
        value={nickname}
        name="nickname"
        placeholder="닉네임을 입력하세요"
        onChange={handleChange}
        buttonLabel="중복확인"
        onButtonClick={handleDuplicateCheck}
        disabled={!isDupl && !!duplMsg} // !!duplMsg로 boolean 변환
      />
      {isDupl && duplMsg && <p className="g_invalid">{duplMsg}</p>}
      {!isDupl && duplMsg && <p className="g_valid">{duplMsg}</p>}

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

      <button type="button" onClick={handleJoin} className="g_btn mgt_1r">
        회원가입
      </button>
    </div>
  );
};

export default JoinForm;
