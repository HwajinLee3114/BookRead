"use client";

import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
// import { getSession } from "@/lib/auth"; // getSession을 import

const HomePage = () => {
  const userInfo = useAuthStore((state) => state.userInfo);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    // 쿠키를 통해 로그인 상태 확인
    // const session = getSession();

    if (!isLoggedIn) {
    // if (!isLoggedIn || !session) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Layout>
      <div>sdfdf</div>
      <h1>{userInfo?.nickname} 님 어서오세요</h1>
      <p>{isLoggedIn ? "로그인 되었습니다." : "로그인 해주세요"}</p>
    </Layout>
  );
};

export default HomePage;
