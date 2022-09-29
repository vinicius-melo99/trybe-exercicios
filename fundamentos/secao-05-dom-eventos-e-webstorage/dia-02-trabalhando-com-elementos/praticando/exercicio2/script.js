//Crie um irmão para elementoOndeVoceEsta.
const pai = document.querySelector('#pai');
const criaIrmao = document.createElement('section');

criaIrmao.innerText = "Irmão do elementoOndeVoceEsta";
pai.appendChild(criaIrmao);

criaIrmao.id = "quintoFilho";
criaIrmao.previousElementSibling.id = "quartoFilho";

//Crie um filho para elementoOndeVoceEsta
const elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta");
const criaFilhoElemento = document.createElement('div');

criaFilhoElemento.innerText = 'filho de elementoOndeVoceEsta';

elementoOndeVoceEsta.appendChild(criaFilhoElemento);

//Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");
const criaEsseFilhoAi = document.createElement("section");

criaEsseFilhoAi.innerText = "Filho do primeiroFilhoDoFilho";

primeiroFilhoDoFilho.appendChild(criaEsseFilhoAi);
criaEsseFilhoAi.id = "filhoDoPrimeiroFilhoDoFilho";

//A partir desse filho criado, acesse terceiroFilho.
const filhoDoPrimeiroFilhoDoFilho = document.querySelector("#filhoDoPrimeiroFilhoDoFilho");
console.log(filhoDoPrimeiroFilhoDoFilho.parentNode.parentNode.parentNode.children[2]) ;

