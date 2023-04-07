const getCategory = (bmi) => {
  if (bmi >= 40) return 'Obesidade graus III e IV';
  if (bmi >= 35 && bmi <= 39.9) return 'Obesidade grau II';
  if (bmi >= 30 && bmi <= 34.9) return 'Obesidade grau I'
  if (bmi >= 25 && bmi <= 29.9) return 'Acima do peso (sobrepeso)'
  if (bmi >= 18.5 && bmi <= 24.9) return 'Peso normal'
  if (bmi < 18.5) return 'Abaixo do peso (magreza)'
};

module.exports = getCategory;