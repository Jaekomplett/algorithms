// 문제
// 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// string 타입을 요소로 갖는 배열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 각 문자열의 길이는 다양합니다.
// 각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.
// 입출력 예시
// let input = [
//   //
//   'hello',
//   'wolrd',
// ];
// let output = readVertically(input);
// console.log(output); // --> 'hweolllrod'

// input = [
//   //
//   'hi',
//   'wolrd',
// ];
// output = readVertically(input);
// console.log(output); // --> 'hwiolrd'

// method. 1
function readVertically(arr) {
  // code goes here

  /* 
    1.배열을 입력받는다.
    2.배열의 요소를 세로로 읽는다.
      - 세로로 읽는다?
      - 규칙 : arr[0][0] + arr[1][0] -> arr[0][1] + arr[1][1] -> arr[0][2] + arr[1][2]
      - 첫 번째 인수 범위는 arr의 길이까지, 두 번째 인수는 배열의 요소 중 가장 긴 길이
      - 두 번째 인수 : 배열 요소 중 가장 긴 길이를 구한다.  
      - 이중 for문을 이용해 외부 포문에선 두번째 요소를 기준으로 돌고
      - 내부 for문에선 첫 번째 요소를 기준으로 돈다.
      - 접근한 각 요소를 result에 할당한다.
    3.result를 리턴한다.
  */
   let maxLength = 0;
   for(let i = 0; i < arr.length; i++){
     if(maxLength < arr[i].length){
       maxLength = arr[i].length;
     }
   }

   let result = '';
   for(let i = 0; i < maxLength; i++){
     for(let j = 0; j < arr.length; j++){
       if(arr[j][i] === undefined){
         continue;
       }
       result += arr[j][i];
     }
   }
   return result;
   
   
}

// method. 2
function readVertically(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (temp.length === j) {
        temp.push(str[j]);
      } else {
        temp[j] = temp[j] + str[j];
      }
    }
  }

  let result = '';
  for (let i = 0; i < temp.length; i++) {
    result = result + temp[i];
  }

  return result;
}