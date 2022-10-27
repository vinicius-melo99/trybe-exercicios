const books = require('./data')

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const returnBook = () => {
    return books.map( (books) => {
        return `${books.name} - ${books.genre} - ${books.author.name}`;
    });
}
// console.log(returnBook());

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado. 

const nameAndAge = () => {
    return books.map( (book) => {
        return {
            author: book.author.name,
            age: book.releaseYear - book.author.birthYear
        }
    }).sort( (a, b) => a.age - b.age);

    
}
// console.log(nameAndAge());

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const fantasyOrScienceFiction = () => {
    return books.filter( (book) => book
    .genre === 'Ficção Científica' || book.genre === 'Fantasia');
};

// console.log(fantasyOrScienceFiction());

// 4 - Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

const oldBooksOrdered = () => {
    return books.filter( (book) => {
        return (2022 - book.releaseYear) > 60
    }).sort( (a, b) => a.releaseYear - b.releaseYear );
}
// console.log(oldBooksOrdered());

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const booksAuthors = () => {
    return books.filter( (book) =>{
        return book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
    }).map( (book2) => book2.author.name).sort();
}
// console.log(booksAuthors());

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const oldBooks = () => {
    return books.filter( (book) =>{
        return (2022 - book.releaseYear) > 60
    }).map( (book2) => book2.name);
}
// console.log(oldBooks());

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const authorWith3DotsOnName = () => {
    return books.find( (book) => {
       return book.author.name.startsWith('J. R. R.');
    }).name;
}
console.log(authorWith3DotsOnName());
