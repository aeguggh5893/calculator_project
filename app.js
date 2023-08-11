"use strict"

function addition(a, b) {
    return a + b
};

function subtraction(a, b) {
    return a - b
};

function multiplication(a, b) {
    return a * b
};

function division(a, b) {
    return a / b
};

function operate(num1, num2, sign){
    switch (sign) {
        case '+':
            addition(num1, num2);
            break;
        case '-':
            subtraction(num1, num2);
            break;
        case '*':
            multiplication(num1, num2);
            break;
        case '/':
            division(num1, num2);
            break;
    }
}

let firstNum = 1;
let secondNum = 1;
let operator = '+';