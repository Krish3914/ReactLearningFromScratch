const inputValue = document.getElementById("inputValue");
const CelciusToFahrenheit = document.getElementById("CelciusToFahrenheit");
const FahrenheitToCelcius = document.getElementById("FahrenheitToCelcius");
const result = document.getElementById("resultShow");
let temp;

function ConvertTemperature(){
    if(CelciusToFahrenheit.checked){
        temp = Number(inputValue.value);
        temp = (temp * (9/5)) + 32;
        result.textContent = temp + "°F";
    }
    else if(FahrenheitToCelcius.checked){
        temp = Number(inputValue.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(2) + "°C";
    }
    else{
        result.textContent = "Select Convert Scale";
    }
}   