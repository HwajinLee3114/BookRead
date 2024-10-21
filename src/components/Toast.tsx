import React from "react";

interface ToastProp {
  msg: string;
  onClick?: () => void;
}

const Toast: React.FC<ToastProp> = ({ msg, onClick }) => {
  return <div onClick={onClick}>{msg}</div>;
};

export default Toast;
