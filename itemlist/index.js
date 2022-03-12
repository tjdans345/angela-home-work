//입력한 이름을 저장할 배열 
const itemArrays = [];
const itemInput = document.querySelectorAll('itemInput');
const itemList = document.querySelectorAll('.itemList');

// 함수시작
const register = function register(){
const name = document.getElementById('itemName').value;
const price = document.getElementById('itemPrice').value;


  let check = /^[0-9]+$/;

  //if 문으로 빈값, 공백 여부 확인하는 조건문

  if(name === '' || price === ''){
    alert('필수값을 입력해주세요.');

    if(name.trim() === ''){
      document.getElementById('itemName').focus(); 
    }else if(price.trim() === ''){ 
      document.getElementById('itemPrice').focus(); 
    }
    return false;

  }else if(!check.test(price)){
     alert('상품가격은 숫자만 입력 가능합니다.');
     document.getElementById('itemPrice').value = '';
     document.getElementById('itemPrice').focus();
    return; 

  }else{
     const li1 = document.createElement('li');
     document.getElementById('listName').appendChild(li1).innerText = name;
   
     const li2 = document.createElement('li');
     document.getElementById('listPrice').appendChild(li2).innerText = price;
     alert('상품 등록이 완료되었습니다.')
    }


itemArrays.push({
  itemName: name,
  itmePrice: price
});

document.getElementById("highItem").innerText = "";
document.getElementById("lowItem").innerText = "";


//조건금액 
const money = 1000;

itemArrays.filter(function (value, index){
  return value.itmePrice >= money}).map(value =>
    document.getElementById("highItem").append(
          `${value.itemName}, `)
  );
 
  itemArrays.filter(function (value, index){
    return value.itmePrice < money}).map(value =>
      document.getElementById("lowItem").append(
            `${value.itemName}, `)
    );

    


const lowResult = itemArrays.filter(function (value){
    return value.itmePrice < money; 
  });



   //고가로 적용
//    itemArrays.result = document.getElementById("highItem").append(
//     `${itemArrays.itemName}, `);
    

//    //저가로 분류
//    document.getElementById("lowItem").append(
//     `${lowResult[0].itemName}, `);
  
  
    

  
// for (let i = 0; i < itemArrays.length; i++) {
//     if (itemArrays[i].itmePrice >= money) {
//       //고가로 적용
//       document.getElementById("highItem").append(
//         `${itemArrays[i].itemName}, `);
//     } else {
//       //저가로 분류
//       document.getElementById("lowItem").append(
//         `${itemArrays[i].itemName}, `);
//     }
// }




}  //함수 끝


