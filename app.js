"use strict"

let calcContainerEle = document.querySelector('#calculator-container');

calcContainerEle.addEventListener('click', e => onButtonClick(e));




function onButtonClick(e) {
    console.log('clicked', e.target.innerHTML)
}


