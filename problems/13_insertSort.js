// 문제
// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 정수
// arr.length는 1,000 이하

// 출력
// number 타입을 요소로 갖는 배열을 리턴해야 합니다.
// 배열의 요소는 오름차순으로 정렬되어야 합니다.
// arr[i] <= arr[j] (i < j)

// 주의사항
// 삽입 정렬을 구현해야 합니다.
// arr.sort 사용은 금지됩니다.
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.

// 입출력 예시
// let output = insertionSort([3, 1, 21]);
// console.log(output); // --> [1, 3, 21]
// Advanced
// insertionSort 함수의 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 기준으로 요소들을 정렬해 보세요.

const insertionSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  for(let i = 1; i < arr.length; i++){// 모든 배열의 두번째 숫자부터 끝까지 순회
    let num = arr[i]; // 요소 위치 지정
    let index = i - 1; // 요소 앞 위치 지정
  
    while(index >= 0 && arr[index] > num){ // 요소가 요소 앞 숫자보다 작으면 계속 반복문
      arr[index + 1] = arr[index]; // 다음 위치에 요소 앞 숫자 넣기
      index--; // 인덱스를 한칸 앞으로 당기기
    }
    arr[index + 1] = num; // 요소가 요소 앞 숫자와 같거나 크면 요소 다음에 숫자 넣기
  }
  return arr;
};
