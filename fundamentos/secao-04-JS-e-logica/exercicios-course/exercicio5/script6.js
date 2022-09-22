const a = 5, b = 5, c = 13;
let ehPar = null, ehImpar = null;

if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
    ehPar = true;
    console.log(`Par: ${ehPar}`);
} else{
    ehPar = false;
    console.log(`Par: ${ehPar}`);
}

if(a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
    ehImpar = true;
    console.log(`Ímpar: ${ehImpar}`);
} else{
    ehImpar = false;
    console.log(`Ímpar: ${ehImpar}`);
}