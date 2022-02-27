//입력한 이름을 저장할 배열
const itemArrays = [];
const itemInput = document.querySelectorAll("itemInput");
const itemList = document.querySelectorAll(".itemList");

// 함수시작
const register = function register() {
  let name = document.getElementById("itemName").value; // itemName이라는 value값을 name변수에 담았는데 15번째 줄에서 .value로 접근하고있쥬?
  let price = document.getElementById("itemPrice").value;

  //유효성검사
  let check = /^[0-9]+$/;

  // name.value로 접근하고있쥬? 쿄쿄쿄
  if (name === "" || price === "") {
    alert("필수 입력값을 모두입력 해주세요.");
    if (price.trim() === "") {
      document.getElementById("itemPrice").focus(); // price 입력안했을 때 price입력 창에 포커스 줌!
    } else {
      document.getElementById("itemName").focus(); // name 입력안했을 때 name입력 창에 포커스 줌!
    }
    return;
  } else if (!check.test(price)) {
    alert("상품 가격은 숫자만 입력 가능합니다.");
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemPrice").focus();
    return;
  } else {
    const li1 = document.createElement("li");
    document.getElementById("listName").appendChild(li1).innerText = name;
    const li2 = document.createElement("li");
    document.getElementById("listPrice").appendChild(li2).innerText = price;
    alert("상품 등록이 완료되었습니다.");
  }

  // 조건 고가상품, 저가상품  분류하는
  document.getElementById("highItem").innerText = "";
  document.getElementById("lowItem").innerText = "";

  //todo 노출되게끔 만들었고 그뒤에 고가상품.저가상품으로 나눠지게

  //배열에 넣기위해 객채생성
  itemArrays.push({
    itemName: name,
    itmePrice: price,
  });

  //조건문 확인하고 반복
  const money = 1000;

  // TODO 숙제
  // Array filter, map 써서 깔끔하게 수정해보세요.
  for (let i = 0; i < itemArrays.length; i++) {
    if (itemArrays[i].itmePrice >= money) {
      //고가로 적용
      document.getElementById("highItem").append(`${itemArrays[i].itemName}, `);
    } else {
      //저가로 분류
      document.getElementById("lowItem").append(`${itemArrays[i].itemName}, `);
    }
  }
}; //함수 끝

// 📍 appendChild()
// 먼저 appendChild는 오로지 node객체만 자식 요소로 추가할 수 있다
// 코드를 통해 상세히 알아보자

// 📍 append()
// 반면 append 메서드는 appendChild와 같이 Node 객체로 자식 요소를 설정할 수 있을 뿐만 아니라,
// "text"를 사용할 수도 있다
