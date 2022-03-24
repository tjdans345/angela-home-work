"use strict";

// 순서도 정하기
// 개별값 확인 유효성
// 빈값일 경우 포커스 사용해서 입력하게 만들기
// 조건이 안맞을 때 포커스 사용해서 입력하게 만들기
// 조건이 맞다면 조건이 맞는 창 띄우기

// 회원 객체 배열
const users = []; // users라는 변수를 const 키워드를 사용해서 선언해주었고 빈 배열을 값을 할당(초기화, 값을 대입)해줬다

const userTearch =[];
const userGeneral = [];

//함수 시작
const check_reg = function check_reg() {
  // 변수명은 항상 직관적이게 그리고 그 변수가 가지는 목적에 맞게
  console.log("회원가입 버튼을 누르셨습니다.");
  let userName = document.getElementById("name").value; // 유저가 입력한 이름값
  let userNickname = document.getElementById("nickname").value; // 유저가 입력한 닉네임값
  let userId = document.getElementById("id").value;
  let userPw = document.getElementById("pw").value;
  let userEmail = document.getElementById("email").value;
  let userCategory = document.getElementById("category").value;
  

  //정규식 선언

  //모든 공백 체크 정규식
  let regExp = /\s/g;

  // 이름 정규식 가~히, 한글로 이루어진 문자만으로 2~6자리
  let nameReg = /^[가-힣]{2,6}$/;

  //닉네임 정규식
  let nickNameReg = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;
  //아이디 정규식   a~z, 0.9로 시작하는 4~12자리 아이디를 만들 수 있다.
  let idReg = /^[a-z0-9]{4,12}$/;
  // 비밀번호 정규식 숫자, 문자로 이루어진 6~12자리의 비밀번호
  let pwReg = /^[A-Za-z0-9]{4,12}$/;
  // 이메일 검사 정규식
  let emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;


  //name 이 왜 줄이 생기는지
  if (!nameReg.test(userName) || userName.trim() === "") {
    alert("형식에 맞춰 이름을 입력하세요!");
    document.getElementById("name").focus();
    document.getElementById("name").value = "";
    return false;
   } else if (!nickNameReg.test(userNickname) || userNickname.trim() === "") {
    alert("형식에 맞춰 닉네임을 입력하세요!");
    document.getElementById("nickname").focus();
    document.getElementById("nickname").value = "";
    return false;
  } else if (!idReg.test(userId) || userId.trim() === "") {
    alert("형식에 맞춰 아이디를 입력하세요!");
    // 여기 추가해주세요 (잘못입력하면 해당 인풋 박스를 빈칸으로 만들어주기)
    document.getElementById("id").focus();
    return false;
  } else if (!pwReg.test(userPw) || userPw.trim() === "") {
    alert("숫자, 문자로 이루어진 6~12자리의 비밀번호!");
    document.getElementById("pw").focus();
    // 여기 추가해주세요 (잘못입력하면 해당 인풋 박스를 빈칸으로 만들어주기)
    return false;
  } else if (!emailReg.test(userEmail) || userEmail.trim() === "") {
    alert("형식에 맞춰 이메일을 입력하세요!");
    document.getElementById("email").focus();
    // 여기 추가해주세요 (잘못입력하면 해당 인풋 박스를 빈칸으로 만들어주기)
    return false;
  }else if(userCategory.trim() === ""){
    alert('유형을 선택해주세요.');
    console.log('ddd')
    return false;
  }
  

  alert("회원가입이 완료되었습니다.");


  

  //회원가입 끝!



  function User(name, nickname, id, pw, email, category) {
    this.name = name;
    this.nickname = nickname;
    this.id = id;
    this.pw = pw;
    this.email = email;
    this.categoly = category;
  }

  const newUser = new User(userName, userNickname, userId, userPw, userEmail, userCategory );
  users.push({
    newUser,
  });

  console.log(users);
  document.getElementById("name").value = "";
  document.getElementById("nickname").value = "";
  document.getElementById("id").value = "";
  document.getElementById("pw").value = "";
  document.getElementById("email").value = "";
  document.getElementById('category').value= "";
};


//유형에 따른 분류하기
// const arrCategory = [tearch, general];
// const arrTearch =[];
// const arrGeneral = [];


if (userCategory.value === teacher) {
  userTearch.push()
  console.log(userTearch);
  //userCategory
 } else if (userTearch[1] !== general) {
  userGeneral.push()
  console.log(userGeneral);

} 




// 함수끝

//버튼 클릭했을 경우 "회원가입이 완료되었습니다." 창 띄우기

// 여기 구문 참고  https://heannim-world.tistory.com/19
