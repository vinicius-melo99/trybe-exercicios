import validator from 'validator';

const select = document.querySelector('#texts');
const check = document.querySelector('#check');
const result = document.querySelector('#result');

check.addEventListener('click', (e) => {
  e.preventDefault();

  const input = document.querySelector('#validate').value;
  const selectedValidation = select.options[select.selectedIndex].value;

  if (input) {
    switch (selectedValidation) {
    case 'email':
      validator.isEmail(input) ? result.innerHTML = `'${input}' é um email`
        : result.innerHTML = `'${input}' não é um email`;
      break;

    case 'data':
      validator.isDate(input, 'DD/MM/YYYY')
        ? result.innerHTML = `'${input}' é uma data no formato DD/MM/YYYY`
        : result.innerHTML = `'${input}' não é uma data no formato DD/MM/YYYY`;
      break;

    case 'eth':
      validator.isEthereumAddress(input)
        ? result.innerHTML = `'${input}' é um endereço Ethereum`
        : result.innerHTML = `'${input}' não é endereço Ethereum`;
      break;

    case 'hex':
      validator.isHexadecimal(input) ? result.innerHTML = `'${input}' é hexadecimal`
        : result.innerHTML = `'${input}' não é um hexadecimal`;
      break;

    case 'lower':
      validator.isLowercase(input) ? result.innerHTML = `'${input}' está minúscula`
        : result.innerHTML = `'${input}' não está minúscula`;
      break;
    }
  }

  document.querySelector('#validate').value = '';
  document.querySelector('#validate').focus();
});
