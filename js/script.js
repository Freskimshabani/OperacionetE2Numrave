const firstNumberBox = document.getElementById("firstNumberInput");
const secondNumberBox = document.getElementById("secondNumberInput");
const calculateButton = document.getElementById("calculateButton");

const xNumberDisplay = document.getElementById("xNumberDisplay");
const yNumberDisplay = document.getElementById("yNumberDisplay");

const sumResultDisplay = document.getElementById("sumResult");
const difResultDisplay = document.getElementById("difResult");
const prodResultDisplay = document.getElementById("prodResult");
const divResultDisplay = document.getElementById("divResult");
const modResultDisplay = document.getElementById("modResult");

function calculateNumbers() {
    let firstNumberValue = firstNumberBox.value;
    let secondNumberValue = secondNumberBox.value;

    let x = parseInt(firstNumberValue);
    let y = parseInt(secondNumberValue);

    xNumberDisplay.textContent = "x = " + x;
    yNumberDisplay.textContent = "y = " + y;

    sumResultDisplay.textContent = operations(x, y, "+");
    difResultDisplay.textContent = operations(x, y, "-");
    prodResultDisplay.textContent = operations(x, y, "*");
    divResultDisplay.textContent = operations(x, y, "/");
    modResultDisplay.textContent = operations(x, y, "%");
}

function operations(firstNumber, secondNumber, operand) {
    switch (operand) {
        case "+":
            let sum = firstNumber + secondNumber;
            return sum;
        case "-":
            let dif = firstNumber - secondNumber;
            return dif;
        case "*":
            let prod = firstNumber * secondNumber;
            return prod;
        case "/":
            let div = firstNumber / secondNumber;
            return div;
        case "%":
            let mod = firstNumber % secondNumber;
            return mod;
    }
}