"use client";

import React, { useEffect, useRef } from "react";
import "./styles/reset.css";
import "./styles/comn.css";
import "./styles/layout.css";

import BottomMenu from "@/components/BottomMenu";
import { usePathname, useRouter } from "next/navigation"; // 현재 경로 가져오기
import useAuthStore from "@/store/authStore";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const excludedPaths = ["/login", "/join"];

  const isExcludedPage = excludedPaths.includes(pathname);
  const hasCheckedLogin = useRef(false);
  const tmpIsLoggedIn = useRef(false);

  useEffect(() => {
    const currentState = useAuthStore.getState();
    tmpIsLoggedIn.current = currentState.isLoggedIn;

    if (
      (!currentState.isLoggedIn && hasCheckedLogin.current) ||
      (currentState.isLoggedIn && hasCheckedLogin.current)
    )
      return;
    hasCheckedLogin.current = true;

    if (!isExcludedPage && !currentState.isLoggedIn) {
      alert("세션이 만료되었습니다. 다시 로그인해주세요.");
      router.push("/login");
    }
  }, [router, isExcludedPage]);

  return (
    <html lang="ko">
      <head>
        <title>BookRead</title>
        <meta name="description" content="BookRead application" />
      </head>
      <body>
        {children}
        {!isExcludedPage && tmpIsLoggedIn.current && <BottomMenu />}
      </body>
    </html>
  );
};

export default RootLayout;