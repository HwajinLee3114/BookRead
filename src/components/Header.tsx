"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import useAuthStore from "@/store/authStore";
import useToastStore from "@/store/toastStore";
// import { useEffect } from "react";

const Header: React.FC = () => {
  const { isLoggedIn, userInfo } = useAuthStore();
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);
  const addToast = useToastStore((state) => state.addToast);

  const lf_logout = () => {
    logout();

    const currentState = useAuthStore.getState();

    if (currentState.isLoggedIn) {
      localStorage.removeItem("loginUserInfo");
      addToast("로그아웃되었습니다");

      router.push("/login");
    } else {
      addToast("로그아웃 중 오류가 발생했습니다.");
    }
  };

  return (
    <header className="flex_js_between">
      <div className="logo ver_align">
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="로고"
            width={100}
            height={15}
            style={{ objectFit: "contain" }}
            priority
          />
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
          <div className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/img/sample.jpg"
              alt="profile"
              width={28}
              height={28}
              className="rounded-full h-full w-full object-cover"
              onClick={() => router.push("/book")}
              priority
            />
          </div>
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
