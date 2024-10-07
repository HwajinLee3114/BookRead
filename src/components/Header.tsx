import Link from 'next/link';
import useAuthStore from '@/store/authStore';

const Header: React.FC = () => {
  const { isLoggedIn, userInfo, logout} = useAuthStore();

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Logo</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contract">Contact</Link></li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <div className='g_flex'>
          <p>{userInfo?.nickname}님, 환영합니다!</p>
          <button onClick={() => logout}>로그아웃</button>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </header>
  );
};

export default Header;
