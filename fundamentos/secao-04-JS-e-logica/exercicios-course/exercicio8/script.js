// Usando o objeto abaixo, faça os exercícios a seguir:

/* let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  }; */


/* let info2 = {
    personagem: 'Tio Patinhas',
    origem: "PChristmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
  }; */

//1 -Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:

/* console.log(`Bem vindo(a), ${info.personagem}` ); */

//2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

/* info['recorrente'] = 'Sim';
info2['recorrente'] = 'Sim';

console.log(info['recorrente']);
console.log(''); */

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

/* for(let key in info){
    console.log(key);
}
console.log(''); */

//4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

/* for(let key in info){
    console.log(info[key]);
}
console.log(''); */

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

/* for(let key in info){
    console.log(`${info[key]} e ${info2[key]}`);
}
 */

// ---------------Leitura de Objetos----------------

// Usando o objeto abaixo, faça os exercícios a seguir:

   let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  }; 

//1 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

/* console.log(`O livro favorito de ${leitor.nome} é '${leitor.livrosFavoritos[0].titulo}'`); */

// 2 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:
// {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// }

// 3 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:
/* 
leitor.livrosFavoritos[1] = 
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco'
  }
;

console.log(leitor); */

//4 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

/* let count = 0;

for(let index in leitor.livrosFavoritos){
  count++;
}

console.log(`Júlia tem ${count} livros favoritos.`); */

// Exercícios Funções ------------------------------------------------------

//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

/* function verificaPalindromo(palavra){
  let palindromo;

  if(palavra === palavra.split('').reverse().join('')){
    palindromo = true;
  } else{
    palindromo = false;
  }

  return palindromo;
}

console.log(verificaPalindromo('trybe')); */

//2 - crie uma função que receba um array de inteiros e retorne o índice do maior valor. 

/* function indiceMaiorValor(array){
  let armazenaIndice = 0;
  let maiorValor = 0;

  for(index in array){
    if(array[index] > maiorValor){
      maiorValor = array[index];
      armazenaIndice = index;
    }
  }

  return armazenaIndice;
}

console.log(indiceMaiorValor([2, 3, 60, 7, 10, 1])); */

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor. 

/* function indiceMenorValor(array){
  let armazenaIndice = 0;
  let menorValor = array[0];

  for(index in array){
    if(array[index] < menorValor){
      menorValor = array[index];
      armazenaIndice = index;
    }
  }

  return armazenaIndice;
}

console.log(indiceMenorValor([2, 4, 6, 7, -10, 0, -33])); */

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

/* function maiorPalavra(palavras){
  let maiorPalavra = '';
  
  for(let palavra of palavras){
    if(palavra.length > maiorPalavra.length){
      maiorPalavra = palavra;
    }
  }  
    
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); */

