const readline = require('readline-sync');

const userInputs = () => {
  const weight = readline.questionFloat('Digite o seu peso: ');
  const height = readline.questionFloat('Digite a sua altura em metros: ');

  return { weight, height };
};

module.exports = userInputs;