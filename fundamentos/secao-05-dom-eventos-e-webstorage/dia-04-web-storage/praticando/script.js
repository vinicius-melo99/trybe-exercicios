const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
};

let arm1 = localStorage;


arm1.setItem('firstName', 'adam');
arm1.setItem('lastName', 'Smith');

let firstName = arm1.getItem('firstName');
let lastName = arm1.getItem('lastName');

console.log(firstName, lastName);
console.log(arm1.length);

arm1.removeItem('lastName');

console.log(arm1.length);