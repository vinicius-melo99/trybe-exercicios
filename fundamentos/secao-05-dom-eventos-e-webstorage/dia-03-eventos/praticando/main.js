const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const allLi = document.querySelectorAll('li');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener("click", addTech);
secondLi.addEventListener("click", addTech);
thirdLi.addEventListener("click", addTech);
input.addEventListener("keyup", verificaTech);
myWebpage.addEventListener("dblclick", redirecionaSite);
myWebpage.addEventListener("mouseover", alteraCor);
myWebpage.addEventListener("mouseout", restauraCor);

function addTech(event){
  firstLi.className = '';
  secondLi.className = '';
  thirdLi.className = '';

  event.target.className = 'tech'
}

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function verificaTech(){
  let contemTech = null;

  for(let index = 0; index < allLi.length; index += 1){
    if(allLi[index].className.includes('tech')){
      contemTech = allLi[index];
    }
  }
  contemTech.innerText = input.value;
}

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

function redirecionaSite(){
  window.open("http://www.betrybe.com","_blank");
}

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function alteraCor(){
  myWebpage.style.color = '#2FC18C';
}

function restauraCor(){
  myWebpage.style.color = 'white';
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.