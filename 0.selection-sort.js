// 1. 선택 정렬
let a = [10,15,2,7,8,1,9,19];
let result = [];

for (let i = 0; i < 8; i++){
  result.push(Math.min.apply(null, a)) // a 배열에서 가장 작은 값을 찾는다.
  a.splice(a.indexOf(Math.min.apply(null, a)),1) // 조건에 맞는 가장 첫 번째 인덱스를 반환하고, 존재하지 않으면 -1을 반환한다.
  console.log(a);
  console.log(result);
}




// 2. 삽입 정렬
let 입력값 = [3, 5, 19, 2, 66, 77, 32, 100, 1];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length; 
// 반복문에서 i < 입력값.length를 비교하게 되면 입력값이 하나씩 빠질 때마다, 배열의 길이가 계속 줄어들기 때문에 먼저 변수에 입력값.length를 저장해 준다.
console.log(배열의길이)

// 
function 삽입값이들어갈인덱스(정렬된배열, 삽입값){
  for (let i in 정렬된배열){
    if(삽입값 < 정렬된배열[i]) {
      return i;
    }
  }
  // 끝까지 다 순회했는데 들어갈 위치를 못 찾았다면 마지막에 위치한다.
  return 정렬된배열.length; 
}


for (let i = 0; i < 배열의길이; i += 1) {
  삽입값 = 입력값.shift(); // 맨 첫 번째 요소를 꺼내서 삽입 값에 저장.
  인덱스 = 삽입값이들어갈인덱스(정렬된배열, 삽입값)
  정렬된배열.splice(인덱스, 0, 삽입값)
  console.log(`인덱스 : ${인덱스}`)
  console.log(`정렬된배열 : ${정렬된배열}`)
}

