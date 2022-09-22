const custoProduto = 100, valorVenda = 135;
let quantidade = 1000;

let custoTotal = custoProduto + (custoProduto * 0.2);
let lucro = (valorVenda - custoTotal) * quantidade;

console.log(`O lucro total foi de: R$ ${lucro}`);