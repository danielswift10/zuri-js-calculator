alert("This is a basic calculator that performs operations like \nAddition\nSubstration\nDivision\nMultiplication");

let x = parseFloat(prompt("Please Enter the first number: ")); //assigning to variable x upon declaration
let y = parseFloat(prompt("Please Enter the second number: ")); //assigning to variable y upon declaration
let operator = prompt("Please Enter the operator you want to perform: "); //assigning to variable operator upon declaration

//add(x, y) performs addition
function add(x, y){
    result = x + y;
    alert("Result: "+ x + " + " + y + " = " + result);
}

//subtract(x, y) performs subtraction
function subtract(x, y){
    result = x - y;
    alert("Result: "+ x + " - " + y + " = " + result);
}

//divide(x, y) performs division
function divide(x, y){
    result = x / y;
    alert("Result: "+ x + " / " + y + " = " + result);
}

//multiply(x, y) performs multiplication
function multiply(x, y){
    result = x * y;
    alert("Result: "+ x + " * " + y + " = " + result);
}

//calculate(x, y, operator) performs calculation of basic operations
function calculate(x, y, operator) {
    if (operator == "+"){
        return add(x, y);
    }
    else if (operator == "-"){
        return subtract(x, y);
    }
    else if (operator == "/"){
        return divide(x, y);
    }
    else if (operator == "*"){
        return multiply(x, y);
    }
    else {
        alert("Please enter a valid operator!")
    }
}

//calls function calculate(x, y, operator)
calculate(x, y, operator);
