// console.log("from diffrent file")
// var username=prompt("enter the usename");
// alert("is this correct name?"+username);

var text=document.querySelector("#text");
var outputDiv=document.querySelector("#output");
//outputDiv.innerHTML="hello jubair";
//console.log(outputDiv);


var btnTranselate=document.querySelector("#btn-transelate");
btnTranselate.addEventListener("click",function addEventListener(){
  // console.log("clicked");
  // console.log(text.value);
  outputDiv.innerHTML=text.value +"ansbnes";


})
