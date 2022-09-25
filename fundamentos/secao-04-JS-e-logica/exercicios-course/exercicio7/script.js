//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

/* let number = 25;
fatorial = 1;

for(let i = number; i > 0; i--){
    fatorial *= i;
}

console.log(`O fatorial é ${fatorial}`); */

//2 - Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”.

/* let palavra = 'banana';
let palavraInvertida = [];

for(let i = palavra.length - 1; i >= 0; i--){
    palavraInvertida.push(palavra[i]);
}

console.log(palavraInvertida.join("")); */

//3 - Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

/* let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';
let menorPalavra = '';

menorPalavra = array[0];

for(let palavra of array){
    if(palavra.length > maiorPalavra.length){
        maiorPalavra = palavra;
    }
    if(palavra.length < menorPalavra.length){
        menorPalavra = palavra;
    }
}

console.log(`Maior palavra: ${maiorPalavra}`);
console.log(`Menor palavra: ${menorPalavra}`); */

//m número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.


/* let numeroInicio = 2;
let numeroFim = 100;
let divisores = 0;
let maiorNumero = 0;
let primos = [];

if(numeroInicio < 1){
    console.log('Digite números maiores que 1');
}else{

    for(let numeroChecado = numeroInicio; numeroChecado <= numeroFim; numeroChecado++){
        for(let i = 1; i <= numeroChecado; i++){
            if(numeroChecado % i === 0){
                divisores += 1;
            }
        }
        if(numeroChecado % numeroChecado === 0 & numeroChecado % 1 === 0 & divisores === 2){
            primos.push(numeroChecado);
            divisores = 0;

            if(numeroChecado > maiorNumero){
                maiorNumero = numeroChecado;
            }
        } else{
            divisores = 0;
        }
    }
    console.log(`Números primos entre a sequência de ${numeroInicio} a ${numeroFim}: ${primos.join(", ")}\n`);
    console.log(`O maior número entre eles é: ${maiorNumero}`);
} */

//Exercícios Bônus

//1 - Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

/* const n = 5;

for(let asteriscos = 0; asteriscos <= n; asteriscos++){
    console.log('*****');
}
 */

//2 - Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

/* const n = 5;
let asteriscos = '';

for(let i = 0; i < 5; i++){
    asteriscos += '*';
    console.log(asteriscos)
} */

//3 - Agora inverta o lado do triângulo.

