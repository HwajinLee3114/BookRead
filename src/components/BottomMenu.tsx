// src/components/BottomMenu.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomMenu: React.FC = () => {
  const currentPath = usePathname(); // 현재 경로 가져오기

  const menuItems = [
    { href: "/calendar", label: "캘린더" },
    { href: "/", label: "홈" },
    { href: "/book", label: "커뮤니티" },
    { href: "/mypage", label: "마이페이지" },
  ];

  return (
    <div className="g_layout_bottom_menu">
      {menuItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={currentPath === href ? "active" : ""}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default BottomMenu;
