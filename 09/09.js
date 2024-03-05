// 자바스크립트 데이터타입
// 기본타입 

// const , let 
// const=안바뀐다 , let =바뀐다 차이밖에 없다

let n1 = 10; //정수
let n2 = 10.5; //실수
let s1 = " 안녕하세요"; // 문자열 

console.log("정수", n1);
console.log("실수", n2);
console.log("문자열", s1);
//for 의 in 과 of 를 이해하기 
for (let i in s1) {   //파이썬의 for in 은 자바스크립트에서 for of
    console.log("문자열 :", s1[i]);
}
for (let c of s1) {
    console.log("문자열 :", c);
}

//배열 
//talling 쉼표 사용 가능 
let arr = ['👀', 1, '😃', 2]
console.log("배열", arr);
console.log("배열의 요소 접근:", arr[1])

//배열 순회
for (let i in arr) {
    console.log("배열in", arr[i])
}
for (let c of arr) {
    console.log("배열of", arr[c])
}

// //배열 map함수 , 함수니까 return가능
// console.log("배열 map 함수"); //map는 기존배열 변경안하고 새로운 배열 생성 
// const arr2 = arr.map((v) => {
//     console.log("map = > v", v);

//     return v + "🍤"; //배열의 개수만큼 리턴 
// });

// console.log("arr2 : " , arr2)



//배열 map함수 , 함수니까 return가능
console.log("배열 map 함수"); //map는 기존배열 변경안하고 새로운 배열 생성 
//const arr2 = arr.map((v) => { 인수 한개면 괄호 생략가능, 아래처럼 
//콜백의 body에 실행문이 없고 return문만 있으면 {}와 return생략가능
const arr2 = arr.map(v => v + "🍤");
console.log("arr2 : ", arr2)











//오브젝트
//talling 쉼표 사용 가능 
let obj = { '🎁': 1, '🎉': 2, '👍': 3 };
console.log("오브젝트", obj);
console.log("오브젝트 요소 접근:", obj['🎁']);

//오브젝트 순회
console.log("오브젝트 for in")
for (let i in arr) {
    console.log("오브젝트", obj[i]);
}
console.log("오브젝트 for of")
for (let c of Object.entries(obj)) {
    console.log("오브젝트:", c);
    console.log("오브젝트키:", c[0]);
    console.log("오브젝트값:", c[1]);
}

//구조분해
console.log("오브젝트 for of 구조분해")
for (let [k, v] of Object.entries(obj)) {
    console.log("오브젝트키:", k);
    console.log("오브젝트값:", v);
}

