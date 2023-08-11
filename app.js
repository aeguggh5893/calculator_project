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

function operate(num1, num2, operation) {
    if (operation == '+') {
        return addition(num1, num2);
    };

    if (operation == '-') {
        return subtraction(num1, num2);
    };

    if (operation == '*') {
        return multiplication(num1, num2);
    };

    if (operation == '/') {
        return division(num1, num2);
    };
}

// operate(firstNum, secondNum, operator)





