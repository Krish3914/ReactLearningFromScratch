const currNumber = document.getElementById("currNumber");
let temp = 0;

function plusCounter(){
    // console.log(currNumber);
    // temp = Number(currNumber.value);
    temp++;
    currNumber.textContent = temp;
}

function resetCount(){
    currNumber.textContent = 0;
    temp = 0;
}

function minusCounter(){
    // console.log(currNumber);
    // temp = Number(currNumber.value);
    temp--;
    currNumber.textContent = temp;
}