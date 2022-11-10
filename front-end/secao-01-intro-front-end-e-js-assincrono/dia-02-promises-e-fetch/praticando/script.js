const generateRandomNumber = () => Math.round(Math.random() * 10);

const runPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = generateRandomNumber();

            randomNumber % 2 === 0 ? resolve(randomNumber) 
                : reject(new Error(`O número ${randomNumber} foi rejeitado pois é ímpar.`));
        }, 1000);
    });

runPromise()
    .then((response) => {
        console.log(`O número ${response} foi aceito.`);
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log('fim da execução da promise');
    });

console.log(`O número ${generateRandomNumber()} foi gerado de forma síncrona!`);