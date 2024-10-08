import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserInfo {
    email: string;
    nickname: string;
}

interface AuthState {
    isLoggedIn: boolean;
    userInfo: UserInfo | null;
    errorMessage: string;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

// API 호출을 위한 더미 함수
const gf_login = async (email: string, password: string): Promise<UserInfo | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (email === "test@naver.com" && password === "qwer1234!") {
                resolve({ email, nickname: "hjlee" }); // 성공적인 로그인
            } else {
                resolve(null); // 로그인 실패
            }
        }, 1000);

        /*
        try {
          const response = await axios.post('/api/login', {
            email,
            password,
          });
          
          if (response.data.success) {
            // API가 성공적으로 로그인한 경우
            const { email, nickname } = response.data.user;
            resolve({ email, nickname });
          } else {
            // 로그인 실패한 경우
            resolve(null);
          }
        } catch (error) {
          console.error("로그인 중 오류 발생:", error);
          resolve(null);
        }
        */
    });
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
