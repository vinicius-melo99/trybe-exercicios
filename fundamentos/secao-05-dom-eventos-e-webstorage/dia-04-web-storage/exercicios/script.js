const selectTextColor = document.getElementById("selectTextColor");
const selectBackgroundColor = document.getElementById("selectBackgroundColor");
const selectFontSize = document.getElementById("selectFontSize");
// const selectFontName = document.getElementById("selectFontName");

const text = document.querySelectorAll('.text .paragrafo');


function initialRenderization(){
    if(localStorage.getItem("textColor") === null){
        localStorage.setItem("textColor","#000000");
        localStorage.setItem("backgroundColor","#FFFFFF");
        localStorage.setItem("fontSize", JSON.stringify(18));
        localStorage.setItem("fontFamily","arial");
    
        selectTextColor.value = localStorage.getItem("textColor");
        selectBackgroundColor.value = localStorage.getItem("backgroundColor");
        selectFontSize.value = JSON.parse(localStorage.getItem("fontSize"));
        
    } else{
        let textColor = localStorage.getItem("textColor");
        let backgroundColor = localStorage.getItem("backgroundColor");
        let fontSize = JSON.parse(localStorage.getItem("fontSize"));
        let fontFamily = localStorage.getItem("fontFamily");

        for(each of text){
            each.style.color = textColor;
            each.style.backgroundColor = backgroundColor;
            each.style.fontSize = `${fontSize}px`;
            each.style.fontFamily = fontFamily;
        }
        selectTextColor.value = localStorage.getItem("textColor");
        selectBackgroundColor.value = localStorage.getItem("backgroundColor");
        selectFontSize.value = JSON.parse(localStorage.getItem("fontSize"));
    }
}

selectTextColor.addEventListener("change", function changeTextColor(){
    let newColor = selectTextColor.value;
    localStorage.setItem("textColor", newColor);
    
    for(each of text){
        each.style.color = newColor;
    }
});

selectBackgroundColor.addEventListener("change", function changeBackgroundColor(){
    let newBackColor = selectBackgroundColor.value;
    localStorage.setItem("backgroundColor", newBackColor);

    for(each of text){
        each.style.backgroundColor = newBackColor;
    }
});

selectFontSize.addEventListener("change", function changeFontSize(){
    let newFontSize = selectFontSize.value;
    localStorage.setItem("fontSize", JSON.stringify(newFontSize));

    for(each of text){
        each.style.fontSize = `${newFontSize}px`;
    }
});

initialRenderization();




