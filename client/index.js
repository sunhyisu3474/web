function colorChange() {
  var message = document.getElementById('main');
  var msg = "웹 개발자 \"선희수\" 입니다..";
  var beforeColor = "#ffffff"  // 색이 채워지기 전 색상(흰색)
  var afterColor = "#b5ffac"  // 바뀔 글자 색상
  var changeSpeed = 100;  // 책이 채워 질 속도
  var isTyping = false;


}


function nonDefaultEvent() {
  window.addEventListener("wheel", function (e) {
    e.preventDefault();
  }, {passive: false});
}


function moveHome() {
  firstPage.scrollIntoView();
}


function moveAbout() {
  secondPage.scrollIntoView();
}


function moveProject() {
  thirdPage.scrollIntoView();
}
