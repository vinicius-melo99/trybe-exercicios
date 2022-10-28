// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  
  // desestruturando o objeto:
  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character
  
  // imprimindo os valores:
//   console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// 1 - Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
// Existem dois objetos referentes a uma pessoa usuária, um com informações pessoais e outro com informações referentes ao seu cargo na empresa trappistEnterprise. Você precisa criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

const information =  { 
    ...user,
    ...jobInfos
 } 

const {
    name: userName,
    age: userAge,
    nationality,
    profession,
    squad,
    squadInitials
} = information;
  
const message = `Hi, my name is ${userName}, I'm ${userAge} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;

// console.log(message);

// 2 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [texto, funcao] = saudacoes;

// funcao(texto);

// 3 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[animal, bebida, comida] = [comida, animal, bebida]

// console.log(animal, comida, bebida);

// 4 - O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
let numerosPares = [1, 3, 5, 6, 8, 10, 12];


// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares

// console.log(numerosPares); // [6, 8, 10, 12];

const getNationality = ({ firstName, nationality, nationality2 = 'Brazilian'  }) => `${firstName} is ${nationality === undefined ? nationality2 : nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};


// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// 5 - Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
  });
  
//   console.log(getPosition(-19.8157, -43.9542));

// 6 - Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
    return number * value
  };
  
//   console.log(multiply(8,500));

