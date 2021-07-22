class Temperature {
    celcius;
    constructor(celcius) {
        this.celcius = celcius;
    }
    cToF() {
        return 9/5*this.celcius + 32;
    }
    cToK() {
        return parseInt(this.celcius) + 273.15;
    }
}
function result() {
    let input = document.getElementById("input-celcius").value;
    let kevinOfFahrenheit = document.getElementById("input-unit").value;
    let inputCelcius = new Temperature(input);
    if (kevinOfFahrenheit == "kevin") {
        document.getElementById("result-display").innerHTML = inputCelcius.cToK();
    }else {
        document.getElementById("result-display").innerHTML = inputCelcius.cToF();
    }
}