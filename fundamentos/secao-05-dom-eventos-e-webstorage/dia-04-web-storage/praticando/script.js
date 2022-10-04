const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPhraseInDOM() {
  let phraseList = JSON.parse(localStorage.getItem("phrases"));
  let addPhrase = document.createElement('li');
  addPhrase.innerText = phraseList[phraseList.length - 1];
  list.appendChild(addPhrase);
}

function addPhraseToLocalStorage() {
  let oldList = JSON.parse(localStorage.getItem("phrases"));
  let newPhrase = input.value;
  oldList.push(newPhrase);
  localStorage.setItem("phrases", JSON.stringify(oldList));
  insertPhraseInDOM();
}

function initialRenderization() {
  if(localStorage.getItem("phrases") === null){
    localStorage.setItem("phrases", JSON.stringify([]));
  } else{
    let phrases = JSON.parse(localStorage.getItem("phrases"));
    for(index = 0; index < phrases.length; index += 1){
      let insereFrase = document.createElement("li");
      insereFrase.innerText = phrases[index];
      list.appendChild(insereFrase);
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
};
