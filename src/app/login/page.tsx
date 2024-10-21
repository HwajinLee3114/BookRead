"use client";

import React from "react";
import LoginForm from "./LoginForm";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const handleMovePage = (page: string) => {
    router.push(page);
  };

  const handleSnsLogin = (loginType: string) => {
    console.log(loginType)
  }

  return (
    <div className="g_main_content center">
      <Image
        src="/img/logo.png"
        alt="로고"
        width={217}
        height={36}
        style={{ objectFit: 'contain' }}
        priority
      />
      <LoginForm />

      <div className="g_flex gap_10 mgb_1r">
        <label
          className="g_label small g_pointer"
          htmlFor="signup"
          onClick={() => handleMovePage("/join")}
        >
          회원가입
        </label>
        /
        <label className="g_label small g_pointer" htmlFor="password-recovery">
          비밀번호 찾기
        </label>
      </div>

      <div className="g_flex gap_10">
        <Image
          src="/img/kakao.png"
          alt="카카오 로그인"
          width={40}
          height={40}
          style={{ objectFit: 'contain' }}
          onClick={() => handleSnsLogin('kakao')}
        />
        <Image
          src="/img/naver.png"
          alt="네이버 로그인"
          width={40}
          height={40}
          style={{ objectFit: 'contain' }}
          onClick={() => handleSnsLogin('naver')}
        />
        <Image
          src="/img/google.png"
          alt="구글 로그인"
          width={40}
          height={40}
          style={{ objectFit: 'contain' }}
          onClick={() => handleSnsLogin('google')}
        />
        <Image
          src="/img/ios.png"
          alt="애플 로그인"
          width={40}
          height={40}
          style={{ objectFit: 'contain' }}
          onClick={() => handleSnsLogin('ios')}
        />
      </div>
    </div>
  );
};

export default LoginPage;
