
// for(let i=2 ;i<=10;i++){
//   for(let j=1; j<=10;j++){
//     console.log(`${i}x${j}=${i*j}`);
//   }
// }

let elForm = document.querySelector(".js-form");
// let elInput = document.querySelector(".js-input");
// let elBtn = document.querySelector(".js-btn");
// let elText = document.querySelector(".js-text");

// let fruit = ["olma","nok","banan","apelsin"];
// elText.textContent =  fruit
// elForm.addEventListener('submit',function(evt){
  
//   evt.preventDefault();
//   let inputValue = elInput.value
//   if( !fruit.includes(inputValue))
//   fruit.push(inputValue)
//   else
//   alert('Bu meva sizda bor')
//   elText.textContent = fruit   
// })

let elList = document.querySelector(".js-list")
let elSelect= document.querySelector(".select")
let elcountry= document.querySelector(".input-country")
let elRange1= document.querySelector(".range1")
let elRange2= document.querySelector(".range2")




  function render (users,node){
    elList.innerHTML = "";
    users.forEach((item)=>{
    let js_item = document.createElement("li")
    let first_name = document.createElement("p")
    let last_name = document.createElement("p")
    let gender = document.createElement("p")
    let country = document.createElement("p")
    let money = document.createElement("p")
 
    first_name.textContent = `First_name:${item.first_name}`
    last_name.textContent = `Last_name:${item.last_name}`
    gender.textContent = `Gender : ${item.gender}`
    country.textContent = `Country : ${item.country}`
    money.textContent = `Money : ${item.money}`


    js_item.appendChild(first_name)
    js_item.appendChild(last_name)
    js_item.appendChild(gender)
    js_item.appendChild(country)
    js_item.appendChild(money)

    js_item.classList.add("js-item")
// console.log(js_item);
    

    
   node.appendChild(js_item)

  })
}
render(users,elList);






elForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  
  if(elSelect.value && elcountry.value){
   let filterRender = users.filter((item) => item.gender==elSelect.value);
   let filterCountry = filterRender.filter((item)=>
      item.country==elcountry.value
    );
    let filterRange = filterCountry.filter((item)=>
      elRange1.value<=(+item.money)&&elRange2.value>=(+item.money)
    );
    render(filterRange,elList)
  }

  else if(elSelect.value){
   let  filterRender = users.filter((item) => item.gender==elSelect.value);

    render(filterRender,elList)
  }
  else if(elcountry.value){
    let filterCountry = users.filter((item)=>
      item.country==elcountry.value
    );
    render(filterCountry,elList)
  }

  else if(!elSelect.value && !elcountry.value){
    let filterRange = users.filter((item)=>
      elRange1.value<=(+item.money)&&elRange2.value>=(+item.money)
    );
    render(filterRange,elList)
  }
})