const books = require('./booksData');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];

// 1 -Utilize o reduce para transformar uma matriz em um array.

const flatten = () => {
    return arrays.reduce ( (acc, crr) =>{
        crr.forEach( (elemento) => acc.push(elemento));
        return acc;
    }, []);
}

// console.log(flatten());

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
const reduceNames = (array) => {
   return array.reduce( (acc, crr) => {
        return `${acc} ${crr.author.name}`;
    }, '');
}

// console.log(reduceNames(books));

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const averageAge = () => {
    return books.reduce( (acc, crr) => {
        return acc + (crr.releaseYear - crr.author.birthYear);;
    }, 0) / books.length;
}
// console.log(averageAge());

// 4 - Encontre o livro com o maior nome.

const longestNamedBook = () => {
    return books.reduce( (acc, crr) => {
        return crr.name.length > acc.name.length ? crr : acc;
    });
}

// console.log(longestNamedBook());

// 5 - Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

const containsA = () => {
    return names.reduce( (acc, crr) => {
        crr.toLowerCase().split("").forEach( (element) => {
            if(element === 'a') acc += 1;
        })
        return acc;
    }, 0);
}

// console.log(containsA());

// 6 - Para o próximo exercício você deve criar um novo array de objetos a partir das informações de students e grades, onde cada objeto desse novo array terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de grades refere-se ao estudante na posição 0 de students. Para resolver este exercício, além de reduce, será necessário utilizar também a função map.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// utilizando apenas reduce

const studentAverage = () => {
    return grades.reduce( (acc, grade, index) => {
        acc.push({
            name: students[index],
            average: grade.reduce( (acc, element) => acc + element, 0) 
                / grade.length
        });
        return acc;
    }, [])
}
console.log(studentAverage());

// utilizando o map e o reduce
const studentAverageMap = () => {
    return students.map( (student, index) => ({
        name: student,
        average: getAvareges(index)
    }));
}

const getAvareges = (index) => grades[index]
    .reduce( (acc, crr) => acc + crr, 0) / grades[index].length
    

// console.log(studentAverageMap());