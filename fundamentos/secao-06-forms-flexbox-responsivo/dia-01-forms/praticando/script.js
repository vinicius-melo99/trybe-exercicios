// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener("click", function(){
    event.preventDefault();
});

INPUT_CHECKBOX.addEventListener("click", function(){
    event.preventDefault();
});

INPUT_TEXT.addEventListener("keypress", function(){
    let tecla = event.key;

     if(tecla.toUpperCase() !== "A"){
        event.preventDefault();
    } 
});