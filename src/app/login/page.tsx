import React from "react";
import LoginForm from "./LoginForm";
import Image from "next/image";

const LoginPage: React.FC = () => {
  return (
    <div className="g_main_content center">
      <Image 
          src="/img/logo.png" 
          alt="로고" 
          width={217}
          height={36}
          objectFit="contain"
        />
      <LoginForm />

      <div className="g_flex gap_10 mgb_1r">
        <label className="g_label small g_pointer" htmlFor="signup">
          회원가입
        </label>/
        <label className="g_label small g_pointer" htmlFor="password-recovery">
          비밀번호 찾기
        </label>
      </div>

      <div className="g_flex gap_10">
        <button className="g_btn">카카오 로그인</button>
        <button className="g_btn">네이버 로그인</button>
        <button className="g_btn">애플 로그인</button>
      </div>
    </div>
  );
};

export default LoginPage;
