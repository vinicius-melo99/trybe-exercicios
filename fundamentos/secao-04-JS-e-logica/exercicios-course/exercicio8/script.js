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

console.log(`O livro favorito de ${leitor.nome} é '${leitor.livrosFavoritos[0].titulo}'`);