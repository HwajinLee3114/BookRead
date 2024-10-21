"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import useAuthStore from "@/store/authStore";
// import { useEffect } from "react";

const Header: React.FC = () => {
  const { isLoggedIn, userInfo } = useAuthStore();
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const lf_logout = () => {
    logout();

    const currentState = useAuthStore.getState();

    if (currentState.isLoggedIn) {
      localStorage.removeItem("loginUserInfo");
      alert("로그아웃되었습니다");

      router.push("/login");
    } else {
      alert("로그아웃 중 오류가 발생했습니다.");
    }
  };

  return (
    <header className="flex_js_between">
      <div className="logo ver_align">
        <Link href="/">
          <img src="/img/logo.png" alt="로고" className="h-5 object-contain" />
        </Link>
      </div>
      {/* <nav className="nav ver_align">
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contract">Contact</Link>
          </li>
        </ul>
      </nav> */}
      {isLoggedIn ? (
        <div className="g_flex gap_10">
          <p>{userInfo?.nickname}</p>
          <img
            src="/img/sample.jpg"
            alt="profile"
            className="w-9 h-9 rounded-full object-cover"
            onClick={() => router.push("/book")}
          />

          {/* <Image
            src="/img/sample.jpg"
            alt="profile"
            width={28}
            height={28}
            className="rounded-full"
            onClick={() => router.push("/book")}
            priority
          /> */}
          <button className="g_btn" onClick={() => lf_logout()}>
            로그아웃
          </button>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </header>
  );
};

export default Header;
