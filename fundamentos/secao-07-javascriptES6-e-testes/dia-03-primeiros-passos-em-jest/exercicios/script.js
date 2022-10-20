const vogais = ['a', 'e', 'i', 'o', 'u'];
const code = [1, 2, 3, 4, 5];

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  
function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

function encode(text) {
  const caracters = text.split('');
  caracters.forEach((letra, i) => {
    vogais.forEach((vogal, k) => {
      caracters[i] = (letra === vogal) ? code[k] : caracters[i];
    });
  });

  return caracters.join('');
}

function decode(text) {
  const caracters = text.split('');
  caracters.forEach((caracter, i) => {
    code.forEach((num, k) => {
      caracters[i] = (caracter === num.toString()) ? vogais[k] : caracters[i];
    });
  });

  return caracters.join('');
}

function techList(tech, studentName){
    if(tech.length === 0){
        return 'Vazio!';
    }
    const techList = new Array();

    for(each of tech.sort()){
        techList.push(
        {
         name: studentName,
         tech: each 
        });
    }

    return techList;
}

function hydrate(text){
    let numbers = text.replace(/[^0-9]/g, '');
    let array = numbers.split("").map(Number);
    let mesage = '';
    let sum = 0;

    for (let index = 0; index < array.length; index += 1) {
        sum += array[index];
      }
    
      if (sum === 1) {
        mesage = `${sum} copo de água`;
      } else {
        mesage = `${sum} copos de água`;
      }
    
      return mesage; 
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate };