//exercicio 3 - organizando lições

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  let allLessons = {};


  //passo 1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  const addNewTurn = (lesson2, newKey, newValue) => lesson2[newKey] = newValue;
  
  addNewTurn(lesson2, 'turno', 'noite');
   

//passo2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
/* const listLessonsKey = obj => Object.keys(obj);
console.log(listLessonsKey(lesson2)); */

// passo3 - Crie uma função para mostrar o tamanho de um objeto.
/* const objectLenght = obj => Object.keys(obj).length;
console.log(objectLenght(lesson1)); */

//passo 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
/* const listValues = obj => Object.values(obj);
console.log(listValues(lesson1));  */

//passo 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando

allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

// console.log(allLessons);

//Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
const allStudents = obj => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

// console.log(allStudents(allLessons));

