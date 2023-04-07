const calcBmi = require('./calcBmi');
const getCategory = require('./getCategory');
const userInputs = require('./userInputs');

const main = () => {
  const { weight, height } = userInputs();
  const bmi = calcBmi(weight, height).toFixed(1);
  const category = getCategory(bmi);

  return `\n\nSeu IMC é: ${bmi}\nSua categoria: ${category}`;
};

console.log(main());
