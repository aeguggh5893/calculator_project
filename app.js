"use strict"

let calcContainerEle = document.querySelector('#calculator-container');

calcContainerEle.addEventListener('click', e => onButtonClick(e));

let resultEle = document.querySelector('#result');

let curOperation, curNumber1, curNumber2;

function compute(num1, num2, op) {
    let n1 = Number(num1);
    let n2 = Number(num2);
    let result;

    if (op === '+') {
        result = n1 + n2;
    } else if (op === '-') {
        result = n1 - n2;
    } else if (op === '/') {
        result = n1 / n2;
    } else {
        result = n1 * n2;
    }
    return result
}


function doNumber(num) {
    let newNum;

    if (curOperation) {
        curNumber2 = curNumber2 ? `${curNumber2}${num}` : num;
        newNum = curNumber2;
    } else {
        curNumber1 = curNumber1 ? `${curNumber1}${num}` : num;
        newNum = curNumber1;
    }

    resultEle.innerHTML = newNum;
}

function doOperation(operation) {
    if (curNumber2) {
        let result = compute(curNumber1, curNumber2, curOperation);
        curNumber1 = result;
        curNumber2 = 0;
        resultEle.innerHTML = result

    }
}

function reset() {
    console.log('reset');
}

function makePosNeg() {
    console.log('makeposneg');
}

function makeDecimal() {
    console.log('makeDecimal');
}

function doEqual() {
    if (curNumber1 && curNumber2 && curOperation) {
        let result = compute(curNumber1, curNumber2, curOperation);
        resultEle.innerHTML = result;
    }
}

function onButtonClick(e) {
    let btnClickedValue = e.target.innerHTML;

    if (Number.isInteger(parseInt(btnClickedValue))) {
        doNumber(btnClickedValue);
        return
    }

    switch(btnClickedValue) {
        case 'Clear': 
            reset()
            break;
        case '+/-': 
            makePosNeg()
            break;
        case '/': 
            doOperation('/')
            break;
        case 'x': 
            doOperation('x')
            break;
        case '+': 
            doOperation('+')
            break;
        case '-': 
            doOperation('-')
            break;
        case '.': 
            makeDecimal()
            break;
        case '=': 
            doEqual()
            break;
        default:
            break;
    }

}




