import React from "react";
import LoginForm from "./LoginForm";
import Image from "next/image";

import "../styles/reset.css";
import "../styles/comn.css";
import "../styles/login.css";

const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <Image 
          src="/img/logo.png" 
          alt="로고" 
          width={217}
          height={36}
          objectFit="contain"
        />
      <LoginForm />
      <div className="dflex gap10">
        <button className="g_btn">카카오 로그인</button>
        <button className="g_btn">네이버 로그인</button>
        <button className="g_btn">애플 로그인</button>
      </div>
      <div className="dflex gap10 mgt1rem">
        <label className="" htmlFor="signup">
          회원가입
        </label> /
        <label className="" htmlFor="password-recovery">
          패스워드 찾기
        </label>
      </div>
    </div>
  );
};

export default LoginPage;
