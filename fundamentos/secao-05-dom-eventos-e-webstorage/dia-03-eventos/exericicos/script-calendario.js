function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
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
const taskList = document.querySelector(".task-list");
const btnAdd = document.getElementById('btn-add');
const taskInput = document.getElementById('task-input');

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

//adiciona a classe 'selected' à div task, ao clicar na cor
myTasks.addEventListener("click", function(){
    let clicked = event.target;

    if(clicked !== myTasks){
        if(clicked.className.includes('task')){
            if(!clicked.className.includes('selected')){
                clicked.classList.add('selected');
            } else{
                clicked.classList.remove('selected');
            }
        }
    }
});

//função para atribuir a cor da tarefa ao dia do calendário
days.addEventListener("click", function(){
    let alvo = event.target;
    let legendaTarefa = document.querySelector('.selected');

    if(alvo !== days){
        if(legendaTarefa === null){
            alert('Selecione uma tarefa!');
        } else{
            if(alvo.style.color === legendaTarefa.style.backgroundColor){
                alvo.style.color = '#777';
            } else{
                let corTarefa = legendaTarefa.style.backgroundColor;
                alvo.style.color = corTarefa;
            }
        }
        
    }
});

btnAdd.addEventListener("click", addTaskItem);
//função para adicionar itens na lista de compromissos, conforme entrada do usuário.
function addTaskItem(){
   let taskToAdd = taskInput.value; 
   if(taskToAdd !== ""){
        let listItem = document.createElement('li');
        listItem.innerText = taskToAdd;
        taskList.appendChild(listItem);
        taskInput.value = "";
        taskInput.focus();
   } else {
        alert('Digite um compromisso!');
        taskInput.focus();
   }
}
//chama a função addTaskItem se a tecla 'Enter' for pressionada.
taskInput.addEventListener("keypress", function(){
    key = event.key

    if(key === "Enter"){
        addTaskItem();
    }
});



//chamada de funções
preencheDias();
addTask('Cozinhar');
adicionaLegenda('green');

