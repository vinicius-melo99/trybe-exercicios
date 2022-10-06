const submitButton = document.querySelector("#submit-button");
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const checkPicture = document.querySelector("#picture");

submitButton.addEventListener("click", function(){
    let checkInputName = inputName.value.length >= 10 && inputName.value.length <= 50;
    let checkInputEmail = inputEmail.value.length >= 10 && inputEmail.value.length <= 50;
    let checkedPicture = checkPicture.checked;

    if(checkInputName && checkInputEmail && checkedPicture) alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    else{
        event.preventDefault();
        alert('Dados Inválidos.');
    } 
});