
function CelsiusToFahrenheit(){
    let Celsius = document.getElementById('inputCelsius').value;
    let cFahrenheit = ((Celsius * 9/5) + 32).toFixed(1);
    document.getElementById('inputFahrenheit').value = cFahrenheit;
}

function FahrenheittoCelsius(){
    let Fahrenheit = document.getElementById('inputFahrenheit').value;
    let cCelsius =((Fahrenheit -   32) * 5/9).toFixed(1);
    document.getElementById('inputCelsius').value = cCelsius;
}