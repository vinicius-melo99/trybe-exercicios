// Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVcEsta = document.querySelector("#elementoOndeVoceEsta");

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
elementoOndeVcEsta.parentNode.style.color = 'green';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
elementoOndeVcEsta.firstElementChild.innerText = 'Texto do primeiro filho de "elementoOndeVoceEsta"';

//Acesse o primeiroFilho a partir de pai
const elementoPai = document.getElementById('pai');
elementoPai.firstElementChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
elementoOndeVcEsta.previousElementSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
elementoOndeVcEsta.nextSibling;

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
elementoOndeVcEsta.nextElementSibling;

//Agora acesse o terceiroFilho a partir de pai.
elementoPai.children[2];