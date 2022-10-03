function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//chamada de elementos
const days = document.querySelector(".days-container #days");
const holidayDays = document.getElementsByClassName('holiday');
const buttonsContainer = document.querySelector(".buttons-container");
const fridayDays = document.getElementsByClassName('friday');
const daysContainer = document.querySelector(".days-container"); 
const myTasks = document.querySelector(".my-tasks");

//variáveis gerais
const buttonFriday = addButtonFriday();
const buttonHoliday = addButtonHoliday('Feriados');
let holidayClicked = false;
let fridayClicked = false;
let arrayFridayDays = [];

//Array com de dezembro
let decemberDaysList = [29,30];

for(let i = 1; i <= 31; i += 1){
    decemberDaysList.push(i);
}

//função para adicionar dinamicamente o botão 'feriados';
function addButtonHoliday(texto){
    let button = document.createElement('button');

    button.id = 'btn-holiday';
    button.innerText = texto;
    buttonsContainer.appendChild(button);

    return button;
}

//função para adicionar dinamicamente o botão 'sexta-feira';
function addButtonFriday(){
    let buttonFriday = document.createElement('button');

    buttonFriday.id = 'btn-friday';
    buttonFriday.innerText = 'Sexta-Feira';
    buttonsContainer.appendChild(buttonFriday);

    return buttonFriday;
}

//função para preencher dinâmicamente os dias do mês de dezembro;
function preencheDias(){
    for(let day of decemberDaysList){
        let diaDoMes = document.createElement('li');
        diaDoMes.innerText = `${day}`;
        diaDoMes.classList = 'day';
        days.appendChild(diaDoMes);

        if(day === 24 || day === 25 || day === 31){
            diaDoMes.classList.add('holiday');
        }

        if(day === 4 || day === 11 || day === 18 || day === 25){
            diaDoMes.classList.add('friday');
            arrayFridayDays.push(day);
        }

    }
}
//listener que espera o click do botão "feriados" e destaca os dias de feriado no calendário.
buttonHoliday.addEventListener("click", function(){
    if(holidayClicked === false){
        for(let holiday of holidayDays){
            holiday.style.backgroundColor = '#2fc18c';
            holidayClicked = true;
        }
    } else {
        for(let holiday of holidayDays){
            holiday.style.backgroundColor = 'rgb(238,238,238)';
            holidayClicked = false;    
        }
    }
}); 

//listener que espera o click do botão "sexta-feira" e altera o texto dos dias de sextas pra "#SEXTOU!", processo inverso ocorre ao clicar novamente.
buttonFriday.addEventListener("click", function(){
    if(fridayClicked === false){
        for(let friday of fridayDays){
            friday.innerText = '#SEXTOU!';
        }
        fridayClicked = true;
    } else {
        for(let i = 0; i < fridayDays.length; i += 1){
            fridayDays[i].innerText = `${arrayFridayDays[i]}`;
        }
        fridayClicked = false;
    }
});

//funções para alterar o tamanho do texto ao passar e tirar o mouse de cima do elemento
days.addEventListener("mouseover", function(){
    let alvo = event.target;
    alvo.style.transition = '0.12s'
    if(alvo !== days){
        alvo.style.transform = 'scale(1.5)';
    }
});

days.addEventListener("mouseout", function(){
    let alvo = event.target;
    alvo.style.transform = 'scale(1)'; 
});

//adiciona tarefas dinamicamente
function addTask(descricao){
    let tarefa = document.createElement('span');
    tarefa.innerText = descricao;
    myTasks.appendChild(tarefa);
}

//adiciona uma leganda com cor para a tarefa.
function adicionaLegenda(cor){
    let legenda = document.createElement('div');
    legenda.className = 'task';
    legenda.style.backgroundColor = cor;
    myTasks.appendChild(legenda);
}


//chamada de funções
preencheDias();
addTask('Cozinhar');
adicionaLegenda('green');
