import { parseCookies } from "nookies"; // 쿠키를 파싱하기 위한 라이브러리

export const getSession = () => {
  const cookies = parseCookies();
  const token = cookies.token; // 예를 들어, JWT 토큰이 쿠키에 저장된 경우

  // 실제로는 JWT를 검증하고 유저 정보를 반환하는 로직이 필요
  if (token) {
    // 토큰이 유효한 경우, 사용자 정보를 반환
    return { nickname: "유저이름" }; // 실제 유저 정보를 가져오는 로직 추가
  }

  return null; // 로그인하지 않은 경우
};
