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
  
//Array com de dezembro
let decemberDaysList = [29,30];

for(let i = 1; i <= 31; i += 1){
    decemberDaysList.push(i);
}

function preencheDias(){
    for(let day of decemberDaysList){
        let diaDoMes = document.createElement('li');
        diaDoMes.innerText = `${day}`;
        days.appendChild(diaDoMes);
    }
}

//chamada de funções
preencheDias();