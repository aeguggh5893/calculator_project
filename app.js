"use strict"

let calcContainerEle = document.querySelector('#calculator-container');

calcContainerEle.addEventListener('click', e => onButtonClick(e));

function doNumber(num) {
    console.log('num', num);
}

function doOperation(operation) {
    console.log('op', operation);
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
    console.log('equal');
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




