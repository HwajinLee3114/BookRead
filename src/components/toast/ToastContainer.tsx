import React from "react";

import useToastStore from "@/store/toastStore";

import Toast from "./Toast";

const ToastContainer: React.FC = () => {
  const { toasts, delToast } = useToastStore();

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          msg={toast.msg}
          onClick={() => delToast(toast.id)} // 클릭 시 Toast 삭제
        />
      ))}
    </div>
  );
};

export default ToastContainer;
