// 문제
// 세로 길이 2, 가로 길이 n인 2 x n 보드가 있습니다. 2 x 1 크기의 타일을 가지고 이 보드를 채우는 모든 경우의 수를 리턴해야 합니다.

// 입력
// 인자 1 : n
// number 타입의 1 이상의 자연수
// 출력
// number 타입을 리턴해야 합니다.
// 주의사항
// 타일을 가로, 세로 어느 방향으로 놓아도 상관없습니다. (입출력 예시 참고)
// 입출력 예시
// let output = tiling(2);
// console.log(output); // --> 2

// output = tiling(4);
// console.log(output); // --> 5

/* 
2 x 4 보드에 타일을 놓는 방법은 5가지
각 타일을 a, b, c, d로 구분

2 | a b c d
1 | a b c d 
------------

2 | a a c c
1 | b b d d 
------------

2 | a b c c
1 | a b d d 
------------

2 | a a c d
1 | b b c d 
------------

2 | a b b d
1 | a c c d 
------------
*/

// Advanced
// 타일링 문제를 해결하는 효율적인 알고리즘(O(N))이 존재합니다. 반드시 직접 문제를 해결하시면서 입력의 크기에 따라 어떻게 달라지는지 혹은 어떻게 반복되는지 관찰하시기 바랍니다.

let tiling = function (n) {
  // 인덱스를 직관적으로 관리하기 위해
  // 앞 부분을 의미없는 데이터(dummy)로 채운다.
  const memo = [0, 1, 2];

  // 재귀를 위한 보조 함수(auxiliary function)을 선언)
  const aux = (size) => {
    // 이미 해결한 문제는 풀지 않는다.
    if (memo[size] !== undefined) return memo[size];
    if (size <= 2) return memo[n];
    memo[size] = aux(size - 1) + aux(size - 2);
    return memo[size];
  };
  return aux(n);
};