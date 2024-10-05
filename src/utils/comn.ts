export type ValidationResult = {
    isValid: boolean;
    errorMessage?: string;
  };
  
  export const validateInput = (name: string, value: string): ValidationResult => {
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return { isValid: false, errorMessage: '유효한 이메일 주소를 입력하세요.' };
        }
        break;
  
      case 'password':
        if (value.length < 6) {
          return { isValid: false, errorMessage: '비밀번호는 최소 6자 이상이어야 합니다.' };
        }
        break;
  
      // 다른 항목에 대한 유효성 체크 추가 가능
      default:
        break;
    }
    
    return { isValid: true };
  };