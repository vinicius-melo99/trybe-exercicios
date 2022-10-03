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

//variáveis gerais
const buttonFriday = addButtonFriday();
const buttonHoliday = addButtonHoliday('Feriados');
let holidayClicked = false;

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
        }

    }
}

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

console.log(holidayDays);

//chamada de funções
preencheDias();

