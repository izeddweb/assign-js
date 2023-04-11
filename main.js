//   assign 1

// const m1 = document.querySelector('div');
// const m2 = document.querySelector('#elzero');
// const m3 = document.querySelector('.element');
// const m4 = document.querySelector('div[name]');
// const m5 = document.querySelectorAll('div');
// const m6 = document.querySelectorAll('#elzero');
// const m7 = document.querySelectorAll('.element');
// const m8 = document.querySelectorAll('div[name]');
// const m9 = document.getElementsByName("js");
// const m10 = document.getElementsByTagName('div');
// const m11 = document.getElementsByClassName('element');
// const m12 = document.TEXT_NODE('JavaScript');
// const m13 = document.querySelectorAll('div[name]');
// const m14 = document.querySelectorAll('div[name]');
// const m15 = document.querySelectorAll('div[name]');

// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);
// console.log(m6);
// console.log(m7);
// console.log(m8);
// console.log(m10);
// console.log(m9);
// console.log(m11);
// console.log(m12);
// console.log(m13);
// console.log(m14);
// console.log(m15);

//   assign 2

// const toph = document.querySelectorAll('[decoding = "async"]')

// toph.forEach( function (ele){

//   let newSrc = `https://elzero.org/wp-content/themes/elzero/imgs/logo.png`
//   let newAlt = ` Elzero Logo`
//   console.log(newSrc);
//   console.log(newAlt);
//   ele.setAttribute('src',newSrc)
//   ele.setAttribute('alt',newAlt)
// })

//   assign 3

// set Variable
//   const input = document.querySelector('input')
//   const result = document.querySelector('.result')
//   input.style.cssText = "text-align:center;height:40px;margin-left:40%;"
//   result.style.cssText = "background:#c2a3a3c4;text-align:center;line-height:40px;padding-top:10px;"
//   // console.log(result);
// // set function
// input.onchange= function convert(){
//     let valueInput = input.value
//     let inDolar = valueInput * 15.6 ;
//     inDolar =inDolar.toFixed(2)
//     result.textContent = ` {${inDolar} }USD Dollar = {${valueInput}} Egyptian Pound`
//   }

//   assign 4

// Set Variable

// const classOne = document.querySelector(".one");
// const classTwo = document.querySelector(".two");

// let titleOne = classOne.getAttribute("title");
// let titleTwo = classTwo.getAttribute("title");
// let textOne = classOne.textContent;
// let textTwo = classTwo.textContent;


// classOne.setAttribute('title',titleTwo);
// classTwo.setAttribute('title',titleOne);
// classOne.textContent = textTwo;
// classTwo.textContent = textOne;


//   assign 5

// Set variable
// const images = document.querySelectorAll('.assign5 img')
// console.log(images);

// for(let i =0 ; i< images.length;i++){
//   if(images[i].hasAttribute('alt')){
//     images[i].setAttribute('alt'," Old")
//   }else{
//     images[i].setAttribute('Alt'," Elzero New")
//   }
// }

//   assign 6 challenge

//Set Variable

const form = document.querySelector('form')
const select = document.querySelectorAll('select')
const inputNum = document.querySelector('input[type="number"]')
const inputText = document.querySelector('input[type="text"]')
const elements = document.querySelectorAll('option')
const btn = document.querySelector('input[type="submit"]')
const results = document.querySelector('.results')

btn.addEventListener('click',CreateElements)

// Set function 
function CreateElements(){
  let elementValue
  form.onsubmit = function (e){
    e.preventDefault();
  }
  select.forEach(ele => {
    elementValue =ele.value
  });
  console.log(inputNum.value);
  console.log(inputText.value);
  console.log(elementValue);  

}















