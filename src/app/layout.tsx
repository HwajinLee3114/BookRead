// src/app/layout.tsx
"use client"; // 클라이언트 컴포넌트로 설정

import React from 'react';
import './styles/reset.css';
import './styles/comn.css';
import './styles/layout.css';

import BottomMenu from '@/components/BottomMenu';
import { usePathname } from 'next/navigation'; // 현재 경로 가져오기

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const excludedPaths = ['/login'];

  const isExcludedPage = excludedPaths.includes(pathname);

  return (
    <html lang="ko">
      <head>
        <title>BookRead</title>
        <meta name="description" content="BookRead application" />
      </head>
      <body>
        {children}
        {!isExcludedPage && <BottomMenu />}
      </body>
    </html>
  );
};

export default RootLayout;
