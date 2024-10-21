"use client";

import React from "react";
import Layout from "@/components/Layout";
import useAuthStore from "@/store/authStore";

const HomePage = () => {
  const { isLoggedIn } = useAuthStore();
  
  if (!isLoggedIn) {
    return null;
  }

  return (
    <Layout>
      <div>sdfdf</div>
    </Layout>
  );
};

export default HomePage;
