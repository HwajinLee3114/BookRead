import Link from "next/link";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const { isLoggedIn, userInfo, logout } = useAuthStore();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    localStorage.removeItem("loginUserInfo");
    alert("로그아웃되었습니다");
    router.push("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Logo</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contract">Contact</Link>
          </li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <div className="g_flex">
          <p>{userInfo?.nickname}님, 환영합니다!</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </header>
  );
};

export default Header;
