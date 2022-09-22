let salarioBruto = 8765.44, salarioLiquido = null, aliquotaInss = null, aliquotaIr = null, salarioBase = null, parcelaIr = null;

if(salarioBruto <= 0) console.log('Salário inválido');
else if(salarioBruto > 0 && salarioBruto <= 1556.94) aliquotaInss = 0.08;
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92) aliquotaInss = 0.09;
else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82) aliquotaInss = 0.11;

salarioBase = salarioBruto - (salarioBruto * aliquotaInss);

if(salarioBase <= 1903.98){
    aliquotaIr = 0;
    parcelaIr = 0;

} else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    aliquotaIr = 0.075;
    parcelaIr = 142.80;

} else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    aliquotaIr = 0.15;
    parcelaIr = 354.80;

} else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    aliquotaIr = 0.225;
    parcelaIr = 636.13;

}else{
    aliquotaIr = 0.275;
    parcelaIr =  869.36;
}

salarioLiquido = salarioBase - ((salarioBase * aliquotaIr) - parcelaIr);

console.log(`Salário bruto: R$ ${salarioBruto}\nSalário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
