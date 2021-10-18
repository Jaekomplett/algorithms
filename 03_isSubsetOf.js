const isSubsetOf = function (base, sample) {
  // sample이 base의 부분집합인지 true or false 리턴
  // 
  // Array.from()
  // let base = [1, 2, 3, 4, 5];
  // let sample = [1, 3];
  let newArr = Array.from(new Set(base.concat(sample)))
  // new Set() 메소드는 중복값을 제외한 값을 객체로 변환해 저장한다.
  // Array.from() 메소드는

  // base.concat(sample) : [1,2,3,4,5,1,3] 
  // new Set(base.concat(sample)) : {1,2,3,4,5}
  // Array.from(new Set(base.concat(sample))) : [1,2,3,4,5]
  
  if(newArr.length === base.length) {return true;}
  else {return false;}
};

// other method 1.
  // let checkArr = Array.from(new Set(base.concat(sample)))
  // return checkArr.length === base.length;