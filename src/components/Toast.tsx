import React from "react";

interface ToastProp {
  msg: string;
  onClick?: () => void;
}

const Toast: React.FC<ToastProp> = ({ msg, onClick }) => {
  return (
    <div
      className="absolute bottom-12 right-5 bg-teal-300 py-2 px-5 rounded-md opacity-70"
      onClick={onClick}
    >
      {msg}
    </div>
  );
};

export default Toast;
