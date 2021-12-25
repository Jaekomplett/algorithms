// 문제
// 수를 입력받아 홀수인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 함수 isOdd는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// 0은 짝수로 간주합니다.
// 입출력 예시
// let output = isOdd(17);
// console.log(output); // --> true

// output = isOdd(-8);
// console.log(output); // --> false


function isOdd(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 10부터 시작? -2 === 0 true 
  // 아니면 false
  if(num === 0) return false; // 짝수
  if(num === 1) return true; // 홀수
  // (1) Method
    // 1.  num 인자를 마이너스(-)로 받으면 
    // 2. --num 플러스(+) 인자로 치환
  // if(num < 0) num = -num
  // return isOdd(num - 2);

  // (2) Method
  if(num > 0) { // 0보다 크면 양수 출력
    return isOdd(num - 2); // 10 - 2
  } else {
    return isOdd(-num); // 0보다 작아서 음수이면 양수로 치환
  }


}
