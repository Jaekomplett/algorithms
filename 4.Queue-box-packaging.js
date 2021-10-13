// let Q = [];
// Q.push(a);
// Q.shift();

// Q.length;

// Q는 대기할 때 쓴다.
// Q가 시작하는 건 어떻게 알까?
// 끝나는 건 어떻게 알까?
// Q에 요소가 있냐? 없냐?

// Q에 요소가 아직 남아 있으면 큐는 끝난 게 아니다.

// 제일 앞에 있는 요소를 빼내서
// while(boxes.length > 0) {
  // 그 요소보다 큰지?
  
  // 그 요소보다 작은지?
// }

// 다 만들어졌으면, 그 카운트를 센 배열이 담긴 것들 중 가장 큰 것을 찾아 반환
// Math.max(...result);




function paveBox(boxes) {
  let answer = [];
  
  // boxes 배열이 0보다 클 때까지 반복합니다.
  while(boxes.length > 0){
      // 첫 번째 index보다 큰 요소의 index를 찾는다. 
      let finishIndex = boxes.findIndex(fn => boxes[0] < fn);
      
      // -1은 없음. 빈 배열 상태이다.
      if(finishIndex === -1){
          // 만약 찾지 못했다면 answer에 boxes 배열의 길이를 넣은 후, boxes 내부의 요소를 전부 삭제합니다.
          answer.push(boxes.length);
          boxes.splice(0, boxes.length); // (0 = 시작 index, 삭제하는 갯수)

      } else {
          // 만약 찾았다면, 해당 인덱스를 answer에 넣고, boxes에서 그만큼 제외합니다.
          answer.push(finishIndex); // [1]
          boxes.splice(0, finishIndex); // [3,7,5,2,1]
      }
  }

  // 결과물을 반환합니다.
  return Math.max(...answer);
}

