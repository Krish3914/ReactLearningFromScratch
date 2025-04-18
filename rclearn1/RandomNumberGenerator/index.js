console.log("Hello RandomNumberGenerator")

//Math.Random()
//Math.floor()

const start = document.getElementById("start");
const end = document.getElementById("end");

const generate = document.getElementById("generate");

const result = document.getElementById("result");

let temp;

generate.onclick = function(){
    temp = Math.floor(Math.random()*(Number(end.value) - Number(start.value))+ Number(start.value));
    result.textContent = temp;
}