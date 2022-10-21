"use strict"
window.onload = init;

function init() {
    const nameField = document.getElementById("nameField");
    const greenBtn = document.getElementById("greenBtn");
    greenBtn.onclick =onGreenBtnClicked;
}

function onGreenBtnClicked(){
    alert("HI " + nameField.value)
}