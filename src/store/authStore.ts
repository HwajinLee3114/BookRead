import { supabase } from "@/utils/supabase";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserInfo {
    email: string;
    nickname?: string;
}

interface AuthState {
    isLoggedIn: boolean;
    userInfo: UserInfo | null;
    errorMessage: string;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const gf_login = async (email: string, password: string) => {

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error('로그인 중 오류가 발생했습니다:', error.message);
        return null;
    }

    if (data.user) {
        const userEmail = data.user.email;

        return {
            email: userEmail as string,
            nickname: data.user.user_metadata?.nickname || undefined,
        };
    }

    return null
};

const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isLoggedIn: false,
            userInfo: null,
            errorMessage: '',
            login: async (email, password) => {
                const user = await gf_login(email, password);
                if (user) {
                    set({ isLoggedIn: true, userInfo: user, errorMessage: '' });
                } else {
                    set({ isLoggedIn: false, userInfo: null, errorMessage: '로그인 정보가 올바르지 않습니다.' });
                }
            },
            logout: () => set({ isLoggedIn: false, userInfo: null, errorMessage: '' }),
        }),
        {
            name: 'loginUserInfo', // 저장할 키
            storage: createJSONStorage(() => localStorage),
        }
    )
);
export default useAuthStore;
