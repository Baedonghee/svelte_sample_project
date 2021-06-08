export function isEmpty(val) {
  return val.trim().length === 0;
}

export function isValidEmail(val) {
  // 정규식 우선 귀찮음... ㅜㅜ
  return val.includes("@");
}
