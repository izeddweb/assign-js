//    Set Variable
const inputToAdd = document.querySelector('.classes-to-add')
const inputToRemove = document.querySelector('.classes-to-remove')
const current = document.querySelector('.current')
const divToAdd = document.querySelector('.classes-list div')
let classesNameAdd;
let classesNameRemove;

//    function to add classes
inputToAdd.addEventListener('blur', addClasses)
inputToAdd.addEventListener('focus', clearInput)

function addClasses(){
  classesNameAdd = inputToAdd.value.toLowerCase()
  current.classList.add(classesNameAdd)
  const span = document.createElement('span')
  const spanClass = document.createTextNode(classesNameAdd)
  span.appendChild(spanClass)
  divToAdd.appendChild(span)
}
function clearInput(){
  inputToAdd.value = ""
  
}

   //function to remove classes
  
inputToRemove.addEventListener('blur', removeClasses)
inputToRemove.addEventListener('focus', clearInputRMV)

function removeClasses(){

  classesNameRemove = inputToRemove.value;
  console.log(classesNameRemove);
  current.classList.remove(classesNameRemove)

  divToAdd.childNodes.forEach(element => {
    
    console.log(element.className);
    if(element.hasAttributes(classesNameRemove)){
      
      divToAdd.remove(this)
      // element.style.color = "blue"
    }
  });
}
function clearInputRMV(){
  inputToRemove.value = ""
}






// console.log(classToAdd);
// console.log(classToRemove);
// console.log(current);
// console.log(divToAdd);

















