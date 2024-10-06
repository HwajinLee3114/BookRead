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
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordPattern.test(value)) {
          return { isValid: false, errorMessage: '비밀번호는 영문, 숫자, 특수문자를 포함하여 최소 8자 이상이어야 합니다.' };
        }
        break;

      // 다른 항목에 대한 유효성 체크 추가 가능
      default:
        break;
    }
    
    return { isValid: true };
  };