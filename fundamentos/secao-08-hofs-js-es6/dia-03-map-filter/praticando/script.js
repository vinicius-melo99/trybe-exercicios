const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const procutsAndPrices = products.map((product, index) => {
    const obj = {};
    obj[product] = prices[index];
    return obj;
});

console.log(procutsAndPrices);