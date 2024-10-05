import React from 'react';
import Layout from '@/components/Layout';

const HomePage = () => {
  return (
    <Layout isLoggedIn={false}>
      <h1>홈페이지</h1>
      <p>환영합니다!</p>
    </Layout>
  );
};

export default HomePage;