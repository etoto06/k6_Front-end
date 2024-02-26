const handlechange = (s1, s2, lb1, lb2,t1,t2) => { 
  if(s1.value === "C"){
    s2.value = "F"; //섭씨일경우 반대는 화씨로
    lb1.innerHTML = "C";
    lb2.innerHTML = "F";
  } else {
    s2.value = "C";//화씨일경우 반대는 섭씨로
    lb1.innerHTML = "F";
    lb2.innerHTML = "C";
  }
  t1.value="";
  t1.focus();
  t2.value="";
};

document.addEventListener("DOMContentLoaded", ()=> {
  const sel1 = document.querySelector("#sel1");
  const sel2 = document.querySelector("#sel2");

  const txt1 = document.querySelector("#txt1");
  const txt2 = document.querySelector("#txt2");

  const labels = document.querySelectorAll("label");

  txt1.addEventListener("change", ()=> { // 'change' 이벤트 이름 변경
    console.log(txt1.value);
    if(sel1.value === "C"){ // 'self'를 'sel1'으로 변경
      // 섭씨를 화시로
      txt2.value = (parseFloat(txt1.value) * (9/5)) + 32;
    } else {
      // 화시를 섭씨로
      txt2.value = (parseFloat(txt1.value) - 32) * (5/9);
    }
  }); 

  sel1.addEventListener("change", () => {
    handlechange(sel1, sel2, labels[0], labels[1]); 
  });

  sel2.addEventListener("change", () => {
    handlechange(sel1, sel2, labels[0], labels[1]); 
  });
});
