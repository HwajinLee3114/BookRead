import { create } from "zustand";

interface ToastProp {
  id: string;
  msg: string;
  // onclick?: () => void;
}

interface ToastStore {
  toasts: ToastProp[];
  addToast: (msg: string) => void;
  delToast: (id: string) => void;
}

const useToastStore = create<ToastStore>()((set) => ({
  toasts: [],
  addToast: (msg: string) => {
    const id = Date.now().toString();

    set((state) => ({
      toasts: [...state.toasts, { id, msg }],
    }));

    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((toast) => toast.id !== id),
      }));
    }, 2000);
  },
  delToast: (id: string) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));

export default useToastStore;
