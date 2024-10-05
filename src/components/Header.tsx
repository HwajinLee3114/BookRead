import Link from 'next/link';

const Header: React.FC = () => {
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
    </header>
  );
};

export default Header;
