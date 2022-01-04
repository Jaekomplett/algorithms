// 문제
// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 있는 알파벳 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 단어는 공백으로 구분합니다.
// 연속된 공백이 존재할 수 있습니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 입출력 예시
// let output1 = letterCapitalize('hello world');
// console.log(output1); // "Hello World"
// let output2 = letterCapitalize('javascript  is sexy ');
// console.log(output2); // "Javascript  Is Sexy "

function letterCapitalize(str) {
  if (str === '') {
    return '';
  }
  let arr = str.split(' '); // 'javascript  is sexy '
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] !== '') {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1); // 0 다음 1번 순서부터
    }
  }
  return arr.join(' ');
}


// 빈 문자열이면 빈 문자열 리턴
// 변수에 공백을 포함한 문자열로 변환하는 메소드 할당 split(' ')
// arr 길이만큼 반복문 출력
// arr 단어가 빈 문자열이 아닐 때
// 각 단어[i]의 [0]번째를 대문자로 출력 str[i][0].toUpperCase()
// 대문자 출력한 단어 + 나머지 단어 출력
// 공백을 제외한 모든 요소 합치기

