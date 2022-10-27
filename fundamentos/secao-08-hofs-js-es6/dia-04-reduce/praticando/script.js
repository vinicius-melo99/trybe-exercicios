// Busque o maior valor do array

const numbers = [50, 85, -30, 3, 15];
const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const estudantes = require('./studentData');

// utilizando o for: 

const biggerNumberFor = () => {
    let biggerNumber = 0;

    for(let index = 0; index < numbers.length; index += 1){
        if(numbers[index] > biggerNumber) biggerNumber = numbers[index];
    }

    return biggerNumber;
};
// console.log(biggerNumberFor());

// utilizando o reduce:

const biggerNumberReduce = () => {
    return numbers.reduce( (acc, number) => {
       return acc > number ? acc : number;
    }, 0);
}
// console.log(biggerNumberReduce());

// Faça uma função que some todos os números pares do array, usando o reduce

const sumPairs = () => {
    return numbers2.reduce( (acc, number) => {
        return number % 2 === 0 ? acc + number : acc;
    }, 0);
}
// console.log(sumPairs());

// Faça uma função que some todos os números pares do array, usando o reduce + filter

const sumPairsReduceFilter = () => {
    return numbers2.filter( (number) => {
        return number % 2 === 0;
    }).reduce( (acc, number) => {
        return number + acc
    }, 0);
}
// console.log(sumPairsReduceFilter());

// Agora crie uma função usando os dados dos estudantes, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!

/* const betterGrade = () => {
    let melhorNota = 0;

    return estudantes.map( (estudante) => {
        return {
            name: estudante.nome,
            materia: estudante.materias.reduce( (acc, materia) => {
                return materia.nota > acc.nota ? materia : acc;
            }).name
        }
    })
}; */
// console.log(betterGrade());


  