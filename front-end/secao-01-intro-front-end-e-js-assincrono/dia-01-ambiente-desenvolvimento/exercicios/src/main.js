import validator from 'validator';
// import isEmail from 'validator/lib/isEmail';

const select = document.querySelector('#texts');
const check = document.querySelector('#check');
const result = document.querySelector('#result');

const validation = (value, selectedValidation) => {
  switch (selectedValidation) {
  case 'email':
    return validator.isEmail(value) ? `"${value}" é um email`
      : `"${value}" não é um email`;

  case 'date':
    return validator.isDate(value, 'DD/MM/YYYY') ? `"${value}" é uma data válida`
      : `"${value}" não é uma data válida`;

  case 'eth':
    return validator.isEthereumAddress(value) ? `"${value}" é um endereço ETH válido`
      : `"${value}" não é um endereço ETH válido`;

  case 'hex':
    return validator.isHexadecimal(value) ? `"${value}" é um endereço HEX válido`
      : `"${value}" não é um endereço HEX válido`;

  case 'lowercase':
    return validator.isLowercase(value) ? `"${value}" tem apenas letras minúsculas`
      : `"${value}" não tem apenas letras minúsculas`;

  default:
  }
};

check.addEventListener('click', (e) => {
  e.preventDefault();

  const input = document.querySelector('#validate').value;
  const selectedValidation = select.options[select.selectedIndex].value;

  if (input) {
    result.innerHTML = validation(input, selectedValidation);
  }

  document.querySelector('#validate').value = '';
  document.querySelector('#validate').focus();
});
