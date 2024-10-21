import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  //   const pathname = usePathname();
  return (
    <>
      <Header />

      <div className="g_main_content">
        <main>{children}</main>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
