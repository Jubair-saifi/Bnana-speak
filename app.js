// console.log("from diffrent file")
// var username=prompt("enter the usename");
// alert("is this correct name?"+username);

var text=document.querySelector("#text");


var btnTranselate=document.querySelector("#btn-transelate");
btnTranselate.addEventListener("click",function addEventListener(){
  console.log("clicked");
  console.log(text.value);

})
