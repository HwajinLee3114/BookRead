"use client";

import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const userInfo = useAuthStore((state) => state.userInfo);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  return (
    <Layout>
      <div>sdfdf</div>
      <h1>{userInfo?.nickname} 님 어서오세요</h1>
      <p>{isLoggedIn ? "로그인 되었습니다." : "로그인 해주세요"}</p>
    </Layout>
  );
};

export default HomePage;
