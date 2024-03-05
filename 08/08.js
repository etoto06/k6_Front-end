// const handleClick = () => { 
//     const img1 = document.querySelector("#img1") ;
//     const img2 = document.querySelector("#img2") ;

//     const nc = Math.floor(Math.random() * 6) + 1;

//     img1.setAttribute("src", ``);
//     img2.setAttribute("src", `./img/${n}.png`);

//     if (n == nc) {
//       document.querySelector("#msg").innerHTML = "맞음" ;
//     }
//     else {
//       document.querySelector("#msg").innerHTML = "틀림" ;
//     }

// }

document.addEventListener("DOMContentLoaded", () => {
  //돔 생성후에 img,input,button 가져오기
  const UpDownimg = document.querySelector("img");
  const numInput = document.getElementById("num1");
  const bt = document.querySelector("button");
  const msg = document.querySelector("#msg")


  //input fous 
  numInput.focus() // 내가 안눌러도 처음부터 깜빡거리고 있음

  //랜덤수 생성 변수
  let n;
  let flag = false;

  //버튼에 클릭 이벤트 달기
  bt.addEventListener("click", (e) => {
    e.preventDefault();

    //랜덤 수 생성
    // if (flag == false){
    if (!flag) {
      n = Math.floor(Math.random() * 100) + 1; //+1해야 1에서 100까지
      console.log("n =", n)
      flag = true

      //이 부분은 입력초기화 
      numInput.style.display = "inline";
      numInput.value = "";
      numInput.focus();
      bt.innerHTML = "확인";
    }

    //input 박스 내용
    if (numInput.value == '') {
      //alert("숫자를 입력하세요.");
      msg.innerHTML = "<span>1에서 100까지 숫자만 입력<span>";
      numInput.focus();
      return;
    }

    //숫자비교
    msg.innerHTML = "";
    if (n === parseInt(numInput.value)) {
      numInput.style.display = "none";
      bt.innerHTML = "재시작";
      UpDownimg.setAttribute("src", "./img/good.png");
      flag = false;
    }
    else if (n > numInput.value) {
      upDownImg.setAttribute("src", "./img/up.png");
    }
    else {
      upDownImg.setAttribute("src", "./img/down.png");
    };


  });

});