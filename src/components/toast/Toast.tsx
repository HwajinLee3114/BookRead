import React from "react";

interface ToastProp {
  msg: string;
  // bgcolor optional로 추가 고려
  onClick?: () => void;
}

const Toast: React.FC<ToastProp> = ({ msg, onClick }) => {
  return (
    <div
      // ${ toastVisible ? "translate-y-0" : "translate-y-full opacity-0" }
      className={`fixed top-14 right-4 bg-teal-500 opacity-80 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300 transform`}
      onClick={onClick}
    >
      {msg}
    </div>
  );
};

export default Toast;
