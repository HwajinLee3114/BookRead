import React from "react";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
  isLoggedIn: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, isLoggedIn }) => {
//   const pathname = usePathname();
  return (
    <>
      {isLoggedIn ? <LoggedInHeader /> : <Header />}

      <div className="g_main_content">
        <main>{children}</main>
      </div>

      <Footer />
    </>
  );
};

const LoggedInHeader: React.FC = () => (
  <header>
    <nav>
      <span>로그인된 헤더</span>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Layout;
