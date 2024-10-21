import Link from "next/link";
import Image from "next/image";
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
          <Image
            src="/img/logo.png"
            alt="로고"
            width={85}
            height={15}
            style={{ objectFit: "contain" }}
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
          <Image
            src="/img/sample.jpg"
            alt="로고"
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
            onClick={() => router.push("/book")}
            priority
          />
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
