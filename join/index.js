"use strict";

// 순서도 정하기
// 개별값 확인 유효성
// 빈값일 경우 포커스 사용해서 입력하게 만들기
// 조건이 안맞을 때 포커스 사용해서 입력하게 만들기
// 조건이 맞다면 조건이 맞는 창 띄우기

// 회원 객체 배열
let users = [];

//함수 시작

function check_reg() {
  console.log("버튼1을 누르셨습니다.");

  let nameCheck = document.getElementById("name").value;
  let nickCheck = document.getElementById("nickname").value;
  let idCheck = document.getElementById("id").value;
  let pwCheck = document.getElementById("pw").value;
  let emailCheck = document.getElementById("email").value;

  //정규식 선언

  //모든 공백 체크 정규식
  let regExp = /\s/g;

  // 이름 정규식 가~히, 한글로 이루어진 문자만으로 2~6자리
  let nameJ = /^[가-힣]{2,6}$/;

  //닉네임 정규식
  let nickJ = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;
  //아이디 정규식   a~z, 0.9로 시작하는 4~12자리 아이디를 만들 수 있다.
  let idJ = /^[a-z0-9]{4,12}$/;
  // 비밀번호 정규식 숫자, 문자로 이루어진 6~12자리의 비밀번호
  let pwJ = /^[A-Za-z0-9]{4,12}$/;
  // 이메일 검사 정규식
  let mailJ =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  //name 이 왜 줄이 생기는지
  if (!nameJ.test(nameCheck) || nameCheck === "" || nameCheck.trim() === "") {
    alert("형식에 맞춰 이름을 입력하세요!");
    document.getElementById("name").focus();
    return false;
  } else if (
    !nickJ.test(nickCheck) ||
    nickCheck === "" ||
    nickCheck.trim() === ""
  ) {
    alert("형식에 맞춰 닉네임을 입력하세요!");
    document.getElementById("nickname").focus();
    return false;
  } else if (!idJ.test(idCheck) || idCheck === "" || idCheck.trim() === "") {
    alert("형식에 맞춰 아이디를 입력하세요!");
    document.getElementById("id").focus();
    return;
  } else if (!pwJ.test(pwCheck) || pwCheck === "" || pwCheck.trim() === "") {
    alert("숫자, 문자로 이루어진 6~12자리의 비밀번호!");
    document.getElementById("pw").focus();
    return;
  } else if (
    !mailJ.test(emailCheck) ||
    emailCheck === "" ||
    emailCheck.trim() === ""
  ) {
    alert("형식에 맞춰 이메일을 입력하세요!");
    document.getElementById("email").focus();
    return;
  } else {
    alert("회원가입이 완료되었습니다.");
    // 여기에 회원 정보 객체를 배열에 계속 저장해주세요. 그 후 가입된 회원 총수를 화면에 출력해주세요 ex : 지금 까지 총 00명의 회원이 가입했어요!
  }
}
// 함수끝

//버튼 클릭했을 경우 "회원가입이 완료되었습니다." 창 띄우기

// 여기 구문 참고  https://heannim-world.tistory.com/19
