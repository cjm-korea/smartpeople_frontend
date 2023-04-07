import { parse } from 'cookie';

export default function handler(req, res) {
  // 쿠키 값 가져오기
  const cookies = parse(req.headers.get('set-cookie') || '');
  const myCookie = cookies.myCookie;

  console.log(myCookie);
  // 쿠키 값 로직 처리
  if (myCookie === 'someValue') {
    // myCookie 값이 'someValue'인 경우 처리 로직
  } else {
    // myCookie 값이 'someValue'가 아닌 경우 처리 로직
  }
}