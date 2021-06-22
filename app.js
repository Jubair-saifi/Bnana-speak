// console.log("from diffrent file")
// var username=prompt("enter the usename");
// alert("is this correct name?"+username);

var text=document.querySelector("#text");
var outputDiv=document.querySelector("#output");
//outputDiv.innerHTML="hello jubair";
//console.log(outputDiv);

var url="https://api.funtranslations.com/translate/mandalorian.json";

function getTranselateUrl(text1){
  return url+"?"+"text="+text1;
}


var btnTranselate=document.querySelector("#btn-transelate");
btnTranselate.addEventListener("click",function addEventListener(){
  // console.log("clicked");
  // console.log(text.value);
  //outputDiv.innerHTML=text.value +"ansbnes";
  var textinput=text.value;
  fetch(getTranselateUrl(textinput)).then(Response =>Response.json()).then(json=>{
    var translatedtext=json.contents.translated;
    outputDiv.innerText=translatedtext;
  });
});
